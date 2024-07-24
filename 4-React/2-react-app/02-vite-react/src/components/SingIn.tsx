import React, { useState } from "react";

const SignIn: React.FC = () => {
  const [signedIn, setSignedIn] = useState(false);

  const handleSignIn = () => {
    setSignedIn(true);
  };

  const handleSignOut = () => {
    setSignedIn(false);
  };

  return (
    <div>
      {signedIn ? (
        <div>
          <button
            className="bg-blue-500 text-white"
            type="button"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
          <p className=" text-white">Welcome back! Good to see you here.</p>
        </div>
      ) : (
        <div>
          <button
            className="bg-green-500 text-white"
            type="button"
            onClick={handleSignIn}
          >
            Sign In
          </button>
          <p className=" text-white">Please sign in.</p>
        </div>
      )}
    </div>
  );
};

export default SignIn;
