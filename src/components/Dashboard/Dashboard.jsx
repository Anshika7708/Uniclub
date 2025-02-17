import { useState } from "react";
import { motion } from "framer-motion";
import ClubCards from "./ClubCards";
import EventCards from "./EventCards";
import SearchBar from "./SearchBar";
import Filters from "./Filters";
import QuickActions from "./QuickActions";
import UserProfile from "./UserProfile";

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAllClubs, setShowAllClubs] = useState(false);
  const [showAllEvents, setShowAllEvents] = useState(false);

  return (
    <div className="min-w-screen min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-500 text-white p-8">
      <main className="max-w-7xl mx-auto">
        {/* Top Navbar */}
        <div className="flex justify-between items-center mb-8">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <div className="flex items-center gap-4">
            <QuickActions />
            {/* <UserProfile /> */}
          </div>
        </div>

        {/* Filters Section */}
        <div className="mb-8">
          <Filters activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
        </div>

        {/* Clubs Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Featured Clubs</h2>
          <ClubCards
            searchTerm={searchTerm}
            activeFilter={activeFilter}
            showAll={showAllClubs}
            setShowAll={setShowAllClubs}
          />
        </motion.section>

        {/* Events Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold my-8">Upcoming Events</h2>
          <EventCards
            searchTerm={searchTerm}
            activeFilter={activeFilter}
            showAll={showAllEvents}
            setShowAll={setShowAllEvents}
          />
        </motion.section>
      </main>
    </div>
  );
}