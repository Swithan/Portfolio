import './App.css';
import React from 'react';

class Navbar extends React.Component {
  render(){
    return(
      <div className="Navbar">
        <a className="navbar-list" href="test">Test</a>
      </div>
    )
  }
}

class Header extends React.Component {
  render(){
    return(
      <header>
        <h1>Nathan Debongnie</h1>
        <h2>Portfolio</h2>
        <Navbar/>
      </header>
    )
  }
}

function App() {
  return (
    <div className="App">
        <Header/>
    </div>
  );
}

export default App;
