# Demo walkthrough — Centry 24 Dental AI

This is a **fictional, browser-only demonstration** of the customer journey in the Centry 24 accelerator deck. It uses sample Thai messages, a scripted FAQ library, deterministic booking rules, and synthetic business data. It is **not a deployed AI receptionist or clinical software**.

## The 60-second story

**1. Patient asks (Conversation lab).** Select **Ad-generated lead**. A simulated patient asks about veneer pricing. The demo returns a prewritten informational reply and shows the reasoning *category* behind the response (intent, risk, workflow state, sample FAQ match). It does not diagnose or quote real clinic prices.

**2. Clinic checks a slot (Booking rules).** Click **Next: check a sample appointment**. A fictional veneer consultation with Dr. Mira on Saturday at 11:00 is prefilled. Click **Check eligibility** to see the rules engine accept that fictional combination. Change the time to an unavailable slot to see the request rejected. No real booking is confirmed.

**3. Owner sees the outcome (Conversion signals).** Click **Next: see the fictional lead funnel**. This illustrates 60 ad inquiries → 41 qualified leads → 26 booking requests → 11 attended visits. These figures are invented examples, **not observed conversions or revenue**.

Other scenarios: **After-hours request** routes to the booking workflow, **Clinical escalation** flags a clinician review, **Unknown policy** sends the patient to staff review instead of inventing an answer. The safety filter is deliberately simplistic and must not be used with real patient messages.

## What exists vs what is planned

**Exists today:** interactive browser UI, Thai/English sample FAQ lookup, deterministic inquiry routing, fictional scheduling eligibility checker, synthetic funnel, automated software tests.

**Not built:** trained language model, clinician-reviewed knowledge database, real Meta/LINE channel integration, identity/consent controls, dental practice-management connection, payments/deposits, actual booking writes, real advertising attribution or measured uplift.

## Proposed pilot success metric

**Attended appointments per 100 qualified ad inquiries**, compared with the clinic's current workflow. Track setup/subscription cost, staff minutes, response correctness, false-confirmation rate, and safety escalation separately.

Only use **synthetic patient details** when demonstrating this public website.
