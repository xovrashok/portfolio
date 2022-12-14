import React from "react";
import Me from "./Me.jpg";
import {
  Image,
  Container,
  Text,
  ImageContainer,
  TextContainer,
} from "./styles";
import Typography from "@mui/material/Typography";

const Main = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src={Me} alt="me" />
        <Text>
          My name is Julia <br />
          and I'm a web developer <br /> based out of Kharkov.
        </Text>
      </ImageContainer>
      <TextContainer style={{ fontSize: "18px", fontWeight: "300" }}>
        <Typography paragraph sx={{ textAlign: "justify" }}>
          My professional experience includes two years of software development,
          with focus on Web Applications and sophisticated web solution in the
          last few years.
        </Typography>
        <Typography paragraph sx={{ textAlign: "justify" }}>
          I have had an opportunity to work with a variety of technologies so I
          can offer a comprehensive approach to Web development.
        </Typography>
        <Typography paragraph sx={{ textAlign: "justify" }}>
          SKILLSET
        </Typography>
        <Typography paragraph sx={{ textAlign: "justify" }}>
          <ul>
            Backend:
            <li> Languages: JavaScript/TypeScript, NodeJS </li>
            <li> Backend Web Frameworks: Express </li>
            <li> APIs: REST, GraphQL </li>
            <li> Understanding of Design Patterns and Software Architecture</li>
          </ul>
        </Typography>
        <Typography paragraph sx={{ textAlign: "justify" }}>
          <ul>
            Frontend:
            <li> Languages: Javascript + HTML5/CSS </li>
            <li> React and associated libraries (Redux) </li>
            <li> Angular - Testing: Jest, Enzyme </li>
            <li> UI Libraries: Material UI, Bootstrap, MUI</li>
          </ul>
        </Typography>
      </TextContainer>
    </Container>
  );
};

export default Main;
