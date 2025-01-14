const conferenceAgenda = [
    {
        day: "1",
        date: "Thursday, June 19, 2025",
        sessions: [
          {
            day: "1",
            time: "9:00-9:30",
            location: "Main Hall",
            activity: "Opening Ceremony",
            details: "Keynote, Mr....",
          },
          {
            day: "1",
            time: "9:30-10:00",
            location: "Exhibition Hall",
            activity: "Exhibition Official Opening",
            details: "By ....",
          },
          {
            day: "1",
            time: "10:00-10:30",
            locations: [
              {
                area: "Hackathon Corner",
                activity: "Hackathon morning session",
              },
              {
                area: "Cyber Drill Corner",
                activity: "Cyber Drill Day 1 challenge morning session",
              },
              {
                area: "Business Lounge",
                activity: "Sprints morning session",
              },
            ],
          },
          {
            day: "1",
            time: "10:30-11:30",
            location: "Main Hall",
            activityDetails: {
              name: "Fintech",
              desc: "Evaluating the impact of international bank entry on the local fintech ecosystem and banking sector.",
              type: "Panel Discussion",
              moderator: "Tigist G. Araya",
            }
          },
          {
            day: "1",
            time: "11:30-12:00",
            locations: [
              {
                area: "Business Lounge",
                activity: "Customer is KING Pitches 1",
              },
            ],
          },
          {
            day: "1",
            time: "12:00-14:00",
            notes: [
              "Hackathon team lunch",
              "Cyber Drill team lunch",
              "Sprints team lunch",
            ],
          },
          {
            day: "1",
            time: "14:00-14:30",
            locations: [
              {
                area: "Hackathon Corner",
                activity: "Hackathon afternoon session",
              },
              {
                area: "Cyber Drill Corner",
                activity: "Cyber Drill Day 1 challenge afternoon session",
              },
              {
                area: "Business Lounge",
                activity: "Sprints afternoon session",
              },
            ],
          },
          {
            day: "1",
            time: "14:30-15:30",
            location: "Main Hall",
            activityDetails: {
              name: "Agritech",
              desc: "Smart Agriculture: Shaping the future of farming & food systems",
              type: "Panel Discussion",
              moderator: "TBC",
            }
          },
          {
            day: "1",
            time: "15:30-16:00",
            locations: [
              {
                area: "Business Lounge",
                activity: "Fireside Chat 1",
              },
            ],
          },
          {
            day: "1",
            time: "16:00-18:00",
            note: "No specific activities listed.",
          },
        ],
    },
    {
        day: "2",
        date: "Friday, June 20, 2025",
        sessions: [
          {
            day: "2",
            time: "10:00-10:30",
            locations: [
              {
                area: "Hackathon Corner",
                activity: "Hackathon morning session",
              },
              {
                area: "Cyber Drill Corner",
                activity: "Cyber Drill Day 2 challenge morning session",
              },
              {
                area: "Business Lounge",
                activity: "Sprints morning session",
              },
              {
                area: "Business Lounge",
                activity: "VC Masterclass",
              },
            ],
          },
          {
            day: "2",
            time: "10:30-11:30",
            location: "Main Hall",
            activityDetails: {
              name: "Artificial Intelligence",
              desc: "The role of Generative AI in Shaping the future of Government services.",
              type: "Panel Discussion",
              moderator: "TBC",
            }
          },
          {
            day: "2",
            time: "12:00-14:00",
            notes: [
              "Hackathon team lunch",
              "Cyber Drill team lunch",
              "Sprints team lunch",
            ],
          },
          {
            day: "2",
            time: "14:00-14:30",
            locations: [
              {
                area: "Hackathon Corner",
                activity: "Hackathon afternoon session",
              },
              {
                area: "Cyber Drill Corner",
                activity: "Cyber Drill Day 2 challenge afternoon session",
              },
              {
                area: "Business Lounge",
                activity: "Sprints afternoon session",
              },
            ],
          },
          {
            day: "2",
            time: "14:30-15:30",
            location: "Main Hall",
            activityDetails: {
              name: "Cybersecurity",
              desc: "Strengthening financial cybersecurity: leveraging AI for better fraud detection",
              type: "Panel Discussion",
              moderator: "Andlaye team",
            }
          },
          {
            day: "2",
            time: "15:30-16:00",
            locations: [
              {
                area: "Business Lounge",
                activity: "Customer is KING Pitches 2",
              },
            ],
          },
          {
            day: "2",
            time: "16:00-18:00",
            note: "No specific activities listed.",
          },
        ],
    },
    {
        day: "3",
        date: "Saturday, June 21, 2025",
        sessions: [
          {
            day: "3",
            time: "10:00-10:30",
            locations: [
              {
                area: "Hackathon Corner",
                activity: "Hackathon morning session",
              },
              {
                area: "Cyber Drill Corner",
                activity: "Cyber Drill Day 1 & 2 challenges presented before judges & winners selected",
              },
              {
                area: "Business Lounge",
                activity: "Sprints morning session",
              },
              {
                area: "Business Lounge",
                activity: "Fireside Chat 2",
              },
            ],
          },
          {
            day: "3",
            time: "10:30-11:30",
            location: "Main Hall",
            activityDetails: {
              name: "E-commerce",
              desc: "Navigating the future of E-commerce: Innovations, Consumer Behavior & Global Trends",
              type: "Panel Discussion",
              moderator: "Andlaye team",
            }
          },
          {
            day: "3",
            time: "12:00-12:30",
            notes: [
              "Hackathon team lunch",
              "Sprints team lunch",
            ],
          },
          {
            day: "3",
            time: "12:30-13:00",
            locations: [
              {
                area: "Hackathon Corner",
                activity: "Solutions presented before judges & winners selected",
              },
              {
                area: "Business Lounge",
                activity: `"Sprints" presented before judges & winners selected`,
              },
              {
                area: "Business Lounge",
                activity: "Fireside Chat 3",
              },
            ],
          },
          {
            day: "3",
            time: "15:30-16:00",
            location: "Main Hall",
            activity: "TTS Award Ceremony",
            details: "Hackathon, Cyber Drill, Sprint, Customer is King winners",
          },
          {
            day: "3",
            time: "16:00-18:00",
            note: "No specific activities listed.",
          },
        ],
    }
]

export default conferenceAgenda