import React from "react";

function Chip({ setBetAmount }) {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "flex-end",
        paddingBottom: "10px",
      }}
    >
      <div
        onClick={() => setBetAmount((count) => count + 10)}
        className="pokerChip"
        style={{ position: "relative", textAlign: "center", color: "black" }}
      >
        <img
          style={{ width: "70px", height: "70px" }}
          src="images/dg-designer-0e9d935f147701852434523765510742843.png"
        />
        <div style={{ position: "absolute", top: "34%", left: "34%" }}>
          <b>10</b>
        </div>
      </div>
      <div
        onClick={() => setBetAmount((count) => count + 25)}
        className="pokerChip"
        style={{ position: "relative", textAlign: "center", color: "black" }}
      >
        <img
          style={{ width: "70px", height: "70px" }}
          src="images/dg-designer-0e9d935f147701852434523765510742843.png"
        />
        <div style={{ position: "absolute", top: "34%", left: "34%" }}>
          <b>25</b>
        </div>
      </div>
      <div
        onClick={() => setBetAmount((count) => count + 100)}
        className="pokerChip"
        style={{ position: "relative", textAlign: "center", color: "black" }}
      >
        <img
          style={{ width: "70px", height: "70px" }}
          src="images/dg-designer-0e9d935f147701852434523765510742843.png"
        />
        <div style={{ position: "absolute", top: "35%", left: "28%" }}>
          <b>100</b>
        </div>
      </div>
      <div
        onClick={() => setBetAmount((count) => count + 500)}
        className="pokerChip"
        style={{ position: "relative", textAlign: "center", color: "black" }}
      >
        <img
          style={{ width: "70px", height: "70px" }}
          src="images/dg-designer-0e9d935f147701852434523765510742843.png"
        />
        <div style={{ position: "absolute", top: "35%", left: "27%" }}>
          <b>500</b>
        </div>
      </div>
    </div>
  );
}

export default Chip;
