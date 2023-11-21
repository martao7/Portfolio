import React from "react";

import Profile from "./components/Profile.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function App() {
  return (
    <>
      <div className="h-full w-full bg-black">
        <Profile />
      </div>
    </>
  );
}
