import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, Calendar, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card.jsx";
import { Button } from "../ui/button.jsx";

const clubData = {
  id: 1,
  name: "Eloquence Consortium",
  tagline: "  Developing Personality and Communication Skills",
  logo: "/Eloquence.png",
  description:
    "The Eloquence Consortium is dedicated to developing personality and communication skills among university students. We provide a platform for students to enhance their public speaking, debate, and interpersonal skills through workshops, competitions, and regular practice sessions.",
  president: {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    image: "/GDG.png",
  },
  established: "2020-09-01",
  category: "Cultural",
  meetingSchedule: {
    day: "Every Tuesday",
    time: "6:00 PM - 8:00 PM",
    location: "Student Center, Room 101",
  },
  membersCount: 45,
};

export default function ClubDetailsPage() {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-500 text-white transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
      <main className="container mx-auto px-10 py-12">
        {/* Header */}
        <section className="mb-12 flex flex-col items-center text-center">
          <div className="flex items-center gap-4">
            <img src={clubData.logo} alt="Club Logo" className="w-16 h-16 rounded-full" />
            <h1 className="text-5xl font-bold">{clubData.name}</h1>
          </div>
          {clubData.tagline && <p className="text-xl text-gray-300 italic mt-2">{clubData.tagline}</p>}
        </section>

        {/* About Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">About Us</h2>
          <Card className="bg-gradient-to-br from-blue-700 to-fuchsia-950 text-white shadow-lg">
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
          <Card className="bg-gradient-to-br from-blue-700 to-fuchsia-950 text-white shadow-lg">
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
          <Card className="bg-gradient-to-br from-blue-700 to-fuchsia-950 text-white shadow-lg">
            <CardHeader><CardTitle>Established</CardTitle></CardHeader>
            <CardContent><p>{new Date(clubData.established).toLocaleDateString()}</p></CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-blue-700 to-fuchsia-950 text-white shadow-lg">
            <CardHeader><CardTitle>Category</CardTitle></CardHeader>
            <CardContent><p>{clubData.category}</p></CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-blue-700 to-fuchsia-950 text-white shadow-lg">
            <CardHeader><CardTitle>Meetings</CardTitle></CardHeader>
            <CardContent>
              <p className="flex items-center"><Calendar className="mr-2 h-4 w-4" /> {clubData.meetingSchedule.day}</p>
              <p className="flex items-center"><Clock className="mr-2 h-4 w-4" /> {clubData.meetingSchedule.time}</p>
              <p className="flex items-center"><MapPin className="mr-2 h-4 w-4" /> {clubData.meetingSchedule.location}</p>
            </CardContent>
          </Card>
        </section>

        {/* Membership Section */}
        <section className="mb-12 text-center">
          <h2 className="text-3xl font-semibold mb-4">Membership</h2>
          <Card className="bg-gradient-to-br from-blue-700 to-fuchsia-950 text-white shadow-lg p-6">
            <CardContent className="flex flex-col items-center">
              <p className="text-xl font-semibold">Total Members: {clubData.membersCount}</p>
              <Button className="mt-4">Join Club</Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}