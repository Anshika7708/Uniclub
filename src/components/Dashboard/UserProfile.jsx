import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function UserProfile() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const user = {
    name: "Anshika Srivastava",
    email: "anshika@gmail.com",
    profileImage: "/gdg_logo.jpg",
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Function to handle Logout
  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Profile Image Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
        <img
          src={user.profileImage}
          alt="User Profile"
          className="w-10 h-10 rounded-full border-2 border-black"
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-indigo-900 text-gray-200 rounded-lg shadow-lg border border-purple-800">
          <div className="px-4 py-3 border-b border-purple-800">
            <p className="font-bold">{user.name}</p>
            <p className="text-sm text-gray-400">{user.email}</p>
          </div>
          <ul>
            {/* Navigate to Settings Page */}
            <li
              className="px-4 py-2 hover:bg-purple-800 cursor-pointer"
              onClick={() => {
                setIsOpen(false);
                navigate("/settings");
              }}
            >
              Settings
            </li>
            {/* Logout Option */}
            <li
              className="px-4 py-2 hover:bg-purple-800 cursor-pointer text-red-400 hover:text-red-300"
              onClick={handleLogout}
            >
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
