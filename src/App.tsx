import { useEffect, useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
interface User {
  type: string;
  setup: string;
  punchline: string;
  id: number;
}
function App() {
  // const [users, setUsers] = useState<User[]>();
  const [users, setUsers] = useState<User | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  useEffect(() => {
    fetchJoke();
    
  }, []);

  const fetchJoke = async () => {
    
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const data = await response.json();
    setUsers(data);
  };

  return (
    <>
      <h1>{users && users.setup}</h1>

      <div className="card">
        <button className="answer" onClick={() => setShowAnswer(!showAnswer)}>Answer</button>
        <button onClick={() => fetchJoke()}>Next Question</button>
        {/*  Show Answer */}
        {showAnswer ? <p className="read-the-docs">{users && users.punchline}</p> : null}
      </div>

      <div className="polygon-container">
        <div className="polygon polygon4"></div>
        <div className="polygon polygon2"></div>
        <div className="polygon polygon3"></div>
        <div className="polygon polygon1"></div>
      </div>
    </>
  );
}

export default App;
