import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Skills from "./Skills";

export default function Profile() {
  return (
    <>
      <main className="profile-page">
        <section className="relative block" style={{ height: "500px" }}>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover "
            style={{
              backgroundImage:
                // "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
                "url('https://img.freepik.com/free-vector/detailed-hand-painted-pink-watercolour-background_1048-17039.jpg?t=st=1700573540~exp=1700574140~hmac=b7f21b4b7918d4bcb15c48387ab78a7f87332d2bcf5a73588142fe59f3e3b9bc')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-gray-300">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        // src="src/assets/img/mart1.png"
                        src="data:image/jpeg;base64,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"
                        // src={require("assets/img/foto-marta.jpg").default}
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                        style={{ maxWidth: "150px" }}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      {/* <button
                        className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        Connect
                      </button> */}
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        {/* <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          22
                        </span>
                        <span className="text-sm text-gray-500">Friends</span> */}
                      </div>
                      <div className="mr-4 p-3 text-center">
                        {/* <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          10
                        </span>
                        <span className="text-sm text-gray-500">Photos</span> */}
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        {/* <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          89
                        </span>
                        <span className="text-sm text-gray-500">Comments</span> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                    Marta Organisciak
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                    Rheinfelden (Baden), Germany
                  </div>
                  <div className="mb-2 text-xl text-gray-700 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg  text-gray-500"></i>
                    Full Stack Web&App Developer / Software Tester
                  </div>
                  <div className="mb-2 text-gray-700">
                    <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
                    WBS CODING SCHOOL
                  </div>
                  {/* //logo WBS */}
                  {/* <img src="src/assets/icons/wbs-logo.png" /> */}
                </div>
                <div className="mt-10 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-gray-800">
                        {/* I have always liked working with people. I feel
                        satisfaction when my work matters and can make the world
                        a better place. <br></br> */}
                        {/* As a kindergarten teacher I developed my
                            interpersonal skills. I realized how important is for
                            the success of the entire team the good communication
                            within the team. Working as a kindergarten teacher gave
                            me great satisfaction, but I missed the opportunity to
                            learn new technical skills.  */}
                        I like learning new things, especially technical ones.{" "}
                        <br></br>I love to spend my time writing code and
                        learning JavaScript. <br></br>
                        I'm also a big fan of #Codewars platform.
                      </p>
                      <a
                        href="https://www.codewars.com/users/martao7"
                        className="font-normal text-pink-500"
                        // onClick={(e) => e.preventDefault()}
                      >
                        Show more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
