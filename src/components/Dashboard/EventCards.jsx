import { motion } from "framer-motion"
import Modal from "../ui/modal.jsx"
import { useState } from "react"
const events = [
  {
    id: 1,
    name: "Hack-O-Octo 2.0",
    date: "",
    description: "🐙 Hack-O-Octo 2.0 is HERE! 🚀✨\nReady to level up? This isn't just another hackathon; it's your shot at creating, competing, and conquering! Whether you're a coder, designer, or idea powerhouse, it's time to bring your A-game. 💡💻\n🌐 Sign up now: hackocto.tech 💥\n🖋 Be part of something big— register now and secure your spot!\n🔥 Why join?\n✅ Solve real-world challenges\n✅ Collaborate with tech enthusiasts\n✅ Win cool rewards 🏆\n✅ Build your network & boost your skills\n🗓 Register now! Submit your ideas before 12th March 2025!\n⏳ Don't wait—spots are limited, and you don't want to miss out! Let's innovate, one line of code at a time.",
    image: "/Hack-o-Octo.jpg",
    tag: "Technology",
    registerLink: "https://hackocto.tech/"
  },
  {
    id: 2,
    name: "Inter-University Debate Championship",
    date: "2023-08-05",
    description: "Compete with the best debaters from universities nationwide and win exciting prizes and opportunities to showcase your talent on a larger stage",
    image: "/placeholder.svg?height=100&width=100",
    tag: "Debate",
    registerLink: ""
  },
  {
    id: 3,
    name: "Robotics Workshop",
    date: "2023-09-10",
    description: "Learn the basics of robotics and build your first robot with our experts in this hands-on workshop for beginners",
    image: "/placeholder.svg?height=100&width=100",
    tag: "Robotics",
    registerLink: ""
  },
  {
    id: 4,
    name: "Environmental Awareness Campaign",
    date: "2023-07-22",
    description: "Join us in raising awareness about environmental issues",
    image: "/placeholder.svg?height=100&width=100",
    tag: "Environment",
    registerLink: "",
  },
  {
    id: 5,
    name: "Chess Tournament",
    date: "2023-08-20",
    description: "Test your skills in our annual chess tournament",
    image: "/placeholder.svg?height=100&width=100",
    tag: "Chess",
    registerLink: "",
  },
  {
    id: 6,
    name: "Dance Showcase",
    date: "2023-09-30",
    description: "Experience various dance styles in our end-of-year showcase",
    image: "/placeholder.svg?height=100&width=100",
    tag: "Dance",
    registerLink: "",
  },
  {
    id: 7,
    name: "Hackathon",
    date: "2023-10-15",
    description: "Code your way to victory in our 24-hour hackathon",
    image: "/placeholder.svg?height=100&width=100",
    tag: "Coding",
    registerLink: "",
  },
  {
    id: 8,
    name: "Book Fair",
    date: "2023-11-05",
    description: "Discover new reads and meet authors at our annual book fair",
    image: "/placeholder.svg?height=100&width=100",
    tag: "Literature",
    registerLink: "",
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