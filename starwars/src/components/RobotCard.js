import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Card, Img, Title, Description } from "./Carcard";
import axios from "axios";

const Robot = styled(Card)`
  color: gray;
  border: 10px outset brown;
`;

const RobotTitle = styled(Title)`
  text-transform: uppercase;
`;

const RobotDescription = styled(Description)`
  text-transform: uppercase;
  width: 80%;
  font-size: 1.5rem;
`;

const RobotCard = props => {
  const name = props.character.name;
  const eyeColor = props.character["eye_color"];
  const skinColor = props.character["skin_color"];

  const [pic, setPic] = useState(false);

//   useEffect(() => {
//     axios
//       .get("https://swapi.co/documentation#robot")
//       .then(res => setPic(res.request.responseURL))
      
//       .catch(err => console.log(`Error: ${err}`));
//   }, [pic]);

  return (
    <Robot>
      <div className="image">
        <Img src={pic}></Img>
      </div>
      <RobotTitle>{name}</RobotTitle>
      <RobotDescription>{`I am a handsome robot with gorgeous ${skinColor} metal and beautiful ${eyeColor} eyes.`}</RobotDescription>
    </Robot>
  );
};
export { RobotCard };
