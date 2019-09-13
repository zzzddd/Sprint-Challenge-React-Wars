import React from "react";
import styled from "styled-components";

const Card = styled.section`
  border: 2px solid white;

  width: 30%;
  height: 10%;
  margin: 2% auto;
  padding: 2%;
  background: white;

  &:hover {
    width: 50%;
    height: 30%;
  }
`;
const Img = styled.img`
  width: 100%;
  height: auto;
`;

const Title = styled.h1`
  font-size: 4rem;
  padding: 0;
  margin: 0;
`;

const Description = styled.p`
  text-align: center;
  font-size: 2rem;
  width: 50%;
  margin: 0 auto;
`;

export { Card, Img, Title, Description };
