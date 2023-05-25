import "./style.css";
type Props = {
  active: string;
};

export default function MainMenu(props: Props) {
  return (
    <ul className="menu-bar">
      <li>
        <a href="#" data-page="home" className={props.active === "home" ? "active" : ""}>
          HOME
        </a>
      </li>
      <li>
        <a href="#" data-page="skills" className={props.active === "skills" ? "active" : ""}>
          Skills
        </a>
      </li>
      <li>
        <a href="#" data-page="languages" className={props.active === "languages" ? "active" : ""}>
          Know Languages
        </a>
      </li>
      <li>
        <a href="#" data-page="teams" className={props.active === "teams" ? "active" : ""}>
          Teams
        </a>
      </li>
      <li>
        <a href="#" data-page="rubik" className={props.active === "rubik" ? "active" : ""}>
          ◊Rubik
        </a>
      </li>
    </ul>
  );
}
