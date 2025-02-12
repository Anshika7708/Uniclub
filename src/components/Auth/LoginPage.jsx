import { useState } from "react";
import SigninForm from "./SigninForm.jsx";
import SignupForm from "./SignupForm.jsx";
import LeftOverlayContent from "./LeftOverlayContent.jsx";
import RightOverlayContent from "./RightOverlayContent.jsx";

const LoginPage = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const overlayBg = "bg-gradient-to-br from-blue-900 via-gray-800 to-blue-900";

  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-sky-700">  

      <div className="relative w-[900px] h-[550px] bg-white overflow-hidden rounded-lg shadow-lg">
        
        {/* Sign In Section */}
        <div
          className={`absolute top-0 left-0 h-full w-1/2 flex justify-center items-center transition-all duration-700 ease-in-out z-20 ${
            isAnimated ? "translate-x-full opacity-0" : "opacity-100"
          }`}
        >
          <SigninForm />
        </div>

        {/* Sign Up Section */}
        <div
          className={`absolute top-0 left-0 h-full w-1/2 flex justify-center items-center transition-all duration-700 ease-in-out ${
            isAnimated ? "translate-x-full opacity-100 z-50" : "opacity-0 z-10"
          }`}
        >
          <SignupForm />
        </div>

        {/* Overlay Section */}
        <div
          className={`absolute top-0 left-1/2 w-1/2 h-full flex justify-center items-center overflow-hidden transition-transform duration-700 ease-in-out ${
            isAnimated ? "-translate-x-full" : ""
          }`}
        >
          <div
            className={`${overlayBg} relative w-full h-full flex flex-col items-center justify-center p-8`}
          >
            {/* Overlay Content */}
            {!isAnimated ? (
              <LeftOverlayContent isAnimated={isAnimated} setIsAnimated={setIsAnimated} />
            ) : (
              <RightOverlayContent isAnimated={isAnimated} setIsAnimated={setIsAnimated} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
