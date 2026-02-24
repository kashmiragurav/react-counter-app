import { useState, useEffect} from "react";

function Counter() {
  const [count, setCount] = useState(0); //Initially we set the counter as 0
  const [isRunning, setIsRunning] = useState(false); // to handle start and stop of counter
  const [step, setStep] = useState(""); // to handle step value for increment and decrement
  

  useEffect(() => {
    let interval; //run something again and again after fixed gap
    
    if (isRunning) {
        interval = setInterval(() => {  //setInterval runs the callback function every 1000 milliseconds (1 second).
      setCount((prev) => prev + (Number(step) || 1)); // Use 1 if step is not a number
    }, 1000);
  }
    return () => clearInterval(interval);   // to clear the interval when component unmounts or isRunning changes
 }, [isRunning, step]);

 // reset
 const reset = () => {
  setCount(0);
  setIsRunning(false); //stop counter
  setStep(0);
 };
  return (
    <div>
      <h1>Counter is started: {count}</h1>
      <input type="number" value={step}placeholder="Enter step value" 
      onChange={(e) => setStep(e.target.value)} />
        
      <br></br>
      <button type="button" onClick={() => setIsRunning(true)}>Start</button>
      <button type="button" onClick={() => setIsRunning(false)}>Stop</button>
      <button type="button" onClick={() => setCount((prev) => prev - (Number(step) || 1))}>Decrement</button>
      <button type="button" onClick={() => setCount((prev) => prev + (Number(step) || 1))}>Increment</button>
      <button type="button" onClick={reset}>Reset</button>

      <p>Submitted {count} times</p>
</div>
  );
}

export default Counter;