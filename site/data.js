/* =====================================================================
   WORKING DEEP · STAGE 2 BLUEPRINT · Draft 1.3 (4 Nov 2026)
   Written by Tanay for Speed. "I" = Tanay, "you" = Speed.
   Status codes on every point:
     D   Decided by Speed (source given)
     T22 Tanay's answer of 22 Oct, waiting for Speed to confirm
     P   Proposed in this blueprint (Tanay's design call; Speed can change it)
     O   Open: not known yet
     B   Blocked: waiting on a decision only Speed can make
     V   Verify: a platform behaviour I will confirm in a GoHighLevel test account before building on it
   ===================================================================== */
window.BP = {

meta: {
  title: "The Blueprint",
  sub: "Working Deep · Stage 2 · what gets built, in what order, and how we'll know it works",
  version: "Draft 1.3",
  date: "4 Nov 2026",
  basis: "Built on the Stage 1 report (22 Oct), our five calls, your voice notes, Ryan's two voice notes, your job description and the stage plan, checked line by line on 4 Nov against what you told me on our call on 2 Nov. Ashley's drafts (shared 2 Nov) are not yet reflected."
},

statusKey: {
  D:   ["Decided", "You decided this."],
  T22: ["Yours to confirm", "I answered it on 22 Oct. It needs your yes."],
  P:   ["My proposal", "My design choice. Change it if it doesn't fit."],
  O:   ["Open", "Not known yet."],
  B:   ["Waiting on you", "Can't be finished until you decide."],
  V:   ["I'll verify", "A platform detail I test before building on it."]
},

/* --------------------------------------------------------------- COVER */
cover: {
  returnTest: "Once you've approved a part, put it aside for 48 to 72 hours. Then open The plan on one page cold. If you can explain to yourself what's being built and in what order without me, it passes. If not, I revise it before I build anything, not halfway through."
},

/* ------------------------------------------------------------ ONE PAGE */
onePage: {
  headline: "One place that remembers every man, so you don't have to. You talk; it remembers, reminds and sends.",
  pillars: [
    { t: "One record per man", d: "Where he came from, who introduced him, what he's done, what he's paid, what you gave him. Everything else reads from it.", s: "D" },
    { t: "Selling without holding it in your head", d: "Introductions saved the moment they arrive. Five men to call each Monday. Holds, terms and payments tracked and reminded for you.", s: "P" },
    { t: "Held from the moment he says yes", d: "Welcome, waiver, calendar, Signal invite and his 1:1 booking go out as soon as he enrolls. Ryan sees who's done what.", s: "D" },
    { t: "108 Minutes runs itself week to week", d: "Friday link and Sunday recording go to the right men. Attendance known. New men noticed. Comps end on time.", s: "P" },
    { t: "You talk to it", d: "An assistant on top that answers, finds and acts, by voice. You never open the CRM.", s: "D" }
  ],
  milestones: [
    { id: "MS1", name: "Foundation", when: "≈20 Nov", what: "Platform set up, every man's record built from what exists today.", mods: ["M0","M1","M2"], check: "30 minutes: you look at three records (Harold's among them) and tell me what's wrong." },
    { id: "MS2", name: "Selling is live", when: "≈28 Nov", what: "Introductions, Monday call list, holds, terms and payments, enrollment and onboarding, bookings.", mods: ["M3","M4","M5","M6","M7","M9a"], check: "45 minutes: you save an introduction, keep/swap a call list, and enroll a test man end to end." },
    { id: "—", name: "Winter selling opens", when: "≈1 Dec", what: "You sell on the new system. December is the test month; I fix what we find.", mods: [], check: "" },
    { id: "MS3", name: "Cohort close", when: "by 16 Dec", what: "Autumn cohort close-out: last free Saturday (19 Dec) and the membership offer, handled by the system.", mods: ["M8 (part)"], check: "None needed; I'll show you what went out." },
    { id: "MS4", name: "All systems on", when: "≈15 Jan", what: "108 Minutes week to week, 1:1 admin, retreat intake for Montana, the website, the Thursday template, testimonials, your assistant.", mods: ["M8","M9b","M10","M11","M12","M13","M14"], check: "60 minutes: a walkthrough, then you use the assistant for a week." },
    { id: "MS5", name: "Library", when: "end Jan – mid Feb", what: "Members' library and the Wednesday email.", mods: ["M15"], check: "You and two members try it." }
  ],
  protects: [
    "Teaching, scripting, the essay, every sales conversation and every 1:1 stay with you.",
    "Your judgement at the moment of closing stays. The system records the deal; it never sets it.",
    "1:1 calls are never recorded and no session notes are kept.",
    "No text-message reminders anywhere. SMS is switched off in the account.",
    "Your personal inbox and speed@ stay yours alone.",
    "No blanket offers to regulars. It should feel like a club, not a funnel."
  ]
},

/* ------------------------------------------- WHAT I NEED FROM YOU, AND WHEN (shown on Timeline) */
inputs: [
    { t: "Squarespace login (or exports of the mailing list, customers, orders and subscriptions). Done on 2 Nov", by: "Done", from: "You", mod: "M2" },
    { t: "Access to the workingdeep.com domain settings (DNS). On 2 Nov you said speed@ sits on your Google account and Maya (Jeremiah) set up what exists. I'll only ask for him if I can't get in", by: "≈10 Nov", from: "You", mod: "M0" },
    { t: "Open a Stripe account in your business's name and invite me (I can't enter your bank details)", by: "≈12 Nov", from: "You", mod: "M5" },
    { t: "Your payment spreadsheet (or a voice note walking me through who owes what)", by: "≈15 Nov", from: "You", mod: "M2, M5" },
    { t: "Ryan's 108 Days and retreat roster sheets, his welcome email text, the cohort calendar template", by: "≈10 Nov", from: "Ryan", mod: "M2, M6" },
    { t: "JotForm access, so the signed waivers can be archived before it's cancelled", by: "≈15 Nov", from: "Ryan", mod: "M2" },
    { t: "Robert's running list of members and comped men", by: "≈15 Nov", from: "Robert", mod: "M2, M8" },
    { t: "A weekly talk-through of about 20 men, the 72 alumni first, so their stories go into their records (agreed 2 Nov; it can run to the end of December). Former regulars get tagged in the same sessions", by: "Weekly from ≈16 Nov", from: "You", mod: "M2" },
    { t: "Winter cohort dates and call times, and the 1:1 windows you'll open", by: "≈20 Nov", from: "You", mod: "M6, M7" },
    { t: "A second pair of eyes on the Stage 1 report and this blueprint. On 2 Nov you said you may ask Maya (Jeremiah), and that Ryan and Robert's review may matter less than you thought. Your call", by: "Open", from: "You", mod: "all" },
    { t: "30 minutes to set up your assistant on your phone with me, then a week of using it", by: "≈15 Jan", from: "You", mod: "M14" },
    { t: "Your personal Gmail address, spelled out once in a voice note, before I connect the calendar (my notes spell it two ways)", by: "≈12 Nov", from: "You", mod: "M7" }
],

/* ------------------------------------------------------------- MODULES */
modules: [

/* ================================ PART A ================================ */
{
  id: "M0", part: "A", ms: "MS1", title: "The account, payments and who sees what", status: "B",
  blockedBy: "who besides you may read your private notes on a man: nobody, me, Ryan, or Ashley if she stays on",
  plain: {
    what: "A Working Deep account on GoHighLevel (opened on our 2 Nov call; your login is speed@workingdeep.com), Stripe connected to it for cards, emails sent from workingdeep.com so they land in inboxes, and a login for each person that shows them only what their job needs.",
    why: "Five Gmail accounts, logins passed around in messages, an assistant inbox you can't get into, and, until 2 Nov, nobody sure where workingdeep.com email lives (Stage 1 §7, §11.10). You've since told me speed@ is on your Google account.",
    order: "First. Everything else is built on it.",
    changes: "Almost nothing day to day. Your private inboxes stay private. Ryan and Robert get their own logins instead of shared passwords. The assistant Gmail is replaced by assistant@workingdeep.com, which you liked on 2 Nov.",
    need: "By ≈10 Nov: domain access. By ≈12 Nov: open Stripe and invite me. Who may read your private notes.",
    success: "Each person logs in and sees only their part. A test email from the system lands in a Gmail inbox, not spam. SMS is off.",
    fence: "Merging or moving your five Gmail accounts, and moving old email. That's a separate tidy-up (see Scope)."
  },
  spec: [
    ["Account", "Created on 2 Nov with you as admin (speed@workingdeep.com). Still to fill in: time zone America/New_York, currency USD, and the business profile with the S corporation name for invoices.", "D"],
    ["Plan", "GoHighLevel plan that includes workflows, payments, memberships/courses and websites. Current pricing to be confirmed before you're billed.", "V"],
    ["SMS", "No phone number bought. SMS and WhatsApp channels left off. Every workflow uses email only.", "D"],
    ["Email sending", "A dedicated sending subdomain (e.g. mail.workingdeep.com) with SPF, DKIM and DMARC records. From name \"Speed\" for your voice; \"Working Deep\" for logistics. Replies to logistics emails go to assistant@workingdeep.com, never to your private inboxes.", "P"],
    ["Assistant inbox", "assistant@workingdeep.com replaces the assistant Gmail (your yes on 2 Nov). Ryan holds that Gmail today, so we switch over with him and forward the old address for a while.", "D"],
    ["Stripe", "Your Stripe account connected through GoHighLevel Payments. Card fees absorbed (no surcharge). Check that Stripe accepts cards from European members on your entity.", "V"],
    ["Users and roles", "You: admin (in most cases you won't need to log in; you'll get a short walkthrough anyway). Tanay: admin. Ryan: 108 Days, retreats, contacts; can see prices including 1:1 (your rule, 7–10 Oct). Robert: 108 Minutes contacts and emails only; no payments. Ashley: only if she stays on. Cohort assistants: no login.", "P"],
    ["Private notes", "Your private notes need to be hidden from some users. GoHighLevel limits what each role can see, but not field by field, so I'll test this first. If it can't be done safely, private notes live in a separate locked store the assistant can read for you, not in the CRM.", "V"],
    ["Security", "Shared logins (including 108minutes@, which Robert, Austin and Maya can open today) move into a password manager. The assistant Gmail and JotForm passwords are changed (one was written out in a voice note transcript).", "P"],
    ["Documentation", "An access sheet: who has which login, what each role can see, where every setting lives.", "D"]
  ],
  hours: 6
},
{
  id: "M1", part: "A", ms: "MS1", title: "One record per man", status: "P",
  plain: {
    what: "Every man has one record: how he came into your orbit and who introduced him, his EMLT years, when he came in, who first spoke to him, what pulled him in, the main points from your first call, everything he's done and bought, and what you gave him.",
    why: "\"Your head is the database.\" Holds, credits, who's eligible for what, and who introduced whom live in your memory. You and Ryan each asked, separately, for one place with a man's whole history (Stage 1 §1, §4).",
    order: "Second, straight after the account. The call list, payments, onboarding and your assistant all read from it.",
    changes: "You stop being the only place a man's story lives. You'll read it through the assistant or a one-page summary, never the CRM screens. When you say to a man \"when you came in last August, when Nico connected us…\", the system has it.",
    need: "One 30-minute look, around 20 Nov, at three real records. You listed the fields on 20 Oct; this is to check I've got them right. Then the weekly talk-through (see M2), which fills in each man's story.",
    success: "For Harold, the record answers without asking you: how he came in, what he's done, what he's paid, what credits he's had, and whether he's a member now.",
    fence: "Photographing your discovery-call notes into the record (a later idea). Tracking which piece of content brought each man in beyond one \"what pulled him in\" line."
  },
  spec: [
    ["Contact fields", "See System design › Fields: origin, relationship, 108 Minutes, credits, consent, retreat and private groups.", "P"],
    ["Enrollments", "Each thing a man buys or joins is an opportunity in that offering's pipeline (108 Days, Retreats, 1:1), with its own fields for cohort, role, price, discount and reason, hold and waiver. A man's history is his list of enrollments.", "P"],
    ["Tags", "Kept for groups you'll email or filter by: cohort, alumni, member, comped, new to the work / in the work, EMLT, teacher training, guest teacher, team. Ryan's list is the starting point. Quad means one of your first-year groups of four (twelve men in all), as you explained on 2 Nov. Embodiment Lab is a tag too (your yes on 2 Nov). The Bay Area group in Squarespace is not carried over (your instruction, 2 Nov).", "D"],
    ["Introductions", "Who introduced whom is stored on the introduced man (\"Referred by\") and counted on the introducer. If GoHighLevel can link two contacts natively, the link is used; otherwise the introducer's name and record ID are stored.", "V"],
    ["Friday look", "Whenever you want it, say \"show me what we put in this week\" and you get a short list of new and changed records. You suggested a half hour on a Friday afternoon, not every week.", "P"],
    ["One-page summary", "A plain-text summary of a man (built by the assistant later; in Part A, a saved view Ryan can read).", "P"],
    ["Data rules", "Email is the main key; phone the second. A man with no email (a raw introduction) is allowed. Duplicates are merged by hand from a weekly list.", "P"]
  ],
  hours: 6
},
{
  id: "M2", part: "A", ms: "MS1", title: "Moving in what already exists", status: "T22",
  plain: {
    what: "Everything you already have, brought into one record per man. That covers the mailing list, the alumni list, Squarespace customers and members, Ryan's rosters, your payment sheet, the signed waivers and Ryan's old tags. Just before selling opens, the winter deposits you've taken by Venmo or Zelle go in too.",
    why: "Otherwise the records start empty. You chose to take winter deposits before the system exists (20 Oct), so they have to be moved in. And no list holds what you know about each man; on 2 Nov we agreed that has to come from you, by voice, over time.",
    order: "Straight after the record design. A second pass in the last week of November for the winter deposits.",
    changes: "Each week, until about the end of December, you talk through about 20 men, the 72 Working Deep alumni first. What you say goes into their records, and former regulars get tagged as you go (your J-curve idea). You said it would train you as well as the assistant.",
    need: "The inputs listed on the Timeline, by ≈15 Nov. The weekly talk-through from ≈16 Nov. The deposits list ≈27 Nov.",
    success: "Every man on any existing list has exactly one record. Every winter deposit shows against the right man with the right amount and terms.",
    fence: "Going back through two years of text messages for lost introductions (low priority, your idea). Attendance before June, unless Austin's sheets turn up."
  },
  spec: [
    ["Sources", "See Moving in: 11 sources mapped field by field, with owner and date.", "P"],
    ["Personal context", "Each week I send you about 20 names. You talk about each in a voice note (or on a call with me); I turn it into the record's notes, tags and fields and send you the result to glance at. Alumni first, then 108 Days men, then the rest. Agreed 2 Nov; the way you send it is my proposal.", "D"],
    ["Squarespace members", "Their billing stays on Squarespace until Part B. They're imported as members but not charged by the new system, so nobody pays twice.", "P"],
    ["JotForm", "Every signed waiver downloaded as PDF into a Drive folder and linked from the man's record. Then you can cancel JotForm (your rule, 15 Oct).", "D"],
    ["Merging", "Script de-duplicates on email, then phone, then name. Anything uncertain goes on a review list for Ryan or me, never auto-merged.", "P"],
    ["Unsubscribes", "Anyone who unsubscribed on Squarespace stays unsubscribed.", "P"],
    ["Bay Area", "Everyone on the list is imported, but the Bay Area segment isn't carried over as a tag (\"not what it says it is\"). Nothing is deleted on Squarespace.", "D"],
    ["Confidential data", "1:1 payment history from your sheet goes onto 1:1 enrollments only (visible to you, me and Ryan, and Ashley if she stays on).", "D"]
  ],
  hours: 12
},
{
  id: "M3", part: "A", ms: "MS2", title: "Saving introductions", status: "P",
  plain: {
    what: "When a man is introduced to you, usually in a group text, you share the text (or say his name and who introduced him) to a \"Working Deep: new man\" button on your phone. A record appears with who introduced him, when, and what was said. You get a one-line email back: \"Saved: Arjun, introduced by Nico.\"",
    why: "The text introduction is your most common path in and the leakiest. The man sits as a phone number in your messages unless he enrolls (15 Oct).",
    order: "Part A, because winter selling feeds on these names.",
    changes: "One new habit: share the text, or speak one sentence. No forms.",
    need: "≈25 Nov: 15 minutes to put the button on your phone with me and try it on two real introductions.",
    success: "Every introduction you receive in December exists as a record within a minute, with the introducer linked.",
    fence: "Reading your messages automatically (private, and not technically possible). Signal."
  },
  spec: [
    ["Phone button", "An Apple Shortcut on your iPhone (inferred from iMessage) in the share sheet and by Siri (\"Hey Siri, new man\"). It sends the shared text or your dictation to a small private service on my server.", "P"],
    ["Fallback", "Forward the text or email to a private address (new@…) and the same thing happens.", "P"],
    ["Reading it", "The service uses an AI model to pull out name, phone, email, introducer and a one-line note, then creates or updates the contact through the GoHighLevel API. Source = Introduction; Came in = today; added to Men to talk to › Introduced.", "P"],
    ["By voice", "Saving an introduction by voice note: your yes on 2 Nov (\"that would be great\").", "D"],
    ["Confirmation", "Email to you: who was saved, who introduced him, and a link to fix it if it's wrong. Once your assistant is on (M14), you can also see the new man appear there.", "P"],
    ["Workflow", "WF-01.", "P"],
    ["Privacy", "The text is used only to make the record; it isn't stored on the server afterwards.", "P"]
  ],
  hours: 8
},
{
  id: "M4", part: "A", ms: "MS2", title: "Five men to call each Monday", status: "B",
  blockedBy: "who should never appear on the list, and who should come first (a voice note is fine)",
  plain: {
    what: "Every Monday morning an email suggests five men to call this week, each with one line on why: introduced and not yet called, a \"talk in six months\" date that's come round, a former regular, an alumnus not in the coming cohort. You tap Keep or Swap on each. Swapped men are replaced; your choices are remembered.",
    why: "Filling the 10th to 12th place is the struggle every cohort. Today it's \"desperation and intuition\"; the bucket sheet was abandoned (Stage 1 §3). You called this \"the most important business question\".",
    order: "Live for 1 Dec, when selling opens.",
    changes: "Monday: a short list arrives. You keep three, swap two, make your calls, and say a sentence about each call to your phone button so the record's up to date.",
    need: "Who never appears and who comes first, by ≈20 Nov.",
    success: "Through December you get a list every Monday and say it's mostly the right men.",
    fence: "Contacting those men for you. It suggests; you call. (You once pictured it arriving on a Sunday; I've put Monday morning, your call.) AI ranking that learns from your swaps comes later, once there's history. In December the reasons will be thinner for men you haven't talked through yet (M2); the alumni go first for that reason."
  },
  spec: [
    ["When", "Every week from seven weeks before selling opens for a cohort (your picture, 2 Oct), and you can ask the assistant for it any day.", "P"],
    ["Rules (v1)", "In order: (1) introduced, not yet spoken to; (2) Talk again on ≤ today; (3) former regulars not contacted in 90 days; (4) 108 Days and retreat alumni not enrolled in the coming cohort, not contacted in 90 days. Excluded: anyone marked Do not suggest, current enrollments, unsubscribed, team.", "P"],
    ["Delivery", "Monday 7:00 ET email to you. Each name has Keep and Swap links. Keep moves him to To call. Swap sends the next man by return email.", "P"],
    ["After the call", "\"Spoke to Dan, he's in for January\" said to the phone button updates Last spoke and his stage.", "P"],
    ["How it runs", "A weekly job on my server reads the contacts through the API and sends the email. Logged so it can be handed over.", "P"],
    ["Workflow", "WF-02, WF-02b.", "P"]
  ],
  hours: 10
},
{
  id: "M5", part: "A", ms: "MS2", title: "Holds, terms and payments", status: "B",
  blockedBy: "what happens to what a man still owes when he drops out of 108 Days: owed in full, case by case with the reason written down, or forgiven in set cases",
  plain: {
    what: "When you close a man on the phone, you still name the deal. Afterwards it's written down once as an invoice: deposit, instalments and due dates, with your discount, credit or scholarship and the reason beside it. Card payments go through Stripe links. Venmo, Zelle and wire are recorded against the same invoice. Reminders go out before each due date, and you get one weekly note of anything overdue.",
    why: "\"I have to remember did he pay me or not.\" A dozen bespoke deals and three payment methods in your head. Instalments chased by hand. A man left owing $1,025 who didn't know it (Stage 1 §3, §8).",
    order: "Part A. Every winter enrollment from 1 Dec uses it.",
    changes: "On the call: nothing changes, your give stays yours. After the call: say the terms once to your phone button (or tell Ryan) and stop remembering them. The three-day hold reminds you when it runs out.",
    need: "The drop-out rule by ≈15 Nov. Stripe account by ≈12 Nov. Your yes to standard terms for every man, and to Stripe with you absorbing the card fee.",
    success: "At any moment you can know who owes what by when. No reminder goes out late or wrong in December.",
    fence: "Bookkeeping and tax. Your bookkeeper still sees the money. 1:1 payment plans move in Part B (M10) unless a new client signs sooner."
  },
  spec: [
    ["Products", "108 Days full $3,700; plan 3 × $1,350; assistant $2,400. See System design › Products.", "D"],
    ["Invoices", "One invoice per enrollment with a payment schedule (deposit now, then two instalments). Discounts as a line with type and reason fields.", "V"],
    ["Manual payments", "Venmo, Zelle and wire recorded as payments on the invoice, by Ryan or me when you tell us.", "V"],
    ["Credits", "Referral: $500 to both men, stored as a credit on each record until used. Membership offset: his membership fees credited into the 108 Days price, membership carries on. 1:1 into 108 Days: a \"volume discount\" line, always entered by hand at your discretion and never calculated (your rule, 2 Nov). 108 Days → 1:1 near the end: no credit (your rule, 20 Oct).", "D"],
    ["Three-day hold", "Stage Held with an expiry date. On the day, you get: \"Hold for Dan ends today: keep, release or extend.\" Nothing goes to Dan.", "P"],
    ["Reminders", "To the man by email, 3 days before each due date and on the day, with the pay link. If 7 days overdue, it goes on your Monday overdue note instead of chasing him again.", "P"],
    ["Terms acknowledgement", "The 108 Days terms (including the drop-out rule) are part of what he signs at enrollment, so \"I need you to remember them\" is in writing.", "B"],
    ["Workflows", "WF-03, WF-05, WF-06.", "P"]
  ],
  hours: 10
},
{
  id: "M6", part: "A", ms: "MS2", title: "108 Days enrollment and welcome", status: "B",
  blockedBy: "the drop-out rule (M5), who assists the winter cohort (Matt Cotton, and who else), and Ryan's welcome text",
  plain: {
    what: "The moment a man's deposit lands (or you say he's in), he gets the welcome. It carries the waiver and terms to sign online, the cohort calendar, how to join the Signal group, and a link to book his two 1:1s with you in the right weeks. Ryan sees who has signed, paid and booked on one board instead of a sheet.",
    why: "Welcomes held back until the cohort was safe. Waivers ticked by hand. Two dozen 1:1s booked one at a time. Men in week 3 asking when the next small-group call is (Stage 1 §3).",
    order: "Part A. The first winter enrollment after 1 Dec goes through it.",
    changes: "At enrollment you do nothing. Ryan works from the board and still adds men to Signal. Your 1:1s land in your calendar already placed.",
    need: "The drop-out rule and the winter assistants by ≈20 Nov. Cohort dates, call times and 1:1 windows by ≈20 Nov. Ryan's current welcome email.",
    success: "A test man enrolls and within five minutes has everything. Ryan's board shows him correctly. His 1:1 bookings don't clash with anything.",
    fence: "Deciding whether a cohort runs (yours). Writing small-group scripts. Creating the Signal group (Signal can't be connected). A \"rules of the road\" document (see Policies)."
  },
  spec: [
    ["Pipeline", "108 Days: Held → Enrolled → Welcomed → Signed → Ready → In cohort → Completed / Dropped. Cohort is a field, so one board serves every cohort.", "P"],
    ["Welcome email", "Ryan's current text, carried over word for word, with links filled in automatically. From Working Deep, reply-to the team inbox.", "P"],
    ["Waiver and terms", "One e-sign document: the existing waiver text plus the payment and drop-out terms. Media consent is a separate yes/no tick, so signing doesn't grant use of his image by itself (the current wording does, and you hadn't seen it).", "P"],
    ["Cohort calendar", "One Google Calendar per cohort, made once from a template, linked in the welcome. Replaces Ryan rebuilding it each time.", "P"],
    ["1:1 booking", "Booking link limited to the right weeks: week 2 for men you know, weeks 3–4 for new men, last 2–3 weeks for the second call (your pattern).", "P"],
    ["Assistants", "Enrolled first, at $2,400 (about two-thirds of the price, your rule), role Assistant. Tagged so they keep 108 Minutes access through the gap to the next cohort.", "D"],
    ["Chasing", "Unsigned after 3 days: one reminder. Seven days before the start: Ryan gets the list of anyone still missing anything.", "P"],
    ["Recordings", "Full-group calls stay recorded in Zoom. The cohort assistant still sends a recording to anyone who missed a call (as now, 2 Nov).", "D"],
    ["Cancellation", "If a cohort doesn't run, one email to everyone enrolled and a refund task for you. Never automatic refunds.", "P"],
    ["Workflows", "WF-04, WF-05, WF-07, WF-22.", "P"]
  ],
  hours: 10
},
{
  id: "M7", part: "A", ms: "MS2", title: "Bookings", status: "B",
  blockedBy: "phone or Zoom for the 15-minute call, and which of your two calendars is the master (I suggest your personal Google calendar)",
  plain: {
    what: "Booking pages for your 15-minute call, your 45-minute discovery call and the 108 Days 1:1s. They read your Google Calendar, put your own Zoom room in every booking, and send an email reminder. Calendly goes.",
    why: "You add Zoom links by hand and often schedule by hand anyway (7–10 Oct, 15 Oct). On 2 Nov you put it more exactly: Calendly \"is doing what it does\"; the trouble is that your calendar isn't always written up, and invites to speed@ don't reach the calendar you use.",
    order: "Part A, because enrollment and the website depend on it.",
    changes: "Men pick from the times you've opened. Bookings appear in the calendar you already use. Later you can block time by voice through the assistant (M14), so the calendar is easier to keep written.",
    need: "Phone or Zoom, and which calendar is the master. Your personal Gmail address, spelled out. The windows you want bookable in December and January, by ≈20 Nov.",
    success: "Ten test bookings in a row land in the right place with the right Zoom link and no double-booking.",
    fence: "Planning your quarter ahead (not in this build). Booking the 1:1 coaching series (M10)."
  },
  spec: [
    ["Calendars", "15-minute call; Discovery call (45 min, private link only); 108 Days 1:1 (60 min). See System design › Calendars.", "P"],
    ["Google Calendar", "Connected to the calendar on your personal Google account so busy times are respected and bookings appear there. Only free/busy is read. This is the GoHighLevel connection you agreed on 2 Nov (\"probably\").", "V"],
    ["Two calendars in step", "New on 2 Nov: invites to speed@ and blocks on either calendar show on the other, so one calendar is the truth. Not yet priced.", "V"],
    ["Zoom", "Your personal room link used as the meeting location (so you're never in the wrong meeting), not a new meeting each time.", "P"],
    ["Reminders", "Email only, 24 hours before. No SMS.", "D"],
    ["Retire Calendly", "Once the three booking pages are live and tested.", "D"]
  ],
  hours: 4
},
{
  id: "M9a", part: "A", ms: "MS2", title: "Montana pre-sale", status: "B",
  blockedBy: "keep taking Montana deposits on Squarespace until the new system is live (≈28 Nov), then switch (my recommendation), or wait and open it on the new system only",
  plain: {
    what: "A Montana 2027 registration and payment page on the new system, with the 108 Days and 1:1 prices recorded as terms.",
    why: "You pre-sell Montana (22–25 Apr 2027) from November, before the new system exists (20 Oct).",
    order: "My recommendation: keep selling on Squarespace until ≈28 Nov, move those men in with the winter deposits, then switch the page. Nothing changes for you in November.",
    changes: "Nothing in November. From December, Montana registrations land on the man's record.",
    need: "Your yes or no to my recommendation, the Montana price, and whether there's an early-bird (yours to decide with Leona).",
    success: "Every Montana booking is on the right man's record before intake opens.",
    fence: "Intake, travel and arrival (Part B, M9b). Chef, venue and bus bookings. The welcome itself goes out at registration (your decision, 2 Nov; see M9b)."
  },
  spec: [
    ["Product", "Retreat: Montana 2027 at the price you set; 108 Days alumni price; 1:1 client price; assistant at one-third.", "O"],
    ["Pipeline", "Retreats: Registered → Paid → Intake complete → Attended / Cancelled. Retreat is a field.", "P"],
    ["Workflow", "WF-16 (registration part).", "P"]
  ],
  hours: 3
},

/* ================================ PART B ================================ */
{
  id: "M8", part: "B", ms: "MS4", title: "108 Minutes week to week", status: "P",
  plain: {
    what: "One way to register (free first time, $36 drop-in, or membership). The Friday Zoom-link email and the Sunday recording go out on their own to exactly the right men. Attendance is known. New men are noticed. Comps end on time, followed by the membership offer. The Wednesday member email comes back.",
    why: "Robert's first and second pains are knowing who's current and attendance. First-timers get lost. About 20–25 regulars drifted with nobody noticing. Comps are removed from memory (Stage 1 §3).",
    order: "Part B. But the cohort close-out (last free Saturday 19 Dec, then the offer) must work by 16 Dec, so that piece is built first.",
    changes: "Thursday and Saturday stay yours. Friday and Sunday stop needing anyone except to paste the recording link. On Saturday afternoon you get a short note of the new men who came today. They've already had a note from the system; you can add your own.",
    need: "Robert's interview and list by ≈15 Nov. By 12 Dec, the membership offer after a cohort ends: 20% off as now, first month free, or just an invitation. When to move members' billing off Squarespace (I suggest after the library opens, so the move comes with something new).",
    success: "Four Saturdays in a row: the right men get the link, attendance is known, and every first-timer hears back.",
    fence: "One-click timer or music in Zoom (a wish)."
  },
  spec: [
    ["Registration", "One page: free first visit (once only), $36 drop-in, monthly $72, annual $720. Registering for 108 Minutes includes the Thursday essay, with an unsubscribe in every email. Men in Europe tick a box (stricter consent rules there).", "P"],
    ["Who gets Friday's link", "A list built from fields, not memory: active members + comped (108 Days, 1:1, other) + this week's first-timers and drop-ins. Your rule stands: if in doubt, include him.", "D"],
    ["Friday email", "Friday 18:00 ET. Robert (or you) edits one announcement box during the week; the rest is fixed.", "P"],
    ["Sunday recording", "Robert pastes the recording link into one field; the email goes to members and comped men.", "P"],
    ["Attendance", "After each session the Zoom participant report is matched to records: first attended, last attended, count.", "V"],
    ["First-timers", "Automatic emails after each Saturday: one to first-timers who came, and a different one to men who registered and didn't (\"we're holding your spot\"). You asked for both on 2 Nov. You also get the list of who came, so you can add a personal note.", "D"],
    ["Drift", "A regular (4+ sessions in 8 weeks) unseen for 4 weeks goes onto your Monday list as a soft touch, not an email.", "P"],
    ["Comps", "108 Days men comped until the Saturday after their cohort's last call; members, 1:1 clients and next cohort's assistants keep access.", "D"],
    ["Tea Time", "Eligible: members and men in a current cohort. Monthly invite to that list.", "D"],
    ["Wednesday email", "Restored to members: a ~10-minute teaching and a ~5-minute practice from your library.", "T22"],
    ["Membership billing", "New members on Stripe from the start. Existing 22 move from Squarespace with a personal note and a date, once.", "P"],
    ["Workflows", "WF-08 to WF-15, WF-21.", "P"]
  ],
  hours: 16
},
{
  id: "M9b", part: "B", ms: "MS4", title: "Retreat intake and arrivals", status: "T22",
  plain: {
    what: "The moment he registers (your decision on 2 Nov, as for 108 Days): one intake form (emergency contact, diet, travel and arrival time, medical needs), the waiver, the info sheet and how to join the retreat's Signal group. Reminders go out on their own. Ryan sees who's missing anything and whose flight lands after the start.",
    why: "Medical and dietary needs not collected. A man lands three hours late at every retreat. Forms chased by hand (Stage 1 §3).",
    order: "Part B, ready before Montana's preparation in March.",
    changes: "Ryan stops chasing. You stop being surprised at the start time.",
    need: "How long we keep medical details (I suggest deleting them 30 days after the retreat). A late-arrival line for the info sheet (see Policies).",
    success: "For Montana, every man's intake is complete a week out without Ryan chasing by hand.",
    fence: "Chef, venue and bus bookings. Room allocation."
  },
  spec: [
    ["Form", "Intake: emergency contact (name, phone, relationship), diet, medical needs (free text), arrival date and time, travel mode, flight number.", "T22"],
    ["Medical data", "Visible to you and the retreat lead only, deleted 30 days after the retreat unless you choose otherwise.", "B"],
    ["Forward it", "He can forward his airline confirmation instead of typing it in; the arrival time is read off it and put on his retreat record (your idea, 6 Oct).", "P"],
    ["Late flight flag", "If the arrival time is after the start, Ryan gets an email straight away so he can ask the man to change it.", "P"],
    ["Chasing", "14 days before: reminder to anyone missing anything. 7 days before: Ryan's list.", "P"],
    ["After", "Day after the retreat: you approve the invitation to the next 108 Days and it goes to attendees not already enrolled.", "P"],
    ["Workflows", "WF-16, WF-17.", "P"]
  ],
  hours: 6
},
{
  id: "M10", part: "B", ms: "MS4", title: "1:1 coaching admin", status: "P",
  plain: {
    what: "The 1:1 agreement signed online instead of printed. Payment plans on an invoice (wire and Zelle recorded, card if you allow it). A count of calls, and a note to you before call 9 for the renewal talk. Men who said \"talk in six months\" come back onto your Monday list on the right day.",
    why: "Paper agreement. Plans in \"my little spreadsheet\". Calls counted by copying calendar entries. Prospects forgotten (Stage 1 §3).",
    order: "Part B for now. But you've had four or five new 1:1 clients in the three weeks before 2 Nov, so it may need to move into Part A. Your call: move it up, or new clients stay on the current paper process until January.",
    changes: "Everything between you and the man stays exactly as it is. No notes, no recordings.",
    need: "Your current agreement (the Pages document). Whether 1:1 clients may pay by card. Whether it moves into Part A.",
    success: "The next new client signs and pays without anything printed, and you hear about the renewal talk before call 9.",
    fence: "Session notes of any kind. Recording."
  },
  spec: [
    ["Agreement", "Your Pages agreement turned into an e-sign template with the client's name, dates, price and plan filled in. Contract party is your S corporation.", "P"],
    ["Pipeline", "1:1: Discovery booked → Offer made → Agreement sent → Signed → Paid → Active → Renewal talk → Renewed / Completed.", "P"],
    ["Prices", "Never published. Invoices built by hand per client. Visible to you, me, Ryan and Ashley only.", "D"],
    ["Call count", "Each 1:1 booking marked held increments the count; at 8, you get the renewal note.", "P"],
    ["Booking", "A set weekly slot from a template, your choice on 2 Nov: at sign-up the client's ten calls are placed across 13 weeks (say, Mondays at 11), skipping three weeks. A man without regular blocks, like one who travels for work, is booked by hand.", "D"],
    ["Booking pattern", "Which three weeks are skipped (you said \"probably something like\" four on, one off) is set with you during the build.", "O"],
    ["Workflow", "WF-18.", "P"]
  ],
  hours: 8
},
{
  id: "M11", part: "B", ms: "MS4", title: "The website", status: "T22",
  plain: {
    what: "Your site rebuilt as custom pages hosted on GoHighLevel. It has a page for each offering, the 15-minute call, a small set of free teachings, and SEO basics. Every form and payment on it lands on the man's record. Leona's brand is applied when it arrives.",
    why: "Squarespace holds sign-ups, payments and the list separately. SEO scored 45/100. One stranger found you online and became a client (Stage 1 §7).",
    order: "Built through November alongside Part A, switched over by ≈15 Jan.",
    changes: "It stays calm and stable-looking (\"the president's haircut\"). Squarespace can be cancelled after the switch.",
    need: "Leona's brand blueprint (hoped ≈22 Nov; on 2 Nov you said it's now a brand blueprint rather than a kit). Your approval of page copy. Domain access. The logo files from Mike Reynolds.",
    success: "Every form and payment on the site creates or updates a record. Another developer could take it over from the code and the handover notes.",
    fence: "The members' library (M15). A large public teaching library. Writing new copy beyond moving and tidying what you have."
  },
  spec: [
    ["Build", "Hand-written HTML/CSS pages inside GoHighLevel's site builder, kept in a code repository so they can move to any host.", "P"],
    ["Pages", "Home, 108 Minutes (register), 108 Days, Retreats, 1:1 (no prices), About, a few free teachings, 15-minute call, legal pages.", "P"],
    ["Logo", "Your current Working Deep logo stays; Leona isn't redoing it. Mike Reynolds holds every version and you introduced us on 2 Nov.", "D"],
    ["Scholarship", "A donate button anyone can use, including people who'll never sign up. Still to settle: whether you also ask men at enrollment, a 3% opt-in at checkout, and whether donors can give without their name. Not yet priced.", "D"],
    ["SEO", "Titles, descriptions, structured data, sitemap, redirects from every old Squarespace URL.", "P"],
    ["Switch-over", "DNS moved on a quiet weekday; Squarespace kept for 30 days in case.", "P"]
  ],
  hours: 30
},
{
  id: "M12", part: "B", ms: "MS4", title: "Testimonials and assets", status: "P",
  plain: {
    what: "Testimonials kept in one place, each linked to the man and tagged by offering and theme, with whether he's given permission. Your photos, videos, practices and playlists listed so the assistant can find them.",
    why: "\"I have to go looking for them every single time.\" Assets spread across a Google Doc, Signal, email and Photos (Stage 1 §3).",
    order: "Part B. The Thursday email and the assistant use it.",
    changes: "You ask the assistant for \"the testimonials from Dan Desena over the last three years\" or \"two 108 Days testimonials about fatherhood\" instead of hunting, and say \"send this one to Leona\".",
    need: "Access to the testimonials Google Doc and the Drive folders; Nick's retreat video.",
    success: "You can get two fitting testimonials for an email in under a minute.",
    fence: "Reorganising all of Drive and Apple Photos (a helper's job, your idea). New video editing."
  },
  spec: [
    ["Store", "Testimonial records: man, offering, theme, format (text, photo, video), the quote, link, permission yes/no and date, and when to remind you to ask.", "P"],
    ["Capture", "Ryan's last-call recordings and anything you forward go in through the phone button or the assistant (\"save this as a testimonial from Matt\").", "P"],
    ["Where files live", "Photos and videos kept in GoHighLevel's media storage, private to the team; anything men may see goes through the library (M15). How much storage your plan includes I'll check.", "V"],
    ["Permission", "Nothing is asked automatically. A \"found\" testimonial is saved with a note, and three or four weeks later you get a reminder to ask him yourself (your note after our first call: asking straight away \"will really not land well\"). His answer goes on the record.", "D"],
    ["Workflow", "WF-19.", "P"]
  ],
  hours: 8
},
{
  id: "M13", part: "B", ms: "MS4", title: "A faster Thursday email", status: "P",
  plain: {
    what: "A Thursday email template on the new system: your essay goes in, the banner is made from a fixed style, and two testimonials matched to what you're promoting slot in. The 591-person list moves over, and new 108 Minutes sign-ups join it automatically.",
    why: "Ten steps every week from scratch, your most frustrating day, and new sign-ups never added to the list (Stage 1 §3).",
    order: "Part B, switched when the list moves (with the website).",
    changes: "You write the essay; the rest is filling a template, on phone and laptop.",
    need: "Leona's brand for the banner style. On 2 Nov you said her work now covers which emails men get, when, and how they're written, so I'll be in at least one of her writers' rooms and line the system's emails up with it.",
    success: "Building the email takes you under 20 minutes.",
    fence: "Writing or editing the essay. Social posts. AI essay reframing (an idea for later)."
  },
  spec: [
    ["Template", "Mobile-first layout: banner, essay, two testimonial slots, one announcement block, sign-up line.", "P"],
    ["Banner", "A fixed banner design with a title field, made in the email builder instead of Keynote.", "P"],
    ["Marketing calendar", "A simple list of what's promoted which week so announcements don't step on each other.", "P"],
    ["List", "Moved from Squarespace with unsubscribes respected. Cleaned once of addresses that bounce.", "P"]
  ],
  hours: 6
},
{
  id: "M14", part: "B", ms: "MS4", title: "Your assistant", status: "P",
  plain: {
    what: "An app on your phone that you talk to, and that talks back. It knows every man's record, your calendar and your testimonials, and it can do things for you: save a new man, record what happened on a call, find the right testimonial and send it to Leona, block time, remind you, and suggest who to call. It remembers what you tell it about yourself, and brings it up when it matters. You never open the CRM.",
    why: "You won't use a CRM directly, and voice is how you work (How to Work With Speed). You asked to be \"in dialogue with my own CRM about who's hot and who's not\" (2 Oct), to say \"show me the five testimonials I've gotten from Dan\" without knowing where they're filed (20 Oct), and for something that remembers like the Gemini chat that brought up your Mercedes unprompted (2 Nov). You also said you \"still need someone to talk to, to help me remember what I said\" (2 Nov).",
    order: "After the records, bookings and testimonials are in (M1, M2, M7, M12): it's only as good as what it can read. Until then, voice notes to me (and the phone button, M3) do the same job by hand. It goes on your phone around 15 January, and you use it for a week before we tune it.",
    changes: "This is how you use everything. You speak a sentence instead of remembering it. Anything that would send something to a man, or change money, waits for your yes. Once a week, if you want, you ask \"show me what we put in this week\" and check it.",
    need: "One 30-minute session in January to set it up on your phone together, then a week of using it. Tell me if anything you want it to do is missing from the list below.",
    success: "For a week you use it without being prompted, it gets the men, the money and the calendar right, and you catch it remembering something you told it days before.",
    fence: "Reading your texts, iMessage, Signal or your private inboxes (it only sees what you share or forward to it). Sending anything to a man without your yes. Writing your essays. A chief-of-staff AI across your whole life (after this build; see \"Later\" below)."
  },
  abilities: [
    /* what you say · what it does · status · where you asked for it */
    ["Save a new man", "\"Here's a new guy, Arjun. Nico introduced him, here's his number, and here's what I think of him.\"", "Makes his record with who introduced him and your note, then shows the new row so you can check it got it right.", "D", "2 Nov"],
    ["Tell it about a man", "\"Let's do this week's twenty.\" Then you talk about each man.", "Reads you each name, listens, and puts what you say into his notes, tags and fields (the weekly talk-through, alumni first). You see each record as it changes.", "D", "2 Nov"],
    ["After a call", "\"Spoke to Dan, he's in for January, deposit by Zelle, the rest on the plan.\"", "Updates when you last spoke and where he is, sets up his invoice on standard terms, and records the Zelle payment once you say yes.", "P", "Voice notes, 1 to 6 Oct"],
    ["Ask anything", "\"How many men signed up this week?\" \"Did Dan pay me?\" \"Has he done a discovery call?\" \"Who owes me money?\"", "Answers from the records in a sentence, with the figure, and offers to show the list.", "P", "1 Oct, 6 Oct"],
    ["Slice the list", "\"All the 108 Days men I met in EMLT.\" \"Who's been to 108 Minutes in the last six weeks?\"", "Finds them from the record fields and tags and reads or shows you the names.", "P", "Voice notes, 1 to 6 Oct"],
    ["Who to call", "\"Who should I call this week?\"", "Gives you five men, each with one line on why. You say \"keep one, two and four, swap the others\", and it replaces them. Over time it learns from what you keep and swap, and your intuition always has the last word.", "P", "2 Oct, voice notes"],
    ["Find a testimonial", "\"Show me the testimonials from Dan Desena over the last three years.\" \"Two 108 Days ones about fatherhood.\"", "Brings up the text, photos and video, wherever they were filed, with whether he's given permission.", "P", "20 Oct, 15 Oct"],
    ["Act on it", "\"Use this one in this week's email. Send it to Leona.\"", "Drafts the email to Leona with the file attached and sends it when you say yes.", "P", "20 Oct"],
    ["Save a found testimonial", "\"Save this as a testimonial from Matt.\"", "Files it on Matt's record and reminds you three or four weeks later to ask him yourself if you can use it.", "D", "Your note, early Oct"],
    ["Hold your time", "\"Block 10 November.\" \"Hold Thursday mornings for writing.\"", "Puts the block in your calendar, so booking pages and anyone looking only see the times you've opened.", "P", "2 Nov"],
    ["Catch a clash", "\"Book Dan for Monday at three.\"", "Checks both calendars and what it knows about you first: \"Don't your kids have volleyball then?\" If you say \"volleyball ended on 27 October\", it remembers.", "P", "2 Nov"],
    ["Remind you", "\"Remind me to tell Leona about the retreat photos.\"", "Reminds you at the time you say, or the next time Leona comes up.", "P", "20 Oct"],
    ["What changed", "\"Show me what we put in this week.\"", "A short list of new and changed records and what it did for you, for your Friday look.", "P", "2 Nov"],
    ["Pass it things", "You share a group text, forward an email, or a flight confirmation.", "Reads it and does the right thing: a new man, a testimonial, or a retreat arrival time on his record.", "P", "6 Oct, 2 Nov"],
    ["Its notes to you", "Nothing: it comes to you.", "The Monday call list, \"hold for Dan ends today\", overdue payments and the renewal talk before call 9 can arrive in the app as well as by email.", "P", ""]
  ],
  later: [
    ["A new take on an old essay", "Reads your past essays and offers a fresh 400-word version in your voice for the weeks you'd otherwise reuse one. The writing stays yours. (Your wish list, 1 Oct.)"],
    ["Planning a month of 108 Minutes", "A monthly shape (a guest teacher, a repeat, a new practice, an old one taken a new way) drafted for you to change. (1 Oct.)"],
    ["A chief of staff", "Keeping you to the plan (\"we're on step three, not back to step one\") and organising your time and priorities (interview 2; 6 Oct). On 2 Nov you said you'd wait and see whether this assistant, with your calendar and reminders, already gives you the structure you need. If it doesn't, we design that next."],
    ["Your own ChatGPT talking to it", "You said you'd be willing to try ChatGPT as your personal assistant in conversation with this one (2 Nov). I'll look at connecting the two once this works, and check what your ChatGPT plan allows."],
    ["Old text messages", "It can't read your texts. When we go through old texts for lost introductions, you share the ones that matter and it saves them."]
  ],
  how: [
    ["The app", "A private app on your iPhone home screen (and your laptop if you want). You sign in once with Face ID and it stays signed in, so there are no passwords to remember. A big button to talk, and it answers out loud; typing works too.", "P"],
    ["The brain", "A leading AI model (Claude or OpenAI's), paid by use, which reads what you say and decides what to do. It can be swapped for a better one later without rebuilding anything.", "P"],
    ["The hands", "It works through the same records everyone else uses: GoHighLevel for men, enrollments, payments, bookings and emails; your Google calendar; the testimonial and asset store. It doesn't keep its own copy of your business.", "P"],
    ["The memory", "Three layers. Each man's record. A notebook of what you've told it about you (\"volleyball ended on 27 October\"), which you can ask to see, change or forget. And your past conversations, which it searches when they're relevant. It's told to bring up what matters without being asked. This is designed on purpose: a plain search doesn't do that by itself.", "P"],
    ["Asks before acting", "Reading and answering, it just does. Anything that sends something to a man, changes money, or deletes anything, it reads back and waits for your yes. Every action is logged, which is what \"show me what we put in this week\" reads.", "P"],
    ["What it can't see", "Your texts, iMessage and Signal (there's no way in), your private inboxes, and your private notes on a man unless you decide otherwise. You can always share or forward something to it.", "D"],
    ["Who else uses it", "Only you to start. Ryan could have a version later that sees only what his login sees.", "P"],
    ["Where it runs", "The app and its memory notebook on my server, encrypted and written up so any developer could run it or move it to your own. Your records stay in your GoHighLevel account.", "P"],
    ["Cost", "Pay per use for the AI, small at your volume. I'll give you a monthly estimate before it goes live.", "V"]
  ],
  spec: [
    ["Interface", "Installable web app (PWA) with passkey sign-in; push-to-talk speech to text and spoken replies; text fallback; share-sheet and forwarded-email intake shared with M3.", "P"],
    ["Model", "An AI service paid by use (Claude or OpenAI), behind one interface so it can be swapped without rebuilding.", "P"],
    ["Tools", "Read and search contacts, enrollments, invoices, calendars, testimonials; create and update contacts, notes and tags; record payments; create calendar blocks; draft and send emails; set reminders. Write actions that touch a man, money or deletion need a spoken or tapped yes.", "P"],
    ["Memory", "Per-man facts live in GoHighLevel. A personal memory notebook (editable, viewable, forgettable) plus retrieval over past conversations (RAG). Instructions to surface relevant context unprompted.", "P"],
    ["Calendar", "Reads both Google calendars once they're in step (M7); writes blocks to the master calendar.", "V"],
    ["Notifications", "Push notifications in the app for the system's notes to you (Monday list, holds, overdue, renewal).", "V"],
    ["Audit log", "Every action stored with time and what changed; feeds the weekly view.", "P"],
    ["Handover", "Its instructions, tools and memory format written down so another builder can maintain it.", "D"]
  ],
  hours: 32
},
{
  id: "M15", part: "B", ms: "MS5", title: "Members' library and the Wednesday email", status: "T22",
  plain: {
    what: "Your teachings and practices, chosen and arranged, behind a member login linked from the site. The Wednesday member email built around it.",
    why: "You feel \"out of integrity\" selling the membership without the Wednesday email, and men between containers want \"some Speed teaching\" (20 Oct).",
    order: "After the build, end of January to mid-February.",
    changes: "You can sell the membership \"with integrity\".",
    need: "Whether it's audio-first like John Wineland's. On 2 Nov you asked me to own the curation (\"what in Hollywood an editor would do\"), using AI, so I choose and tag; you approve.",
    success: "Members log in and use it; the Wednesday email goes out every week.",
    fence: "A full client portal with invoices, contracts and booking (\"too hand-holding\")."
  },
  spec: [
    ["Platform", "GoHighLevel memberships/courses, linked from the website, members' login by email.", "T22"],
    ["Access", "Active members and men in a current cohort.", "P"],
    ["Curation", "I review, cut and tag your material with AI help: Nick's clips, practices, and your teaching from the 108 Days recordings in Zoom (\"I teach well on 108 days\"). Not yet priced (your \"stage five\").", "D"],
    ["Men's voices", "108 Days calls include men's shares, so only your teaching segments go in unless the men agree.", "P"],
    ["Wednesday", "Each week one teaching and one practice from the library.", "P"]
  ],
  hours: 12
}
],

/* -------------------------------------------------------- SYSTEM DESIGN */
design: {
  intro: "The technical reference. You don't need to read this. It's here so the build matches the plan, and so someone else could maintain it without me.",

  fields: [
    /* group, label, key, type, options/notes, status, source */
    ["Origin", "Source", "wd_source", "Dropdown", "Word of mouth · Introduction · 108 Minutes · EMLT · Teacher-training alumni · Partner · Website · Insight Timer · YouTube · Substack · Instagram · Embodiment Lab · Other", "P", "Call 5 fields; channels from Calls 1–5"],
    ["Origin", "Referred by", "wd_referred_by", "Text / link", "Introducer's name + record ID", "P", "Call 5"],
    ["Origin", "Introductions made", "wd_intros_made", "Number", "Counted on the introducer", "P", ""],
    ["Origin", "Came in", "wd_came_in", "Date", "", "D", "Call 5"],
    ["Origin", "First touch", "wd_first_touch", "Dropdown", "Speed · Ryan · Other", "D", "Call 5"],
    ["Origin", "What pulled him in", "wd_pulled_in", "Text", "One line (a track, a line on the site)", "D", "Call 5"],
    ["Origin", "EMLT years", "wd_emlt_years", "Text", "e.g. Year 1, Year 3", "D", "Call 5"],
    ["Origin", "Experience", "wd_experience", "Dropdown", "New to the work · In the work", "P", "Ryan's tags"],
    ["Origin", "Location / time zone", "wd_tz", "Text", "", "P", ""],
    ["Relationship", "Discovery call", "wd_discovery_date", "Date", "Empty = not had one", "D", "Call 3"],
    ["Relationship", "Discovery-call points", "wd_discovery_points", "Long text", "Main points, as you choose to record them", "D", "Call 5"],
    ["Relationship", "Last spoke", "wd_last_spoke", "Date", "", "P", ""],
    ["Relationship", "Talk again on", "wd_talk_again", "Date", "\"Talk in six months\"", "P", "Call 3"],
    ["Relationship", "Do not suggest", "wd_no_suggest", "Checkbox + reason", "Keeps him off the Monday list", "P", ""],
    ["Relationship", "Call list status", "wd_calllist", "Dropdown", "Suggested · Kept · Swapped · Called", "P", ""],
    ["Relationship", "Call list week", "wd_calllist_week", "Date", "", "P", ""],
    ["108 Minutes", "Access", "wd_108m_status", "Dropdown", "None · First-timer · Drop-in · Member monthly · Member annual · Comped 108 Days · Comped 1:1 · Comped other · Former regular", "P", "Call 1, voice notes"],
    ["108 Minutes", "Comp ends", "wd_108m_comp_ends", "Date", "Saturday after cohort's last call", "D", "Call 5"],
    ["108 Minutes", "Member since", "wd_108m_member_since", "Date", "", "P", ""],
    ["108 Minutes", "Billing", "wd_108m_billing", "Dropdown", "Squarespace · Stripe", "P", ""],
    ["108 Minutes", "First attended", "wd_108m_first", "Date", "", "P", ""],
    ["108 Minutes", "Last attended", "wd_108m_last", "Date", "", "P", ""],
    ["108 Minutes", "Sessions", "wd_108m_count", "Number", "", "P", ""],
    ["108 Minutes", "Registered this week", "wd_108m_week", "Date", "Saturday he registered for", "P", ""],
    ["Credits", "Referral credit", "wd_ref_credit", "Money", "$500 per introduction that enrolls", "D", "Voice notes 1–6 Oct"],
    ["Consent", "Media consent", "wd_media_consent", "Dropdown + date", "Not asked · Yes · No", "P", "Contradiction 3"],
    ["Consent", "Thursday essay", "wd_list_consent", "Checkbox + date", "", "P", ""],
    ["Retreat", "Emergency contact", "wd_emergency", "Text", "Name, phone, relationship", "T22", ""],
    ["Retreat", "Diet", "wd_diet", "Text", "", "T22", ""],
    ["Retreat", "Medical needs", "wd_medical", "Text (restricted)", "Deleted after the retreat, once you've chosen how long to keep it", "B", ""],
    ["Retreat", "Arrival", "wd_arrival", "Date-time + flight", "Per retreat (on the enrollment)", "T22", ""],
    ["Private", "Speed's private notes", "wd_private", "Long text (restricted)", "Who can read it is yours to decide; may live outside the CRM", "B", ""],
    ["1:1", "Calls held", "wd_11_calls", "Number", "On the 1:1 enrollment", "P", ""],
    ["Team", "Role", "wd_team_role", "Dropdown", "Assistant · Guest teacher · Volunteer · Contractor", "P", ""]
  ],

  enrolmentFields: [
    ["Offering / cohort / retreat", "Dropdown", "e.g. 108 Days Winter 2027; Montana 2027"],
    ["Role", "Dropdown", "Participant · Assistant · Comped · 108 Days Plus"],
    ["List price", "Money", ""],
    ["Discount", "Money", ""],
    ["Discount type", "Dropdown", "Referral · Membership offset · Volume (1:1) · Scholarship · Early-bird · Other"],
    ["Discount reason", "Text", "Your words"],
    ["Terms", "Dropdown", "Paid in full · Deposit + 2 · Custom"],
    ["Hold expires", "Date", "Three-day hold"],
    ["Payment method", "Dropdown", "Card · Venmo · Zelle · Wire · Mixed"],
    ["Waiver signed", "Date", ""],
    ["Media consent", "Yes/No", ""],
    ["Welcome sent", "Date", ""],
    ["1:1 #1 / #2 booked", "Date", "108 Days"],
    ["Dropped on / reason", "Date + text", ""]
  ],

  pipelines: [
    ["Men to talk to", ["Introduced", "To call", "Spoken", "Discovery booked", "Discovery done", "Not now (talk again)", "Not a fit / referred on", "Enrolled (moved to an offering)"]],
    ["108 Days", ["Held", "Enrolled", "Welcomed", "Signed", "Ready", "In cohort", "Completed", "Dropped"]],
    ["Retreats", ["Registered", "Paid", "Intake complete", "Attended", "Cancelled"]],
    ["1:1 Coaching", ["Discovery booked", "Offer made", "Agreement sent", "Signed", "Paid", "Active", "Renewal talk", "Renewed", "Completed"]]
  ],

  tags: [
    ["108d-<season>-<year>", "Cohort membership, e.g. 108d-winter-2027", "Enrollment"],
    ["alumni", "Has bought 108 Days, a retreat or 1:1 (your 72-man alumni group)", "Migration, then enrollment"],
    ["108m-member", "Paying member", "Subscription"],
    ["108m-comped", "Comped access (108 Days, 1:1, other)", "Enrollment / comp end"],
    ["former-regular", "Regular who drifted (your J-curve tagging)", "Migration, drift rule"],
    ["new-to-the-work / in-the-work", "Ryan's \"Muggles\" and \"In the work\"", "You or Ryan"],
    ["emlt", "Came through EMLT", "Migration"],
    ["teacher-training", "John Wineland teacher-training world", "Migration"],
    ["embodiment-lab", "Came through Embodiment Lab (paused)", "Migration"],
    ["quad", "Did one of your first-year Quads (12 men)", "Migration, from Ryan's old tags"],
    ["1to1-active / 1to1-alumni", "1:1 client now / before", "1:1 enrollment"],
    ["assistant-108d", "Current or next-cohort assistant", "Enrollment"],
    ["guest-teacher", "108 Minutes guest teacher", "Manual"],
    ["team", "Ryan, Robert, Nick, Leona, etc. Excluded from lists", "Manual"],
    ["eu-consent", "Gave explicit email consent (Europe)", "Form"]
  ],

  products: [
    ["108 Minutes · first visit", "Free (registration only, once)", "D"],
    ["108 Minutes · drop-in", "$36", "D"],
    ["108 Minutes · monthly membership", "$72 / month", "D"],
    ["108 Minutes · annual membership", "$720 / year", "D"],
    ["108 Days · full", "$3,700", "D"],
    ["108 Days · payment plan", "3 × $1,350 (deposit $1,350)", "D"],
    ["108 Days · assistant", "$2,400", "D"],
    ["108 Days Plus", "Private; double the 108 Days price, never advertised", "D"],
    ["Retreat · Montana 2027", "≈$2,000 (exact price open)", "O"],
    ["Retreat · 108 Days alumni price", "≈$300–350 off (exact open)", "O"],
    ["Retreat · assistant", "One-third of the retreat price (you call it room and board)", "D"],
    ["1:1 Coaching", "No product. Invoice per client, never published", "D"]
  ],

  calendars: [
    ["15-minute call", "15 min", "Phone or Zoom (yours to choose)", "Website and Monday-list men", "B"],
    ["Discovery call", "45 min", "Your Zoom room", "Private link only", "P"],
    ["108 Days 1:1", "60 min", "Your Zoom room", "Welcome email; limited to cohort weeks", "P"],
    ["1:1 coaching session", "75 / 90 min", "Your Zoom room", "Clients only (Part B)", "O"]
  ],

  forms: [
    ["F1", "108 Minutes registration", "First visit / drop-in / membership; Thursday essay consent", "M8", "P"],
    ["F2", "108 Days waiver and terms (e-sign)", "Existing waiver text + payment and drop-out terms + separate media consent", "M6", "B"],
    ["F3", "Retreat waiver (e-sign)", "Carried over from JotForm, media consent separate", "M9b", "P"],
    ["F4", "Retreat intake", "Emergency contact, diet, medical, arrival", "M9b", "T22"],
    ["F5", "1:1 agreement (e-sign)", "From your Pages document", "M10", "P"],
    ["F6", "New man (backend)", "Receives the phone button and forwarded texts; not shown to anyone", "M3", "P"],
    ["F7", "Testimonial permission (optional)", "After you've asked him: one question so his yes, with name or photo, is in writing", "M12", "P"]
  ],

  workflows: [
    ["WF-01", "New man saved", "Phone button / forwarded text", "Create or update contact · Source = Introduction · Referred by · Came in = today · Men to talk to › Introduced · email you a confirmation", "M3", "A"],
    ["WF-02", "Monday call list", "Monday 07:00 ET (server job)", "Pick 5 by the rules · email you with Keep / Swap links · mark Suggested", "M4", "A"],
    ["WF-02b", "Keep / Swap", "Link clicked", "Keep → To call · Swap → next man emailed back", "M4", "A"],
    ["WF-03", "Three-day hold", "108 Days stage = Held", "Hold expires = +3 days · on that day email you: keep, release or extend", "M5", "A"],
    ["WF-04", "Enrollment", "Deposit paid, or stage set to Enrolled (manual payment)", "Tag cohort · comp 108 Minutes until the Saturday after the last call · send welcome with e-sign, calendar, Signal steps, 1:1 link · email Ryan", "M6", "A"],
    ["WF-05", "Waiver chase", "Welcome sent, not signed", "+3 days reminder to him · start −7 days: Ryan's missing list", "M6", "A"],
    ["WF-06", "Payment reminders", "Invoice instalment due", "−3 days and on the day: email with pay link · +7 days overdue: on your Monday note, no more emails to him", "M5", "A"],
    ["WF-07", "Cohort cancelled", "You mark the cohort cancelled", "One email to all enrolled · refund task for you", "M6", "A"],
    ["WF-08", "Comp end", "Comp ends date", "−7 days: \"this Saturday is your last free 108 Minutes\" + the membership offer you choose · on the day: remove comp unless member, 1:1 client or next-cohort assistant", "M8", "B (by 16 Dec)"],
    ["WF-09", "108 Minutes registration", "F1 submitted / paid", "Set access · Registered this week · Thursday list consent", "M8", "B"],
    ["WF-10", "Friday link", "Friday 18:00 ET", "Email the Friday list with the announcement box", "M8", "B"],
    ["WF-11", "Sunday recording", "Recording link field updated", "Email members and comped men", "M8", "B"],
    ["WF-12", "Attendance", "Saturday after session (server job)", "Zoom participant report → first / last / count", "M8", "B"],
    ["WF-13", "First-timers", "Saturday 14:00 ET", "Auto email to first-timers who came · a different one to registered no-shows (on Thursday) · you get the list", "M8", "B"],
    ["WF-14", "Drift", "Weekly", "Regular unseen 4 weeks → Monday list candidate", "M8", "B"],
    ["WF-15", "Membership lifecycle", "Stripe subscription events", "Start / failed / cancelled → access and member fields; failed card → Stripe retries, Robert told if it lapses", "M8", "B"],
    ["WF-16", "Retreat registration", "Retreat paid", "Intake + waiver + info sheet + Signal steps · −14 days reminder · −7 days Ryan's list · late flight → Ryan", "M9a/b", "B"],
    ["WF-17", "After a retreat", "Retreat end +1 day", "You approve the 108 Days invitation → sent to attendees not enrolled", "M9b", "B"],
    ["WF-18", "1:1 cycle", "1:1 session held", "Calls +1 · at 8 → renewal note to you · Talk again date → Monday list", "M10", "B"],
    ["WF-19", "Testimonial", "Testimonial saved", "Link to man · if permission isn't recorded: +3 to 4 weeks, reminder to you to ask him", "M12", "B"],
    ["WF-21", "Wednesday member email", "Wednesday", "Teaching + practice from the library to members", "M8/M15", "B"],
    ["WF-22", "Ryan's Monday note", "Monday 09:00 ET", "Unsigned waivers, unpaid deposits, unbooked 1:1s, missing intake, for your 1 pm call", "M6", "A"]
  ],

  emails: [
    ["E-01", "Saved: new man", "You", "Working Deep", "WF-01"],
    ["E-02", "Your five this week", "You", "Working Deep", "WF-02"],
    ["E-03", "Hold ends today", "You", "Working Deep", "WF-03"],
    ["E-04", "Welcome to 108 Days (Ryan's text)", "The man", "Working Deep (reply to team inbox)", "WF-04"],
    ["E-05", "Waiver reminder", "The man", "Working Deep", "WF-05"],
    ["E-06", "Payment due", "The man", "Working Deep", "WF-06"],
    ["E-07", "Monday money note", "You", "Working Deep", "WF-06"],
    ["E-08", "Ryan's Monday note", "Ryan", "Working Deep", "WF-22"],
    ["E-09", "Last free Saturday + offer", "Comped men", "Speed", "WF-08"],
    ["E-10", "Friday Zoom link", "Friday list", "108 Minutes", "WF-10"],
    ["E-11", "Sunday recording", "Members + comped", "108 Minutes", "WF-11"],
    ["E-12", "Today's new men", "You", "Working Deep", "WF-13"],
    ["E-13", "Holding your spot", "Registered no-shows", "108 Minutes", "WF-13"],
    ["E-18", "Good to have you", "First-timers who came", "108 Minutes", "WF-13"],
    ["E-14", "Retreat welcome + intake", "Retreat men", "Working Deep", "WF-16"],
    ["E-15", "Renewal talk coming", "You", "Working Deep", "WF-18"],
    ["E-16", "Wednesday member email", "Members", "Speed", "WF-21"],
    ["E-17", "Ask him for permission", "You", "Working Deep (and in the assistant)", "WF-19"]
  ],

  roles: [
    ["You", "Everything", "Admin; you'll use the assistant instead"],
    ["Tanay", "Everything", "Admin, builder, maintainer"],
    ["Ryan", "Contacts, 108 Days, Retreats, 1:1 prices", "No settings; private notes only if you say so"],
    ["Robert", "108 Minutes contacts, Friday/Sunday emails, attendance", "No payments, no 1:1, no notes"],
    ["Ashley", "Only if she stays on (open)", "Private notes only if you say so"],
    ["Cohort assistants", "No login", "Ryan shares what they need"]
  ],

  integrations: [
    ["Stripe", "Card payments, payment links, subscriptions", "Your account, connected to GoHighLevel", "P"],
    ["Google Calendar", "Busy times and bookings", "Your personal Google account; free/busy only", "V"],
    ["Zoom", "Your personal room on every booking; participant reports for attendance", "Report access depends on your Zoom plan", "V"],
    ["Squarespace", "One-time export; site and member billing until Part B", "Then cancelled", "P"],
    ["Signal", "Not connected (no official way). Ryan still adds men by hand", "", "D"],
    ["My server", "Phone button, Monday list, attendance jobs", "Documented so it can move to any server", "P"],
    ["AI service", "Reads introductions; later, your assistant", "Pay per use; model swappable", "P"]
  ]
},

/* ----------------------------------------------------------- MIGRATION */
migration: [
  ["Squarespace mailing list (591)", "You", "Names, emails, unsubscribes", "Contacts; Thursday consent; unsubscribed kept; Bay Area segment dropped", "Export (seen together on 2 Nov)", "≈12 Nov"],
  ["Working Deep Alums group (72)", "You", "Names, emails", "Tag alumni", "Export", "≈12 Nov"],
  ["Squarespace customers and orders", "You", "Drop-ins, retreat purchases, dates", "Contacts; Came in; retreat enrollments (completed)", "Export", "≈12 Nov"],
  ["Squarespace subscriptions (5 monthly, 17 annual)", "You", "Members, start dates", "Access = member; Billing = Squarespace", "Export", "≈12 Nov"],
  ["Ryan's 108 Days rosters", "Ryan", "Name, contact, notes, deposit, balance, waiver", "Contacts; 108 Days enrollments; cohort tags; assistant tags", "Google Sheets", "≈12 Nov"],
  ["Ryan's retreat rosters", "Ryan", "Name, contact, retreat", "Retreat enrollments; tags", "Google Sheets", "≈12 Nov"],
  ["Your payment sheet", "You", "Who owes what, plans, 1:1 payments", "Open invoices; 1:1 enrollments (restricted)", "Sheet or voice note", "≈15 Nov"],
  ["JotForm submissions", "Ryan", "Signed waivers, emergency contacts", "PDFs to Drive; Waiver signed dates; emergency contact", "Export", "≈15 Nov"],
  ["systeme.io copy (24 May)", "Ryan", "Ryan's tags", "Tags only, matched to existing contacts", "Export", "≈15 Nov"],
  ["Robert's running list", "Robert", "Members, comped men, recent sign-ups", "108 Minutes access; checks the Squarespace import", "Whatever he keeps", "≈15 Nov"],
  ["Your weekly talk-through", "You", "Each man's story and former regulars, in your memory", "Notes, fields, tags (former-regular)", "Voice note or call, about 20 men a week, alumni first", "Weekly ≈16 Nov to end Dec"],
  ["Winter deposits", "You", "Who's paid what by Venmo/Zelle", "108 Days enrollments + invoices with payments recorded", "Your sheet / voice note", "≈27 Nov"],
  ["Austin's attendance sheets", "Austin (if found)", "Attendance to June", "First / last attended", "Bonus", "Any time"],
  ["Testimonials Google Doc", "You", "Quotes", "Testimonial records (Part B)", "Doc", "Dec"]
],

/* --------------------------------------------------------------- TESTS */
tests: [
  ["T-01", "M1", "Open Harold's record.", "It shows how he came in, EMLT years, 108 Minutes membership, Montana, 108 Days with his credit and plan, and that he's still a member, without asking you."],
  ["T-02", "M3", "Share a group-text introduction to the phone button.", "Within a minute: a record with name, number, introducer, note; you get the confirmation email."],
  ["T-03", "M4", "Monday 07:00 ET.", "Your email has five names with reasons. Keep moves one to To call. Swap returns a different man. Nobody marked Do not suggest appears."],
  ["T-04", "M5", "Put a man on a three-day hold.", "On day three you get the keep/release/extend email; he gets nothing."],
  ["T-05", "M5, M6", "Test man pays the $1,350 deposit by card.", "Within five minutes: welcome with e-sign, calendar, Signal steps and 1:1 link; Ryan emailed; invoice shows two instalments with dates."],
  ["T-06", "M5, M6", "Record a Zelle deposit by hand.", "Same welcome as T-05, invoice shows the manual payment."],
  ["T-07", "M5", "Instalment falls due.", "Reminder 3 days before and on the day; 7 days overdue it appears on your Monday note and he gets nothing more."],
  ["T-08", "M5", "Enroll with a $500 referral credit and a membership offset.", "Both appear as lines with type and reason; the introducer's record shows his $500 credit."],
  ["T-09", "M6", "Leave the waiver unsigned.", "Reminder after 3 days; on start −7 he's on Ryan's list."],
  ["T-10", "M7", "Ten bookings across the three calendars.", "All in your Google Calendar, all with your Zoom room, no double-booking, email reminder only."],
  ["T-11", "M0", "Log in as Robert.", "He sees 108 Minutes men and emails; no payments, no 1:1, no private notes."],
  ["T-12", "M0", "Send a test email.", "Lands in a Gmail inbox; authentication passes; no SMS anywhere in the account."],
  ["T-13", "M2", "Pick 20 men at random from the old lists.", "Each has exactly one record with the right history."],
  ["T-14", "M8", "Week of 12–19 Dec.", "Autumn comped men get the last-free-Saturday note; on 19 Dec their comp ends except members, 1:1 clients and next-cohort assistants."],
  ["T-15", "M8", "Four Saturdays.", "Friday list matches Robert's own check; attendance recorded; every first-timer is on your Saturday note."],
  ["T-16", "All", "Hand-over check.", "Each module has a one-page note: what it does, where it lives, how to change it."],
  ["T-17", "M2", "Talk through five men in a voice note.", "Within a day each record has your points in its notes and tags, and you get the list back to glance at."]
],

/* ----------------------------------------------------------- TIMELINE */
timeline: [
  ["Mon 2 Nov", "Blueprint Draft 1. Our first blueprint call; your GoHighLevel login is set up.", "Tanay", "D"],
  ["Wed 4 Nov", "This blueprint to you.", "Tanay", "D"],
  ["Thu 5 Nov", "We go through it together.", "You, Tanay", "D"],
  ["5–9 Nov", "You mark up Part A (a voice note is fine). I revise.", "You", "P"],
  ["9–12 Nov", "Return test on Part A, alongside the first build days. I start with the account and records (M0, M1), which don't depend on it; if the test fails I revise before going further.", "You", "P"],
  ["From 9 Nov", "The build starts (after Diwali, 8–9 Nov). Inputs arrive; the account is finished (M0).", "You, Ryan, Tanay", "D"],
  ["12–20 Nov", "Records and moving in (M1, M2). Your weekly talk-through starts ≈16 Nov, alumni first.", "Tanay, You", "P"],
  ["≈20 Nov", "Checkpoint MS1: you look at three records.", "You", "P"],
  ["≈22 Nov", "Leona's brand blueprint hoped for. Website keeps going either way.", "Leona", "D"],
  ["20–28 Nov", "Introductions, Monday list, payments, enrollment, bookings (M3–M7).", "Tanay", "P"],
  ["≈27 Nov", "Winter deposits moved in.", "You, Tanay", "P"],
  ["≈28 Nov", "Checkpoint MS2: you try it end to end.", "You", "P"],
  ["≈1 Dec", "Winter selling opens on the new system. December is the test month.", "You", "D"],
  ["by 12 Dec", "Comp-end sequence ready; you've chosen the membership offer.", "Tanay, You", "P"],
  ["16–19 Dec", "Autumn cohort closes; last free Saturday 19 Dec; membership offer.", "System", "D"],
  ["by 31 Dec", "Weekly talk-through done, or close to it.", "You", "D"],
  ["Dec – 15 Jan", "Part B: 108 Minutes, 1:1, website switch, Thursday template, testimonials, assistant.", "Tanay", "P"],
  ["≈15 Jan", "Winter cohort starts. All systems on (MS4).", "", "T22"],
  ["End Jan – mid Feb", "Library and Wednesday email (MS5).", "Tanay", "T22"],
  ["February", "Spring cohort selling, second run on the new system.", "You", "D"],
  ["March", "Montana intake opens.", "System", "P"],
  ["22–25 Apr 2027", "Montana retreat.", "", "D"]
],

/* ---------------------------------------------------- SCOPE AND PRICE */
scope: {
  inScope: "Everything in the 17 modules above, set up, tested against the acceptance tests, and written up for hand-over.",
  out: [
    "Bookkeeping, accounting and tax.",
    "Legal review of the waiver, terms or 1:1 agreement. I carry over your wording; a lawyer (or you) approves it.",
    "Brand design and marketing copy (Leona and Nick). I build what they give me, and join Leona's writers' room on the emails.",
    "Writing the essay, social posts, and setting up Insight Timer, YouTube or Substack.",
    "Merging or migrating your five email accounts (a separate small job if you want it).",
    "Reorganising Google Drive and Apple Photos.",
    "Any connection to Signal, and any SMS.",
    "A personal assistant or chief-of-staff AI across your personal and business life (deferred on 2 Nov). A personal VA.",
    "Embodiment Lab beyond a tag (a mirror of Lisa's sales page on your domain is outside this build).",
    "Running paid ads. You asked me to have a say in the Meta ads, which I will, alongside Leona.",
    "Going back through two years of text messages. The assistant only sees messages you pass to it.",
    "Stage 4: training beyond a walkthrough of each piece, and ongoing refinement (priced separately, as the stage plan says)."
  ],
  since: "New since our call on 2 Nov, not yet priced: the scholarship fund with a donate button on the website (you want it in the build), keeping your two Google calendars in step, and curating your library with AI (your \"stage five\", which you want me to own). I'll tell you which fit inside the price before I build them.",
  change: "If something comes up that isn't in this blueprint, I write it down, tell you whether it fits inside the price, and you decide before I build it. Nothing grows quietly (your ask, 28 Sep)."
},

price: {
  note: "On 2 Nov you chose to take the blueprint and the build together, with half paid up front; I'll send that invoice. On 27 Sep I estimated the whole project at about $7.5–8k including system costs, and on 15 Oct said it now looks likely to come in under that. The fixed figure below covers this blueprint, its revisions and the build. It's fixed before any building starts.",
  fixed: "[To fill in: fixed build price]",
  system: [
    ["GoHighLevel", "Monthly plan (exact plan and price confirmed before you're billed)"],
    ["Stripe", "≈2.9% + 30¢ per card payment in the US, absorbed by you (check current rates)"],
    ["Email sending", "Small per-email cost at your volume"],
    ["AI usage", "Pay per use; small at your volume"],
    ["Squarespace, Calendly, JotForm, Typeform, systeme.io", "Cancelled as each is replaced (savings)"]
  ]
},

/* ---------------------------------------------------------- POLICIES */
policies: [
  ["Payment plan and drop-out terms", "You", "Goes into the 108 Days terms (M5)", "B"],
  ["Media consent: asked, not assumed", "You + Ryan", "Wording for waivers (separate tick)", "P"],
  ["Retreat arrivals: book flights that land before the start", "You", "One line on the info sheet", "O"],
  ["108 Days \"rules of the road\" (late, missed calls)", "You", "Optional; linked from the welcome", "O"],
  ["Early-bird and deadline offers: keep, drop, or leave to Leona's brand work", "You + Leona", "Montana pre-sale (M9a), the membership offer (M8)", "O"],
  ["Medical data retention", "You", "Retreat intake (M9b)", "B"],
  ["Who holds which login (password manager)", "You + Tanay", "Part of M0", "P"]
],

/* ------------------------------------------------------- RISKS/VERIFY */
risks: [
  ["Private notes may not be hideable field by field in GoHighLevel", "Test in a trial account first; fallback is a separate locked store", "M0, M1"],
  ["Recurring weekly triggers (Friday, Monday) may need a server job", "Use my server's scheduler; documented", "M4, M8"],
  ["Invoice payment schedules and hand-recorded payments", "Test with a $1 product before 20 Nov", "M5"],
  ["European cards on your Stripe account", "Test with a European card", "M0, M8"],
  ["Zoom attendance reports depend on your Zoom plan", "Check plan; fallback is Robert ticking a 2-minute list", "M8"],
  ["Email deliverability from a new sending domain", "Warm up with team and members first; check authentication", "M0"],
  ["Each man's story arrives through December", "Alumni first, so the men most likely to be on the Monday list are done earliest", "M2, M4"],
  ["The assistant remembers something wrongly or brings up the wrong thing", "You can ask what it remembers and correct or delete it; it reads back anything it's about to do and waits for your yes", "M14"],
  ["You're resting in November", "Inputs asked for in small, dated pieces; checkpoints kept short", "All"],
  ["Ryan and Robert are volunteers with a few hours a week", "Their asks kept to the inputs list and one walkthrough each", "M2, M6, M8"],
  ["The server-side pieces depend on me", "Written up so any developer can run them; can move to your own server", "M3, M4, M8"],
  ["Working from India on US accounts (your question)", "You open Stripe and the plan in your name and invite me; nothing needs a US login from me", "M0"]
],

/* ------------------------------------------------- INTERNAL (TANAY) */
internal: [
  "Set the fixed price. Effort estimate below totals the module hours; add testing and handover.",
  "Read Ashley's drafts before this goes to Speed. Anything that contradicts a module goes into that module's \"Waiting on\" line, not silently into the spec.",
  "Before sending: remove the hours column if you'd rather not show effort to Speed.",
  "Security: Ryan's voice-note transcript in the Project contains a plain-text password. Ask Ryan to change it and delete the passage.",
  "The real GoHighLevel account exists (2 Nov). Clear the V items in M0 and M5 there, with a $1 test product, before promising them. Fill in the business details.",
  "The iPhone assumption (M3) is inferred from iMessage. Confirm with Speed.",
  "Speed's personal Gmail address appears in the Stage 1 doc; keep this blueprint free of it. Its spelling differs between my notes (X15); confirm before the calendar sync.",
  "2 Nov: Speed may ask Maya (Jeremiah) to review this blueprint. The Ryan and Robert review of the Stage 1 report is now uncertain.",
  "2 Nov: send Speed all call transcripts (now in the brain map's Transcripts tab) and the half-up-front invoice for Stages 2 and 3.",
  "M14 is now spelled out from the transcripts (15 abilities, how it works, later list); hours raised from 24 to 32. Check before pricing.",
  "Your decisions tab removed (4 Nov). Every open question now sits in its piece's Waiting on or need line; the inputs list moved to Timeline.",
  "Price the new scope (scholarship fund and button, calendar sync, library curation) before 5 Nov, per change control. Kate: check whether she is Kate Joiner. Ask Robert about attendance (Speed's suggestion).",
  "Personal context for records: Speed narrates about 20 men a week to the assistant, the 72 alumni first, through end of December. The M4 call list in December will be thinner until then."
]
};
