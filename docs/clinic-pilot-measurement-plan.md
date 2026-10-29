# Centry 24 | Clinic pilot measurement plan

**Status:** Idea-stage prototype. No independent paying customers, verified conversion lift, clinically deployed AI or existing dental-software connectors have been claimed.

## Problem and metric

We are testing whether an affordable AI front desk for independent Thai dental clinics can increase **attended appointments per 100 qualified ad-attributed inquiries**, especially outside business hours, without adding unsafe clinical decisions or replacing the existing clinic system.

## First 14-day baseline (two family clinics)

Tally aggregate counts per clinic, date and business-hours/after-hours category, based on the **time of the first incoming message**:

- New **unique** conversations (not number of chat bubbles)
- Verified ad-attributed inquiries
- Qualified inquiries against a predefined rubric
- Inquiries without a first human reply within two hours
- Booking requests and confirmed appointments
- Later attended visits once the same cohort reaches a known outcome

A booking may occur later than the inquiry window. Follow up cohorts before reporting conversion and do not assume every silent inquiry is a lost patient.

**Privacy:** Never publish or transfer names, handles, phone numbers, actual health questions, raw chat transcripts, X-rays or other identifying patient information. Use only approved, aggregated statistics for the accelerator deck. Patient-level processing needs a documented legal basis, privacy notice, access limits and suitable safeguards.

## Financial test (illustration, not observed results)

400 monthly unique inquiries x 60% verified ad share x 50% after-hours x 50% qualified = **60 qualified after-hours ad leads**.

If the booking-request rate improved from 20% to 40%, this would produce 12 extra requests. With a 75% show rate and 80% of those visits genuinely incremental, that is 7.2 additional attended visits.

7.2 visits x THB 2,000 contribution profit = THB 14,400. Less **hypothetical** THB 1,490 SaaS subscription and THB 500 additional staff burden = **THB 12,410 illustrative net monthly clinic benefit**. None of these inputs is actual Centry 24 pricing, pilot traction or measured revenue.

Measure contribution after variable treatment costs and account for chair capacity, patient cannibalization, follow-up lag, extra supervision and integration expense.

## Intended clinical scope

The first MVP could answer **general dentist-approved** dental treatment FAQs and current clinic policies, collect appointment preferences, route routine requests and show information sources. It must not independently diagnose individual symptoms, decide whether patients require extractions/root canal treatment, prescribe, or interpret their X-rays. Clinical uncertainty and urgent concerns require appropriate dentist review and escalation.

Thai FDA software/AI medical-device classification depends on actual intended use. Thai PDPA section 26 covers sensitive health data. Review product claims, lawful processing, contracts, security and regulatory needs with qualified Thai advisors before using real patient conversations.

## Pilot gates

1. Dentist-reviewed answer and escalation evaluation, with no defined critical safety failures.
2. Confirmed baseline of after-hours eligible DM volume and response delays.
3. Controlled trial showing incremental attended-visit uplift relative to comparable clinic workflow.
4. Positive incremental contribution after deployment, clinic supervision and SaaS cost.
5. Repeatable deployment at an independent clinic outside the founder's family.

## References

- Thai Dental Council: https://dentalcouncil.or.th/Pages/History
- Thai FDA software/AI: https://medical.fda.moph.go.th/customer-journey/software-ai-101
- Thailand PDPA section 26: https://pdpathailand.com/pdpa/content_eng/article26_eng.php
- Denta Ascend pricing and features: https://dentaascend.com/
- DentCare: https://www.dentcare.app/en/clinic/
- Arini: https://www.arini.ai/ai-receptionist-page
