# Pilot evaluation plan (proposal, not completed research)

## Primary objective

Show that the proposed system can improve safe response coverage and patient-booking outcomes at a small independent dental clinic, without generating incorrect treatment claims or false appointment confirmations.

## Initial discovery: five independent clinics

Interviews should cover: message channels, ads budget, inquiry volume and topics, after-hours coverage, typical response time, admin staffing, booking rules, patient-service mix, scheduling software, staff escalation, integration permissions and pricing interest. Never publish raw sensitive information.

## 100-conversation evaluation set

Develop a **dentist-reviewed** and de-identified/synthetic scenario set: 40 routine FAQ questions, 20 booking questions, 20 uncertain/policy cases, 20 red-flag clinical cases. Include colloquial Thai, typos, English, code-switching, vague requests and out-of-domain questions.

**Proposed metrics:**

- Helpful/correct answer rate, as reviewed by clinic staff and a dentist.
- Unsupported statement rate (should be zero for price, availability and personalized clinical claims).
- Red-flag escalation recall (zero critical missed escalations in the initial set).
- False booking-confirmation rate (zero acceptable).
- Median customer response latency versus current clinic workflow.
- Staff-review workload.

This test set is not yet created and the metrics above are targets, not measured results.

## Booking validation

Test nonexistent/duplicate slots, dentist eligibility by service, specialist-day restrictions, chair usage, buffers, deposit conditions and failed write-back. All real confirmation must be tied to an authoritative scheduling source and an audited acknowledgement.

## Commercial pilot hypotheses

Track original campaign and lead source (with permission); qualified inquiry, appointment request, confirmed booking, attended visit and cost per attended visit. Compare against the clinic's own baseline and avoid attributing changes to AI unless a sensible comparative design supports it.

## Competitor benchmark

In a controlled trial, ask the same 25 questions of consenting demo accounts for relevant competitors. Compare verified workflow behavior, quality and limitations—not unverified marketing claims. Keep notes of test dates, plan levels, and video/screenshot evidence.