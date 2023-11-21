import React from "react";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile.jsx";

export default function App() {
  return (
    <>
      <div className="h-full w-full bg-black">
        {/* <h1 className="text-3xl font-bold underline bg-white">Hello Marta!</h1>; */}
        {/* <Header /> */}
        {/* <Navbar /> */}
        {/* <AboutMe /> */}
        <Profile />
      </div>
    </>
  );
}

// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// import "@fortawesome/fontawesome-free/css/all.min.css";

// import Profile from "Profile.jsx";

// ReactDOM.render(
//   <BrowserRouter>
//     <Switch>
//       <Route path="/profile" component={Profile} />
//       <Redirect from="/" to="/profile" />
//     </Switch>
//   </BrowserRouter>,
//   document.getElementById("root")
// );
