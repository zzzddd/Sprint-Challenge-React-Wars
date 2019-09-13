import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { CharacterList } from "./components/CharacterList";
import styled from "styled-components";
const PageTitle = styled.h1`
  font-size: 5rem;
  &:hover {
    color: red;
  }
`;
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(res => {
        console.log("App axios",res.data.results);
        setCharacters(res.data.results);
      })
      .catch(err => console.log(`Error: ${err}`));
  }, []);

  return (
    <div className="App">
      <PageTitle className="Header">React Wars</PageTitle>
      <CharacterList characters={characters} />
    </div>
  );
};

export default App;
