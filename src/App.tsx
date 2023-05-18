import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { AppFooter } from "./footer/components";
import AppHeader from "./header";

function ContentWrapper() {
  return (
    <section id="content">
      <SideMenu />
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

        <div>
          <h2>Teams</h2>
        </div>

        {/* <!--LANGUAGES--> */}
        <div id="languages" className="page">
          <h2>Known Languages</h2>
          <KnowLanguagesTable />
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

function KnowLanguagesTable() {
  return (
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
  );
}

function SideMenu() {
  return (
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
      <RubikCube />
    </div>
  );
}

function RubikCube() {
  return (
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
  );
}

function App() {
  return (
    //Tag empty - React.Fragment
    <>
      <AppHeader />
      <ContentWrapper />
      <AppFooter />
    </>
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
