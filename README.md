# Centry 24 Dental AI — Patient Conversion Lab

**From ad-generated inquiry to an actionable appointment request.**

An interactive, open-in-your-browser **proof of concept** for an AI-assisted front desk for independent dental clinics in Thailand. The demo illustrates four parts of a future product: patient-message handling, safety-aware inquiry routing, clinic-specific booking rules, and ad-to-attended-visit conversion measurement.

> **STATUS: IDEA-STAGE PROTOTYPE / NOT FOR PATIENT USE**  
> All patient messages, staff identities, schedules, conversion figures, and knowledge entries are fictional or illustrative. No trained LLM, clinic connection, payment processing, or real booking exists. Sample informational replies have not been clinically reviewed.

## Live interactive demo

**[Open the Centry 24 Dental AI demonstration](https://pollycentry24.github.io/dental-ai-patient-conversion-poc/#demo)**

GitHub Pages is enabled. The [October 28, 2026 build and deployment](https://github.com/PollyCentry24/dental-ai-patient-conversion-poc/actions/runs/40687045943) completed successfully. The public site and the interactions below were independently checked in a desktop Chrome browser on **October 29, 2026 (Bangkok time)**; the site loaded without the previously reported Not Found page. No Pages setup is needed to view this repository's demo.

### Live browser verification — October 29, 2026

| Check | Observed result |
|---|---|
| Public demo opens | Patient journey and conversation interface load |
| 01 Patient asks | Thai veneer inquiry displays a pre-written sample FAQ response |
| 02 Check a slot | Prefills veneer consultation, Dr. Mira, Saturday, 11:00 |
| Eligible fictional slot | Check eligibility reports eligible and explicitly says no real booking is made |
| Invalid dentist combination | Changing to Dr. Narin reports not available and staff review |
| 03 Track the visit and booking-to-funnel button | Both open the synthetic funnel: 60 inquiries → 41 qualified leads → 26 booking requests → 11 attended visits |
| After-hours booking scenario | Shows an appointment-request response without confirming a real appointment |
| Clinical escalation scenario | Shows the scripted escalation notice, not a diagnosis |
| Unknown-policy scenario | Shows the staff-review fallback |
| Typed inquiry and Send | “What are veneers?” retrieves the sample veneer FAQ (Thai response) |
| System & safeguards | Opens the implemented capabilities, pilot requirements, and ML roadmap |

This is a point-in-time desktop browser smoke check of the listed scenarios, not exhaustive browser/device testing or clinical validation.

### Implemented prototype versus proposed capabilities

| Implemented in this browser demo | Proposed; not operational |
|---|---|
| Simulated Facebook inquiry and local keyword-based FAQ lookup | Live Facebook/LINE messaging, trained AI/LLM or production RAG |
| Scripted escalation and staff-review notices | Actual staff notifications, handoff queues or clinical decision-making |
| Deterministic checks against fictional service/dentist/day/time rules | Real availability, appointment confirmation, reservations, payments or clinic database write-back |
| Fixed synthetic conversion funnel | Live patient tracking, campaign attribution, clinic results or proven ROI |

The funnel is an independent illustrative dataset: submitting a message or checking a slot does not create a patient record or update the funnel. English keywords may retrieve Thai sample replies; this is not a conversational translation service.

## See the slide demo as a guided walkthrough

The public website now follows the same **Centry 24 patient journey** shown in the pitch deck. From **Conversation lab**, click the three walkthrough buttons:

**01 Patient asks** (fictional veneer Facebook inquiry) → **02 Check a slot** (sample dentist, day and time, no real booking) → **03 Track the visit** (synthetic lead funnel).

Read the [one-minute illustrated workflow guide](docs/demo-walkthrough.md). This remains a scripted, deterministic proof of concept — not an LLM, diagnosis tool, integrated booking system or real conversion measurement.

## The clinic pilot evidence plan

Our next validation step is a privacy-safe, two-clinic baseline and an outcome-based ROI test. Read the [clinic pilot measurement plan](docs/clinic-pilot-measurement-plan.md). It distinguishes hypothetical calculations from observed traction and defines clinical safety boundaries.

## What you can try in 2 minutes

1. **Conversation Lab:** Select an advertisement-generated veneer inquiry. The demo retrieves a pre-written informational response from its sample FAQ library.
2. **Clinical Escalation:** Select a patient describing severe swelling/pain. The safety router prioritizes escalation rather than giving a diagnosis.
3. **Booking Rules:** Try a valid and an invalid combination of fictional treatment, dentist, day and time. Observe that invalid combinations are rejected by the sample eligibility check; no combination creates a real booking.
4. **Conversion Signals:** Explore a *synthetic* funnel from 60 inquiries to 11 fictional attended visits, illustrating the business KPI we want to measure in a future clinic pilot.

## Why this problem matters

The idea grew out of first-hand exposure to a small family-run dental clinic, where Facebook advertisements can generate incoming inquiries at any time. Patients often ask technical questions outside the expertise of administrative staff, and after-hours requests can remain unanswered or unscheduled. The goal is to test whether an AI-assisted front desk can make the clinic more responsive while keeping treatment decisions with qualified clinicians and preserving scheduling control.

### Venture hypothesis

> Most chatbots answer questions. We aim to evaluate an **execution layer** that connects the entire patient journey: **advertising → qualified inquiry → safe conversation → validated appointment → attended visit → measured business outcome**.

This is an ambition and differentiation hypothesis, **not a proven claim**. Existing products already offer AI patient messaging, bookings, and analytics; validation must be comparative and evidence-driven.

## How it works (today)

```text
Synthetic patient inquiry
       |
       v
Urgent / clinical-risk keyword routing ------> Human / dentist escalation notice
       |
       v
Appointment-intent detection -----------------> Booking demo (sample constraints)
       |
       v
Transparent keyword-based FAQ retrieval --> Pre-written sample response
       |
       v
No reliable match? ---------------------------> Staff review, no fabricated answer

Independent synthetic conversion dashboard (for evaluation concept only)
```

**Technical honesty:** The retrieval engine uses lightweight, locally implemented keyword matching. It is an information-retrieval demonstration, **not** a trained medical LLM, validated AI classifier, clinical decision system, or production RAG implementation. The rules engine is deterministic. The website runs entirely on the client side with no APIs and does not persist data.

## Stack

- **JavaScript ES modules**, HTML, CSS — zero runtime dependencies
- **Node.js native test runner** — no test dependencies
- **GitHub Pages** — suitable for free static deployment
- All demo data are synthetic; no patient identifiers or credentials

## Run locally

```bash
# From this repository's root:
python3 -m http.server 8000
# Open http://localhost:8000

# Run automated core tests (Node.js 22+):
npm test
```

Do not double-click `index.html` as some browsers block ES module imports from `file://`. Use the local HTTP server or the live GitHub Pages link.

## Repo structure

```text
index.html                 # Browser UI
style.css                  # Responsive visual design
src/app.mjs                # Interactive prototype
src/engine.mjs             # Safe routing, FAQ retrieval, booking rules
tests/engine.test.mjs      # 12 automated core tests
.github/workflows/         # Automated tests on push
docs/architecture.md       # Technical decisions and limitations
docs/evaluation-plan.md    # Pilot validation plan
docs/safety-and-data.md     # Safety/privacy constraints
profile/README-template.md # Optional GitHub profile introduction
```

## Evaluation and success criteria (planned, not results)

| Hypothesis | Proposed experiment | Initial metric |
|---|---|---|
| Inquiries are delayed after hours | Interview and observe 5 independent clinics | After-hours coverage and typical response delay |
| FAQ responses can be accurate | Dentist-review 50–100 test inquiries | Exact-answer accuracy, sample source matching, escalation rate |
| Unsafe cases are routed appropriately | Build a clinician-reviewed red-flag scenario set | **Zero critical false reassurances** in the test set |
| Booking rules reduce scheduling errors | Test service, dentist, chair, buffer, deposit constraints | No false confirmations or duplicate reservations |
| Value is meaningful | Run a consented clinic pilot | Bookings and attended visits per qualified lead; staff time saved |

A minimum viable **clinic integration** would require explicit authorization from the clinic and scheduling software vendor, verified appointment write-back, status reconciliation, audit logs, and payment/deposit handling where relevant.

## Roadmap

- [x] Public synthetic conversation + booking POC
- [x] Baseline retrieval and scheduling tests
- [ ] Replace example FAQs with dentist-reviewed clinic materials
- [ ] Evaluate Thai-language intent recognition on labeled examples
- [ ] Add RAG using approved knowledge and explicit citations
- [ ] Pilot real messaging channels with permissions and human handoff
- [ ] Evaluate authorized integration with dental practice-management software (API/connector/other approved mechanism)
- [ ] Track real funnel outcomes, consent and privacy controls
- [ ] Compare outcomes against existing products on identical scenarios

## Data, privacy and IP

No real patient records or message exports belong in this repository. Do not paste personal health information, credentials, clinic price sheets, proprietary vendor documentation, or actual marketing lead lists. The demo runs locally in a browser with no backend. This repository intentionally has **no open-source license yet**; decide on licensing before granting reuse rights. Publishing source code publicly may still reveal product ideas and implementation details.

## Founder context

Conceived from the perspective of a **dentist's daughter with direct exposure to a small-clinic workflow**, plus academic experience in **Financial Engineering, quantitative modeling, data analysis, and Python simulation**. The longer-term ambition is to improve both operational efficiency and measurable conversion performance for independent dental clinics.

---

**If you are reviewing this as an accelerator:** Start with the three guided patient-journey buttons in the [live demo](https://pollycentry24.github.io/dental-ai-patient-conversion-poc/#demo), then try the four conversation scenarios, then read [`docs/evaluation-plan.md`](docs/evaluation-plan.md). This is evidence of problem decomposition and early execution—not a claim of product-market fit.