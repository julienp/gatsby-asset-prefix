import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1>Home</h1>
      <StaticImage src="../images/cat.jpg" alt="Cat" />
      <ul>
        <li>
          <Link to="/other-page">Other page</Link>
        </li>
      </ul>
    </main>
  );
};

export default IndexPage;
