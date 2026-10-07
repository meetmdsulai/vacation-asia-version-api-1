# Transport Detailed Business Rules
Status: approved unless explicitly marked otherwise.

- TRN-REQ-001 Custom Package transport intake captures arrival/departure airport, dates and times. Timing participates in ferry feasibility.
- TRN-MODE-001 Supported customer requirement modes include Airport Pickup/Drop, Standby, Daily/Day-to-Day and Sightseeing-related transport.
- TRN-AIR-001 Airport Pickup/Drop creates arrival Airport -> Hotel and departure Hotel -> Airport itinerary legs; customer may review/remove applicable generated legs.
- TRN-MULTI-001 Multi-city itineraries must ask/know whether intercity movement is by flight; where applicable generate city airport -> hotel and hotel -> city airport legs for each relevant city.
- TRN-VEH-001 Vehicle eligibility is rule-driven by pax, luggage/comfort, route restrictions and customer preference. Current examples: 2-3 Car; 4-9 one Van; 9-11 may allow Van/Car/multiple-Van combinations subject to luggage/comfort; 12-14 two Vans; larger groups may use Coach. Do not hardcode examples as universal constants.
- TRN-LUG-001 Luggage can invalidate a passenger-capacity-valid vehicle choice and require a larger/multiple vehicle combination.
- TRN-ALLOC-001 Customer chooses an eligible transport preference/requirement. Actual vendor, driver, vehicle, vehicle type/registration allocation is operational and may occur later.
- TRN-LEAD-001 Transport confirmation/allocation is driven by a globally configurable lead-time before service.
- TRN-DAY-001 Daily Basis has a standard 10-hour service duration. Extra hours are chargeable using Admin-configured data/rates.
- TRN-STBY-001 The Daily Basis 10-hour calculation does not apply to Standby. Standby may cover the full trip or selected days.
- TRN-COST-001 Standard quoted transport price already includes the normal operating costs agreed by the business; do not independently double-charge fuel/tolls/parking/driver unless a future approved rule changes this.
- TRN-FERRY-001 Ferry is a sellable transport service, not only validation data. Ferry supports SIC and Private and uses predefined schedules.
- TRN-FERRY-002 Ferry schedule, travel time and required arrival buffer must be validated; infeasible connections are blocked rather than merely warned.
- TRN-ROUTE-001 Area/route restrictions can override the normal pax vehicle recommendation. Chaweng is the known business example where Coach access may be prohibited and suitable Vans used instead. Implement via durable area/route restriction data, not hotel-name keyword logic.
- TRN-COV-001 Sightseeing-included pickup/drop covers those itinerary segments and must not be duplicated as paid transport.
- TRN-COV-002 With Airport Pickup/Drop-only transport, sightseeing transport not included by the sightseeing supplier must be offered/added at additional cost.
- TRN-COV-003 With Standby, sightseeing movement is covered by the standby service when it falls within that service scope.
- TRN-COV-004 With Daily Basis, the customer may choose to use the daily vehicle for sightseeing where compatible.
- TRN-STBY-002 Current supplied business logic states Standby is mandatory for groups above 13 pax. Preserve as an approved current rule until Product Owner changes the threshold; do not confuse this with the separate Guide >20 rule.
