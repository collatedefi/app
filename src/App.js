// import logo from './logo.svg';
import './App.css';
import GoogleData from './Google';
import { RiCopyrightFill } from 'react-icons/ri'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <RiCopyrightFill className="App-logo" />
        <h1>
          Collate
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More
        </a>
        <GoogleData />
      </header>
    </div>
  );
}

export default App;
