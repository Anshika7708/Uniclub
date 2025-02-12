import { motion } from "framer-motion"

const clubs = [
  {
    id: 1,
    name: "Google Developer Student Club",
    description: "Learn new technologies and collaborate on projects with peers and mentors",
    
    image: "gdg_logo.jpg",
    //give code to break line after description
    
    category: "Arts",
  },
  {
    id: 2,
    name: "Debate Society",
    description: "Enhance your public speaking and critical thinking skills",
    image: "https://static.vecteezy.com/system/resources/thumbnails/017/207/607/small/debate-icon-simple-element-from-business-management-collection-creative-debate-icon-for-web-design-templates-infographics-and-more-vector.jpg",
    category: "Academic",
  },
  {
    id: 3,
    name: "Robotics Club",
    description: "Build and program robots for competitions and fun",
    image: "https://images-platform.99static.com//9pruL3GMSNpmFA6rrYtb8tlGCeU=/86x1262:1113x2290/fit-in/500x500/99designs-contests-attachments/131/131688/attachment_131688576",
    category: "Technology",
  },
  {
    id: 4,
    name: "Environmental Club",
    description: "Promote sustainability and environmental awareness",
    image: "https://shopequo.com/cdn/shop/articles/1._anh_bia_2b83c021-34fe-465e-8a3c-520e5c73e9c5.jpg?v=1701595625&width=1600",
    category: "Social",
  },
  {
    id: 5,
    name: "Chess Club",
    description: "Improve your strategic thinking and compete in tournaments",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/ChessSet.jpg",
    category: "Games",
  },
  {
    id: 6,
    name: "Dance Troupe",
    description: "Express yourself through various dance styles and performances",
    image: "https://www.shutterstock.com/image-photo/butterfly-600nw-152795234.jpg",
    category: "Arts",
  },
  {
    id: 7,
    name: "Coding Club",
    description: "Learn programming languages and work on exciting projects",
    image: "/placeholder.svg",
    category: "Technology",
  },
  {
    id: 8,
    name: "Book Club",
    description: "Discuss literature and share your love for reading",
    image: "/placeholder.svg",
    category: "Academic",
  },
]

export default function ClubCards({ searchTerm, activeFilter, showAll, setShowAll }) {
  const filteredClubs = clubs.filter(
    (club) =>
      (club.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        club.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (activeFilter === "All" || club.category === activeFilter),
  )

  const displayedClubs = showAll ? filteredClubs : filteredClubs.slice(0, 6)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayedClubs.map((club) => (
        <motion.div
          key={club.id}
          className="bg-gradient-to-br from-blue-800 to-fuchsia-950 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center mb-4 h-[35%]">
            <img
              src={club.image || "/placeholder.svg"}
              alt={club.name}
              className="rounded-full mr-4 h-16 w-16 object-cover"
            />
            <h3 className="text-xl font-semibold">{club.name}</h3>
          </div>
          <p className="text-gray-300 mb-4 h-[35%]">{club.description}</p>
          <span className="inline-block bg-pink-600 text-white text-xs px-2 py-1 rounded">{club.category}</span>
        </motion.div>
      ))}
      {filteredClubs.length > 6 && (
        <motion.button
          className="col-span-full mt-6 bg-fuchsia-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "View All Clubs"}
        </motion.button>
      )}
    </div>
  )
}