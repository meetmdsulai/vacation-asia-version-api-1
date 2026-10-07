import assert from 'node:assert/strict';
import { spawn, type ChildProcess } from 'node:child_process';
import { once } from 'node:events';
import { createServer } from 'node:net';
import path from 'node:path';
import { setTimeout as delay } from 'node:timers/promises';

async function reservePort(): Promise<number> {
  const server = createServer();
  server.listen(0, '127.0.0.1');
  await once(server, 'listening');
  const address = server.address();
  assert(address && typeof address !== 'string');
  await new Promise<void>((resolve, reject) =>
    server.close((error) => (error ? reject(error) : resolve())),
  );
  return address.port;
}

async function waitForResponse(url: string, child: ChildProcess): Promise<Response> {
  const deadline = Date.now() + 30000;
  while (Date.now() < deadline) {
    if (child.exitCode !== null) throw new Error('Application exited before becoming live');
    try {
      return await fetch(url, { signal: AbortSignal.timeout(1000) });
    } catch {
      await delay(250);
    }
  }
  throw new Error('Application did not start within 30 seconds');
}

async function stopProcess(child: ChildProcess): Promise<void> {
  if (child.exitCode !== null || child.signalCode !== null) return;
  const exited = once(child, 'exit');
  child.kill();
  await exited;
}

async function smokeTest(): Promise<void> {
  const apiPort = await reservePort();
  const webPort = await reservePort();
  const unavailableDatabasePort = await reservePort();
  const children: ChildProcess[] = [];
  try {
    const api = spawn(process.execPath, ['apps/api/dist/main.js'], {
      stdio: 'ignore',
      windowsHide: true,
      env: {
        ...process.env,
        NODE_ENV: 'production',
        API_HOST: '127.0.0.1',
        API_PORT: String(apiPort),
        WEB_ORIGIN: 'http://127.0.0.1:' + webPort,
        DATABASE_URL:
          'postgresql://test:test@127.0.0.1:' + unavailableDatabasePort + '/vacation_asia',
      },
    });
    children.push(api);
    const apiUrl = 'http://127.0.0.1:' + apiPort;
    const live = await waitForResponse(apiUrl + '/health', api);
    assert.equal(live.status, 200);
    assert.deepEqual(await live.json(), { status: 'ok' });
    const ready = await fetch(apiUrl + '/health/ready', { signal: AbortSignal.timeout(10000) });
    assert.equal(ready.status, 503);
    assert.deepEqual(await ready.json(), { status: 'unavailable' });

    const web = spawn(
      process.execPath,
      [
        'node_modules/next/dist/bin/next',
        'start',
        '--hostname',
        '127.0.0.1',
        '--port',
        String(webPort),
      ],
      {
        cwd: path.resolve('apps/web'),
        stdio: 'ignore',
        windowsHide: true,
        env: { ...process.env, NODE_ENV: 'production', NEXT_TELEMETRY_DISABLED: '1' },
      },
    );
    children.push(web);
    const page = await waitForResponse('http://127.0.0.1:' + webPort, web);
    assert.equal(page.status, 200);
    assert.match(await page.text(), /Vacation Asia/);
    console.log('Built API/web smoke checks passed; unavailable PostgreSQL correctly returns 503.');
  } finally {
    await Promise.all(children.map(stopProcess));
  }
}
void smokeTest().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : 'Smoke check failed');
  process.exitCode = 1;
});
