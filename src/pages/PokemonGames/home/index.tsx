import React, { useContext, useState } from 'react'
import './home.scss'
import { getRandomNumber } from '../../../functions/'
import { useHistory } from 'react-router'
//import {} from '../../../hooks/context'

export const PokemonGames = () => {
   const [generationInput, setGenerationInput] = useState(0)
   const [randomPokemonCard, setRandomPokemonCard] = useState(0)
   const [errorGeneration, setErrorGeneration] = useState(false)
   const history = useHistory()

   React.useEffect(() => {
      setErrorGeneration(false)
      setRandomPokemonCard(getRandomNumber(1, 649))
   }, [])


   const handleClickNewGame = () => {
      if (generationInput === 0) {
         setErrorGeneration(true)
         return
      }
      history.push('/game/card')
   }

   return (
      <main className="mainContentGame">
         <section className="cardGame">
            <div className="ball top" />
            <div className="ball  bottom" />

            <h1 className="titleCardGame">Who's that pokemon</h1>

            <div
               className="imgCardGame"
               style={{
                  WebkitMask: `url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${randomPokemonCard}.svg) no-repeat center / contain`,
                  mask: `url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${randomPokemonCard}.svg) no-repeat center / contain`,
               }}
            />

            <div className="newGame">
               <div className="newGameSetters">

                  <div className="custom-select">
                     <select id="generation" className="selectGenerationCardGame" defaultValue="0" onChange={(e) => setGenerationInput(+e.target.value)}>
                        <option value="0">Select a Pokemon Generation</option>
                        <option value="10">All generations</option>
                        <option value="1">Generation 1</option>
                        <option value="2">Generation 2</option>
                        <option value="3">Generation 3</option>
                        <option value="4">Generation 4</option>
                        <option value="5">Generation 5</option>
                        {/* <option value="6">Generation 6</option>
                        <option value="7">Generation 7</option>
                        <option value="8">Generation 8</option> */}
                     </select>
                  </div>

                  <button className="startGame" id="component-button" onClick={handleClickNewGame}>Start new game</button>
               </div>
               {errorGeneration &&
                  <span className="errorGeneration">Generation must be chosen</span>
               }
            </div>

         </section>
      </main>
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