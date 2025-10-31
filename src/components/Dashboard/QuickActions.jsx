import { motion } from "framer-motion"
import { Plus } from "lucide-react"

export default function QuickActions() {
  return (
    <motion.div
      className="flex space-x-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <motion.button
        className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded flex items-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Plus size={16} className="mr-2" />
        Create Event
      </motion.button>
    </motion.div>
  )
}