import './App.css';
import { useEffect, useState } from "react"
import pokeData from "./data/poke.json"
import pokeImages from "./data/images.json"

function App() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    let filteredPokemon = pokeData.map(pokemon => {
      let foundImg = pokeImages.find(img => {
        return img.name.name === pokemon.name
      })

      if (foundImg) {
        pokemon.image = foundImg.artwork.image
        return pokemon
      }
    })

    setPokemons(filteredPokemon)
  }, [])
  
  return (
    <div className="App">
     <h2>I am the App.js file look at me </h2>
    </div>
  );
}

export default App;
