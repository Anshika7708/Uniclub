import { motion } from "framer-motion"
import { Search } from "lucide-react"

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <motion.div
      className="relative flex-grow mr-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <input
        type="text"
        placeholder="Search clubs and events..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="bg-gray-800 text-white rounded-full py-2 px-4 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
      <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
    </motion.div>
  )
}