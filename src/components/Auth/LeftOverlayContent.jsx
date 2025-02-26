const LeftOverlayContent = ({ isAnimated, setIsAnimated }) => {
  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold text-white mb-3">
        Already have an account ?
      </h1>

      <h5 className="text-xl text-white">Sign in with your email & password</h5>
      <div className="mt-9">
        <button
          className="py-3 px-4 bg-transparent rounded-full text-center text-white text-xl font-bold uppercase ring-2 ring-white active:scale-90 transition-transform ease-in"
          onClick={(e) => {
            setIsAnimated(!isAnimated);
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default LeftOverlayContent;
