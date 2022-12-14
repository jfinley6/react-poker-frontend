import "./App.css";
import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import HomePagePicture from "./components/HomePagePicture";
import LoginForm from "./LoginForm";
import Profile from "./Profile";
import SignupForm from "./SignupForm";
import DeleteProfile from "./DeleteProfile";
import Leaderboard from "./Leaderboard";
import BlackJackRules from "./BlackJackRules";

import { auth } from "./firebase";
import IconStore from "./IconStore";

function App() {
  const [show, setShow] = useState(false);
  const [signup, setShowSignup] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showDeleteProfile, setShowDeleteProfile] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [sinatraUser, setSinatraUser] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [playerCards, setPlayerCards] = useState([]);
  const [dealerCards, setDealerCards] = useState([]);
  const [playerScore, setPlayerScore] = useState(0);
  const [dealersTurn, setDealersTurn] = useState(false);
  const [dealerScore, setDealerScore] = useState(false);
  const [playerTurn, setPlayerTurn] = useState(false);
  const [isPlayerBusted, setIsPlayerBusted] = useState(false);
  const [win, setWin] = useState(false);
  const [lost, setLost] = useState(false);
  const [push, setPush] = useState(false);
  const [leaderboard, setShowLeaderboard] = useState(false);
  const [leaders, setLeaders] = useState([]);
  const [showIconStore, setShowIconStore] = useState(false);
  const [showBlackJackRules, setShowBlackJackRules] = useState(false);
  const [heroku, setHeroku] = useState("");

  useEffect(() => {
    setLeaders([]);
    fetch("https://salty-mesa-23649.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => {
        setLeaders(data);
      });
  }, [sinatraUser]);

  useEffect(() => {
    fetch("https://salty-mesa-23649.herokuapp.com/users").then((res) => {
      if (res.status === 200) {
        setHeroku(true);
      }
    });
  }, [user]);

  useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
      if (user === null) {
        return;
      } else {
        fetch(`https://salty-mesa-23649.herokuapp.com/users/${user.email}`)
          .then((res) => res.json())
          .then((data) => {
            setSinatraUser(data);
          });
      }
    });
    return () => {
      unsubcribe();
    };
  }, [user]);

  const handleClose = () => {
    setShow(false);
    setShowSignup(false);
    setShowProfile(false);
    setShowDeleteProfile(false);
    setShowLeaderboard(false);
    setShowIconStore(false);
    setShowBlackJackRules(false);
  };

  return (
    <>
      {heroku === true ? (
        <div className="App">
          <NavBar
            setShow={setShow}
            header={"login"}
            setShowSignup={setShowSignup}
            user={user}
            sinatraUser={sinatraUser}
            setShowProfile={setShowProfile}
            setShowDeleteProfile={setShowDeleteProfile}
            setGameStarted={setGameStarted}
            playerCards={playerCards}
            setPlayerCards={setPlayerCards}
            dealerCards={dealerCards}
            setDealerCards={setDealerCards}
            setShowLeaderboard={setShowLeaderboard}
            setShowIconStore={setShowIconStore}
            setSinatraUser={setSinatraUser}
            setShowBlackJackRules={setShowBlackJackRules}
          />
          <div className="Content">
            <HomePagePicture
              user={user}
              sinatraUser={sinatraUser}
              setSinatraUser={setSinatraUser}
              gameStarted={gameStarted}
              setGameStarted={setGameStarted}
              playerCards={playerCards}
              setPlayerCards={setPlayerCards}
              dealerCards={dealerCards}
              setDealerCards={setDealerCards}
              playerScore={playerScore}
              setPlayerScore={setPlayerScore}
              dealersTurn={dealersTurn}
              setDealersTurn={setDealersTurn}
              dealerScore={dealerScore}
              setDealerScore={setDealerScore}
              playerTurn={playerTurn}
              setPlayerTurn={setPlayerTurn}
              isPlayerBusted={isPlayerBusted}
              setIsPlayerBusted={setIsPlayerBusted}
              win={win}
              setWin={setWin}
              lost={lost}
              setLost={setLost}
              push={push}
              setPush={setPush}
            />
            <LoginForm
              show={show}
              handleClose={handleClose}
              email={email}
              password={password}
              setEmail={setEmail}
              setPassword={setPassword}
              user={user}
            />
            <IconStore
              show={showIconStore}
              handleClose={handleClose}
              sinatraUser={sinatraUser}
              setSinatraUser={setSinatraUser}
            />

            <Leaderboard
              show={leaderboard}
              handleClose={handleClose}
              leaders={leaders}
            />
            <SignupForm
              show={signup}
              handleClose={handleClose}
              setEmail={setEmail}
              setPassword={setPassword}
              setUsername={setUsername}
              username={username}
              email={email}
              password={password}
              user={user}
              setSinatraUser={setSinatraUser}
            />
            <Profile
              show={showProfile}
              handleClose={handleClose}
              sinatraUser={sinatraUser}
            />
            <DeleteProfile
              show={showDeleteProfile}
              handleClose={handleClose}
              sinatraUser={sinatraUser}
              setGameStarted={setGameStarted}
              playerCards={playerCards}
              setPlayerCards={setPlayerCards}
              dealerCards={dealerCards}
              setDealerCards={setDealerCards}
            />
            <BlackJackRules
              show={showBlackJackRules}
              handleClose={handleClose}
            />
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100vh",
          }}
        >
          <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <b>Heroku Loading</b>
        </div>
      )}
    </>
  );
}

export default App;
