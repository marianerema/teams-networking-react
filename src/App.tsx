import React from "react";
import logo from "./logo.svg";
import selfie from "./marian.jpeg";
import "./App.css";

function AppHeader() {
  return (
    <header>
      <div id="header-wrapper">
        <div>
          <img id="avatar" src={selfie} alt="Erema" width="150px" />
        </div>
        <div>
          <h1>Erema Marian</h1>
          <h2 id="job-title">
            Teacher of physical education and sports & Student at
            <a href="https://fasttrackit.org/" target="_blank">
              FastTrackIT
            </a>{" "}
            & Trainer at
          </h2>
        </div>
        <div>
          <a target="_blank" href="https://www.facebook.com/sportiland">
            <img id="sportiland" src="SportiLand-COLOR.png" alt="sportiland" height="85px" className="link" />
          </a>
        </div>
      </div>

      <ul id="top-menu-bar">
        <li>
          <a href="#" data-page="home">
            HOME
          </a>
        </li>
        <li>
          <a href="#" data-page="skills">
            Skills
          </a>
        </li>
        <li>
          <a href="#" data-page="languages">
            Know Languages
          </a>
        </li>
        <li>
          <a href="#" data-page="projects">
            Projects
          </a>
        </li>
        <li>
          <a href="#" data-page="rubik">
            ◊Rubik
          </a>
        </li>
      </ul>
    </header>
  );
}

function ContentWrapper() {
  return (
    <section id="content">
      <div id="side-menu">
        <section>
          <h2>Contact</h2>
          <form action="">
            <div>
              <label htmlFor="subscriberEmail">Email:</label>
              <input type="email" required name="email" id="subscriberEmail" placeholder="your@email.com" />
            </div>
            <div>
              <label htmlFor="subscriber">Name:</label>
              <input type="text" required name="nume" id="subscriber" placeholder="Full name" />
            </div>
            <button type="submit">Subscribe</button>
          </form>
        </section>

        {/* <!--Menu 2--> */}
        <section>
          <h3>Rubik</h3>
          <div className="square1-1"></div>
          <div className="square1-2"></div>
          <div className="square1-3"></div>
          <div className="square2-0"></div>
          <div className="square2-1"></div>
          <div className="square2-2"></div>
          <div className="square2-3"></div>
          <div className="square3-0"></div>
          <div className="square3-1"></div>
          <div className="square3-2"></div>
          <div className="square3-3"></div>
        </section>
      </div>

      <div id="main">
        {/* <!--HOME--> */}
        <div id="home" className="page">
          <h2>Despre mine</h2>
          <p>Informatii despre mine...in curand!</p>
        </div>

        {/* <!--SKILLS--> */}
        <div id="skills" className="page">
          <h2>Skills</h2>
          <ul id="skills-list"></ul>
        </div>

        <div>...</div>

        {/* <!--LANGUAGES--> */}
        <div id="languages" className="page">
          <h2>Known Languages</h2>

          <table border={1}>
            <thead>
              <tr>
                <th>Languages</th>
                <th>Level</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Romanian</td>
                <td>Native</td>
              </tr>
              <tr>
                <td>English</td>
                <td>B1</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* <!--PROJECTS--> */}
        <div id="projects" className="page">
          <h2>Projects</h2>
          <p>Primul meu CV in GitHub</p>
          <ul id="skills-list"></ul>
          <p>In scurt timp...al II-lea proiect in GitHub</p>
        </div>

        {/* <!--Rubik--> */}
        <div id="rubik" className="page">
          <h2>Rubik</h2>
        </div>
      </div>
    </section>
  );
}

function AppFooter() {
  return (
    <footer className="footer-photo">
      <a target="_blank" href="https://www.google.com">
        <img height="65" src="google.png" />
      </a>
      <a target="_blank" href="https://www.facebook.com/sportiland">
        <img height="65" src="SportiLand-COLOR.png" />
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/marianerema">
        <img height="65" src="linkedin.png" />
      </a>
    </footer>
  );
}

function App() {
  return (
    <div>
      <AppHeader />
      <ContentWrapper />
      <AppFooter />
    </div>
  );
}

function Old_App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
