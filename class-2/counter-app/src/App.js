import logo from './logo.svg';
import './App.css';
import StopWatch from './Components/StopWatch';
import { useState } from "react";

function App() {
  const [isVisible, setVisibility] = useState(true);

  const handleToggle = () => {
    setVisibility((prevState) =>  !prevState);
  };
  return (
    <div className="App">
      {/* {isVisible ? <StopWatch /> : null} */}
      <div style={{display: isVisible ? "block" : 'none'}}>
        <StopWatch/>
      </div>
      <input type="checkbox" onChange={handleToggle}/><span>Toggle</span>
    </div>
  );
}

export default App;
