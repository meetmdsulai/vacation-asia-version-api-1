# Detailed Commercial Pricing Rules
- PRC-001 Fathimah Continental Tours (FCT) is the primary commercial/pricing owner and sets selling logic over supplier rates.
- PRC-002 Discussed markup examples are Agency +14%, B2C +20%, Distributor +12% from supplier rate. These are configurable examples/data, never hardcoded universal constants.
- PRC-003 VAT is part of pricing and must support inclusive or exclusive treatment by configuration.
- PRC-004 Agency/Distributor/B2C sees only authorized final selling price; internal supplier/net cost and markup must not leak through external APIs/UI.
- PRC-005 Sales/Admin can override calculated selling price. Preserve original calculated price, adjustment, reason, actor/time and final price for audit.
