import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CartoonComponent.css";

const CartoonComponent = () => {
  const [characters, setCharacters] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        setCharacters(response.data.results);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("Error retrieving data");
      });
  }, []);

  return (
    <React.Fragment>
      <div className="title">
        <strong>List of Characters</strong>
      </div>
      <div className="container">
        {characters.length
          ? characters.map((character, index) => (
              <div key={index} className="box">
                <img
                  src={character.image}
                  alt={character.name}
                  className="character-image"
                />
                <div className="character-details">
                  <div className="character-name">{character.name}</div>
                  <div className="character-status">{character.status}</div>
                  <div className="character-species">{character.species}</div>
                </div>
              </div>
            ))
          : null}
        {errorMessage ? <div className="error">{errorMessage}</div> : null}
      </div>
    </React.Fragment>
  );
};

export default CartoonComponent;
