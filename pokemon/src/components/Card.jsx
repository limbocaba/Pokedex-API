import React from 'react'
import { useState, useEffect } from 'react';
import pokeData from "../data/poke.js"
import pokeImages from "../data/images.json"

function Card() {
const [pokemons,setPokemons] = useState([])

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
    console.log(filteredPokemon)
    console.log(pokemons)
}, [])


  return (
    <div className='card'>
      <h2>1</h2>
      <h2>Charmander</h2>
    </div>
  )
}

export default Card;