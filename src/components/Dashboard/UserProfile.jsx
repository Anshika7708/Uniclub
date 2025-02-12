import { useState } from "react";

export default function UserProfile() {
  const [isOpen, setIsOpen] = useState(false);

  // Dummy user data (replace this with real user data later)
  const user = {
    name: "Anshika Srivastava",
    email: "anshika@gmail.com",
    profileImage: "/gdg_logo.jpg", // Image stored in the public folder
  };

  return (
    <div className="relative">
      {/* Profile Image */}
      <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
        <img
          src={user.profileImage}
          alt="User Profile"
          className="w-10 h-10 rounded-full border-2 border-white"
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white text-gray-900 rounded-lg shadow-lg">
          <div className="px-4 py-3 border-b">
            <p className="font-bold">{user.name}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
          <ul>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600">Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
}
