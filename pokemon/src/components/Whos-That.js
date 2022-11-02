import React, { useEffect, useState } from "react";
import PokemonData from "../data/poke";
import pokeImages from "../data/images.json";
import "./Whos-That.css";

function Pokemon() {
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState([]);

  useEffect(() => {
    let filteredPokemon = PokemonData.map((pokemon) => {
      let foundImg = pokeImages.find((img) => {
        return img.name.name === pokemon.name;
      });

      if (foundImg) {
        pokemon.image = foundImg.artwork.image;
        return pokemon;
      }
    });
    setPokemons(filteredPokemon);
    console.log(pokemons)
  }, []);

if (!pokemons) return <h2>Loading...</h2>

  return (
    <div className="content">
      {pokemons.map((pokemon) => (
        <div className="pokedex">
          <h3>{pokemon.name}</h3>
          <img src={pokemon.image} alt="pokemon" />
          <h3>{ pokemon.speed }</h3>

        </div>
      ))}
      <h3>Hello</h3>
    </div>
  );
}

export default Pokemon;
