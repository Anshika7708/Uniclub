import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaLock, FaSignOutAlt, FaArrowLeft, FaChevronDown, FaChevronUp, FaQuestionCircle } from "react-icons/fa";

export default function Settings() {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("password");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [openQuestion, setOpenQuestion] = useState(null);
  const [messageSent, setMessageSent] = useState(false);

  const faqData = [
    { question: "How do I join a club?", answer: "To join a club, go to the club's page and click the 'Join' button. You may need approval from the club administrator." },
    { question: "How can I create a new club?", answer: "To create a new club, navigate to the 'Create Club' page under the Clubs section and fill out the required details." },
    { question: "How do I reset my password?", answer: "To reset your password, click on the 'Forgot Password' link on the login page. You'll receive an email with instructions to reset your password." },
    { question: "How can I update my profile information?", answer: "Go to the 'Profile' section in settings, update your information, and click 'Save Changes'." },
    { question: "How do I contact a club administrator?", answer: "You can contact a club administrator by visiting the club's page and clicking on the 'Contact Admin' button." },
  ];


  const handleUpdatePassword = () => password === confirmPassword ? alert("Password updated!") : alert("Passwords do not match");
  
  const handleLogout = () => {
    navigate("/");
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
        {["password", "help"].map((tab) => (
          <button 
            key={tab} 
            className={`p-3 rounded-lg text-left ${selectedTab === tab ? "bg-indigo-700" : "hover:bg-indigo-600"}`} 
            onClick={() => setSelectedTab(tab)}>
            {tab === "password" && <><FaLock className="inline mr-2" /> Change Password</>}
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
        {selectedTab === "password" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Change Password</h2>
            <input type="password" className="w-full p-3 rounded-lg bg-white/20 border border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4" placeholder="New Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="password" className="w-full p-3 rounded-lg bg-white/20 border border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <button onClick={handleUpdatePassword} className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg">Update Password</button>
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