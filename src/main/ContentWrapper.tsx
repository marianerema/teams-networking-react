import { SideMenu } from "../menu/SideMenu";
import { TeamsTableWrapper } from "../teams/TeamsTable";
import { KnowLanguagesTable } from "./KnowLanguagesTable";

export function ContentWrapper() {
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

        {/* <!--Teams--> */}
        <div className="page" style={{ display: "block" }}>
          <h2>Teams</h2>
          <div>
            <input type="search" name="search" id="search" placeholder="Search" />
          </div>
          <TeamsTableWrapper />
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
