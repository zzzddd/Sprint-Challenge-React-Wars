import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Card, Img, Title, Description } from "./Carcard";
import axios from "axios";

const Male = styled(Card)`
  color: black;
  border: 3px solid black;
  box-shadow: 20px 20px;
`;

const MaleTitle = styled(Title)`
  text-align: left;
  font-family: bold;
`;
const MaleDescription = styled(Description)`
  line-height: 1.2;
  color: blue;
`;

const MaleCard = props => {
  const name = props.character.name;
  const gender = props.character.gender;
  const hairColor = props.character["hair_color"];
  const eyeColor = props.character["eye_color"];

  const [pic, setPic] = useState("");

  useEffect(() => {
    axios
      .get("https://source.unsplash.com/1600x900/?male")
      .then(res => setPic(res.request.responseURL))

      .catch(err => console.log(`Error: ${err}`));
  }, [pic]);

  return (
    <Male>
      <div className="image" alt="A Beautiful Man">
        <Img src={pic}></Img>
      </div>
      <MaleTitle>{name}</MaleTitle>
      <MaleDescription>{`I am a handsome ${gender} with gorgeous ${hairColor} and beautiful ${eyeColor} eyes.`}</MaleDescription>
    </Male>
  );
};
export { MaleCard };
