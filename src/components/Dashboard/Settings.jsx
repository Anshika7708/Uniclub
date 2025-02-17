import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaEnvelope, FaBell, FaSignOutAlt, FaCamera, FaArrowLeft, FaChevronDown, FaChevronUp , FaQuestionCircle} from "react-icons/fa";

export default function Settings() {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("profile");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [notifications, setNotifications] = useState(true);
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState({ 
    name: "", 
    bio: "", 
    profilePicture: "/DP.jpg"
  });
  const [openQuestion, setOpenQuestion] = useState(null);
  const [messageSent, setMessageSent] = useState(false);

  const faqData = [
    { question: "How do I join a club?", answer: "To join a club, go to the club's page and click the 'Join' button. You may need approval from the club administrator." },
    { question: "How can I create a new club?", answer: "To create a new club, navigate to the 'Create Club' page under the Clubs section and fill out the required details." },
    { question: "How do I reset my password?", answer: "To reset your password, click on the 'Forgot Password' link on the login page. You'll receive an email with instructions to reset your password." },
    { question: "How can I update my profile information?", answer: "Go to the 'Profile' section in settings, update your information, and click 'Save Changes'." },
    { question: "How do I contact a club administrator?", answer: "You can contact a club administrator by visiting the club's page and clicking on the 'Contact Admin' button." },
  ];


  const handleUpdateProfile = () => alert("Profile updated successfully!");
  const handleUpdatePassword = () => password === confirmPassword ? alert("Password updated!") : alert("Passwords do not match");
  const handleUpdateEmail = () => alert(`Email updated to: ${email}`);
  
  const handleLogout = () => {
    navigate("/");
  };

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile({ ...profile, profilePicture: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index); // Toggle open/close
  };

  const handleSendMessage = () => {
    // Trigger an alert message when the "Send Message" button is clicked
    setMessageSent(true);
    setTimeout(() => setMessageSent(false), 3000); // Reset after 3 seconds
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-blue-800 to-pink-800 text-white flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-blue-900 p-6 flex flex-col space-y-4">
        <button className="flex items-center text-white mb-4" onClick={() => navigate(-1)}>
          <FaArrowLeft className="mr-2" /> Back
        </button>
        <h2 className="text-2xl font-bold">Settings</h2>
        {["profile", "password", "email", "notifications","help"].map((tab) => (
          <button 
            key={tab} 
            className={`p-3 rounded-lg text-left ${selectedTab === tab ? "bg-indigo-700" : "hover:bg-indigo-600"}`} 
            onClick={() => setSelectedTab(tab)}>
            {tab === "profile" && <><FaUser className="inline mr-2" /> Profile</>}
            {tab === "password" && <><FaLock className="inline mr-2" /> Change Password</>}
            {tab === "email" && <><FaEnvelope className="inline mr-2" /> Change Email</>}
            {tab === "notifications" && <><FaBell className="inline mr-2" /> Notifications</>}
            {tab === "help" && <><FaQuestionCircle className="inline mr-2" /> Help & Support</>}
          </button>
        ))}
        <button 
          className="p-3 rounded-lg text-left bg-gray-400 hover:bg-gray-500 text-red-700" 
          onClick={handleLogout}>
          <FaSignOutAlt className="inline mr-2" /> Logout
        </button>
      </div>
      
      {/* Content Area */}
      <div className="w-3/4 p-8 overflow-y-auto">
        {selectedTab === "profile" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
            <div className="mb-4 flex flex-col items-center">
              <div className="relative">
                {profile.profilePicture ? (
                  <img src={profile.profilePicture} alt="Profile" className="w-24 h-24 rounded-full border-4 border-indigo-400 shadow-lg" />
                ) : (
                  <div className="w-24 h-24 bg-gray-400 rounded-full flex items-center justify-center text-3xl font-bold text-white shadow-lg">
                    ?
                  </div>
                )}
                <label className="absolute bottom-0 right-0 bg-indigo-600 p-2 rounded-full cursor-pointer shadow-md hover:bg-indigo-700">
                  <FaCamera className="text-white" />
                  <input type="file" accept="image/*" className="hidden" onChange={handleProfilePictureChange} />
                </label>
              </div>
              <p className="mt-4 text-sm text-gray-300">Change Profile Picture</p>
            </div>
            <input type="text" className="w-full p-3 rounded-lg bg-white/20 border border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4" placeholder="Full Name" value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} />
            <textarea className="w-full p-3 rounded-lg bg-white/20 border border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4" placeholder="Bio" value={profile.bio} onChange={(e) => setProfile({ ...profile, bio: e.target.value })} />
            <button onClick={handleUpdateProfile} className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg">Update Profile</button>
          </div>
        )}
        {selectedTab === "password" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Change Password</h2>
            <input type="password" className="w-full p-3 rounded-lg bg-white/20 border border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4" placeholder="New Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="password" className="w-full p-3 rounded-lg bg-white/20 border border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <button onClick={handleUpdatePassword} className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg">Update Password</button>
          </div>
        )}
        {selectedTab === "email" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Change Email</h2>
            <input type="email" className="w-full p-3 rounded-lg bg-white/20 border border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4" placeholder="New Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button onClick={handleUpdateEmail} className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg">Update Email</button>
          </div>
        )}
         {selectedTab === "notifications" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Notification Settings</h2>
            <label className="flex items-center space-x-2">
              <span>Enable Notifications</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" checked={notifications} onChange={() => setNotifications(!notifications)} className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-500 dark:peer-focus:ring-indigo-600 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-5 peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </label>
          </div>
        )}
        {selectedTab === "help" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Help & Support</h2>

            {/* FAQ Section */}
            <h3 className="text-lg font-semibold mb-2">Frequently Asked Questions</h3>
            <div className="p-4 rounded-lg">
              {faqData.map((item, index) => (
                <div key={index} className="border-b border-indigo-600">
                  <button className="w-full text-left p-3 flex justify-between items-center focus:outline-none" onClick={() => toggleQuestion(index)}>
                    <span className="text-white">{item.question}</span>
                    {openQuestion === index ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                  {openQuestion === index && <p className="p-3 text-gray-300">{item.answer}</p>}
                </div>
              ))}
            </div>

            {/* Contact Support Section */}
            <h3 className="text-lg font-semibold mt-4">Contact Support</h3>
            <input type="text" className="w-full p-3 rounded-lg bg-white/20 border border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4" placeholder="Name" />
            <input type="email" className="w-full p-3 rounded-lg bg-white/20 border border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4" placeholder="Email" />
            <textarea className="w-full p-3 rounded-lg bg-white/20 border border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4" placeholder="Message"></textarea>
            <button onClick={handleSendMessage} className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg">Send Message</button>
            {messageSent && <div className="text-green-500 mt-2">Message sent successfully!</div>} {/* Success message */}
          </div>
        )}
      </div>
    </div>
  );
}