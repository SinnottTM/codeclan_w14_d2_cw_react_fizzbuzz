import {useState, useEffect} from "react";
import './App.css';

function App() {

  const [currentNumber, setCurrentNumber] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [unrelatedState, setUnrelatedState] = useState(1);

  const result = () => {
    if (currentNumber === 0){
      setCurrentAnswer("not yet...")
    } else if (currentNumber % 3 === 0 && currentNumber % 5 === 0){
      setCurrentAnswer("fizzbuzz")
    } else if (currentNumber % 3 === 0) {
      setCurrentAnswer("fizz")
    } else if (currentNumber % 5 === 0) {
      setCurrentAnswer("buzz")
    } else if (currentNumber === 0){
      setCurrentAnswer("not yet...")
    } else {
      setCurrentAnswer("not yet...");
    }
  }

  useEffect(() => {
    result()
  }, [currentNumber])
  
  const handleInc = (evt) => {
    evt.preventDefault();
    setCurrentNumber(currentNumber + 1)
  }

  const handleDec = (evt) => {
    evt.preventDefault();
    setCurrentNumber(currentNumber - 1)
  }

  const unrelatedStateChange = () => {
    let randomNum = Math.floor(Math.random() * 100)
    setUnrelatedState(randomNum)
  }

  
  return (
    <div className="App">
      <h1>Fizz Buzz</h1>
      <br></br>
      <button value={currentNumber} onClick={handleDec}> - </button>
      <button value={currentNumber} onClick={handleInc}> + </button>
      <br></br>
      <h2>Number is {currentNumber}</h2>
      <br></br>
      <h2>Answer is {currentAnswer}</h2>
      <br></br>
      <button value={unrelatedState} onClick={unrelatedStateChange}> Change </button>
      <br></br>
      <h2>Random number is {unrelatedState}</h2>
    </div>
  );
}

export default App;