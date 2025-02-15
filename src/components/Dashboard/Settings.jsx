import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaEnvelope, FaBell, FaTrash } from "react-icons/fa";

export default function Settings() {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("profile");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [notifications, setNotifications] = useState(true);
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState({ name: "", bio: "", profilePicture: "" });
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleUpdateProfile = () => alert("Profile updated successfully!");
  const handleUpdatePassword = () => password === confirmPassword ? alert("Password updated!") : alert("Passwords do not match");
  const handleUpdateEmail = () => alert(`Email updated to: ${email}`);
  const handleDeleteAccount = () => {
    setShowDeleteConfirm(true);
    setSelectedTab("delete");
  };
  const confirmDeleteAccount = () => {
    alert("Account deleted");
    setShowDeleteConfirm(false);
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-blue-800 to-pink-800 text-white flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-blue-900 p-6 flex flex-col space-y-4">
        <h2 className="text-2xl font-bold">Settings</h2>
        {["profile", "password", "email", "notifications"].map((tab) => (
          <button 
            key={tab} 
            className={`p-3 rounded-lg text-left ${selectedTab === tab ? "bg-indigo-700" : "hover:bg-indigo-600"}`} 
            onClick={() => {
              setSelectedTab(tab);
              setShowDeleteConfirm(false); // Close delete confirmation when switching tabs
            }}>
            {tab === "profile" && <><FaUser className="inline mr-2" /> Profile</>}
            {tab === "password" && <><FaLock className="inline mr-2" /> Change Password</>}
            {tab === "email" && <><FaEnvelope className="inline mr-2" /> Change Email</>}
            {tab === "notifications" && <><FaBell className="inline mr-2" /> Notifications</>}
          
          </button>
        ))}
       <button 
          className="p-3 rounded-lg text-left bg-red-600 hover:bg-red-700" 
          onClick={handleDeleteAccount}>
          <FaTrash className="inline mr-2" /> Delete Account
        </button>
      </div>
      
      {/* Content Area */}
      <div className="w-3/4 p-8 overflow-y-auto">
        {selectedTab === "profile" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
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
            <h2 className="text-xl font-semibold mb-4">Notifications</h2>
            <label className="flex items-center cursor-pointer">
              <input type="checkbox" className="hidden" checked={notifications} onChange={() => setNotifications(!notifications)} />
              <div className={`w-10 h-5 flex items-center rounded-full p-1 transition-colors ${notifications ? "bg-green-600" : "bg-gray-400"}`}>
                <div className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ${notifications ? "translate-x-5" : "translate-x-0"}`}></div>
              </div>
              <span className={`ml-3 font-semibold ${notifications ? "text-indigo-300" : "text-gray-300"}`}>{notifications ? "Enabled" : "Disabled"}</span>
            </label>
          </div>
        )}
        {selectedTab === "delete" && showDeleteConfirm && (
          <div className="mt-4 p-4 bg-red-800 text-white rounded-lg">
             <h2 className="text-xl font-semibold mb-4">Delete Account</h2>
            <p>Are you sure you want to delete your account? This action cannot be undone.</p>
            <button onClick={confirmDeleteAccount} className="mt-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg">Confirm Delete</button>
            <button onClick={() => setShowDeleteConfirm(false)} className="ml-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg">Cancel</button>
          </div>
        )}
      </div>
    </div>
  );
}
