import { motion } from "framer-motion"

const categories = ["All", "Arts", "Academic", "Technology", "Sports"]

export default function Filters({ activeFilter, setActiveFilter }) {
  return (
    <motion.div
      className="flex space-x-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      {categories.map((category) => (
        <motion.button
          key={category}
          className={`px-3 py-1 rounded-full text-sm ${
            activeFilter === category ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300"
          }`}
          onClick={() => setActiveFilter(category)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category}
        </motion.button>
      ))}
    </motion.div>
  )
}