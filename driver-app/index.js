const testSDK = require('ts-sdk-test');

testSDK.getPokemonById(2).then((pokemon) => {
  console.log(pokemon.name); //This should print ivysaur
});