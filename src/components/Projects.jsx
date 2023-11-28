import React from "react";

export default function ImageGrid() {
  const items = [
    {
      id: 1,
      // src: "src/assets/icons/htmls.png",
      src: "https://i.otto.de/i/otto/b7fd6fca-6106-5fb2-a6d8-e1e9b3bfd753?w=2500&h=2262",
      link: "https://myblog-starlight-122f3f.netlify.app/",
      gitlink: "https://github.com/martao7/sql_myBlog_workshop",
      titel: "myBlog",
      description:
        "A blog with notes fetched from a backend server. You can also add notes and delete them from the blog.",
    },
    {
      id: 2,
      // src: "src/assets/icons/css-3.png",
      src: "https://image.api.playstation.com/vulcan/ap/rnd/202010/0205/dyvo9eGUf7WTZx49eTpQyDuL.png",
      link: "https://orbitgaming.netlify.app/",
      gitlink: "https://github.com/Phil-star1984/orbit_frontend",
      titel: "Orbit",
      description:
        "My final Project of WBS Coding School: An e-commerce store, displays the best and the most played games.",
    },
    {
      id: 3,
      // src: "src/assets/icons/htmls.png",
      src: "https://cdn.pixabay.com/photo/2016/04/24/04/53/globe-1348777_960_720.png",
      link: "https://geo-game-11c6d3.netlify.app",
      gitlink: "https://github.com/martao7/crossover-cityGame",
      titel: "GeoGame",
      description:
        "Guess the names of the cities they are presented on the photos and win! At the end, you will see your total score and the comparison your score with the best results of other players.",
    },
    {
      id: 4,
      // src: "src/assets/icons/htmls.png",
      src: "https://www.kindernetz.de/sendungen/schmecksplosion/1605000762801,image-knet-2538~_v-1x1@2dL_-029cdd853d61a51824ed2ee643deeae504b065c1.jpg",
      link: "https://github.com/martao7/cookbook",
      gitlink: "https://github.com/martao7/cookbook",
      titel: "CookBook",
      description:
        "The website shows a static list of recipes. Each of recipe includes title, description, image, table with ingredients and preparation time.",
    },
  ];
  return (
    <>
      <div className="" id="projects">
        <div className=" bg-gray-300 from-black to-gray-800 w-full h-full mt-20 mb-60 text-white md:h-screen text-center md:text-center ">
          <div className="max-w-screen-lg p-14 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
              {/* <p className="py-80 "></p> */}
              <p className="text-4xl font-bold inline border-b-4 border-gray-400">
                Projects{" "}
              </p>

              <p className="py-6 ">
                the views available on GitHub and with Netlify:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 sm:px-8">
              {items.map(({ id, src, link, gitlink, titel, description }) => (
                <div
                  key={id}
                  className="shadow-md shadow-gray-600 rounded-lg overflow-hidden"
                >
                  <img
                    src={src}
                    alt=""
                    className="px-40 py-2 mt-8 m-1 rounded-md duration-200 hover:scale-105 "
                  />
                  <p className="w-60 max-h-full justify-center text-4xl font-bold m-auto mb-4 text-black">
                    {titel}
                  </p>
                  <p className="w-60 max-h-full justify-center m-auto mb-8 ">
                    {description} <br></br>
                  </p>

                  <div className="flex items-center justify-center mb-4">
                    <button
                      className="w-1/2 px-4 py-3 m-6 duration-200 rounded-md hover:scale-105 bg-black"
                      onClick={() => window.open(link, "_blank")}
                    >
                      View of Project
                    </button>
                    <button
                      className="w-1/2 px-4 py-3 m-6 duration-200 rounded-md hover:scale-105 bg-black"
                      onClick={() => window.open(gitlink, "_blank")}
                    >
                      View of Code
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* <p className="mb-20 mt-0"></p> */}
          </div>
        </div>
      </div>
      {/* //// */}
    </>
  );
}
