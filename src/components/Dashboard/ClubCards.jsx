import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { db, auth } from "../../lib/firebase"
import { doc, getDoc, updateDoc, increment, arrayUnion, arrayRemove } from "firebase/firestore"
import { Users } from "lucide-react"
import { clubs } from "../../data/clubsData"

export default function ClubCards({ searchTerm, activeFilter, showAll, setShowAll }) {
  const navigate = useNavigate()
  const [clubMemberships, setClubMemberships] = useState({})
  const [memberCounts, setMemberCounts] = useState({})
  const [loading, setLoading] = useState({})

  useEffect(() => {
    // Initialize member counts from local data
    const initialCounts = {}
    clubs.forEach(club => {
      initialCounts[club.id] = club.memberCount
    })
    setMemberCounts(initialCounts)
    
    // Load user's club memberships from Firebase
    const loadMemberships = async () => {
      if (auth.currentUser) {
        try {
          const userDoc = await getDoc(doc(db, "users", auth.currentUser.uid))
          if (userDoc.exists()) {
            const joinedClubs = userDoc.data().joinedClubs || []
            const memberships = {}
            joinedClubs.forEach(clubId => {
              memberships[clubId] = true
            })
            setClubMemberships(memberships)
          }
        } catch (error) {
          console.error("Error loading memberships:", error)
        }
      }
    }
    
    loadMemberships()
  }, [])

  const handleCardClick = (clubId) => {
    navigate(`/club-details/${clubId}`)
  }

  const handleJoinClub = async (clubId, e) => {
    e.stopPropagation() // Prevent card click when clicking the button
    
    if (!auth.currentUser) {
      alert("Please sign in to join clubs")
      return
    }

    setLoading(prev => ({ ...prev, [clubId]: true }))

    try {
      const userRef = doc(db, "users", auth.currentUser.uid)
      const clubRef = doc(db, "clubs", clubId.toString())
      
      const isJoined = clubMemberships[clubId]

      if (isJoined) {
        // Leave club
        await updateDoc(userRef, {
          joinedClubs: arrayRemove(clubId)
        })
        
        // Try to update club member count (will work if document exists)
        try {
          await updateDoc(clubRef, {
            memberCount: increment(-1)
          })
        } catch (error) {
          console.log("Club document doesn't exist yet, updating local count only")
        }

        setClubMemberships(prev => ({ ...prev, [clubId]: false }))
        setMemberCounts(prev => ({ ...prev, [clubId]: prev[clubId] - 1 }))
      } else {
        // Join club
        await updateDoc(userRef, {
          joinedClubs: arrayUnion(clubId)
        })
        
        // Try to update club member count (will work if document exists)
        try {
          await updateDoc(clubRef, {
            memberCount: increment(1)
          })
        } catch (error) {
          console.log("Club document doesn't exist yet, updating local count only")
        }

        setClubMemberships(prev => ({ ...prev, [clubId]: true }))
        setMemberCounts(prev => ({ ...prev, [clubId]: prev[clubId] + 1 }))
      }
    } catch (error) {
      console.error("Error updating club membership:", error)
      alert("Failed to update membership. Please try again.")
    } finally {
      setLoading(prev => ({ ...prev, [clubId]: false }))
    }
  }

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
          className="bg-gradient-to-br from-blue-700 to-fuchsia-950 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col cursor-pointer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleCardClick(club.id)}
        >
          <div className="flex items-center mb-4">
            <img
              src={club.image || "/placeholder.svg"}
              alt={club.name}
              className="rounded-full mr-4 h-16 w-16 object-cover"
            />
            <h3 className="text-xl font-semibold">{club.name}</h3>
          </div>
          <p className="text-gray-300 mb-4 flex-grow">{club.description}</p>
          
          <div className="flex items-center justify-between mb-4">
            <span className="inline-block bg-orange-500 text-white text-xs px-2 py-1 rounded">{club.category}</span>
            <div className="flex items-center gap-1 text-gray-300">
              <Users size={16} />
              <span className="text-sm font-medium">{memberCounts[club.id] || club.memberCount}</span>
            </div>
          </div>

          <motion.button
            onClick={(e) => handleJoinClub(club.id, e)}
            disabled={loading[club.id]}
            className={`w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 ${
              clubMemberships[club.id]
                ? "bg-red-600 hover:bg-red-700 text-white"
                : "bg-green-600 hover:bg-green-700 text-white"
            } disabled:opacity-50 disabled:cursor-not-allowed`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {loading[club.id] ? "Loading..." : clubMemberships[club.id] ? "Leave Club" : "Join Club"}
          </motion.button>
        </motion.div>
      ))}
      {filteredClubs.length > 6 && (
        <motion.button
          className="col-span-full mt-6 bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
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