import './App.css';
import React from 'react';
import { useEffect } from "react";

class Navbar extends React.Component {

  render(){
    return(
      <div id="header">
        <div id="name">
          <h2>Nathan</h2>
          <h2>Debongnie</h2>
        </div>
        <div className="navbarMenu">
          <a className="navbar-list" href="#presentation">Presentation</a>
          <a className="navbar-list" href="#projet-professionnel">Projet professionnel</a>
          <a className="navbar-list" href="#competences">Compétences</a>
          <a className="navbar-list" href="#activites">Activités</a>
        </div>
      </div>
    )
  }
}

class Presentation extends React.Component {
  render() {
    return (
      <div id="presentation">
        <h1>Présentation</h1>
        <p>20 ans</p>
        <p>Bruxelles</p>
        <p>Permis B</p>
        <img src="" alt="Profil"></img>
        <p>
          Bienvenue sur mon portfolio ! Je m'appelle Nathan Debongnie et j'ai 20 ans. 
          Je suis actuellement en 3ème année de formation au sein de l'Ephec 
        </p>
        <p>CV</p>
      </div>
    )
  }
}
class ProjetProfessionnel extends React.Component {
  render() {
    return (
      <div id="projet-professionnel">
        <h1>Projet Professionnel</h1>
        <p>
          Depuis tout petit, j'ai développé une passion pour le monde du spéctacle, et plus particulièrement le light-design. Mon projet était à l'origine de poursuivre des études dans ce milieu, dans une école d'art à Nantes. Mes études au sein de l'Ephec m'ont cependant ouvert les yeux sur le développement web et applicatif. Trouver une voie dans ce milieu pourrait égallement me plaire. 
        </p>
      </div>
    )
  }
}

class Competences extends React.Component {
  render() {
    return (
      <div id="competences" className="competences">
        <h1>Compétences</h1>
          <div className="bubble">
            <h2>Langues</h2>
            <ul> 
              <li>Français<ProgressBar percentage="80"/></li>
              <li>Anglais<ProgressBar percentage="60"/></li>
              <li>Néerlandais<ProgressBar percentage="60"/></li>
            </ul>
          </div>
          <div className="bubble">
        <h2>Programmation</h2>
        <ul>
          <li>HTML, CSS, JavaScript<ProgressBar percentage="60"/></li>
          <li>Flutter<ProgressBar percentage="60"/></li>
          <li>Python<ProgressBar percentage="60"/></li>
          <li>Java<ProgressBar percentage="60"/></li>
          <li>SQL (PostgreSQL, MySQL)<ProgressBar percentage="60"/></li>
          <li>React Native<ProgressBar percentage="60"/></li>
          <li>React JS<ProgressBar percentage="60"/></li>
        </ul>
        </div>
          <div className="bubble">
        <h2>Réseaux</h2>
        <ul>
          <li>Protocoles réseaux (TCP/IP, IPv4/v6)<ProgressBar percentage="80"/></li>
          <li>Services réseaux (DNS, web, mail, VoIP...)<ProgressBar percentage="80"/></li>
        </ul>
        </div>
          <div className="bubble">
            <h2>Outils & Technologies</h2>
            <ul>
              <li>Git<ProgressBar percentage="80"/></li>
              <li>Trello<ProgressBar percentage="80"/></li>
              <li>Clockify<ProgressBar percentage="80"/></li>
              <li>Windows server<ProgressBar percentage="80"/></li>
              <li>Linux<ProgressBar percentage="80"/></li>
              <li>VM-Ware<ProgressBar percentage="80"/></li>
            </ul>
          </div>
        </div>
    )
  }
}

class Activites extends React.Component {
  render() {
    return (
      <div id="activites">
        <h1>Activités</h1>
        <div>
          <h2>CTF</h2>
          <p>CSC</p>
          <p>UTCTF</p>
        </div>
        <div>
          <h2>Formations</h2>
          <p>React native</p>
          <p>React JS</p>
        </div>
        <div>
          <h2>Conférences</h2>
          <p>DevDay</p>
          <p>Presentation CSC</p>
        </div>
        <div>
          <h2>Communication</h2>
          <p>Job étudiant carrefour Rayon EPCS</p>
        </div>
        <div>
          <h2>Autres</h2>
          <p>Projet site vitrine artiste peintre</p>
        </div>
      </div>
    )
  }
}

const Filler = (props) => {
  return <div className="filler" style={{width: `${props.percentage}%`}}><p>{props.percentage}%</p></div>
}

const ProgressBar = (props) => {
  return (
    <div className="progress_bar">
      <Filler percentage={props.percentage}/>
    </div>
  )
}

class Body extends React.Component {
  render () {
    return(
      <div id="body">
        <Presentation/>
        <ProjetProfessionnel/>
        <Competences/>
        <Activites/>
      </div>
    )
  }
}
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Body/>
    </div>
  );
}


export default App;
