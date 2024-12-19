import { useContext } from 'react';
import './App.css';
import { UserContext } from './Context';
import UserProvider from "./Context";


function App() {
  
  const context = useContext(UserContext);

if (!context) {
  console.error("UserContext is undefined. Ensure the provider is wrapping the component.");
  return null; // Or show a fallback UI
}
  const {user, setUser} = context;

  const handleName = (e) => {
    setUser ((prev) => ({
      ...prev, name: e.target.value
    }));
  }
  const handleAge = (e) => {
    setUser ((prev) => ({
      ...prev, age: e.target.value
    }));
  }
  const handleEmail = (e) => {
    setUser ((prev) => ({
      ...prev, email: e.target.value
    }));
  }
  const handleSubmit = () => {
    console.log(user);
  }
  return (
    <div className="App">
      <h1>Login</h1>
      <div className='login-form'>
      <form onSubmit={(e) => e.preventDefault()} >
        <label>Name:</label> 
        <input type="text" onChange={handleName}/>
        <label>Age:</label>
        <input type="number" onChange={handleAge} />
        <label>Email:</label>
        <input type="email" onChange={handleEmail}/>
        <button onClick={handleSubmit}>Login</button>
      </form>
      </div>
    </div>
  );
}

export default App;
