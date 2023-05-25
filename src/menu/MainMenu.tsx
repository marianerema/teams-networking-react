import "./style.css";
type Props = {
  active: string;
};

type Actions = {
  setActive(active: string): void;
};

export default function MainMenu(props: Props & Actions) {
  return (
    <ul className="menu-bar">
      <li>
        <a
          href="#"
          className={props.active === "home" ? "active" : ""}
          onClick={() => {
            props.setActive("home");
          }}
        >
          HOME
        </a>
      </li>
      <li>
        <a
          href="#"
          className={props.active === "skills" ? "active" : ""}
          onClick={() => {
            props.setActive("skills");
          }}
        >
          Skills
        </a>
      </li>
      <li>
        <a
          href="#"
          className={props.active === "languages" ? "active" : ""}
          onClick={() => {
            props.setActive("languages");
          }}
        >
          Know Languages
        </a>
      </li>
      <li>
        <a
          href="#"
          className={props.active === "teams" ? "active" : ""}
          onClick={() => {
            props.setActive("teams");
          }}
        >
          Teams
        </a>
      </li>
      <li>
        <a
          href="#"
          className={props.active === "rubik" ? "active" : ""}
          onClick={() => {
            props.setActive("rubik");
          }}
        >
          ◊Rubik
        </a>
      </li>
    </ul>
  );
}
