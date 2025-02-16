import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function UserProfile() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const profileRef = useRef(null);

  const user = {
    name: "Anshika Srivastava",
    email: "anshika@gmail.com",
    profileImage: "https://tse1.mm.bing.net/th?id=OIP.aglLZhcy2jBqdlE_odpEcQHaEK&pid=Api&P=0&h=180",
  };

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
        <img
          src={user.profileImage}
          alt="User Profile"
          className="w-10 h-10 rounded-full border-2 border-gray-400"
        />
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
            <p className="font-bold">{user.name}</p>
            <p className="text-sm text-gray-400">{user.email}</p>
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
              onClick={() => {
                setIsOpen(false);
                navigate("/");
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