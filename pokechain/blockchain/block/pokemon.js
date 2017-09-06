import CryptoJS from 'crypto-js'

let PokemonData = []

const names = ['squirtle', 'charizard', 'Mew']

names.forEach(name => {
  let pokemon = {name: name, statStuff: 42}
  PokemonData.push(pokemon)
})

export default PokemonData