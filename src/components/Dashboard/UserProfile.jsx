import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../lib/firebase";

export default function UserProfile() {
  const [isOpen, setIsOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: ""
  });
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user && user.email) {
        // Get username from email (part before @)
        const username = user.email.split('@')[0];
        // Capitalize first letter of each word and handle special characters
        const formattedName = username
          .split(/[._-]/)
          .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
          .join(' ');
        
        setUserInfo({
          name: formattedName,
          email: user.email
        });
      } else {
        // If not logged in, redirect to login
        navigate('/login');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  // Handle closing when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      {/* Profile Image Button */}
      <button
        ref={profileRef}
        onClick={() => setIsOpen((prev) => !prev)}
        className="focus:outline-none"
      >
        <div className="w-10 h-10 rounded-full border-2 border-gray-400 bg-indigo-600 flex items-center justify-center">
          <span className="text-white text-lg font-medium">
            {userInfo.name.charAt(0)}
          </span>
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          ref={dropdownRef}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="absolute right-0 mt-2 w-48 bg-indigo-950 text-gray-200 rounded-lg shadow-xl border border-indigo-500"
        >
          <div className="px-4 py-3 border-b border-indigo-500">
            <p className="font-bold">{userInfo.name}</p>
            <p className="text-sm text-gray-400">{userInfo.email}</p>
          </div>
          <ul>
            {/* Navigate to Settings Page */}
            <li
              className="px-4 py-2 hover:bg-purple-800 hover:text-gray-100 cursor-pointer rounded-md transition-all"
              onClick={() => {
                setIsOpen(false);
                navigate("/settings");
              }}
            >
              Settings
            </li>
            {/* Logout Option */}
            <li
              className="px-4 py-2 hover:bg-purple-800 hover:text-gray-100 cursor-pointer text-red-400 hover:text-red-300 rounded-md transition-all"
              onClick={async () => {
                try {
                  await auth.signOut();
                  setIsOpen(false);
                  navigate("/login");
                } catch (error) {
                  console.error("Error signing out:", error);
                }
              }}
            >
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}