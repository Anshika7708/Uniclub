import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, Calendar, MapPin, Clock, Megaphone, Image } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import Modal from "../ui/modal";
const clubData = {
  id: 1,
  name: "Eloquence Consortium",
  tagline: "Developing Personality and Communication Skills",
  logo: "/Eloquence.png",
  description:
    "The Eloquence Consortium is dedicated to developing personality and communication skills among university students. We provide a platform for students to enhance their public speaking, debate, and interpersonal skills through workshops, competitions, and regular practice sessions.",
  president: {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuxtfpGFdKTvKOD2h3DsHS6djboHVJNNTUbQ&s",
  },
  established: "2020-09-01",
  category: "Cultural",
  meetingSchedule: {
    day: "Every Tuesday",
    time: "6:00 PM - 8:00 PM",
    location: "Student Center, Room 101",
  },
  achievements: ["Won Best Club Award 2023", "Hosted National Debate Championship"],
  vacancies: ["Event Coordinator", "Social Media Manager"],
  announcements: ["Next meeting on 15th March", "New workshop on public speaking coming soon!"],
  gallery: ["QuizWuiz.jpg", "/Peer.jpg", "/DP.jpg"],
  events: [
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
    
  ]
};

export default function ClubDetailsPage() {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const [showModal, setShowModal] = useState(false)
  const [currModalId, setCurrModalId] = useState(null)

  function handleClick(e, id) {
    e.preventDefault();
    setCurrModalId(id);
    showModal ? setShowModal(false) : setShowModal(true);
    console.log(`Navigating to event with ID: ${id}`)
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-500 text-white transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
      <main className="container mx-auto px-10 py-12">
        
        {/* Header */}
        <section className="mb-12 flex flex-col items-center text-center">
          <div className="flex items-center gap-4">
            <img src={clubData.logo} alt="Club Logo" className="w-16 h-16 rounded-full" />
          </div>
            <h1 className="text-5xl font-bold">{clubData.name}</h1>
          {clubData.tagline && <p className="text-xl text-gray-300 italic mt-2">{clubData.tagline}</p>}
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
                <CardContent className="p-6 flex flex-col items-center">
                  <p className="text-gray-200">Looking for a dedicated individual to join as {vacancy}.</p>
                  <Button className="mt-4">Apply Now</Button>
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