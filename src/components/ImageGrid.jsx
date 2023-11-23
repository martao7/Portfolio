import React from "react";

export default function ImageGrid() {
  const items = [
    {
      id: 1,
      src: "src/assets/icons/htmls.png",
      link: "HTML",
    },
    {
      id: 2,
      src: "src/assets/icons/css-3.png",
      link: "CSS",
    },
    {
      id: 3,
      src: "src/assets/icons/js.png",
      link: "JavaScript",
    },
    {
      id: 4,
      src: "src/assets/icons/physics.png",
      link: "React",
    },
    {
      id: 5,
      src: "src/assets/icons/nodejs.png",
      link: "NodeJS",
    },
    {
      id: 6,
      src: "src/assets/icons/mysql.png",
      link: "SQL/NoSQL",
    },
  ];
  return (
    <>
      <div
        name=""
        className=" bg-gray-300 from-black to-gray-800 w-full text-white md:h-screen text-center md:text-center"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            {/* <p className="py-80 "></p> */}
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Skills{" "}
            </p>

            <p className="py-6 ">Tech Stack:</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-5">
            {items.map(({ id, src, link }) => (
              <div
                key={id}
                className="shadow-md shadow-gray-600 rounded-lg overflow-hidden"
              >
                <img
                  src={src}
                  alt=""
                  className="px-20 py-4 mt-8 m-1 rounded-md duration-200 hover:scale-105 "
                />
                <div className="flex items-center justify-center">
                  <button
                    className="w-1/2 px-4 py-3 m-4 duration-200 hover:scale-105"
                    onClick={() => window.open(link, "_blank")}
                  >
                    {link}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <p className="mb-20 "></p>
        </div>
      </div>
    </>
  );
}
