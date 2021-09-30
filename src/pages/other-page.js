import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <main>
      <title>Other pagae</title>
      <h1>Home</h1>
      <StaticImage src="../images/cat.jpg" alt="Cat" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </main>
  );
};

export default IndexPage;
