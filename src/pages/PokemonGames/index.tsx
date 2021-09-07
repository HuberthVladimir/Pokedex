import React, { useState } from 'react'

import { setRangeGenerationPokemons, vectorPokemonAlreadyGuessed } from '../../functions/index'
import { setListPokemonAlreadyPlayed, deleteListPokemonAlreadyPlayed } from '../../services/storage'

export const PokemonGames = () => {
   const [generation, setGeneration] = useState(0)

   const handleClickNextQuestion = () => {
      const pokemonsRangeByGeneration = setRangeGenerationPokemons(generation)
      const vetorPokemon = vectorPokemonAlreadyGuessed(pokemonsRangeByGeneration.min, pokemonsRangeByGeneration.max)
      console.log(vetorPokemon)
   }

   return (
      <>
         <select id="generation" defaultValue="0" onChange={(e) => setGeneration(+e.target.value)}>
            <option value="0">Select a Pokemon Generation</option>
            <option value="10">All generations</option>
            <option value="1">Generation 1</option>
            <option value="2">Generation 2</option>
            <option value="3">Generation 3</option>
            <option value="4">Generation 4</option>
            <option value="5">Generation 5</option>
            <option value="6">Generation 6</option>
            <option value="7">Generation 7</option>
            <option value="8">Generation 8</option>
         </select>

         <button onClick={handleClickNextQuestion}>
            Next Question
         </button>

         <button onClick={() => setListPokemonAlreadyPlayed([1, 6, 5, 8])}>localstorage</button>
         <button onClick={() => deleteListPokemonAlreadyPlayed()}>remove localstorage</button>
      </>
   )
}

// implementar logica de clicar no botão e gerar um numero aleatorio e ir gerando um array (feito)
// apos isso implementar o localstorage e useEffect buscando da API


// botão que inicia o game
// esse botão após pressionado verifica a geração atual
// busca um valor random e inicia o array
// o botão desaparecen apos o jogo começar

//trabalhar com rotas
// rota inicio - rota card - rota pontuação
// rota inicio - apresentação do game e setagem de geração
// rota card - who's that pokemon com botão pra terminar jogo e mostar pontuação e para proxima pergunta
// rota pontuação com botão de reiniciar o jogo e sair para o menu principal