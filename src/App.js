import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Quiz from "./components/Quiz";
import Quotes from "./components/Quotes";
import Dreams from "./components/Dreams";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Gallery />
      <Quiz />
      <Quotes />
      <Dreams />
      
    </div>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
