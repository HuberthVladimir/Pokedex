import React, { useEffect, useState } from 'react'
import './home.scss'
import { getRandomNumber } from '../../../functions/'
import { useHistory } from 'react-router'
import { useGloBalContext } from '../../../hooks/context'

export const PokemonGames = () => {
   const [randomPokemonCard, setRandomPokemonCard] = useState(0)
   const [errorGeneration, setErrorGeneration] = useState(false)
   const { generationGame, setGenerationGame } = useGloBalContext()
   const history = useHistory()

   useEffect(() => {
      localStorage.setItem('GENERATION', JSON.stringify(0))
      setGenerationGame(0)
      setErrorGeneration(false)
      setRandomPokemonCard(getRandomNumber(1, 649))
   }, [])

   useEffect(() => {
      console.log(generationGame)
   }, [generationGame])

   const handleClickNewGame = () => {
      if (generationGame === 0) {
         setErrorGeneration(true)
         return
      }
      localStorage.setItem('GENERATION', JSON.stringify(generationGame))
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
                     <select id="generation" className="selectGenerationCardGame" defaultValue="0" onChange={(e) => setGenerationGame(+e.target.value)}>
                        <option value="0">Select a Pokemon Generation</option>
                        <option value="10">All generations (1 - 5)</option>
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