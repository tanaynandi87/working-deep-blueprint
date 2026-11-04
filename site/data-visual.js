/* Visual layer for the blueprint: workflow flowcharts, dependencies, Gantt, week view.
   Node types: trigger · action · email · person · wait · decision · end
   email/person nodes carry `to` (You, Ryan, Robert, The man, Men, Members…). */
window.BPV = {

/* ---------- Which piece depends on which (drives the order diagram) ---------- */
deps: {
  M0: [], M1: ["M0"], M7: ["M0"], M2: ["M1"], M3: ["M1"], M5: ["M0","M1"],
  M4: ["M1","M2","M3"], M6: ["M1","M5","M7"], M9a: ["M1","M5"],
  M8: ["M1","M2","M5"], M10: ["M1","M5","M7"], M11: ["M0","M7"], M12: ["M1"],
  M9b: ["M1","M9a"], M13: ["M1","M12"], M14: ["M1","M2","M3","M7"], M16: ["M0","M1","M11"], M15: ["M8","M11","M12"]
},

/* ---------- Workflows as flowcharts ---------- */
flows: [
{
  id: "WF-01", name: "A new man is saved", piece: "M3", part: "A", group: "Selling",
  plain: "You share an introduction from your phone. He's on file within a minute, with who introduced him.",
  steps: [
    { t: "trigger", x: "You share a group text to the \"new man\" button, or say \"Hey Siri, new man: Arjun, from Nico\"" },
    { t: "action",  x: "AI reads his name, number, email and who introduced him" },
    { t: "decision", x: "Is he already in the system?", branches: [
      { label: "Yes", steps: [ { t: "action", x: "His record is updated and the new introduction noted" } ] },
      { label: "No",  steps: [ { t: "action", x: "A record is created: Source = Introduction, Referred by = Nico, Came in = today" } ] }
    ]},
    { t: "action", x: "He's placed in Men to talk to › Introduced" },
    { t: "email", to: "You", x: "\"Saved: Arjun, introduced by Nico.\" With a link to fix anything wrong" }
  ]
},
{
  id: "WF-02", name: "Five men to call each Monday", piece: "M4", part: "A", group: "Selling",
  plain: "Every Monday morning you get five names with a reason each. Keep or swap; the system remembers.",
  steps: [
    { t: "trigger", x: "Monday, 7:00 am ET (or any day you ask the assistant)" },
    { t: "action", x: "Looks for men in this order: introduced but not called · talk-again date has come · former regulars quiet for 90 days · alumni not in the coming cohort" },
    { t: "action", x: "Leaves out: anyone you've marked Do not suggest, men enrolled now, unsubscribed, the team" },
    { t: "email", to: "You", x: "\"Your five this week\", each with one line on why, and Keep / Swap buttons" },
    { t: "decision", x: "You tap…", branches: [
      { label: "Keep", steps: [ { t: "action", x: "He moves to To call" } ] },
      { label: "Swap", steps: [ { t: "email", to: "You", x: "The next man, by return" } ] }
    ]},
    { t: "person", to: "You", x: "Make your calls. Say a sentence about each to the phone button" },
    { t: "end", x: "Last spoke and his stage are updated" }
  ]
},
{
  id: "WF-23", name: "Telling Meta what happened", piece: "M16", part: "A", group: "Selling",
  plain: "When a man signs up, books, pays or comes to 108 Minutes, Meta hears about it, so ads find more men like him. Nothing private goes.",
  steps: [
    { t: "trigger", x: "A man signs up, books a call, enrolls and pays, or comes to 108 Minutes" },
    { t: "decision", x: "Is it about 1:1 coaching, or has he unsubscribed?", branches: [
      { label: "Yes", steps: [ { t: "end", x: "Nothing is sent" } ] },
      { label: "No",  steps: [ { t: "action", x: "His email and phone are scrambled, and the event is sent to Meta with the amount and the ad he came from" } ] }
    ]},
    { t: "action", x: "Meta matches it to the ad, counts it once, and learns what a good lead looks like" },
    { t: "end", x: "Whoever runs the ads sees which ones bring men who enroll and show up" }
  ]
},
{
  id: "WF-03", name: "The three-day hold", piece: "M5", part: "A", group: "Selling",
  plain: "You hold a place for a man. On day three, you're asked what to do. He hears nothing.",
  steps: [
    { t: "trigger", x: "You tell the system (or Ryan) you're holding a place for Dan" },
    { t: "wait", x: "3 days" },
    { t: "decision", x: "Has Dan paid his deposit?", branches: [
      { label: "Yes", steps: [ { t: "end", x: "Enrollment starts (WF-04)" } ] },
      { label: "No",  steps: [ { t: "email", to: "You", x: "\"Hold for Dan ends today: keep, release or extend.\" Nothing goes to Dan" } ] }
    ]}
  ]
},
{
  id: "WF-04", name: "He enrolls in 108 Days", piece: "M6", part: "A", group: "Enrollment",
  plain: "The moment his deposit lands, he's welcomed with everything he needs. You do nothing.",
  steps: [
    { t: "trigger", x: "His deposit is paid by card, or Ryan or I record a Venmo / Zelle payment" },
    { t: "action", x: "Tagged with the cohort. 108 Minutes free until the Saturday after the last call" },
    { t: "decision", x: "Is he an assistant?", branches: [
      { label: "Yes", steps: [ { t: "action", x: "Assistant price ($2,400). Keeps 108 Minutes through the gap to the next cohort" } ] },
      { label: "No",  steps: [ { t: "action", x: "Standard terms, with your discount or credit and its reason recorded" } ] }
    ]},
    { t: "email", to: "The man", x: "Welcome (Ryan's words): sign the waiver and terms online · cohort calendar · how to join Signal · book your two 1:1s" },
    { t: "email", to: "Ryan", x: "\"Dan is in. Please add him to Signal.\"" },
    { t: "person", to: "Ryan", x: "Adds him to the Signal group (Signal can't be automated)" }
  ]
},
{
  id: "WF-05", name: "Waiver chase", piece: "M6", part: "A", group: "Enrollment",
  plain: "One gentle reminder to him, then Ryan sees who's missing a week out.",
  steps: [
    { t: "trigger", x: "Welcome sent" },
    { t: "wait", x: "3 days" },
    { t: "decision", x: "Signed?", branches: [
      { label: "Yes", steps: [ { t: "end", x: "Ryan's board shows Signed" } ] },
      { label: "No",  steps: [
        { t: "email", to: "The man", x: "One reminder with the link" },
        { t: "wait", x: "Until 7 days before the cohort starts" },
        { t: "email", to: "Ryan", x: "Still unsigned: on Ryan's Monday note" }
      ]}
    ]}
  ]
},
{
  id: "WF-06", name: "Payment reminders", piece: "M5", part: "A", group: "Money",
  plain: "He's reminded twice with a pay link. If he's a week late, it comes to you, not to him again.",
  steps: [
    { t: "trigger", x: "An instalment is coming due" },
    { t: "email", to: "The man", x: "3 days before: amount, date, pay link" },
    { t: "email", to: "The man", x: "On the day: same, once more" },
    { t: "wait", x: "7 days" },
    { t: "decision", x: "Paid?", branches: [
      { label: "Yes", steps: [ { t: "end", x: "Invoice updated. Nothing else happens" } ] },
      { label: "No",  steps: [ { t: "email", to: "You", x: "On your Monday money note. No more emails to him: your call" } ] }
    ]}
  ]
},
{
  id: "WF-07", name: "A cohort is cancelled", piece: "M6", part: "A", group: "Enrollment",
  plain: "Rare. One honest note to everyone enrolled; refunds stay your decision.",
  steps: [
    { t: "trigger", x: "You decide a cohort won't run" },
    { t: "email", to: "Men", x: "One note to everyone enrolled" },
    { t: "person", to: "You", x: "A refund task for each man. Never automatic" }
  ]
},
{
  id: "WF-22", name: "Ryan's Monday note", piece: "M6", part: "A", group: "Enrollment",
  plain: "Before your Monday 1 pm call, Ryan gets one list of everything outstanding.",
  steps: [
    { t: "trigger", x: "Monday, 9:00 am ET" },
    { t: "action", x: "Gathers: unsigned waivers · unpaid deposits · 1:1s not booked · missing retreat intake" },
    { t: "email", to: "Ryan", x: "One list, ready for your 1 pm call" }
  ]
},
{
  id: "WF-08", name: "Comped access ends", piece: "M8", part: "B", group: "108 Minutes",
  plain: "A week's notice and the membership offer, then access ends, except for those who keep it.",
  steps: [
    { t: "trigger", x: "7 days before a man's comp ends (the Saturday after his cohort's last call)" },
    { t: "email", to: "The man", x: "\"This Saturday is your last free 108 Minutes\" + the membership offer you choose" },
    { t: "wait", x: "Until that Saturday" },
    { t: "decision", x: "Is he a paying member, a 1:1 client, or next cohort's assistant?", branches: [
      { label: "Yes", steps: [ { t: "end", x: "Keeps access" } ] },
      { label: "No",  steps: [ { t: "end", x: "Comp ends. Off the Friday list" } ] }
    ]}
  ]
},
{
  id: "WF-10", name: "Friday Zoom link", piece: "M8", part: "B", group: "108 Minutes",
  plain: "The right men get the link every Friday. Nobody builds the list by hand.",
  steps: [
    { t: "trigger", x: "Friday, 6:00 pm ET" },
    { t: "action", x: "Builds the list: members + comped men + this week's first-timers and drop-ins" },
    { t: "decision", x: "Anyone in doubt?", branches: [
      { label: "Yes", steps: [ { t: "action", x: "Include him (your rule: better a non-payer than miss a payer)" } ] },
      { label: "No",  steps: [ { t: "action", x: "List as built" } ] }
    ]},
    { t: "email", to: "Men", x: "The Zoom link + this week's announcement (Robert edits one box)" }
  ]
},
{
  id: "WF-11", name: "Sunday recording", piece: "M8", part: "B", group: "108 Minutes",
  plain: "Robert pastes one link; it goes to the right men.",
  steps: [
    { t: "trigger", x: "Robert pastes the recording link" },
    { t: "email", to: "Members", x: "The recording, to members and comped men" }
  ]
},
{
  id: "WF-12", name: "Attendance", piece: "M8", part: "B", group: "108 Minutes",
  plain: "Who came is known without anyone keeping a sheet.",
  steps: [
    { t: "trigger", x: "Saturday, after the session" },
    { t: "action", x: "Zoom's participant report is matched to each man's record" },
    { t: "end", x: "First attended, last attended and session count updated" }
  ]
},
{
  id: "WF-13", name: "First-timers", piece: "M8", part: "B", group: "108 Minutes",
  plain: "Every first-timer hears back on his own: one note if he came, another if he didn't (your ask, 2 Nov). You also get the list of who came.",
  steps: [
    { t: "trigger", x: "Saturday, 2:00 pm ET" },
    { t: "decision", x: "Did this week's first-timer come?", branches: [
      { label: "Came", steps: [ { t: "email", to: "The man", x: "\"Good to have you\" note, with how to come back" }, { t: "email", to: "You", x: "\"Today's new men\", in case you want to add a personal note" } ] },
      { label: "Didn't come", steps: [ { t: "wait", x: "Until Thursday" }, { t: "email", to: "The man", x: "\"We're holding your spot\"" } ] }
    ]}
  ]
},
{
  id: "WF-14", name: "A regular drifts", piece: "M8", part: "B", group: "108 Minutes",
  plain: "Nobody slips away unnoticed. You get a nudge, not an automated email to him.",
  steps: [
    { t: "trigger", x: "Weekly" },
    { t: "decision", x: "A regular (4+ sessions in 8 weeks) unseen for 4 weeks?", branches: [
      { label: "Yes", steps: [ { t: "action", x: "Goes onto your Monday list as a soft touch" } ] },
      { label: "No",  steps: [ { t: "end", x: "Nothing" } ] }
    ]}
  ]
},
{
  id: "WF-15", name: "Membership changes", piece: "M8", part: "B", group: "108 Minutes",
  plain: "Billing events keep each man's access right, without Robert checking.",
  steps: [
    { t: "trigger", x: "Stripe reports a membership change" },
    { t: "decision", x: "What happened?", branches: [
      { label: "Started", steps: [ { t: "action", x: "Member. On the Friday list" } ] },
      { label: "Card failed", steps: [ { t: "action", x: "Stripe retries the card" } ] },
      { label: "Cancelled", steps: [ { t: "action", x: "Off the list" }, { t: "email", to: "Robert", x: "\"X's membership has ended\"" } ] }
    ]}
  ]
},
{
  id: "WF-21", name: "Wednesday member email", piece: "M8 / M15", part: "B", group: "108 Minutes",
  plain: "The membership promise, kept every week.",
  steps: [
    { t: "trigger", x: "Wednesday" },
    { t: "email", to: "Members", x: "A ~10-minute teaching and a ~5-minute practice from your library" }
  ]
},
{
  id: "WF-16", name: "He registers for a retreat", piece: "M9a / M9b", part: "B", group: "Retreats",
  plain: "Everything he needs from the moment he registers, gathered without chasing. Late flights caught early.",
  steps: [
    { t: "trigger", x: "He registers for the retreat (the welcome goes out straight away, your decision on 2 Nov)" },
    { t: "email", to: "The man", x: "Welcome · intake form · waiver · info sheet · how to join the Signal group" },
    { t: "action", x: "His intake answers, or the airline confirmation he forwards, put his arrival time on his record" },
    { t: "decision", x: "Does his flight land after the start?", branches: [
      { label: "Yes", steps: [ { t: "email", to: "Ryan", x: "Straight away, so Ryan can ask him to change it" } ] },
      { label: "No",  steps: [ { t: "end", x: "Nothing" } ] }
    ]},
    { t: "wait", x: "Until 14 days before" },
    { t: "email", to: "The man", x: "Reminder, only if something's missing" },
    { t: "wait", x: "Until 7 days before" },
    { t: "email", to: "Ryan", x: "Who's still missing what" }
  ]
},
{
  id: "WF-17", name: "After a retreat", piece: "M9b", part: "B", group: "Retreats",
  plain: "The invitation to the next 108 Days goes out only once you've approved it.",
  steps: [
    { t: "trigger", x: "The day after a retreat ends" },
    { t: "email", to: "You", x: "Draft invitation to the next 108 Days: approve?" },
    { t: "decision", x: "You approve?", branches: [
      { label: "Yes", steps: [ { t: "email", to: "Men", x: "Sent to attendees not already enrolled" } ] },
      { label: "No",  steps: [ { t: "end", x: "Nothing is sent" } ] }
    ]}
  ]
},
{
  id: "WF-18", name: "1:1 coaching cycle", piece: "M10", part: "B", group: "1:1",
  plain: "Calls are counted for you, and you're reminded before the renewal talk.",
  steps: [
    { t: "trigger", x: "A 1:1 session is marked held" },
    { t: "action", x: "Calls held + 1" },
    { t: "decision", x: "Is this call 8?", branches: [
      { label: "Yes", steps: [ { t: "email", to: "You", x: "\"Renewal talk with Dan around call 9\"" } ] },
      { label: "No",  steps: [ { t: "end", x: "Nothing" } ] }
    ]}
  ]
},
{
  id: "WF-19", name: "A testimonial is saved", piece: "M12", part: "B", group: "Testimonials",
  plain: "Every testimonial is linked to the man. Where you don't have his permission yet, you're reminded to ask him yourself a few weeks later.",
  steps: [
    { t: "trigger", x: "A testimonial is saved (the assistant, the phone button, Ryan's recording, or forwarded)" },
    { t: "action", x: "Linked to the man, tagged by offering and theme, with a note of where it came from" },
    { t: "decision", x: "Is his permission recorded?", branches: [
      { label: "Yes", steps: [ { t: "end", x: "Ready to use" } ] },
      { label: "No",  steps: [ { t: "wait", x: "Three to four weeks, so asking lands easily" }, { t: "email", to: "You", x: "\"Ask Matt if you can use what he said\"" }, { t: "end", x: "You tell the assistant his answer; it goes on the record" } ] }
    ]}
  ]
}
],

/* ---------- A man's journey (each step points at the workflow behind it) ---------- */
journey: [
  { t: "Introduced", d: "Shared from your phone", wf: "WF-01" },
  { t: "On your Monday list", d: "You keep him", wf: "WF-02" },
  { t: "You talk", d: "15-min or discovery call", wf: null, piece: "M7" },
  { t: "On hold", d: "Three days", wf: "WF-03" },
  { t: "Enrolled", d: "Deposit lands", wf: "WF-04" },
  { t: "Welcomed", d: "Signs, books 1:1s", wf: "WF-05" },
  { t: "Paying", d: "Reminded, never chased by you", wf: "WF-06" },
  { t: "In the cohort", d: "15½ weeks", wf: "WF-22" },
  { t: "Last free Saturday", d: "Membership offer", wf: "WF-08" },
  { t: "Stays close", d: "Member · library · Wednesday", wf: "WF-21" }
],

/* ---------- The week ---------- */
week: [
  { d: "Mon", items: [ ["7:00", "Your five to call", "You", "WF-02"], ["9:00", "Ryan's outstanding list", "Ryan", "WF-22"], ["1:00 pm", "Your call with Ryan", "Person", null], ["", "Money note (if anything's overdue)", "You", "WF-06"] ] },
  { d: "Tue", items: [ ["", "Guest essay due (guest weeks)", "Person", null] ] },
  { d: "Wed", items: [ ["", "Wednesday member email", "Members", "WF-21"], ["", "You write the essay", "Person", null] ] },
  { d: "Thu", items: [ ["", "Thursday essay (template)", "Person", null], ["", "\"Holding your spot\" to no-shows", "The man", "WF-13"] ] },
  { d: "Fri", items: [ ["6:00 pm", "Zoom link to the right men", "Men", "WF-10"] ] },
  { d: "Sat", items: [ ["am", "You script the practice", "Person", null], ["10:00", "108 Minutes", "Person", null], ["after", "Attendance recorded", "System", "WF-12"], ["2:00 pm", "Today's new men", "You", "WF-13"] ] },
  { d: "Sun", items: [ ["", "Recording to members", "Members", "WF-11"] ] }
],

/* ---------- Gantt ---------- */
gantt: {
  start: "2026-11-02", end: "2027-02-28", today: "2026-11-05",
  bands: [
    { label: "You rest; soft pre-selling", from: "2026-11-02", to: "2026-11-30", kind: "speed" },
    { label: "Winter selling (test month)", from: "2026-12-01", to: "2027-01-14", kind: "sell" },
    { label: "Winter cohort", from: "2027-01-15", to: "2027-02-28", kind: "cohort" }
  ],
  rows: [
    { id: "BP", label: "Blueprint · mark-up · return test", from: "2026-11-02", to: "2026-11-12", part: "S" },
    { id: "M0", from: "2026-11-09", to: "2026-11-14", part: "A" },
    { id: "M1", from: "2026-11-12", to: "2026-11-17", part: "A" },
    { id: "M2", from: "2026-11-13", to: "2026-11-20", part: "A" },
    { id: "M7", from: "2026-11-11", to: "2026-11-15", part: "A" },
    { id: "M11", from: "2026-11-09", to: "2026-11-15", part: "A" },
    { id: "M16", from: "2026-11-11", to: "2026-11-15", part: "A" },
    { id: "M3", from: "2026-11-20", to: "2026-11-25", part: "A" },
    { id: "M5", from: "2026-11-19", to: "2026-11-26", part: "A" },
    { id: "M6", from: "2026-11-23", to: "2026-11-28", part: "A" },
    { id: "M4", from: "2026-11-24", to: "2026-11-28", part: "A" },
    { id: "M9a", from: "2026-11-12", to: "2026-11-15", part: "A" },
    { id: "M14", from: "2026-11-16", to: "2026-11-30", part: "A" },
    { id: "M8", from: "2026-12-02", to: "2027-01-10", part: "B" },
    { id: "M12", from: "2026-12-07", to: "2026-12-18", part: "B" },
    { id: "M13", from: "2026-12-14", to: "2027-01-08", part: "B" },
    { id: "M10", from: "2026-12-28", to: "2027-01-08", part: "B" },
    { id: "M9b", from: "2027-01-04", to: "2027-01-12", part: "B" },
    { id: "M15", from: "2027-01-18", to: "2027-02-15", part: "B" }
  ],
  marks: [
    { d: "2026-11-15", t: "Site live" }, { d: "2026-11-20", t: "MS1" }, { d: "2026-11-28", t: "MS2" }, { d: "2026-12-01", t: "Selling opens" },
    { d: "2026-12-16", t: "Cohort close" }, { d: "2027-01-15", t: "All on" }
  ]
}
};
