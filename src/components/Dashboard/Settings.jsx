import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaLock, FaSignOutAlt, FaArrowLeft, FaChevronDown, FaChevronUp, FaQuestionCircle, FaEye, FaEyeSlash } from "react-icons/fa";
import { auth } from '../../lib/firebase';
import { updatePassword } from 'firebase/auth';

export default function Settings() {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("password");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqData = [
    { question: "How do I join a club?", answer: "To join a club, go to the club's page and click the 'Join' button. You may need approval from the club administrator." },
    { question: "How can I create a new club?", answer: "To create a new club, navigate to the 'Create Club' page under the Clubs section and fill out the required details." },
    { question: "How do I reset my password?", answer: "To reset your password, click on the 'Forgot Password' link on the login page. You'll receive an email with instructions to reset your password." },
    { question: "How can I update my profile information?", answer: "Go to the 'Profile' section in settings, update your information, and click 'Save Changes'." },
    { question: "How do I contact a club administrator?", answer: "You can contact a club administrator by visiting the club's page and clicking on the 'Contact Admin' button." },
  ];


  const handleUpdatePassword = async () => {
    if (!password || !confirmPassword) {
      alert("Please fill in both password fields");
      return;
    }
    
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      alert("Password should be at least 6 characters long");
      return;
    }

    try {
      const user = auth.currentUser;
      if (!user) {
        alert("You must be logged in to change your password");
        navigate("/login");
        return;
      }

      await updatePassword(user, password);
      alert("Password updated successfully! Please login with your new password.");
      await auth.signOut();
      navigate("/login");
    } catch (error) {
      console.error("Error updating password:", error);
      if (error.code === "auth/requires-recent-login") {
        alert("For security reasons, please sign in again before changing your password");
        await auth.signOut();
        navigate("/login");
      } else {
        alert(error.message || "Failed to update password. Please try again.");
      }
    }
  };
  
  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
      navigate("/");
    }
  };

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index); // Toggle open/close
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
            <div className="relative mb-4">
              <input 
                type={showPassword ? "text" : "password"} 
                className="w-full p-3 rounded-lg bg-white/20 border border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                placeholder="New Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>
            <div className="mb-4">
              <input 
                type="password"
                className="w-full p-3 rounded-lg bg-white/20 border border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                placeholder="Confirm Password" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
              />
            </div>
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
          </div>
        )}
      </div>
    </div>
  );
}