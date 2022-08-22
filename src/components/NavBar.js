import React from "react";

function NavBar({setShow, setShowSignup}) {
  return (
    <header className="flex items-center justify-between bg-gray-800 p-6 w-full">
      <h1 className="text-4xl text-gray-200">Blackjack App</h1>
      <div>
        <button
          style={{ width: "100px" }}
          type="button"
          onClick={() => setShow(true)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Login
        </button>
        <button
          style={{ width: "100px" }}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => setShowSignup(true)}
        >
          Sign Up
        </button>
      </div>
    </header>
  );
}

export default NavBar;
