import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronDown, ChevronUp, Calendar, MapPin, Clock, ArrowLeft, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import Modal from "../ui/modal";
import { clubs } from "../../data/clubsData";
import { db, auth } from "../../lib/firebase";
import { doc, getDoc, updateDoc, increment, arrayUnion, arrayRemove } from "firebase/firestore";

export default function ClubDetailsPage() {
  const { clubId } = useParams();
  const navigate = useNavigate();
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currModalId, setCurrModalId] = useState(null);
  const [isJoined, setIsJoined] = useState(false);
  const [memberCount, setMemberCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const clubData = clubs.find(club => club.id === parseInt(clubId));

  useEffect(() => {
    if (!clubData) {
      navigate('/dashboard');
      return;
    }
    
    setIsLoaded(true);
    setMemberCount(clubData.memberCount);
    
    // Load user's membership status
    const loadMembershipStatus = async () => {
      if (auth.currentUser) {
        try {
          const userDoc = await getDoc(doc(db, "users", auth.currentUser.uid));
          if (userDoc.exists()) {
            const joinedClubs = userDoc.data().joinedClubs || [];
            setIsJoined(joinedClubs.includes(parseInt(clubId)));
          }
        } catch (error) {
          console.error("Error loading membership status:", error);
        }
      }
    };
    
    loadMembershipStatus();
  }, [clubId, clubData, navigate]);

  if (!clubData) {
    return null;
  }

  const handleJoinClub = async () => {
    if (!auth.currentUser) {
      alert("Please sign in to join clubs");
      return;
    }

    setLoading(true);

    try {
      const userRef = doc(db, "users", auth.currentUser.uid);
      const clubRef = doc(db, "clubs", clubId);
      
      if (isJoined) {
        // Leave club
        await updateDoc(userRef, {
          joinedClubs: arrayRemove(parseInt(clubId))
        });
        
        try {
          await updateDoc(clubRef, {
            memberCount: increment(-1)
          });
        } catch (error) {
          console.log("Club document doesn't exist yet, updating local count only");
        }

        setIsJoined(false);
        setMemberCount(prev => prev - 1);
      } else {
        // Join club
        await updateDoc(userRef, {
          joinedClubs: arrayUnion(parseInt(clubId))
        });
        
        try {
          await updateDoc(clubRef, {
            memberCount: increment(1)
          });
        } catch (error) {
          console.log("Club document doesn't exist yet, updating local count only");
        }

        setIsJoined(true);
        setMemberCount(prev => prev + 1);
      }
    } catch (error) {
      console.error("Error updating club membership:", error);
      alert("Failed to update membership. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  function handleClick(e, id) {
    e.preventDefault();
    setCurrModalId(id);
    showModal ? setShowModal(false) : setShowModal(true);
    console.log(`Navigating to event with ID: ${id}`)
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-500 text-white transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
      <main className="container mx-auto px-10 py-12">
        
        {/* Back Button */}
        <button
          onClick={() => navigate('/dashboard')}
          className="flex items-center gap-2 mb-6 text-gray-300 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Dashboard</span>
        </button>

        {/* Header */}
        <section className="mb-12 flex flex-col items-center text-center">
          <div className="flex items-center gap-4">
            <img src={clubData.image} alt="Club Logo" className="w-16 h-16 rounded-full object-cover" />
          </div>
            <h1 className="text-5xl font-bold">{clubData.name}</h1>
          {clubData.tagline && <p className="text-xl text-gray-300 italic mt-2">{clubData.tagline}</p>}
          
          {/* Member Count and Join Button */}
          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center gap-2 bg-blue-800 px-4 py-2 rounded-lg">
              <Users size={20} />
              <span className="font-semibold">{memberCount} Members</span>
            </div>
            <motion.button
              onClick={handleJoinClub}
              disabled={loading}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                isJoined
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-green-600 hover:bg-green-700"
              } disabled:opacity-50 disabled:cursor-not-allowed`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {loading ? "Loading..." : isJoined ? "Leave Club" : "Join Club"}
            </motion.button>
          </div>
        </section>

        {/* About Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">About Us</h2>
          <Card className="bg-gradient-to-br from-blue-700 to-fuchsia-950 text-white shadow-lg hover:scale-102 transition-transform duration-300">
            <CardContent className="p-6">
              <p className={`text-gray-200 ${showFullDescription ? "" : "line-clamp-3"}`}>{clubData.description}</p>
              <Button onClick={() => setShowFullDescription(!showFullDescription)} className="mt-3">
                {showFullDescription ? <>Read Less <ChevronUp className="ml-1 h-4 w-4" /></> : <>Read More <ChevronDown className="ml-1 h-4 w-4" /></>}
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Key Information Section */}
        <section className="mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-blue-700 to-fuchsia-950 text-white shadow-lg hover:scale-105 transition-transform duration-300">
            <CardHeader><CardTitle>President</CardTitle></CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <img src={clubData.president.image} alt={clubData.president.name} className="w-12 h-12 rounded-full" />
                <div>
                  <p className="font-semibold">{clubData.president.name}</p>
                  <p className="text-sm text-gray-300">{clubData.president.email}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-blue-700 to-fuchsia-950 text-white shadow-lg  hover:scale-105 transition-transform duration-300">
            <div className="flex-col">
            <div>
            <CardHeader><CardTitle>Established</CardTitle></CardHeader>
            <CardContent><p className="mt-[-1rem]">{new Date(clubData.established).toLocaleDateString()}</p></CardContent>
            </div>
            <div className="mt-[-2rem]">
            <CardHeader><CardTitle>Category</CardTitle></CardHeader>
            <CardContent><p className="mt-[-1rem]">{clubData.category}</p></CardContent>
            </div>
            </div>
          </Card>
          <Card className="bg-gradient-to-br from-blue-700 to-fuchsia-950 text-white shadow-lg  hover:scale-103 transition-transform duration-300">
            <CardHeader><CardTitle>Meetings</CardTitle></CardHeader>
            <CardContent>
              <p className="flex items-center"><Calendar className="mr-2 h-4 w-4" /> {clubData.meetingSchedule.day}</p>
              <p className="flex items-center"><Clock className="mr-2 h-4 w-4" /> {clubData.meetingSchedule.time}</p>
              <p className="flex items-center"><MapPin className="mr-2 h-4 w-4" /> {clubData.meetingSchedule.location}</p>
            </CardContent>
          </Card>
        </section>

        {/* Club Vacancies Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Club Vacancies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clubData.vacancies.map((vacancy, index) => (
              <Card key={index} className="bg-gradient-to-br from-blue-700 to-fuchsia-950 text-white shadow-lg hover:scale-105 transition-transform duration-300">
                <CardHeader><CardTitle>{vacancy}</CardTitle></CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-200">Looking for a dedicated individual to join as {vacancy}.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Club Achievements Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Club Achievements</h2>
          <Card className="bg-gradient-to-br from-blue-700 to-fuchsia-950 text-white shadow-lg hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6">
              <ul>{clubData.achievements.map((achievement, index) => (<li key={index}>• {achievement}</li>))}</ul>
            </CardContent>
          </Card>
        </section>

        {/* Announcements Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Announcements</h2>
          <Card className="bg-gradient-to-br from-blue-700 to-fuchsia-950 text-white shadow-lg hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6">
              <ul>{clubData.announcements.map((announcement, index) => (<li key={index}>• {announcement}</li>))}</ul>
            </CardContent>
          </Card>
        </section>

        {/* Events Section */}
        {clubData.events && clubData.events.length > 0 && (
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubData.events.map((event) => (
            <motion.div
              key={event.id}
              className="bg-gradient-to-br from-blue-800 to-fuchsia-950 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-[85vh] cursor-pointer"
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
              <p className="text-gray-300 my-4 h-[8%] line-clamp-2">{event.description}</p>
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
          </div>
        </section>
        )}

        {/* Gallery Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Gallery</h2>
          <div className="flex gap-4 overflow-x-auto overflow-y-hidden">
            {clubData.gallery.map((image, index) => (
              <img key={index} src={image} alt={`Event ${index + 1}`} className="h-80 object-cover rounded-lg hover:scale-105 transition-transform duration-300" />
            ))}
          </div>
        </section>

      </main>
      {
        showModal && 
        <Modal 
          showModal={showModal}
          setShowModal={setShowModal}
          event = {clubData.events[currModalId-1]}
        />
      }
    </div>
  );
}