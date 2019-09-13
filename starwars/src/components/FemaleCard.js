import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Card, Img, Title, Description } from "./Carcard";
import axios from "axios";

const Female = styled(Card)`
  color: red;
  border-radius: 75px;
  border: 1px dashed red;
  box-shadow: -10px -10px;
`;
const FemaleTitle = styled(Title)`
  font-family: cursive;
`;

const FemaleDescription = styled(Description)`
  font-family: cursive;
  line-height: 2;
`;

const FemaleCard = props => {
  const name = props.character.name;
  const gender = props.character.gender;
  const hairColor = props.character["hair_color"];
  const eyeColor = props.character["eye_color"];

  //set a default one, getting the other one from Upsplash API
  const [pic, setPic] = useState("");

  useEffect(() => {
    axios
      .get(`https://source.unsplash.com/1600x900/?female`)
      .then(res => {
        setPic(res.request.responseURL);
        console.log("Female axios", res.request.responseURL);
      })
      .catch(err => console.log(`Error: ${err}`));
  }, []);

  return (
    <Female>
      <Img src={pic} alt="A Stunning Woman"></Img>
      <FemaleTitle>{name}</FemaleTitle>
      <FemaleDescription>{`I am a stunning ${gender} with gorgeous ${hairColor} and beautiful ${eyeColor} eyes.`}</FemaleDescription>
    </Female>
  );
};
export { FemaleCard };
