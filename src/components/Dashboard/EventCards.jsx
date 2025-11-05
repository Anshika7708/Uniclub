import { motion } from "framer-motion"
import Modal from "../ui/modal.jsx"
import { useState } from "react"
const events = [
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
    image: "/debate.jpg",
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
  },
  {
    id: 3,
    name: "Robotics Workshop",
    date: "2026-05-15",
    time: "2:00 PM - 5:00 PM",
    venue: "Engineering Lab, Room 201",
    description: "Learn the basics of robotics and build your first robot with our experts in this hands-on workshop for beginners. Get introduced to sensors, motors, and programming for robotics applications.",
    image: "/robotics.jpg",
    tag: "Robotics",
    registerLink: "",
    highlights: [
      "Hands-on robot building experience",
      "Learn Arduino programming basics",
      "Work with sensors and actuators",
      "Take home your robot creation",
      "Expert guidance throughout"
    ],
    prerequisites: "No prior experience needed",
    seats: "30 participants",
    fees: "₹800 (includes kit)"
  },
  {
    id: 4,
    name: "Environmental Awareness Campaign",
    date: "2026-01-25",
    time: "8:00 AM - 12:00 PM",
    venue: "Campus Grounds",
    description: "Join us in raising awareness about environmental issues through a massive tree plantation drive and campus cleanup initiative. Let's make our campus greener and cleaner together!",
    image: "/enviromental.jpg",
    tag: "Environment",
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
  },
  {
    id: 5,
    name: "Chess Tournament",
    date: "2026-06-14",
    time: "9:00 AM - 6:00 PM",
    venue: "Student Lounge, Building A",
    description: "Test your skills in our annual chess tournament. Compete against the best chess players and prove your strategic prowess. Open to all skill levels with separate categories.",
    image: "/chess-tournament.jpg",
    tag: "Chess",
    registerLink: "",
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
  },
  {
    id: 6,
    name: "Dance Showcase",
    date: "2026-09-28",
    time: "6:00 PM - 9:00 PM",
    venue: "Main Auditorium",
    description: "Experience various dance styles in our end-of-year showcase! Watch stunning performances featuring classical to contemporary, hip-hop to bharatanatyam. A mesmerizing evening of rhythm and artistic expression!",
    image: "/dance.jpg",
    tag: "Dance",
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
  },
  {
    id: 7,
    name: "Hackathon",
    date: "2026-07-12",
    time: "3:00 PM - 8:00 PM",
    venue: "Computer Science Building, Lab 3",
    description: "Code your way to victory in our 24-hour hackathon. A fast-paced competitive programming event where speed and accuracy matter! Test your coding skills and compete for prizes.",
    image: "/hackathon.jpg",
    tag: "Coding",
    registerLink: "",
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
  },
  {
    id: 8,
    name: "Book Fair",
    date: "2026-08-07",
    time: "10:00 AM - 6:00 PM",
    venue: "Library, Main Hall",
    description: "Discover new reads and meet authors at our annual book fair. Browse through hundreds of books, attend author sessions, and enjoy exclusive discounts on your favorite titles!",
    image: "/book-fair.jpg",
    tag: "Literature",
    registerLink: "",
    highlights: [
      "100+ book stalls",
      "Author meet and greet sessions",
      "Book signing opportunities",
      "Special discounts up to 40%",
      "Literary quiz competitions",
      "Refreshments available"
    ],
    prerequisites: "Open to all book lovers",
    seats: "Unlimited",
    fees: "Free entry"
  },
]

export default function EventCards({ searchTerm, activeFilter, showAll, setShowAll }) {
  const filteredEvents = events.filter(
    (event) =>
      (event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (activeFilter === "All" || event.tag.includes(activeFilter)),
  )

  const displayedEvents = showAll ? filteredEvents : filteredEvents.slice(0, 6)

  const [showModal, setShowModal] = useState(false)
  const [currModalId, setCurrModalId] = useState(null)

  function handleClick(e, id) {
    e.preventDefault();
    setCurrModalId(id);
    showModal ? setShowModal(false) : setShowModal(true);
    console.log(`Navigating to event with ID: ${id}`)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      
      {displayedEvents.map((event) => (
        <motion.div
          key={event.id}
          className="bg-gradient-to-br from-blue-800 to-fuchsia-950 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-[80vh] cursor-pointer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={(e) => handleClick(e, event.id)}
        >
          <img
            src={event.image || "/placeholder.svg"}
            alt={event.name}
            width={100}
            height={100}
            className="rounded-lg mb-4 w-full object-cover"
          />
          <h3 className="text-xl font-semibold mb-2 h-[4%]">{event.name}</h3>
          <p className="text-gray-300 my-4 h-[10%] line-clamp-2">{event.description}</p>
          <div className="flex justify-between items-center cursor-default">
            <span key={event.tag} className="inline-block bg-orange-500 text-white text-xs px-2 py-1 rounded">
              {event.tag}
            </span>
            <div className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded cursor-pointer">Know More</div>
            {
              event.date != "" && (
                <span className="inline-block bg-pink-600 text-white text-xs px-2 py-1 rounded">{event.date}</span>
              )
            }
          </div>
        </motion.div>
      ))}
      {filteredEvents.length > 6 && (
        <motion.button
          className="col-span-full mt-6 bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "View All Events"}
        </motion.button>
      )}
      {
        showModal && 
        <Modal 
          showModal={showModal}
          setShowModal={setShowModal}
          event = {events[currModalId-1]}
        />
      }
    </div>
  )
}