import logo from './logo.svg';
import './App.css';

const greetUser = () => {
  return <marquee>Welcome to REACT</marquee>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello! 
        </p>
        <p>{greetUser()}</p>
      </header>
    </div>
  );
}

export default App;
