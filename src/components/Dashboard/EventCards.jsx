import { motion } from "framer-motion"

const events = [
  {
    id: 1,
    name: "Annual Photography Exhibition",
    date: "2023-07-15",
    description: "Showcase your best shots at our annual exhibition",
    image: "/placeholder.svg?height=100&width=100",
    tags: ["Photography", "Arts"],
  },
  {
    id: 2,
    name: "Inter-University Debate Championship",
    date: "2023-08-05",
    description: "Compete with the best debaters from universities nationwide",
    image: "/placeholder.svg?height=100&width=100",
    tags: ["Debate", "Academic"],
  },
  {
    id: 3,
    name: "Robotics Workshop",
    date: "2023-09-10",
    description: "Learn the basics of robotics and build your first robot",
    image: "/placeholder.svg?height=100&width=100",
    tags: ["Robotics", "Technology"],
  },
  {
    id: 4,
    name: "Environmental Awareness Campaign",
    date: "2023-07-22",
    description: "Join us in raising awareness about environmental issues",
    image: "/placeholder.svg?height=100&width=100",
    tags: ["Environment", "Social"],
  },
  {
    id: 5,
    name: "Chess Tournament",
    date: "2023-08-20",
    description: "Test your skills in our annual chess tournament",
    image: "/placeholder.svg?height=100&width=100",
    tags: ["Chess", "Games"],
  },
  {
    id: 6,
    name: "Dance Showcase",
    date: "2023-09-30",
    description: "Experience various dance styles in our end-of-year showcase",
    image: "/placeholder.svg?height=100&width=100",
    tags: ["Dance", "Arts"],
  },
  {
    id: 7,
    name: "Hackathon",
    date: "2023-10-15",
    description: "Code your way to victory in our 24-hour hackathon",
    image: "/placeholder.svg?height=100&width=100",
    tags: ["Coding", "Technology"],
  },
  {
    id: 8,
    name: "Book Fair",
    date: "2023-11-05",
    description: "Discover new reads and meet authors at our annual book fair",
    image: "/placeholder.svg?height=100&width=100",
    tags: ["Literature", "Academic"],
  },
]

export default function EventCards({ searchTerm, activeFilter, showAll, setShowAll }) {
  const filteredEvents = events.filter(
    (event) =>
      (event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (activeFilter === "All" || event.tags.includes(activeFilter)),
  )

  const displayedEvents = showAll ? filteredEvents : filteredEvents.slice(0, 6)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayedEvents.map((event) => (
        <motion.div
          key={event.id}
          className="bg-gradient-to-br from-blue-800 to-fuchsia-950 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <img
            src={event.image || "/placeholder.svg"}
            alt={event.name}
            width={100}
            height={100}
            className="rounded-lg mb-4 w-full object-cover"
          />
          <h3 className="text-xl font-semibold mb-2 h-[8%]">{event.name}</h3>
          <p className="text-gray-300 mb-4 h-[8%]">{event.description}</p>
          <div className="flex justify-between items-center ">
            <div className="flex space-x-2">
              {event.tags.map((tag) => (
                <span key={tag} className="inline-block bg-orange-400 text-white text-xs px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
            <span className="inline-block bg-pink-600 text-white text-xs px-2 py-1 rounded">{event.date}</span>
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
    </div>
  )
}