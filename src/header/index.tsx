import selfie from "../marian.jpeg";
import logo from "../SportiLand-COLOR.png";
import MainMenu from "../menu/MainMenu";
import { useState } from "react";

export default function AppHeader() {
  const [active, setActive] = useState("teams");

  //console.warn("render AppHeader", active);

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
            <img id="sportiland" src={logo} alt="sportiland" height="85px" className="link" />
          </a>
        </div>
      </div>
      <MainMenu
        active={active}
        setActive={page => {
          console.warn("active", page);
          setActive(page);
        }}
      />
    </header>
  );
}
