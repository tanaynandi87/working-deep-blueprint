> **Status:** Stage 2 blueprint, Draft 1 (2 Nov 2026). Tanay's design, written for Speed. Not approved: only items marked [Decided] are settled; [Yours to confirm] are Tanay's 22 Oct answers awaiting Speed. Source of truth for rendering: the local web app (site/data.js). Built on the Stage 1 report (22 Oct), our five calls, your voice notes, Ryan's two voice notes, your job description and the stage plan. Ashley's drafts (shared 2 Nov) are not yet reflected.

# The Blueprint: Working Deep · Stage 2 · what gets built, in what order, and how we'll know it works

## Cover

Speed,

This is the blueprint: the written plan for the build. Stage 1 described how Working Deep runs today. This says exactly what I'll build, in what order, what changes for you, what I'll need from you and when, how we'll know each piece works, and what is not included.

It's in two parts. Part A is everything you need to sell the winter 108 Days on the new system from about 1 December. Part B is everything else for the winter cohort's start around 15 January, then the library in February. I'd like you to approve Part A first, so I can start building it while you read Part B. Both parts pass the same return test.

Every point is marked. "Decided" means you've said it. "Yours to confirm" means I answered it on 22 October and it needs your yes. "My proposal" is a design choice of mine you can change. Nothing is approved until you say so.

How to read it. Start with The plan on one page. Then open the pieces that matter most to you. Each one answers the same seven questions in plain words, and the technical detail sits underneath behind a button you can ignore. The last tab, Your decisions, is the one thing I need back from you: tick or change each line, by voice note if that's easier.

Tanay

**Return test.** Once you've approved a part, put it aside for 48–72 hours. Then open The plan on one page cold. If you can explain to yourself what's being built and in what order without me, it passes. If not, I revise it before I build anything, not halfway through.

## The plan on one page

One place that remembers every man, so you don't have to. You talk; it remembers, reminds and sends.

- [Decided] **One record per man**: Where he came from, who introduced him, what he's done, what he's paid, what you gave him. Everything else reads from it.
- [My proposal] **Selling without holding it in your head**: Introductions saved the moment they arrive. Five men to call each Monday. Holds, terms and payments tracked and reminded for you.
- [Yours to confirm] **Held from the moment he says yes**: Welcome, waiver, calendar, Signal invite and his 1:1 booking go out as soon as he enrols. Ryan sees who's done what.
- [My proposal] **108 Minutes runs itself week to week**: Friday link and Sunday recording go to the right men. Attendance known. New men noticed. Comps end on time.
- [Decided] **You talk to it**: An assistant on top that answers, finds and acts, by voice. You never open the CRM.

### Milestones

- **≈20 Nov · MS1 Foundation**: Platform set up, every man's record built from what exists today. (M0, M1, M2) Check-in: 30 minutes: you look at three records (Harold's among them) and tell me what's wrong.
- **≈28 Nov · MS2 Selling is live**: Introductions, Monday call list, holds, terms and payments, enrolment and onboarding, bookings. (M3, M4, M5, M6, M7, M9a) Check-in: 45 minutes: you save an introduction, keep/swap a call list, and enrol a test man end to end.
- **≈1 Dec · — Winter selling opens**: You sell on the new system. December is the test month; I fix what we find.
- **by 16 Dec · MS3 Cohort close**: Autumn cohort close-out: last free Saturday (19 Dec) and the membership offer, handled by the system. (M8 (part)) Check-in: None needed; I'll show you what went out.
- **≈15 Jan · MS4 All systems on**: 108 Minutes week to week, 1:1 admin, retreat intake for Montana, the website, the Thursday template, testimonials, your assistant. (M8, M9b, M10, M11, M12, M13, M14) Check-in: 60 minutes: a walkthrough, then you use the assistant for a week.
- **end Jan – mid Feb · MS5 Library**: Members' library and the Wednesday email. (M15) Check-in: You and two members try it.

### Stays as it is

- Teaching, scripting, the essay, every sales conversation and every 1:1 stay with you.
- Your judgement at the moment of closing stays. The system records the deal; it never sets it.
- 1:1 calls are never recorded and no session notes are kept.
- No text-message reminders anywhere. SMS is switched off in the account.
- Your personal inbox and speed@ stay yours alone.
- No blanket offers to regulars. It should feel like a club, not a funnel.

## The pieces

### M0 · The account, payments and who sees what [Waiting on you] (Part A, MS1)

*Waiting on: Q2 (who reads your private notes)*

- **What it is:** A Working Deep account on GoHighLevel, Stripe connected to it for cards, emails sent from workingdeep.com so they land in inboxes, and a login for each person that shows them only what their job needs.
- **Which problem it solves:** Five Gmail accounts, logins passed around in messages, an assistant inbox you can't get into, and nobody sure where workingdeep.com email lives (Stage 1 §7, §11.10).
- **Order:** First. Everything else is built on it.
- **What changes for Speed:** Almost nothing day to day. Your private inboxes stay private. Ryan and Robert get their own logins instead of shared passwords.
- **What Tanay needs, and when:** By ≈10 Nov: domain access. By ≈12 Nov: open Stripe and invite me. Your answer to Q2.
- **Success signal:** Each person logs in and sees only their part. A test email from the system lands in a Gmail inbox, not spam. SMS is off.
- **Not included:** Merging or moving your five Gmail accounts, and moving old email. That's a separate tidy-up (see Scope).

**Technical detail**

