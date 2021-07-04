import "./App.css";
import { useState, useRef, useEffect } from "react";
function Test() {
  const [name, setName] = useState("");
  // ------------
  // --Without useRef
  const inputRef = useRef();
  function Focus() {
    inputRef.current.focus();
  }
  return (
    <>
      <input
        type="number"
        value={name}
        ref={inputRef}
        onChange={(e) => setName(e.target.value)}
      />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <p>input is {name}</p>
      <button onClick={Focus}>Focus</button>{" "}
      {/* <div>I rendered {inputRef.current} times</div> */}
      {/* <div>I render {renderCount.current} times</div> */}
    </>
    // ------------
  );
}
function App() {
  // ------------
  // --With useRef
  // const renderCount = useRef(1);

  // useEffect(() => {
  //   renderCount.current = renderCount.current + 1;
  // });
  // ----------------
  return (
    <div className="App">
      <header className="App-header">
        <Test />
        <Test />
      </header>
    </div>
  );
}

export default App;
