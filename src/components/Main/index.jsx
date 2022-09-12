import React from "react";
import Me from "./Me.jpg";
import { Image, Container } from "./styles";
import Typography from "@mui/material/Typography";

const Main = () => {
  return (
    <Container>
      <Image src={Me} alt="me" />
      <div style={{ marginLeft: "50px", fontSize: "18px", fontWeight: "300" }}>
        <Typography paragraph>
          Hi!
          <br />
          My name is Julia and I'm a web developer based out of Kharkov.
        </Typography>
        <Typography paragraph>
          My professional experience includes two years of software development,
          with focus on Web Applications and sophisticated web solution in the
          last few years.
        </Typography>
        <Typography paragraph>
          I have had an opportunity to work with a variety of technologies so I
          can offer a comprehensive approach to Web development.
        </Typography>
        <Typography paragraph>SKILLSET</Typography>
        <Typography paragraph>
          <ul>
            Backend:
            <li> Languages: JavaScript/TypeScript, NodeJS </li>
            <li> Backend Web Frameworks: Express </li>
            <li> APIs: REST, GraphQL </li>
            <li> Understanding of Design Patterns and Software Architecture</li>
          </ul>
        </Typography>
        <Typography paragraph>
          <ul>
          Frontend:
            <li> Languages: Javascript + HTML5/CSS </li>
            <li> React and associated libraries (Redux) </li>
            <li> Angular - Testing: Jest, Enzyme </li>
            <li> UI Libraries: Material UI, Bootstrap, MUI</li>
          </ul>
        </Typography>
      </div>
    </Container>
  );
};

export default Main;
