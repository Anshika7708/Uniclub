import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const App = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-br from-blue-900 via-gray-800 to-blue-700 text-white flex flex-col justify-center items-center relative overflow-hidden">
      {/* Sign-Up Button */}
      <Link
        className="absolute top-4 right-4 bg-white text-blue-900 px-6 py-2 rounded-full font-bold hover:bg-gray-200 transition-all"
        to={"/login"}
      >
        Sign Up
      </Link>

      {/* Welcome Section */}
      <motion.div
        className="text-center max-w-2xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to UniClub</h1>
        <p className="text-xl md:text-2xl mb-8">
          Explore. Connect. Thrive.
        </p>
        <p className="text-lg md:text-xl mb-12">
          Join UniClub today and explore a world of opportunities.
        </p>
        <Link
          className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all"
          to={"/login"}
        >
          Get Started
        </Link>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full opacity-50"
        animate={{ scale: [1, 1.5, 1], rotate: [0, 360, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      ></motion.div>
      <motion.div
        className="absolute bottom-20 right-20 w-32 h-32 bg-purple-500 rounded-full opacity-50"
        animate={{ scale: [1, 1.5, 1], rotate: [0, 360, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      ></motion.div>
      <motion.div
        className="absolute bottom-5 left-20 w-24 h-24 bg-pink-500 rounded-full opacity-50"
        animate={{ scale: [1, 1.5, 1], rotate: [0, 360, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      ></motion.div>
    </div>
  );
};

export default App;

