import { useState } from "react";
import "./App.css";

function App() {
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);

  return (
    <>
      <div className="scoreItem" onClick={() => setScore1(score1 + 1)}>
        +
      </div>
      <div className="scoreItem upsideDown">{score1}</div>
      <div className="scoreItem" onClick={() => setScore1(score1 - 1)}>
        -
      </div>

      <div
        className="scoreItem resetItem"
        onClick={() => {
          setScore1(0);
          setScore2(0);
        }}
      >
        {" "}
        Set 0{" "}
      </div>
      <div className="scoreItem resetItem" />
      <div
        className="scoreItem resetItem"
        onClick={() => {
          setScore1(20);
          setScore2(20);
        }}
      >
        {" "}
        Set 20{" "}
      </div>

      <div className="scoreItem" onClick={() => setScore2(score2 - 1)}>
        -
      </div>
      <div className="scoreItem">{score2}</div>
      <div className="scoreItem" onClick={() => setScore2(score2 + 1)}>
        +
      </div>
    </>
  );
}

export default App;
