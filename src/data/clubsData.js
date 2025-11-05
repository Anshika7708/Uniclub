export const clubs = [
  {
    id: 1,
    name: "Google Developer Student Club",
    description: "Learn new technologies and collaborate on projects with peers and mentors",
    image: "/GDG.png",
    category: "Arts",
    memberCount: 45,
    tagline: "Building the Future with Technology",
    established: "2019-09-15",
    president: {
      name: "Arjun Sharma",
      email: "arjun.sharma@example.com",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuxtfpGFdKTvKOD2h3DsHS6djboHVJNNTUbQ&s",
    },
    meetingSchedule: {
      day: "Every Wednesday",
      time: "5:00 PM - 7:00 PM",
      location: "Computer Lab, Room 305",
    },
    achievements: [
      "Won Best Tech Club Award 2024",
      "Organized Successful Hackathon with 200+ participants",
      "Published 5 open-source projects"
    ],
    vacancies: ["Technical Lead", "Content Writer"],
    announcements: [
      "Next meeting on 10th November",
      "Workshop on Cloud Computing this Friday!"
    ],
    gallery: ["/GDG.png", "/coding club.jpg", "/QuizWuiz.jpg"],
    events: [
      {
        id: 1,
        name: "Cloud Computing Workshop",
        date: "2026-02-15",
        time: "2:00 PM - 5:00 PM",
        venue: "Computer Lab, Room 305",
        description: "Learn about cloud platforms like AWS, Azure, and GCP in this hands-on workshop. This comprehensive session will cover deployment strategies, cloud architecture, and best practices for scalable applications.",
        image: "/coding club.jpg",
        tag: "Technology",
        registerLink: "https://example.com/register",
        highlights: [
          "Hands-on experience with AWS, Azure, and GCP",
          "Learn cloud deployment strategies",
          "Certificate of participation",
          "Networking with industry professionals"
        ],
        prerequisites: "Basic programming knowledge recommended",
        seats: "50",
        fees: "Free for members"
      }
    ]
  },
  {
    id: 2,
    name: "Eloquence Consortium",
    description: "Elevate Your Eloquence | Connect | Learn | Inspire",
    image: "/Eloquence.png",
    category: "Academic",
    memberCount: 32,
    tagline: "Developing Personality and Communication Skills",
    established: "2020-09-01",
    president: {
      name: "Priya Patel",
      email: "priya.patel@example.com",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuxtfpGFdKTvKOD2h3DsHS6djboHVJNNTUbQ&s",
    },
    meetingSchedule: {
      day: "Every Tuesday",
      time: "6:00 PM - 8:00 PM",
      location: "Student Center, Room 101",
    },
    achievements: [
      "Won Best Club Award 2023",
      "Hosted National Debate Championship"
    ],
    vacancies: ["Event Coordinator", "Social Media Manager"],
    announcements: [
      "Next meeting on 15th March",
      "New workshop on public speaking coming soon!"
    ],
    gallery: ["/QuizWuiz.jpg", "/Peer.jpg", "/DP.jpg"],
    events: [
      {
        id: 1,
        name: "Hack-O-Octo 2.0",
        date: "2026-03-20 to 2026-03-21",
        time: "9:00 AM - 9:00 AM (24 hours)",
        venue: "Main Auditorium & Computer Labs",
        description: "🐙 Hack-O-Octo 2.0 is HERE! 🚀✨\nReady to level up? This isn't just another hackathon; it's your shot at creating, competing, and conquering! Whether you're a coder, designer, or idea powerhouse, it's time to bring your A-game.\n\nJoin us for an exciting 24-hour coding marathon where innovation meets collaboration.",
        image: "/Hack-o-Octo.jpg",
        tag: "Technology",
        registerLink: "https://hackocto.tech/",
        highlights: [
          "Solve real-world challenges",
          "Collaborate with tech enthusiasts",
          "Win prizes worth ₹50,000",
          "Build your network & boost your skills",
          "Free meals and refreshments",
          "Mentorship from industry experts"
        ],
        prerequisites: "Team of 2-4 members required",
        seats: "200 participants",
        fees: "₹500 per team"
      },
      {
        id: 2,
        name: "Inter-University Debate Championship",
        date: "2026-04-18",
        time: "10:00 AM - 6:00 PM",
        venue: "Student Center Auditorium",
        description: "Compete with the best debaters from universities nationwide and win exciting prizes and opportunities to showcase your talent on a larger stage.\n\nThis prestigious championship brings together the brightest minds for intense intellectual discourse on contemporary issues.",
        image: "/placeholder.svg?height=100&width=100",
        tag: "Debate",
        registerLink: "",
        highlights: [
          "Compete against 20+ universities",
          "Cash prizes for top 3 teams",
          "Certificate of participation",
          "Lunch and refreshments provided",
          "Meet renowned debaters and judges",
          "Media coverage opportunity"
        ],
        prerequisites: "Team of 2 members required",
        seats: "40 teams",
        fees: "Free entry"
      }
    ]
  },
  {
    id: 3,
    name: "Robotics Club",
    description: "Build and program robots for competitions and fun",
    image: "https://images-platform.99static.com//9pruL3GMSNpmFA6rrYtb8tlGCeU=/86x1262:1113x2290/fit-in/500x500/99designs-contests-attachments/131/131688/attachment_131688576",
    category: "Technology",
    memberCount: 28,
    tagline: "Innovate, Build, Compete",
    established: "2018-03-10",
    president: {
      name: "Rajesh Kumar",
      email: "rajesh.kumar@example.com",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuxtfpGFdKTvKOD2h3DsHS6djboHVJNNTUbQ&s",
    },
    meetingSchedule: {
      day: "Every Thursday",
      time: "4:00 PM - 6:00 PM",
      location: "Engineering Lab, Room 201",
    },
    achievements: [
      "National Robotics Competition Winners 2024",
      "Built autonomous delivery robot",
      "Collaborated with industry partners"
    ],
    vacancies: ["Electronics Engineer", "Programming Lead"],
    announcements: [
      "Robot competition registration open",
      "New Arduino kits available for members"
    ],
    gallery: ["/coding club.jpg", "/GDG.png", "/QuizWuiz.jpg"],
    events: [
      {
        id: 1,
        name: "RoboWars Championship 2026",
        date: "2026-05-22",
        time: "10:00 AM - 4:00 PM",
        venue: "Engineering Ground",
        description: "Get ready for the ultimate battle of machines! RoboWars Championship brings together the best robot builders to compete in an arena of destruction and innovation.\n\nBuild your combat robot and compete for glory!",
        image: "https://images-platform.99static.com//9pruL3GMSNpmFA6rrYtb8tlGCeU=/86x1262:1113x2290/fit-in/500x500/99designs-contests-attachments/131/131688/attachment_131688576",
        tag: "Competition",
        registerLink: "https://example.com/robowars",
        highlights: [
          "Cash prizes worth ₹30,000",
          "Weight category: 5kg and 10kg",
          "Live audience and commentary",
          "Expert judges from industry",
          "Winners get mentorship opportunities"
        ],
        prerequisites: "Team of 3-5 members with their own robot",
        seats: "20 teams",
        fees: "₹1000 per team"
      }
    ]
  },
  {
    id: 4,
    name: "Environmental Club",
    description: "Promote sustainability and environmental awareness",
    image: "https://shopequo.com/cdn/shop/articles/1._anh_bia_2b83c021-34fe-465e-8a3c-520e5c73e9c5.jpg?v=1701595625&width=1600",
    category: "Social",
    memberCount: 53,
    tagline: "Protect Our Planet, Secure Our Future",
    established: "2017-04-22",
    president: {
      name: "Ananya Reddy",
      email: "ananya.reddy@example.com",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuxtfpGFdKTvKOD2h3DsHS6djboHVJNNTUbQ&s",
    },
    meetingSchedule: {
      day: "Every Monday",
      time: "3:00 PM - 5:00 PM",
      location: "Biology Building, Room 150",
    },
    achievements: [
      "Planted 1000+ trees on campus",
      "Reduced campus plastic waste by 40%",
      "Organized successful Earth Day events"
    ],
    vacancies: ["Volunteer Coordinator", "Campaign Manager"],
    announcements: [
      "Tree planting drive this Saturday",
      "Beach cleanup next weekend"
    ],
    gallery: ["/QuizWuiz.jpg", "/Peer.jpg", "/DP.jpg"],
    events: [
      {
        id: 1,
        name: "Green Campus Initiative",
        date: "2026-01-25",
        time: "8:00 AM - 12:00 PM",
        venue: "Campus Grounds",
        description: "Join us for a massive tree plantation drive and campus cleanup initiative. Let's make our campus greener and cleaner!\n\nTogether we can make a difference for our environment and future generations.",
        image: "https://shopequo.com/cdn/shop/articles/1._anh_bia_2b83c021-34fe-465e-8a3c-520e5c73e9c5.jpg?v=1701595625&width=1600",
        tag: "Volunteering",
        registerLink: "",
        highlights: [
          "Plant 500+ trees",
          "Breakfast and refreshments included",
          "Certificate of participation",
          "Community service hours",
          "Make lasting impact on campus"
        ],
        prerequisites: "No prior experience needed - All welcome!",
        seats: "100 volunteers",
        fees: "Free"
      }
    ]
  },
  {
    id: 5,
    name: "Chess Club",
    description: "Improve your strategic thinking and compete in tournaments",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/ChessSet.jpg",
    category: "Games",
    memberCount: 21,
    tagline: "Think Ahead, Play Smart",
    established: "2020-01-15",
    president: {
      name: "Aditya Singh",
      email: "aditya.singh@example.com",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuxtfpGFdKTvKOD2h3DsHS6djboHVJNNTUbQ&s",
    },
    meetingSchedule: {
      day: "Every Friday",
      time: "6:00 PM - 8:00 PM",
      location: "Student Lounge, Building A",
    },
    achievements: [
      "University Chess Tournament Champions",
      "Trained 50+ beginner players",
      "Hosted grandmaster exhibition match"
    ],
    vacancies: ["Tournament Organizer"],
    announcements: [
      "Monthly tournament this weekend",
      "Beginner's workshop starting next week"
    ],
    gallery: ["/coding club.jpg", "/GDG.png", "/QuizWuiz.jpg"],
    events: [
      {
        id: 1,
        name: "University Chess Tournament",
        date: "2026-06-14",
        time: "9:00 AM - 6:00 PM",
        venue: "Student Lounge, Building A",
        description: "Compete in our annual chess tournament and prove your strategic prowess. Open to all skill levels from beginners to advanced players.\n\nMultiple categories and exciting prizes await the champions!",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/ChessSet.jpg",
        tag: "Tournament",
        registerLink: "https://example.com/chess",
        highlights: [
          "Prizes for top 3 winners",
          "Separate categories for beginners and advanced",
          "Rated tournament",
          "Lunch provided",
          "Meet and play with chess masters"
        ],
        prerequisites: "Individual participation",
        seats: "64 players",
        fees: "₹200 per person"
      }
    ]
  },
  {
    id: 6,
    name: "Dance Troupe",
    description: "Express yourself through various dance styles and performances",
    image: "https://www.shutterstock.com/image-photo/butterfly-600nw-152795234.jpg",
    category: "Arts",
    memberCount: 38,
    tagline: "Dance Like Nobody's Watching",
    established: "2019-08-20",
    president: {
      name: "Kavya Iyer",
      email: "kavya.iyer@example.com",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuxtfpGFdKTvKOD2h3DsHS6djboHVJNNTUbQ&s",
    },
    meetingSchedule: {
      day: "Every Monday & Thursday",
      time: "7:00 PM - 9:00 PM",
      location: "Dance Studio, Arts Building",
    },
    achievements: [
      "Won Inter-College Dance Competition 2024",
      "Performed at 15+ university events",
      "Featured in local media"
    ],
    vacancies: ["Choreographer", "Costume Designer"],
    announcements: [
      "Auditions for annual show next month",
      "New hip-hop workshop this Friday"
    ],
    gallery: ["/Peer.jpg", "/DP.jpg", "/QuizWuiz.jpg"],
    events: [
      {
        id: 1,
        name: "Annual Dance Showcase 2026",
        date: "2026-09-28",
        time: "6:00 PM - 9:00 PM",
        venue: "Main Auditorium",
        description: "Experience the magic of movement at our Annual Dance Showcase! Watch stunning performances featuring various dance styles from classical to contemporary, hip-hop to bharatanatyam.\n\nA mesmerizing evening of rhythm, grace, and artistic expression!",
        image: "https://www.shutterstock.com/image-photo/butterfly-600nw-152795234.jpg",
        tag: "Performance",
        registerLink: "",
        highlights: [
          "15+ dance performances",
          "Multiple dance styles showcased",
          "Professional lighting and sound",
          "Special guest performances",
          "Refreshments available",
          "Free entry for students"
        ],
        prerequisites: "Open to all - No registration needed for audience",
        seats: "500 audience capacity",
        fees: "Free for students, ₹100 for guests"
      }
    ]
  },
  {
    id: 7,
    name: "Coding Club",
    description: "Learn programming languages and work on exciting projects",
    image: "/coding club.jpg",
    category: "Technology",
    memberCount: 67,
    tagline: "Code, Create, Collaborate",
    established: "2018-09-01",
    president: {
      name: "Rohan Verma",
      email: "rohan.verma@example.com",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuxtfpGFdKTvKOD2h3DsHS6djboHVJNNTUbQ&s",
    },
    meetingSchedule: {
      day: "Every Wednesday",
      time: "5:00 PM - 7:00 PM",
      location: "Computer Science Building, Lab 3",
    },
    achievements: [
      "Won 5 hackathons in 2024",
      "Published 10+ open-source projects",
      "Hosted coding bootcamp with 150+ attendees"
    ],
    vacancies: ["Backend Developer", "UI/UX Designer"],
    announcements: [
      "24-hour hackathon next weekend",
      "Free Python workshop for beginners"
    ],
    gallery: ["/coding club.jpg", "/GDG.png", "/Hack-o-Octo.jpg"],
    events: [
      {
        id: 1,
        name: "Code Sprint 2026",
        date: "2026-07-12",
        time: "3:00 PM - 8:00 PM",
        venue: "Computer Science Building, Lab 3",
        description: "A fast-paced competitive programming event where speed and accuracy matter! Solve algorithmic challenges and compete for the top spot on the leaderboard.\n\nTest your coding skills in languages like Python, Java, C++, and JavaScript!",
        image: "/coding club.jpg",
        tag: "Competition",
        registerLink: "https://example.com/codesprint",
        highlights: [
          "Real-time coding challenges",
          "Multiple difficulty levels",
          "Prizes for top performers",
          "Learn from peer solutions",
          "Snacks and energy drinks provided"
        ],
        prerequisites: "Knowledge of at least one programming language",
        seats: "100 participants",
        fees: "Free for club members, ₹100 for others"
      }
    ]
  },
  {
    id: 8,
    name: "Book Club",
    description: "Discuss literature and share your love for reading",
    image: "/book club.jpg",
    category: "Academic",
    memberCount: 42,
    tagline: "Read More, Learn More",
    established: "2019-02-14",
    president: {
      name: "Meera Desai",
      email: "meera.desai@example.com",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuxtfpGFdKTvKOD2h3DsHS6djboHVJNNTUbQ&s",
    },
    meetingSchedule: {
      day: "Every Saturday",
      time: "2:00 PM - 4:00 PM",
      location: "Library, Reading Room",
    },
    achievements: [
      "Read and discussed 50+ books",
      "Hosted author meet-and-greet events",
      "Created campus reading initiative"
    ],
    vacancies: ["Book Review Coordinator"],
    announcements: [
      "This month's book: '1984' by George Orwell",
      "Author Q&A session scheduled for next week"
    ],
    gallery: ["/book club.jpg", "/QuizWuiz.jpg", "/Peer.jpg"],
    events: [
      {
        id: 1,
        name: "Author Meet & Greet: Contemporary Fiction",
        date: "2026-08-07",
        time: "4:00 PM - 6:00 PM",
        venue: "Library, Reading Room",
        description: "Meet acclaimed author and have an intimate conversation about their latest novel. This is a rare opportunity to interact with a published author and gain insights into the world of creative writing.\n\nGet your books signed and ask your burning questions!",
        image: "/book club.jpg",
        tag: "Literary Event",
        registerLink: "",
        highlights: [
          "Interactive Q&A session",
          "Book signing opportunity",
          "Complimentary refreshments",
          "Limited edition bookmarks",
          "Discussion on writing process",
          "Networking with fellow book lovers"
        ],
        prerequisites: "No prerequisites - All book lovers welcome",
        seats: "50 attendees",
        fees: "Free"
      }
    ]
  }
];
