import { RubikCube } from "../main/RubikCube";

export function SideMenu() {
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
