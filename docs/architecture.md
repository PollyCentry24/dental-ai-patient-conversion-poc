# Architecture — synthetic proof of concept

## Current demonstration
1. Browser UI in `index.html` and `src/app.mjs` receives fictional patient inquiries.
2. `src/engine.mjs` performs a simple deterministic safety-keyword check.
3. Appointment intent is routed to the illustrative booking-request workflow.
4. Routine informational questions use a locally defined keyword FAQ matcher and prewritten responses.
5. Unmatched questions are routed to staff review; the demo does not invent answers.
6. The booking rules engine checks exact combinations against a **fictional** schedule and never creates a real appointment.
7. The conversion funnel is independent synthetic example data.

## Important limitations
This is **not** a trained machine-learning model, clinical chatbot, medical decision system, or deployed clinic product. Keyword safety checks can miss urgent concerns and should not be used on real patients. No real patient data, messaging API, live scheduling system, database or payment processor is connected.

## Proposed next architecture
Authorized LINE/Facebook webhook → consent and audit logging → clinician-approved knowledge retrieval → safety/intent evaluation → staff escalation or booking-rule verification → practice-management system connector → status reconciliation → attended-visit reporting.

Integration with existing dental practice-management software must use approved vendor methods. No booking write-back has been implemented or verified.
