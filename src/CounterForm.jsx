import { useState, useEffect, use } from "react";

function Counter() {
  const [count, setCount] = useState(0); //Initially we set the counter as 0
  const [input, setInput] = useState(""); // to handle input field

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1); // to increment the counter by 2 each second
    }, 2000);
  });
  //to handle event- eventhandling function
  const handleSubmit = (e) => {
    e.preventDefault();// when we submit form page relods so to stop that use this
    setCount(count + 1);//to increment the counter by 1 when form is submitted
    setCount(count - 1); // to decrement the counter by 1 when form is submitted  
    setCount(count + parseInt(input)); // to update the counter with value entered in input field 
  };


  return (
    <form onSubmit={handleSubmit}> {/*when form submited it will run */}
      <h2>Update Your Counter value</h2>
      <button type="button" onClick={() => setCount(0)}>Reset</button>
      <button type="button" onClick={() => setCount(count - 1)}>Decrement</button>
      <button type="button" onClick={() => setCount(count + 1)}>Increment</button>

      <input type="number" value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="submit">Add</button>
      <p>Submitted {count} times</p>

    </form>
  );
}

export default Counter;