import React from "react";
import Button from "react-bootstrap/Button";

function NavBar({ setShow, setShowSignup, user }) {
  return (
    <header className="flex items-center justify-between bg-gray-800 p-6 w-full">
      <h1 className="text-4xl text-gray-200">Blackjack App</h1>
      <div>
        {user ? null : (
          <>
            <Button
              style={{ width: "100px", marginRight: "10px" }}
              onClick={() => setShow(true)}
              variant="primary"
            >
              Login
            </Button>
            <Button
              style={{ width: "100px" }}
              onClick={() => setShowSignup(true)}
              variant="primary"
            >
              Signup
            </Button>
          </>
        )}
        {user ? (
          <>
            <Button
              style={{ width: "100px", marginRight: "10px" }}
              onClick={() => setShow(true)}
              variant="primary"
            >
              Logout
            </Button>
          </>
        ) : null}
      </div>
    </header>
  );
}

export default NavBar;
