import "./App.css";
import { useState, useRef, useEffect } from "react";
function Test({ name, setName, id }) {
  // const [name, setName] = useState("");
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
        // value={name[id]}
        ref={inputRef}
        onChange={(e) =>
          setName((asd) => {
            // console.log(asd);
            let zxc = [...asd];
            // console.log(typeof asd);
            // console.log(Array.isArray(asd));
            zxc[id] = e.target.value;
            // zxc = [e.target.value];
            return zxc;
          })
        }
        // onChange={(e) => setName(e.target.value)}
      />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <p>input is {name[id]}</p>
      <button onClick={Focus}>Focus</button>
      {/* <div>I rendered {inputRef.current} times</div> */}
      {/* <div>I render {renderCount.current} times</div> */}
    </>
    // ------------
  );
}
function App() {
  const [name, setName] = useState([]);
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
        <Test key={0} id={0} name={name} setName={setName} />
        <Test key={1} id={1} name={name} setName={setName} />
      </header>
    </div>
  );
}

export default App;