| Part | Specification | Status |
|---|---|---|
| Account | One GoHighLevel sub-account "Working Deep", time zone America/New_York, currency USD. Business profile with the S corporation name for invoices. | [My proposal] |
| Plan | GoHighLevel plan that includes workflows, payments, memberships/courses and websites. Current pricing to be confirmed before you're billed. | [I'll verify] |
| SMS | No phone number bought. SMS and WhatsApp channels left off. Every workflow uses email only. | [Decided] |
| Email sending | A dedicated sending subdomain (e.g. mail.workingdeep.com) with SPF, DKIM and DMARC records. From name "Speed" for your voice; "Working Deep" for logistics. Replies to logistics emails go to the shared team inbox, never to your private inboxes. | [My proposal] |
| Stripe | Your Stripe account connected through GoHighLevel Payments. Card fees absorbed (no surcharge). Check that Stripe accepts cards from European members on your entity. | [I'll verify] |
| Users and roles | You: admin (you won't need to log in). Tanay: admin. Ryan: 108 Days, retreats, contacts; can see prices including 1:1 (your rule, 7–10 Oct). Robert: 108 Minutes contacts and emails only; no payments. Ashley: per Q2/Q10. Cohort assistants: no login. | [My proposal] |
| Private notes | Your private notes need to be hidden from some users. GoHighLevel limits what each role can see, but not field by field, so I'll test this first. If it can't be done safely, private notes live in a separate locked store the assistant can read for you, not in the CRM. | [I'll verify] |
| Security | Shared logins move into a password manager. The assistant Gmail and JotForm passwords are changed (one was written out in a voice note transcript). | [My proposal] |
| Documentation | An access sheet: who has which login, what each role can see, where every setting lives. | [Decided] |

### M1 · One record per man [My proposal] (Part A, MS1)

- **What it is:** Every man has one record: how he came into your orbit and who introduced him, his EMLT years, when he came in, who first spoke to him, what pulled him in, the main points from your first call, everything he's done and bought, and what you gave him.
- **Which problem it solves:** "Your head is the database." Holds, credits, who's eligible for what, and who introduced whom live in your memory. You and Ryan each asked, separately, for one place with a man's whole history (Stage 1 §1, §4).
- **Order:** Second, straight after the account. The call list, payments, onboarding and your assistant all read from it.
- **What changes for Speed:** You stop being the only place a man's story lives. You'll read it through the assistant or a one-page summary, never the CRM screens. When you say to a man "when you came in last August, when Nico connected us…", the system has it.
- **What Tanay needs, and when:** One 30-minute look, around 20 Nov, at three real records. You listed the fields on 20 Oct; this is to check I've got them right.
- **Success signal:** For Harold, the record answers without asking you: how he came in, what he's done, what he's paid, what credits he's had, and whether he's a member now.
- **Not included:** Photographing your discovery-call notes into the record (a later idea). Tracking which piece of content brought each man in beyond one "what pulled him in" line.

**Technical detail**

| Part | Specification | Status |
|---|---|---|
| Contact fields | See System design › Fields: origin, relationship, 108 Minutes, credits, consent, retreat and private groups. | [My proposal] |
| Enrolments | Each thing a man buys or joins is an opportunity in that offering's pipeline (108 Days, Retreats, 1:1), with its own fields for cohort, role, price, discount and reason, hold and waiver. A man's history is his list of enrolments. | [My proposal] |
| Tags | Kept for groups you'll email or filter by: cohort, alumni, member, comped, new to the work / in the work, EMLT, teacher training, guest teacher, team. Ryan's list is the starting point. "Quad" is left out until someone knows what it means. | [My proposal] |
| Introductions | Who introduced whom is stored on the introduced man ("Referred by") and counted on the introducer. If GoHighLevel can link two contacts natively, the link is used; otherwise the introducer's name and record ID are stored. | [I'll verify] |
| One-page summary | A plain-text summary of a man (built by the assistant later; in Part A, a saved view Ryan can read). | [My proposal] |
| Data rules | Email is the main key; phone the second. A man with no email (a raw introduction) is allowed. Duplicates are merged by hand from a weekly list. | [My proposal] |

### M2 · Moving in what already exists [Yours to confirm] (Part A, MS1)

- **What it is:** Everything you already have, brought into one record per man. That covers the mailing list, the alumni list, Squarespace customers and members, Ryan's rosters, your payment sheet, the signed waivers and Ryan's old tags. Just before selling opens, the winter deposits you've taken by Venmo or Zelle go in too.
- **Which problem it solves:** Otherwise the records start empty. You chose to take winter deposits before the system exists (20 Oct), so they have to be moved in.
- **Order:** Straight after the record design. A second pass in the last week of November for the winter deposits.
- **What changes for Speed:** One sitting with me (about 45 minutes) to tag former regulars by hand, your own idea from our first call. After that, nothing.
- **What Tanay needs, and when:** The inputs listed under Your decisions, by ≈15 Nov. The tagging session ≈18 Nov. The deposits list ≈27 Nov.
- **Success signal:** Every man on any existing list has exactly one record. Every winter deposit shows against the right man with the right amount and terms.
- **Not included:** Going back through two years of text messages for lost introductions (low priority, your idea). Attendance before June, unless Austin's sheets turn up.

**Technical detail**

| Part | Specification | Status |
|---|---|---|
| Sources | See Moving in: 11 sources mapped field by field, with owner and date. | [My proposal] |
| Squarespace members | Their billing stays on Squarespace until Part B. They're imported as members but not charged by the new system, so nobody pays twice. | [My proposal] |
| JotForm | Every signed waiver downloaded as PDF into a Drive folder and linked from the man's record. Then you can cancel JotForm (your rule, 15 Oct). | [Decided] |
| Merging | Script de-duplicates on email, then phone, then name. Anything uncertain goes on a review list for Ryan or me, never auto-merged. | [My proposal] |
| Unsubscribes | Anyone who unsubscribed on Squarespace stays unsubscribed. | [My proposal] |
| Confidential data | 1:1 payment history from your sheet goes onto 1:1 enrolments only (visible to you, me, Ryan, Ashley). | [Decided] |

### M3 · Saving introductions [My proposal] (Part A, MS2)

- **What it is:** When a man is introduced to you, usually in a group text, you share the text (or say his name and who introduced him) to a "Working Deep: new man" button on your phone. A record appears with who introduced him, when, and what was said. You get a one-line email back: "Saved: Arjun, introduced by Nico."
- **Which problem it solves:** The text introduction is your most common path in and the leakiest. The man sits as a phone number in your messages unless he enrols (15 Oct).
- **Order:** Part A, because winter selling feeds on these names.
- **What changes for Speed:** One new habit: share the text, or speak one sentence. No forms.
- **What Tanay needs, and when:** ≈25 Nov: 15 minutes to put the button on your phone with me and try it on two real introductions.
- **Success signal:** Every introduction you receive in December exists as a record within a minute, with the introducer linked.
- **Not included:** Reading your messages automatically (private, and not technically possible). Signal.

**Technical detail**

| Part | Specification | Status |
|---|---|---|
| Phone button | An Apple Shortcut on your iPhone (inferred from iMessage) in the share sheet and by Siri ("Hey Siri, new man"). It sends the shared text or your dictation to a small private service on my server. | [My proposal] |
| Fallback | Forward the text or email to a private address (new@…) and the same thing happens. | [My proposal] |
| Reading it | The service uses an AI model to pull out name, phone, email, introducer and a one-line note, then creates or updates the contact through the GoHighLevel API. Source = Introduction; Came in = today; added to Men to talk to › Introduced. | [My proposal] |
| Confirmation | Email to you: who was saved, who introduced him, and a link to fix it if it's wrong. | [My proposal] |
| Workflow | WF-01. | [My proposal] |
| Privacy | The text is used only to make the record; it isn't stored on the server afterwards. | [My proposal] |

### M4 · Five men to call each Monday [Waiting on you] (Part A, MS2)

*Waiting on: Q5 (who never appears, who comes first)*

- **What it is:** Every Monday morning an email suggests five men to call this week, each with one line on why: introduced and not yet called, a "talk in six months" date that's come round, a former regular, an alumnus not in the coming cohort. You tap Keep or Swap on each. Swapped men are replaced; your choices are remembered.
- **Which problem it solves:** Filling the 10th to 12th place is the struggle every cohort. Today it's "desperation and intuition"; the bucket sheet was abandoned (Stage 1 §3). You called this "the most important business question".
- **Order:** Live for 1 Dec, when selling opens.
- **What changes for Speed:** Monday: a short list arrives. You keep three, swap two, make your calls, and say a sentence about each call to your phone button so the record's up to date.
- **What Tanay needs, and when:** Q5, by ≈20 Nov.
- **Success signal:** Through December you get a list every Monday and say it's mostly the right men.
- **Not included:** Contacting those men for you. It suggests; you call. AI ranking that learns from your swaps comes later, once there's history.

**Technical detail**

| Part | Specification | Status |
|---|---|---|
| Rules (v1) | In order: (1) introduced, not yet spoken to; (2) Talk again on ≤ today; (3) former regulars not contacted in 90 days; (4) 108 Days and retreat alumni not enrolled in the coming cohort, not contacted in 90 days. Excluded: anyone marked Do not suggest, current enrolments, unsubscribed, team. | [My proposal] |
| Delivery | Monday 7:00 ET email to you. Each name has Keep and Swap links. Keep moves him to To call. Swap sends the next man by return email. | [My proposal] |
| After the call | "Spoke to Dan, he's in for January" said to the phone button updates Last spoke and his stage. | [My proposal] |
| How it runs | A weekly job on my server reads the contacts through the API and sends the email. Logged so it can be handed over. | [My proposal] |
| Workflow | WF-02, WF-02b. | [My proposal] |

### M5 · Holds, terms and payments [Waiting on you] (Part A, MS2)

*Waiting on: Q1 (drop-out policy)*

- **What it is:** When you close a man on the phone, you still name the deal. Afterwards it's written down once as an invoice: deposit, instalments and due dates, with your discount, credit or scholarship and the reason beside it. Card payments go through Stripe links. Venmo, Zelle and wire are recorded against the same invoice. Reminders go out before each due date, and you get one weekly note of anything overdue.
- **Which problem it solves:** "I have to remember did he pay me or not." A dozen bespoke deals and three payment methods in your head. Instalments chased by hand. A man left owing $1,025 who didn't know it (Stage 1 §3, §8).
- **Order:** Part A. Every winter enrolment from 1 Dec uses it.
- **What changes for Speed:** On the call: nothing changes, your give stays yours. After the call: say the terms once to your phone button (or tell Ryan) and stop remembering them. The three-day hold reminds you when it runs out.
- **What Tanay needs, and when:** Q1 by ≈15 Nov. Stripe account by ≈12 Nov. Confirm C4 and C5.
- **Success signal:** At any moment you can know who owes what by when. No reminder goes out late or wrong in December.
- **Not included:** Bookkeeping and tax. Your bookkeeper still sees the money. 1:1 payment plans move in Part B (M10) unless a new client signs sooner.

**Technical detail**

| Part | Specification | Status |
|---|---|---|
| Products | 108 Days full $3,700; plan 3 × $1,350; assistant $2,400. See System design › Products. | [Decided] |
| Invoices | One invoice per enrolment with a payment schedule (deposit now, then two instalments). Discounts as a line with type and reason fields. | [I'll verify] |
| Manual payments | Venmo, Zelle and wire recorded as payments on the invoice, by Ryan or me when you tell us. | [I'll verify] |
| Credits | Referral: $500 to both men, stored as a credit on each record until used. Membership offset: his membership fees credited into the 108 Days price, membership carries on. 1:1 into 108 Days: "volume discount" line. 108 Days → 1:1 near the end: no credit (your rule, 20 Oct). | [Decided] |
| Three-day hold | Stage Held with an expiry date. On the day, you get: "Hold for Dan ends today: keep, release or extend." Nothing goes to Dan. | [My proposal] |
| Reminders | To the man by email, 3 days before each due date and on the day, with the pay link. If 7 days overdue, it goes on your Monday overdue note instead of chasing him again. | [My proposal] |
| Terms acknowledgement | The 108 Days terms (including the Q1 policy) are part of what he signs at enrolment, so "I need you to remember them" is in writing. | [Waiting on you] |
| Workflows | WF-03, WF-05, WF-06. | [My proposal] |

### M6 · 108 Days enrolment and welcome [Waiting on you] (Part A, MS2)

*Waiting on: Q1, Q3, Ryan's welcome text*

- **What it is:** The moment a man's deposit lands (or you say he's in), he gets the welcome. It carries the waiver and terms to sign online, the cohort calendar, how to join the Signal group, and a link to book his two 1:1s with you in the right weeks. Ryan sees who has signed, paid and booked on one board instead of a sheet.
- **Which problem it solves:** Welcomes held back until the cohort was safe. Waivers ticked by hand. Two dozen 1:1s booked one at a time. Men in week 3 asking when the next small-group call is (Stage 1 §3).
- **Order:** Part A. The first winter enrolment after 1 Dec goes through it.
- **What changes for Speed:** At enrolment you do nothing. Ryan works from the board and still adds men to Signal. Your 1:1s land in your calendar already placed.
- **What Tanay needs, and when:** Q1 and Q3 by ≈20 Nov. Cohort dates, call times and 1:1 windows by ≈20 Nov. Ryan's current welcome email.
- **Success signal:** A test man enrols and within five minutes has everything. Ryan's board shows him correctly. His 1:1 bookings don't clash with anything.
- **Not included:** Deciding whether a cohort runs (yours). Writing small-group scripts. Creating the Signal group (Signal can't be connected). A "rules of the road" document (see Policies).

**Technical detail**

| Part | Specification | Status |
|---|---|---|
| Pipeline | 108 Days: Held → Enrolled → Welcomed → Signed → Ready → In cohort → Completed / Dropped. Cohort is a field, so one board serves every cohort. | [My proposal] |
| Welcome email | Ryan's current text, carried over word for word, with links filled in automatically. From Working Deep, reply-to the team inbox. | [My proposal] |
| Waiver and terms | One e-sign document: the existing waiver text plus your Q1 terms. Media consent is a separate yes/no tick, so signing doesn't grant use of his image by itself (the current wording does, and you hadn't seen it). | [My proposal] |
| Cohort calendar | One Google Calendar per cohort, made once from a template, linked in the welcome. Replaces Ryan rebuilding it each time. | [My proposal] |
| 1:1 booking | Booking link limited to the right weeks: week 2 for men you know, weeks 3–4 for new men, last 2–3 weeks for the second call (your pattern). | [My proposal] |
| Assistants | Enrolled first, at $2,400, role Assistant. Tagged so they keep 108 Minutes access through the gap to the next cohort. | [Decided] |
| Chasing | Unsigned after 3 days: one reminder. Seven days before the start: Ryan gets the list of anyone still missing anything. | [My proposal] |
| Cancellation | If a cohort doesn't run, one email to everyone enrolled and a refund task for you. Never automatic refunds. | [My proposal] |
| Workflows | WF-04, WF-05, WF-07, WF-22. | [My proposal] |

### M7 · Bookings [Waiting on you] (Part A, MS2)

*Waiting on: Q6 (phone or Zoom for the 15-minute call)*

- **What it is:** Booking pages for your 15-minute call, your 45-minute discovery call and the 108 Days 1:1s. They read your Google Calendar, put your own Zoom room in every booking, and send an email reminder. Calendly goes.
- **Which problem it solves:** You don't trust Calendly, add Zoom links by hand, and often schedule by hand anyway (7–10 Oct, 15 Oct).
- **Order:** Part A, because enrolment and the website depend on it.
- **What changes for Speed:** Men pick from the times you've opened. Bookings appear in the calendar you already use.
- **What Tanay needs, and when:** Q6. The windows you want bookable in December and January, by ≈20 Nov.
- **Success signal:** Ten test bookings in a row land in the right place with the right Zoom link and no double-booking.
- **Not included:** Planning your quarter ahead (Ashley's lane). Booking the 1:1 coaching series (Part B, M10).

**Technical detail**

| Part | Specification | Status |
|---|---|---|
| Calendars | 15-minute call; Discovery call (45 min, private link only); 108 Days 1:1 (60 min). See System design › Calendars. | [My proposal] |
| Google Calendar | Connected to the calendar on your personal Google account so busy times are respected and bookings appear there. Only free/busy is read. | [I'll verify] |
| Zoom | Your personal room link used as the meeting location (so you're never in the wrong meeting), not a new meeting each time. | [My proposal] |
| Reminders | Email only, 24 hours before. No SMS. | [Decided] |
| Retire Calendly | Once the three booking pages are live and tested. | [Decided] |

### M9a · Montana pre-sale [Waiting on you] (Part A, MS2)

*Waiting on: Q4*

- **What it is:** A Montana 2027 registration and payment page on the new system, with the 108 Days and 1:1 prices recorded as terms.
- **Which problem it solves:** You pre-sell Montana (22–25 Apr 2027) from November, before the new system exists (20 Oct).
- **Order:** My recommendation: keep selling on Squarespace until ≈28 Nov, move those men in with the winter deposits, then switch the page. Nothing changes for you in November.
- **What changes for Speed:** Nothing in November. From December, Montana registrations land on the man's record.
- **What Tanay needs, and when:** Q4, the Montana price, and Q7 if there's an early-bird.
- **Success signal:** Every Montana booking is on the right man's record before intake opens.
- **Not included:** Intake, travel and arrival (Part B, M9b). Chef, venue and bus bookings.

**Technical detail**

| Part | Specification | Status |
|---|---|---|
| Product | Retreat: Montana 2027 at the price you set; 108 Days alumni price; 1:1 client price; assistant (room and board). | [Open] |
| Pipeline | Retreats: Registered → Paid → Intake complete → Attended / Cancelled. Retreat is a field. | [My proposal] |
| Workflow | WF-16 (registration part). | [My proposal] |

### M8 · 108 Minutes week to week [My proposal] (Part B, MS4)

- **What it is:** One way to register (free first time, $36 drop-in, or membership). The Friday Zoom-link email and the Sunday recording go out on their own to exactly the right men. Attendance is known. New men are noticed. Comps end on time, followed by the membership offer. The Wednesday member email comes back.
- **Which problem it solves:** Robert's first and second pains are knowing who's current and attendance. First-timers get lost. About 20–25 regulars drifted with nobody noticing. Comps are removed from memory (Stage 1 §3).
- **Order:** Part B. But the cohort close-out (last free Saturday 19 Dec, then the offer) must work by 16 Dec, so that piece is built first.
- **What changes for Speed:** Thursday and Saturday stay yours. Friday and Sunday stop needing anyone except to paste the recording link. On Saturday afternoon you get a short note: the new men who came today, and a two-line note you can send them.
- **What Tanay needs, and when:** Robert's interview and list by ≈15 Nov. Q8 by 12 Dec. The annual membership price. When to move members' billing off Squarespace (I suggest after the library opens, so the move comes with something new).
- **Success signal:** Four Saturdays in a row: the right men get the link, attendance is known, and every first-timer hears back.
- **Not included:** One-click timer or music in Zoom (a wish). Automatic notes to first-timers in your name until you've seen the digest work for a month.

**Technical detail**

| Part | Specification | Status |
|---|---|---|
| Registration | One page: free first visit (once only), $36 drop-in, monthly $72, annual (price open). Registering for 108 Minutes includes the Thursday essay, with an unsubscribe in every email. Men in Europe tick a box (stricter consent rules there). | [My proposal] |
| Who gets Friday's link | A list built from fields, not memory: active members + comped (108 Days, 1:1, other) + this week's first-timers and drop-ins. Your rule stands: if in doubt, include him. | [Decided] |
| Friday email | Friday 18:00 ET. Robert (or you) edits one announcement box during the week; the rest is fixed. | [My proposal] |
| Sunday recording | Robert pastes the recording link into one field; the email goes to members and comped men. | [My proposal] |
| Attendance | After each session the Zoom participant report is matched to records: first attended, last attended, count. | [I'll verify] |
| First-timers | Saturday 14:00 ET: you get the list of first-timers who came, with a short note template. Registered but didn't come: "we're holding your spot" the following Thursday (your idea, 3 Oct). | [My proposal] |
| Drift | A regular (4+ sessions in 8 weeks) unseen for 4 weeks goes onto your Monday list as a soft touch, not an email. | [My proposal] |
| Comps | 108 Days men comped until the Saturday after their cohort's last call; members, 1:1 clients and next cohort's assistants keep access. Kate's programme handled by hand. | [Decided] |
| Tea Time | Eligible: members and men in a current cohort. Monthly invite to that list. | [Decided] |
| Wednesday email | Restored to members: a ~10-minute teaching and a ~5-minute practice from your library. | [Yours to confirm] |
| Membership billing | New members on Stripe from the start. Existing 22 move from Squarespace with a personal note and a date, once. | [My proposal] |
| Workflows | WF-08 to WF-15, WF-21. | [My proposal] |

### M9b · Retreat intake and arrivals [Yours to confirm] (Part B, MS4)

- **What it is:** After he registers: one intake form (emergency contact, diet, travel and arrival time, medical needs), the waiver, the info sheet and how to join the retreat's Signal group. Reminders go out on their own. Ryan sees who's missing anything and whose flight lands after the start.
- **Which problem it solves:** Medical and dietary needs not collected. A man lands three hours late at every retreat. Forms chased by hand (Stage 1 §3).
- **Order:** Part B, ready before Montana's preparation in March.
- **What changes for Speed:** Ryan stops chasing. You stop being surprised at the start time.
- **What Tanay needs, and when:** Q9. A late-arrival line for the info sheet (see Policies).
- **Success signal:** For Montana, every man's intake is complete a week out without Ryan chasing by hand.
- **Not included:** Chef, venue and bus bookings. Room allocation.

**Technical detail**

| Part | Specification | Status |
|---|---|---|
| Form | Intake: emergency contact (name, phone, relationship), diet, medical needs (free text), arrival date and time, travel mode, flight number. | [Yours to confirm] |
| Medical data | Visible to you and the retreat lead only, deleted 30 days after the retreat unless you choose otherwise (Q9). | [Waiting on you] |
| Late flight flag | If the arrival time is after the start, Ryan gets an email straight away so he can ask the man to change it. | [My proposal] |
| Chasing | 14 days before: reminder to anyone missing anything. 7 days before: Ryan's list. | [My proposal] |
| After | Day after the retreat: you approve the invitation to the next 108 Days and it goes to attendees not already enrolled. | [My proposal] |
| Workflows | WF-16, WF-17. | [My proposal] |

### M10 · 1:1 coaching admin [My proposal] (Part B, MS4)

- **What it is:** The 1:1 agreement signed online instead of printed. Payment plans on an invoice (wire and Zelle recorded, card if you allow it). A count of calls, and a note to you before call 9 for the renewal talk. Men who said "talk in six months" come back onto your Monday list on the right day.
- **Which problem it solves:** Paper agreement. Plans in "my little spreadsheet". Calls counted by copying calendar entries. Prospects forgotten (Stage 1 §3).
- **Order:** Part B, unless a new client signs in November.
- **What changes for Speed:** Everything between you and the man stays exactly as it is. No notes, no recordings.
- **What Tanay needs, and when:** Your current agreement (the Pages document). Whether 1:1 clients may pay by card.
- **Success signal:** The next new client signs and pays without anything printed, and you hear about the renewal talk before call 9.
- **Not included:** Session notes of any kind. Recording. A rescheduling helper (still open).

**Technical detail**

| Part | Specification | Status |
|---|---|---|
| Agreement | Your Pages agreement turned into an e-sign template with the client's name, dates, price and plan filled in. Contract party is your S corporation. | [My proposal] |
| Pipeline | 1:1: Discovery booked → Offer made → Agreement sent → Signed → Paid → Active → Renewal talk → Renewed / Completed. | [My proposal] |
| Prices | Never published. Invoices built by hand per client. Visible to you, me, Ryan and Ashley only. | [Decided] |
| Call count | Each 1:1 booking marked held increments the count; at 8, you get the renewal note. | [My proposal] |
| Booking | A private 1:1 session calendar (75 or 90 minutes) for clients, or your weekly standing slot if you go back to one. | [Open] |
| Workflow | WF-18. | [My proposal] |

### M11 · The website [Yours to confirm] (Part B, MS4)

- **What it is:** Your site rebuilt as custom pages hosted on GoHighLevel. It has a page for each offering, the 15-minute call, a small set of free teachings, and SEO basics. Every form and payment on it lands on the man's record. Leona's brand is applied when it arrives.
- **Which problem it solves:** Squarespace holds sign-ups, payments and the list separately. SEO scored 45/100. One stranger found you online and became a client (Stage 1 §7).
- **Order:** Built through November alongside Part A, switched over by ≈15 Jan.
- **What changes for Speed:** It stays calm and stable-looking ("the president's haircut"). Squarespace can be cancelled after the switch.
- **What Tanay needs, and when:** Leona's brand document (hoped ≈22 Nov). Your approval of page copy. Domain access.
- **Success signal:** Every form and payment on the site creates or updates a record. Another developer could take it over from the code and the handover notes.
- **Not included:** The members' library (M15). A large public teaching library. Writing new copy beyond moving and tidying what you have.

**Technical detail**

| Part | Specification | Status |
|---|---|---|
| Build | Hand-written HTML/CSS pages inside GoHighLevel's site builder, kept in a code repository so they can move to any host. | [My proposal] |
| Pages | Home, 108 Minutes (register), 108 Days, Retreats, 1:1 (no prices), About, a few free teachings, 15-minute call, legal pages. | [My proposal] |
| SEO | Titles, descriptions, structured data, sitemap, redirects from every old Squarespace URL. | [My proposal] |
| Switch-over | DNS moved on a quiet weekday; Squarespace kept for 30 days in case. | [My proposal] |

### M12 · Testimonials and assets [My proposal] (Part B, MS4)

- **What it is:** Testimonials kept in one place, each linked to the man and tagged by offering and theme, with whether he's given permission. Your photos, videos, practices and playlists listed so the assistant can find them.
- **Which problem it solves:** "I have to go looking for them every single time." Assets spread across a Google Doc, Signal, email and Photos (Stage 1 §3).
- **Order:** Part B. The Thursday email and the assistant use it.
- **What changes for Speed:** You ask for "two 108 Days testimonials about fatherhood" instead of hunting.
- **What Tanay needs, and when:** Access to the testimonials Google Doc and the Drive folders; Nick's retreat video.
- **Success signal:** You can get two fitting testimonials for an email in under a minute.
- **Not included:** Reorganising all of Drive and Apple Photos (a helper's job, your idea). New video editing.

**Technical detail**

| Part | Specification | Status |
|---|---|---|
| Store | Testimonial records: man, offering, theme, format (text, photo, video), the quote, link, permission yes/no and date. | [My proposal] |
| Capture | Ryan's last-call recordings and anything you forward go in through the same phone button with "testimonial". | [My proposal] |
| Permission | Where permission isn't recorded, a short permission request goes to the man before the testimonial is used. | [My proposal] |
| Workflow | WF-19. | [My proposal] |

### M13 · A faster Thursday email [My proposal] (Part B, MS4)

- **What it is:** A Thursday email template on the new system: your essay goes in, the banner is made from a fixed style, and two testimonials matched to what you're promoting slot in. The 591-person list moves over, and new 108 Minutes sign-ups join it automatically.
- **Which problem it solves:** Ten steps every week from scratch, your most frustrating day, and new sign-ups never added to the list (Stage 1 §3).
- **Order:** Part B, switched when the list moves (with the website).
- **What changes for Speed:** You write the essay; the rest is filling a template, on phone and laptop.
- **What Tanay needs, and when:** Leona's brand for the banner style.
- **Success signal:** Building the email takes you under 20 minutes.
- **Not included:** Writing or editing the essay. Social posts. AI essay reframing (an idea for later).

**Technical detail**

| Part | Specification | Status |
|---|---|---|
| Template | Mobile-first layout: banner, essay, two testimonial slots, one announcement block, sign-up line. | [My proposal] |
| Banner | A fixed banner design with a title field, made in the email builder instead of Keynote. | [My proposal] |
| Marketing calendar | A simple list of what's promoted which week so announcements don't step on each other. | [My proposal] |
| List | Moved from Squarespace with unsubscribes respected. Cleaned once of addresses that bounce. | [My proposal] |

### M14 · Your assistant [Waiting on you] (Part B, MS4)

*Waiting on: Q10 (one system or two)*

- **What it is:** An assistant you talk to. It answers ("how many men signed up this week?"), finds ("the testimonials from Dan"), acts ("send this one to Leona", "Dan's in for January, deposit by Zelle") and suggests (the Monday list).
- **Which problem it solves:** You won't use a CRM directly, and voice is how you work (How to Work With Speed).
- **Order:** After the records and assets are in. It's only as good as what it can read.
- **What changes for Speed:** This is how you use everything.
- **What Tanay needs, and when:** Q10 with Ashley. Where you want to talk to it: an app on your phone, or by voice note.
- **Success signal:** You use it without being prompted for a week.
- **Not included:** Reading your private inboxes unless you decide otherwise. Sending anything to a man without your yes.

**Technical detail**

| Part | Specification | Status |
|---|---|---|
| Model | An AI service paid by use (Claude or OpenAI), swappable without rebuilding. | [My proposal] |
| Tools | Read contacts, enrolments, invoices, calendars, testimonials; create introductions; record payments; draft emails. Every action that sends something asks you first. | [My proposal] |
| Interface | Voice-first chat on your phone. Text works too. | [Open] |
| Handover | Its instructions and tools written down so another builder can maintain it. | [Decided] |

### M15 · Members' library and the Wednesday email [Yours to confirm] (Part B, MS5)

- **What it is:** Your teachings and practices, chosen and arranged, behind a member login linked from the site. The Wednesday member email built around it.
- **Which problem it solves:** You feel "out of integrity" selling the membership without the Wednesday email, and men between containers want "some Speed teaching" (20 Oct).
- **Order:** After the build, end of January to mid-February.
- **What changes for Speed:** You can sell the membership "with integrity".
- **What Tanay needs, and when:** What goes in first (Nick's clips), and whether it's audio-first like John Wineland's.
- **Success signal:** Members log in and use it; the Wednesday email goes out every week.
- **Not included:** A full client portal with invoices, contracts and booking ("too hand-holding").

**Technical detail**

| Part | Specification | Status |
|---|---|---|
| Platform | GoHighLevel memberships/courses, linked from the website, members' login by email. | [Yours to confirm] |
| Access | Active members and men in a current cohort. | [My proposal] |
| Wednesday | Each week one teaching and one practice from the library. | [My proposal] |

## System design

### Contact fields

| Group | Field | Key | Type | Options | Status | Source |
|---|---|---|---|---|---|---|
| Origin | Source | `wd_source` | Dropdown | Word of mouth · Introduction · 108 Minutes · EMLT · Teacher-training alumni · Partner · Website · Insight Timer · YouTube · Substack · Instagram · Embodiment Lab · Other | [My proposal] | Call 5 fields; channels from Calls 1–5 |
| Origin | Referred by | `wd_referred_by` | Text / link | Introducer's name + record ID | [My proposal] | Call 5 |
| Origin | Introductions made | `wd_intros_made` | Number | Counted on the introducer | [My proposal] |  |
| Origin | Came in | `wd_came_in` | Date |  | [Decided] | Call 5 |
| Origin | First touch | `wd_first_touch` | Dropdown | Speed · Ryan · Other | [Decided] | Call 5 |
| Origin | What pulled him in | `wd_pulled_in` | Text | One line (a track, a line on the site) | [Decided] | Call 5 |
| Origin | EMLT years | `wd_emlt_years` | Text | e.g. Year 1, Year 3 | [Decided] | Call 5 |
| Origin | Experience | `wd_experience` | Dropdown | New to the work · In the work | [My proposal] | Ryan's tags |
| Origin | Location / time zone | `wd_tz` | Text |  | [My proposal] |  |
| Relationship | Discovery call | `wd_discovery_date` | Date | Empty = not had one | [Decided] | Call 3 |
| Relationship | Discovery-call points | `wd_discovery_points` | Long text | Main points, as you choose to record them | [Decided] | Call 5 |
| Relationship | Last spoke | `wd_last_spoke` | Date |  | [My proposal] |  |
| Relationship | Talk again on | `wd_talk_again` | Date | "Talk in six months" | [My proposal] | Call 3 |
| Relationship | Do not suggest | `wd_no_suggest` | Checkbox + reason | Keeps him off the Monday list | [My proposal] |  |
| Relationship | Call list status | `wd_calllist` | Dropdown | Suggested · Kept · Swapped · Called | [My proposal] |  |
| Relationship | Call list week | `wd_calllist_week` | Date |  | [My proposal] |  |
| 108 Minutes | Access | `wd_108m_status` | Dropdown | None · First-timer · Drop-in · Member monthly · Member annual · Comped 108 Days · Comped 1:1 · Comped other · Former regular | [My proposal] | Call 1, voice notes |
| 108 Minutes | Comp ends | `wd_108m_comp_ends` | Date | Saturday after cohort's last call | [Decided] | Call 5 |
| 108 Minutes | Member since | `wd_108m_member_since` | Date |  | [My proposal] |  |
| 108 Minutes | Billing | `wd_108m_billing` | Dropdown | Squarespace · Stripe | [My proposal] |  |
| 108 Minutes | First attended | `wd_108m_first` | Date |  | [My proposal] |  |
| 108 Minutes | Last attended | `wd_108m_last` | Date |  | [My proposal] |  |
| 108 Minutes | Sessions | `wd_108m_count` | Number |  | [My proposal] |  |
| 108 Minutes | Registered this week | `wd_108m_week` | Date | Saturday he registered for | [My proposal] |  |
| Credits | Referral credit | `wd_ref_credit` | Money | $500 per introduction that enrols | [Decided] | Voice notes 1–6 Oct |
| Consent | Media consent | `wd_media_consent` | Dropdown + date | Not asked · Yes · No | [My proposal] | Contradiction 3 |
| Consent | Thursday essay | `wd_list_consent` | Checkbox + date |  | [My proposal] |  |
| Retreat | Emergency contact | `wd_emergency` | Text | Name, phone, relationship | [Yours to confirm] |  |
| Retreat | Diet | `wd_diet` | Text |  | [Yours to confirm] |  |
| Retreat | Medical needs | `wd_medical` | Text (restricted) | Deleted after retreat per Q9 | [Waiting on you] |  |
| Retreat | Arrival | `wd_arrival` | Date-time + flight | Per retreat (on the enrolment) | [Yours to confirm] |  |
| Private | Speed's private notes | `wd_private` | Long text (restricted) | Visibility per Q2; may live outside the CRM | [Waiting on you] |  |
| 1:1 | Calls held | `wd_11_calls` | Number | On the 1:1 enrolment | [My proposal] |  |
| Team | Role | `wd_team_role` | Dropdown | Assistant · Guest teacher · Volunteer · Contractor | [My proposal] |  |

### Enrolment fields

| Field | Type | Notes |
|---|---|---|
| Offering / cohort / retreat | Dropdown | e.g. 108 Days Winter 2027; Montana 2027 |
| Role | Dropdown | Participant · Assistant · Comped · 108 Days Plus |
| List price | Money |  |
| Discount | Money |  |
| Discount type | Dropdown | Referral · Membership offset · Volume (1:1) · Scholarship · Early-bird · Other |
| Discount reason | Text | Your words |
| Terms | Dropdown | Paid in full · Deposit + 2 · Custom |
| Hold expires | Date | Three-day hold |
| Payment method | Dropdown | Card · Venmo · Zelle · Wire · Mixed |
| Waiver signed | Date |  |
| Media consent | Yes/No |  |
| Welcome sent | Date |  |
| 1:1 #1 / #2 booked | Date | 108 Days |
| Dropped on / reason | Date + text |  |

### Pipelines

- **Men to talk to**: Introduced → To call → Spoken → Discovery booked → Discovery done → Not now (talk again) → Not a fit / referred on → Enrolled (moved to an offering)
- **108 Days**: Held → Enrolled → Welcomed → Signed → Ready → In cohort → Completed → Dropped
- **Retreats**: Registered → Paid → Intake complete → Attended → Cancelled
- **1:1 Coaching**: Discovery booked → Offer made → Agreement sent → Signed → Paid → Active → Renewal talk → Renewed → Completed

### Tags

| Tag | Meaning | Set by |
|---|---|---|
| 108d-<season>-<year> | Cohort membership, e.g. 108d-winter-2027 | Enrolment |
| alumni | Has bought 108 Days, a retreat or 1:1 (your 72-man alumni group) | Migration, then enrolment |
| 108m-member | Paying member | Subscription |
| 108m-comped | Comped access (108 Days, 1:1, other) | Enrolment / comp end |
| former-regular | Regular who drifted (your J-curve tagging) | Migration, drift rule |
| new-to-the-work / in-the-work | Ryan's "Muggles" and "In the work" | You or Ryan |
| emlt | Came through EMLT | Migration |
| teacher-training | John Wineland teacher-training world | Migration |
| embodiment-lab | Came through Embodiment Lab (paused) | Migration |
| 1to1-active / 1to1-alumni | 1:1 client now / before | 1:1 enrolment |
| assistant-108d | Current or next-cohort assistant | Enrolment |
| guest-teacher | 108 Minutes guest teacher | Manual |
| team | Ryan, Robert, Nick, Leona, etc. Excluded from lists | Manual |
| eu-consent | Gave explicit email consent (Europe) | Form |

### Products

| Product | Price | Status |
|---|---|---|
| 108 Minutes · first visit | Free (registration only, once) | [Decided] |
| 108 Minutes · drop-in | $36 | [Decided] |
| 108 Minutes · monthly membership | $72 / month | [Decided] |
| 108 Minutes · annual membership | Price not yet stated | [Open] |
| 108 Days · full | $3,700 | [Decided] |
| 108 Days · payment plan | 3 × $1,350 (deposit $1,350) | [Decided] |
| 108 Days · assistant | $2,400 | [Decided] |
| 108 Days Plus | Private; double the 108 Days price, never advertised | [Decided] |
| Retreat · Montana 2027 | ≈$2,000 (exact price open) | [Open] |
| Retreat · 108 Days alumni price | ≈$300–350 off (exact open) | [Open] |
| Retreat · assistant | Room and board only | [Decided] |
| 1:1 Coaching | No product. Invoice per client, never published | [Decided] |

### Calendars

| Calendar | Length | Where | Who books | Status |
|---|---|---|---|---|
| 15-minute call | 15 min | Phone or Zoom (Q6) | Website and Monday-list men | [Waiting on you] |
| Discovery call | 45 min | Your Zoom room | Private link only | [My proposal] |
| 108 Days 1:1 | 60 min | Your Zoom room | Welcome email; limited to cohort weeks | [My proposal] |
| 1:1 coaching session | 75 / 90 min | Your Zoom room | Clients only (Part B) | [Open] |

### Forms

| ID | Form | Contents | Piece | Status |
|---|---|---|---|---|
| F1 | 108 Minutes registration | First visit / drop-in / membership; Thursday essay consent | M8 | [My proposal] |
| F2 | 108 Days waiver and terms (e-sign) | Existing waiver text + Q1 terms + separate media consent | M6 | [Waiting on you] |
| F3 | Retreat waiver (e-sign) | Carried over from JotForm, media consent separate | M9b | [My proposal] |
| F4 | Retreat intake | Emergency contact, diet, medical, arrival | M9b | [Yours to confirm] |
| F5 | 1:1 agreement (e-sign) | From your Pages document | M10 | [My proposal] |
| F6 | New man (backend) | Receives the phone button and forwarded texts; not shown to anyone | M3 | [My proposal] |
| F7 | Testimonial permission | One question: may we share this, with your name/photo? | M12 | [My proposal] |

### Workflows

| ID | Name | Trigger | Actions | Piece | Part |
|---|---|---|---|---|---|
| WF-01 | New man saved | Phone button / forwarded text | Create or update contact · Source = Introduction · Referred by · Came in = today · Men to talk to › Introduced · email you a confirmation | M3 | A |
| WF-02 | Monday call list | Monday 07:00 ET (server job) | Pick 5 by the rules · email you with Keep / Swap links · mark Suggested | M4 | A |
| WF-02b | Keep / Swap | Link clicked | Keep → To call · Swap → next man emailed back | M4 | A |
| WF-03 | Three-day hold | 108 Days stage = Held | Hold expires = +3 days · on that day email you: keep, release or extend | M5 | A |
| WF-04 | Enrolment | Deposit paid, or stage set to Enrolled (manual payment) | Tag cohort · comp 108 Minutes until the Saturday after the last call · send welcome with e-sign, calendar, Signal steps, 1:1 link · email Ryan | M6 | A |
| WF-05 | Waiver chase | Welcome sent, not signed | +3 days reminder to him · start −7 days: Ryan's missing list | M6 | A |
| WF-06 | Payment reminders | Invoice instalment due | −3 days and on the day: email with pay link · +7 days overdue: on your Monday note, no more emails to him | M5 | A |
| WF-07 | Cohort cancelled | You mark the cohort cancelled | One email to all enrolled · refund task for you | M6 | A |
| WF-08 | Comp end | Comp ends date | −7 days: "this Saturday is your last free 108 Minutes" + membership offer (Q8) · on the day: remove comp unless member, 1:1 client or next-cohort assistant | M8 | B (by 16 Dec) |
| WF-09 | 108 Minutes registration | F1 submitted / paid | Set access · Registered this week · Thursday list consent | M8 | B |
| WF-10 | Friday link | Friday 18:00 ET | Email the Friday list with the announcement box | M8 | B |
| WF-11 | Sunday recording | Recording link field updated | Email members and comped men | M8 | B |
| WF-12 | Attendance | Saturday after session (server job) | Zoom participant report → first / last / count | M8 | B |
| WF-13 | First-timers | Saturday 14:00 ET | Email you the first-timers who came + note template · no-shows get "holding your spot" on Thursday | M8 | B |
| WF-14 | Drift | Weekly | Regular unseen 4 weeks → Monday list candidate | M8 | B |
| WF-15 | Membership lifecycle | Stripe subscription events | Start / failed / cancelled → access and member fields; failed card → Stripe retries, Robert told if it lapses | M8 | B |
| WF-16 | Retreat registration | Retreat paid | Intake + waiver + info sheet + Signal steps · −14 days reminder · −7 days Ryan's list · late flight → Ryan | M9a/b | B |
| WF-17 | After a retreat | Retreat end +1 day | You approve the 108 Days invitation → sent to attendees not enrolled | M9b | B |
| WF-18 | 1:1 cycle | 1:1 session held | Calls +1 · at 8 → renewal note to you · Talk again date → Monday list | M10 | B |
| WF-19 | Testimonial | Testimonial saved | Link to man · permission request if not recorded | M12 | B |
| WF-21 | Wednesday member email | Wednesday | Teaching + practice from the library to members | M8/M15 | B |
| WF-22 | Ryan's Monday note | Monday 09:00 ET | Unsigned waivers, unpaid deposits, unbooked 1:1s, missing intake, for your 1 pm call | M6 | A |

### Emails

| ID | Email | To | From | Workflow |
|---|---|---|---|---|
| E-01 | Saved: new man | You | Working Deep | WF-01 |
| E-02 | Your five this week | You | Working Deep | WF-02 |
| E-03 | Hold ends today | You | Working Deep | WF-03 |
| E-04 | Welcome to 108 Days (Ryan's text) | The man | Working Deep (reply to team inbox) | WF-04 |
| E-05 | Waiver reminder | The man | Working Deep | WF-05 |
| E-06 | Payment due | The man | Working Deep | WF-06 |
| E-07 | Monday money note | You | Working Deep | WF-06 |
| E-08 | Ryan's Monday note | Ryan | Working Deep | WF-22 |
| E-09 | Last free Saturday + offer | Comped men | Speed | WF-08 |
| E-10 | Friday Zoom link | Friday list | 108 Minutes | WF-10 |
| E-11 | Sunday recording | Members + comped | 108 Minutes | WF-11 |
| E-12 | Today's new men | You | Working Deep | WF-13 |
| E-13 | Holding your spot | Registered no-shows | 108 Minutes | WF-13 |
| E-14 | Retreat welcome + intake | Retreat men | Working Deep | WF-16 |
| E-15 | Renewal talk coming | You | Working Deep | WF-18 |
| E-16 | Wednesday member email | Members | Speed | WF-21 |

### Roles

| Person | Sees | Notes |
|---|---|---|
| You | Everything | Admin; you'll use the assistant instead |
| Tanay | Everything | Admin, builder, maintainer |
| Ryan | Contacts, 108 Days, Retreats, 1:1 prices | No settings; private notes per Q2 |
| Robert | 108 Minutes contacts, Friday/Sunday emails, attendance | No payments, no 1:1, no notes |
| Ashley | Per Q2 and Q10 |  |
| Cohort assistants | No login | Ryan shares what they need |

### Connections

| Tool | Purpose | Notes | Status |
|---|---|---|---|
| Stripe | Card payments, payment links, subscriptions | Your account, connected to GoHighLevel | [My proposal] |
| Google Calendar | Busy times and bookings | Your personal Google account; free/busy only | [I'll verify] |
| Zoom | Your personal room on every booking; participant reports for attendance | Report access depends on your Zoom plan | [I'll verify] |
| Squarespace | One-time export; site and member billing until Part B | Then cancelled | [My proposal] |
| Signal | Not connected (no official way). Ryan still adds men by hand |  | [Decided] |
| My server | Phone button, Monday list, attendance jobs | Documented so it can move to any server | [My proposal] |
| AI service | Reads introductions; later, your assistant | Pay per use; model swappable | [My proposal] |

## Moving in

| Source | Who has it | Contents | Target | How | By |
|---|---|---|---|---|---|
| Squarespace mailing list (591) | You | Names, emails, unsubscribes | Contacts; Thursday consent; unsubscribed kept | Export | ≈12 Nov |
| Working Deep Alums group (72) | You | Names, emails | Tag alumni | Export | ≈12 Nov |
| Squarespace customers and orders | You | Drop-ins, retreat purchases, dates | Contacts; Came in; retreat enrolments (completed) | Export | ≈12 Nov |
| Squarespace subscriptions (5 monthly, 17 annual) | You | Members, start dates | Access = member; Billing = Squarespace | Export | ≈12 Nov |
| Ryan's 108 Days rosters | Ryan | Name, contact, notes, deposit, balance, waiver | Contacts; 108 Days enrolments; cohort tags; assistant tags | Google Sheets | ≈12 Nov |
| Ryan's retreat rosters | Ryan | Name, contact, retreat | Retreat enrolments; tags | Google Sheets | ≈12 Nov |
| Your payment sheet | You | Who owes what, plans, 1:1 payments | Open invoices; 1:1 enrolments (restricted) | Sheet or voice note | ≈15 Nov |
| JotForm submissions | Ryan | Signed waivers, emergency contacts | PDFs to Drive; Waiver signed dates; emergency contact | Export | ≈15 Nov |
| systeme.io copy (24 May) | Ryan | Ryan's tags | Tags only, matched to existing contacts | Export | ≈15 Nov |
| Robert's running list | Robert | Members, comped men, recent sign-ups | 108 Minutes access; checks the Squarespace import | Whatever he keeps | ≈15 Nov |
| Your J-curve session | You | Former regulars, in your memory | Tag former-regular; notes | 45-minute call with me | ≈18 Nov |
| Winter deposits | You | Who's paid what by Venmo/Zelle | 108 Days enrolments + invoices with payments recorded | Your sheet / voice note | ≈27 Nov |
| Austin's attendance sheets | Austin (if found) | Attendance to June | First / last attended | Bonus | Any time |
| Testimonials Google Doc | You | Quotes | Testimonial records (Part B) | Doc | Dec |

## Acceptance tests

| Test | Piece | Do | Pass when |
|---|---|---|---|
| T-01 | M1 | Open Harold's record. | It shows how he came in, EMLT years, 108 Minutes membership, Montana, 108 Days with his credit and plan, and that he's still a member, without asking you. |
| T-02 | M3 | Share a group-text introduction to the phone button. | Within a minute: a record with name, number, introducer, note; you get the confirmation email. |
| T-03 | M4 | Monday 07:00 ET. | Your email has five names with reasons. Keep moves one to To call. Swap returns a different man. Nobody marked Do not suggest appears. |
| T-04 | M5 | Put a man on a three-day hold. | On day three you get the keep/release/extend email; he gets nothing. |
| T-05 | M5, M6 | Test man pays the $1,350 deposit by card. | Within five minutes: welcome with e-sign, calendar, Signal steps and 1:1 link; Ryan emailed; invoice shows two instalments with dates. |
| T-06 | M5, M6 | Record a Zelle deposit by hand. | Same welcome as T-05, invoice shows the manual payment. |
| T-07 | M5 | Instalment falls due. | Reminder 3 days before and on the day; 7 days overdue it appears on your Monday note and he gets nothing more. |
| T-08 | M5 | Enrol with a $500 referral credit and a membership offset. | Both appear as lines with type and reason; the introducer's record shows his $500 credit. |
| T-09 | M6 | Leave the waiver unsigned. | Reminder after 3 days; on start −7 he's on Ryan's list. |
| T-10 | M7 | Ten bookings across the three calendars. | All in your Google Calendar, all with your Zoom room, no double-booking, email reminder only. |
| T-11 | M0 | Log in as Robert. | He sees 108 Minutes men and emails; no payments, no 1:1, no private notes. |
| T-12 | M0 | Send a test email. | Lands in a Gmail inbox; authentication passes; no SMS anywhere in the account. |
| T-13 | M2 | Pick 20 men at random from the old lists. | Each has exactly one record with the right history. |
| T-14 | M8 | Week of 12–19 Dec. | Autumn comped men get the last-free-Saturday note; on 19 Dec their comp ends except members, 1:1 clients and next-cohort assistants. |
| T-15 | M8 | Four Saturdays. | Friday list matches Robert's own check; attendance recorded; every first-timer is on your Saturday note. |
| T-16 | All | Hand-over check. | Each module has a one-page note: what it does, where it lives, how to change it. |

## Timeline

| When | What | Who | Status |
|---|---|---|---|
| Mon 2 Nov | Blueprint Draft 1 (this). | Tanay | [My proposal] |
| Thu 5 Nov | Draft to you, with Your decisions. | Tanay | [My proposal] |
| 5–9 Nov | You mark up Part A (a voice note is fine). I revise. | You | [My proposal] |
| 9–12 Nov | Return test on Part A. | You | [My proposal] |
| From 10 Nov | Inputs arrive; account set up (M0). | You, Ryan, Tanay | [My proposal] |
| 12–20 Nov | Records and moving in (M1, M2); J-curve session ≈18 Nov. | Tanay | [My proposal] |
| ≈20 Nov | Checkpoint MS1: you look at three records. | You | [My proposal] |
| ≈22 Nov | Leona's brand document hoped for. Website keeps going either way. | Leona | [Decided] |
| 20–28 Nov | Introductions, Monday list, payments, enrolment, bookings (M3–M7). | Tanay | [My proposal] |
| ≈27 Nov | Winter deposits moved in. | You, Tanay | [My proposal] |
| ≈28 Nov | Checkpoint MS2: you try it end to end. | You | [My proposal] |
| ≈1 Dec | Winter selling opens on the new system. December is the test month. | You | [Decided] |
| by 12 Dec | Comp-end sequence ready; Q8 answered. | Tanay, You | [My proposal] |
| 16–19 Dec | Autumn cohort closes; last free Saturday 19 Dec; membership offer. | System | [Decided] |
| Dec – 15 Jan | Part B: 108 Minutes, 1:1, website switch, Thursday template, testimonials, assistant. | Tanay | [My proposal] |
| ≈15 Jan | Winter cohort starts. All systems on (MS4). |  | [Yours to confirm] |
| End Jan – mid Feb | Library and Wednesday email (MS5). | Tanay | [Yours to confirm] |
| February | Spring cohort selling, second run on the new system. | You | [Decided] |
| March | Montana intake opens. | System | [My proposal] |
| 22–25 Apr 2027 | Montana retreat. |  | [Decided] |

## Your decisions

### Confirm (22 Oct answers)

- C1. The winter 108 Days starts around 15 January, and selling opens around 1 December. (M6, M4)
- C2. Three cohorts a year for now, five later. (M1 (cohort tags))
- C3. The welcome goes out the moment a man enrols, not when the cohort is safe. (Ryan held them back because a cohort might not launch. If one is ever cancelled, the system sends a single cancellation and refund note instead.) (M6)
- C4. Standard terms for every man (deposit, plan, due dates), with your discount, credit or scholarship and its reason recorded alongside. (M5)
- C5. Card payments through Stripe, and you absorb the fee. Venmo, Zelle and wire still accepted and recorded by hand. (M0, M5)
- C6. Retreat intake collects emergency contact, diet, travel and arrival times, and medical needs. (M9b)
- C7. The website: a custom site and landing pages on GoHighLevel, kept portable. (M11)
- C8. The Wednesday member email comes back as it was, then moves onto the library. (M8, M15)
- C9. The library aims for end of January to mid-February. (M15)
- C10. Every man's record is built by moving in everything that exists today. (M2)
- C11. You, Ashley and I decide together whether your own tools join this system. (M14)

### Speed decides

- Q1. When a man drops out of 108 Days, what happens to what he still owes? Options: He owes it in full / Case by case, and I write down why / Forgiven in set cases (tell me which). Holds up: M5, M6 (goes into the 108 Days terms) (Part A)
- Q2. Who besides you may read your private notes on a man? Options: Nobody / Tanay / Ryan / Ashley. Holds up: M0, M1 (Part A)
- Q3. Who assists the winter cohort? Options: Matt Cotton / Others (names). Holds up: M6 (they enrol at the assistant price, first) (Part A)
- Q4. Montana pre-sale in November and December: Options: Keep taking it on Squarespace until the new system is live (≈28 Nov), then switch (my recommendation) / Wait and open it on the new system only. Holds up: M9a (Part A)
- Q5. Monday call list: who should never appear on it, and who should come first? Options: Tell me in a voice note. Holds up: M4 (Part A)
- Q6. Your 15-minute call: phone or Zoom? Options: Phone / Zoom (your room). Holds up: M7 (Part A)
- Q7. Early-bird and deadline offers: keep, drop, or leave to Leona's brand work? Options: Keep / Drop / Leona decides. Holds up: M9a, M8 (membership offer)
- Q8. The membership offer after a cohort ends: Options: 20% off, as now / First month free / No discount, just an invitation. Holds up: M8 (needed by 12 Dec)
- Q9. Medical details from retreat intake: how long do we keep them? Options: Delete 30 days after the retreat (my recommendation) / Keep on his record. Holds up: M9b
- Q10. One system or two: Ashley's assistant and mine. Options: Keep separate / Fold into one. Holds up: M14

### Inputs

| What | From | By | Piece |
|---|---|---|---|
| Squarespace login (or exports of the mailing list, customers, orders and subscriptions) | You | ≈10 Nov | M2 |
| Access to the workingdeep.com domain settings (DNS), or the name of whoever set up the email | You | ≈10 Nov | M0 |
| Open a Stripe account in your business's name and invite me (I can't enter your bank details) | You | ≈12 Nov | M5 |
| Your payment spreadsheet (or a voice note walking me through who owes what) | You | ≈15 Nov | M2, M5 |
| Ryan's 108 Days and retreat roster sheets, his welcome email text, the cohort calendar template | Ryan | ≈10 Nov | M2, M6 |
| JotForm access, so the signed waivers can be archived before it's cancelled | Ryan | ≈15 Nov | M2 |
| Robert's running list of members and comped men | Robert | ≈15 Nov | M2, M8 |
| 45 minutes to tag former regulars by hand (your "J-curve") | You | ≈18 Nov | M2 |
| Winter cohort dates and call times, and the 1:1 windows you'll open | You | ≈20 Nov | M6, M7 |
| Ryan and Robert check the Stage 1 report for accuracy and gaps (still to happen) | Ryan, Robert | ≈15 Nov | all |

## Scope

Everything in the 17 modules above, set up, tested against the acceptance tests, and written up for hand-over.

**Not included**

- Bookkeeping, accounting and tax.
- Legal review of the waiver, terms or 1:1 agreement. I carry over your wording; a lawyer (or you) approves it.
- Brand design and marketing copy (Leona and Nick). I build what they give me.
- Writing the essay, social posts, and setting up Insight Timer, YouTube or Substack.
- Merging or migrating your five email accounts (a separate small job if you want it).
- Reorganising Google Drive and Apple Photos.
- Any connection to Signal, and any SMS.
- Ashley's work on your calendar and personal assistant, unless Q10 folds it in.
- Embodiment Lab beyond a tag.
- Paid ads.
- Going back through two years of text messages.
- Stage 4: training beyond a walkthrough of each piece, and ongoing refinement (priced separately, as the stage plan says).

**Change control.** If something comes up that isn't in this blueprint, I write it down, tell you whether it fits inside the price, and you decide before I build it. Nothing grows quietly (your ask, 28 Sep).

## Policies

| Policy | Owner | Used in | Status |
|---|---|---|---|
| Payment plan and drop-out terms | You | Q1 · goes into the 108 Days terms | [Waiting on you] |
| Media consent: asked, not assumed | You + Ryan | Wording for waivers (separate tick) | [My proposal] |
| Retreat arrivals: book flights that land before the start | You | One line on the info sheet | [Open] |
| 108 Days "rules of the road" (late, missed calls) | You | Optional; linked from the welcome | [Open] |
| Early-bird and deadline offers | You + Leona | Q7 | [Open] |
| Medical data retention | You | Q9 | [Waiting on you] |
| Who holds which login (password manager) | You + Tanay | Part of M0 | [My proposal] |

## Price

On 27 Sep I estimated the whole project at about $7.5–8k including system costs, and on 15 Oct said it now looks likely to come in under that. The fixed figure below covers this blueprint, its revisions and the build. It's fixed before any building starts.

[To fill in: fixed build price]

| Running cost | Detail |
|---|---|
| GoHighLevel | Monthly plan (exact plan and price confirmed before you're billed) |
| Stripe | ≈2.9% + 30¢ per card payment in the US, absorbed by you (check current rates) |
| Email sending | Small per-email cost at your volume |
| AI usage | Pay per use; small at your volume |
| Squarespace, Calendly, JotForm, Typeform, systeme.io | Cancelled as each is replaced (savings) |

## Risks

| Risk | Mitigation | Pieces |
|---|---|---|
| Private notes may not be hideable field by field in GoHighLevel | Test in a trial account first; fallback is a separate locked store | M0, M1 |
| Recurring weekly triggers (Friday, Monday) may need a server job | Use my server's scheduler; documented | M4, M8 |
| Invoice payment schedules and hand-recorded payments | Test with a $1 product before 20 Nov | M5 |
| European cards on your Stripe account | Test with a European card | M0, M8 |
| Zoom attendance reports depend on your Zoom plan | Check plan; fallback is Robert ticking a 2-minute list | M8 |
| Email deliverability from a new sending domain | Warm up with team and members first; check authentication | M0 |
| You're resting in November | Inputs asked for in small, dated pieces; checkpoints kept short | All |
| Ryan and Robert are volunteers with a few hours a week | Their asks kept to the inputs list and one walkthrough each | M2, M6, M8 |
| The server-side pieces depend on me | Written up so any developer can run them; can move to your own server | M3, M4, M8 |
| Working from India on US accounts (your question) | You open Stripe and the plan in your name and invite me; nothing needs a US login from me | M0 |

## Internal notes (Tanay)

- Set the fixed price. Effort estimate below totals the module hours; add testing and handover.
- Read Ashley's drafts before this goes to Speed. Anything that contradicts a module goes into Your decisions, not silently into the spec.
- Before sending: remove the hours column if you'd rather not show effort to Speed.
- Security: Ryan's voice-note transcript in the Project contains a plain-text password. Ask Ryan to change it and delete the passage.
- Spin up a GoHighLevel trial sub-account this week to clear the V items in M0 and M5 before promising them.
- The iPhone assumption (M3) is inferred from iMessage. Confirm with Speed.
- The 108 Minutes start time contradiction (10:00 ET vs 7:00 in the SOP) matters for the Friday email and the Zoom report job. Ask Robert.
- Speed's personal Gmail address appears in the Stage 1 doc; keep this blueprint free of it.

Effort: Part A 69 h, Part B 110 h (+≈15 h testing/handover).