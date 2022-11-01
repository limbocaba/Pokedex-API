import './App.css';
import { useEffect, useState } from "react"
import PokemonData from "./data/poke.js"
import pokeImages from "./data/images.json"

function App() {
  const [pokemons, setPokemons] = useState([])
const [pokedex,setPokedex] = useState([])

  useEffect(() => {
    let filteredPokemon = PokemonData.map(pokemon => {
      let foundImg = pokeImages.find(img => {
        return img.name.name === pokemon.name
      })

      if (foundImg) {
        pokemon.image = foundImg.artwork.image
        return pokemon
      }
    })
    setPokemons(filteredPokemon)
    console.log(pokemons)
    
  }, [])


  return (
    <div className="App">
      {pokemons.map((pokemon) => (
        <div>
          <h3>{pokemon.name}</h3>
          <img src={pokemon.image} />
        </div>
      ))}
    </div>
  );
}

export default App;
