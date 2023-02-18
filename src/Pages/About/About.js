import React from "react";

const About = () => {
  return (
    <div>
      <div className="dropdown dropdown-bottom ml-8">
        <button tabIndex={0} className="btn btn-ghost text-blue-700 text-2xl ">
          Edit
        </button>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <input
            type="text"
            placeholder="Name"
            className="input w-full max-w-xs mt-5"
          />
          <input
            type="text"
            placeholder="Email"
            className="input w-full max-w-xs mt-5"
          />
          <input
            type="text"
            placeholder="University"
            className="input w-full max-w-xs mt-5"
          />
          <input
            type="text"
            placeholder="Address"
            className="input w-full max-w-xs mt-5"
          />
        </ul>
      </div>

      <div className="max-w-md mt-5 p-8 sm:flex sm:space-x-6 bg-gray-50 text-gray-800 ml-8">
        <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
          <img
            src="https://source.unsplash.com/100x100/?portrait"
            alt=""
            className="object-cover object-center w-full h-full rounded bg-gray-500"
          />
        </div>

        <div className="flex flex-col space-y-4">
          <div>
            <h2 className="text-2xl font-semibold">Leroy Jen</h2>
            <span className="text-sm text-gray-600">Full-stack developer</span>
          </div>
          <div className="space-y-1">
            <span className="flex items-center space-x-2">
              <span className="text-gray-600">Name: Leroy Jen</span>
            </span>
            <span className="flex items-center space-x-2">
              <span className="text-gray-600">Email: leroy.jen@sz.com</span>
            </span>

            <div className="space-y-1">
              <span className="flex items-center space-x-2">
                <span className="text-gray-600">
                  University: Land University
                </span>
              </span>
              <span className="flex items-center space-x-2">
                <span className="text-gray-600">Address: A/25 Poland</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
