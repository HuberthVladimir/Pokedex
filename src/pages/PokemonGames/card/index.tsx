import React, { useEffect } from "react"
import './card.scss'
import { useGloBalContext } from '../../../hooks/context'
import { useHistory } from "react-router"
//import { setRangeGenerationPokemons } from '../../../functions'

export const CardPokemonGame = () => {
   const history = useHistory()
   const { actualPokemonGame, generationGame } = useGloBalContext()

   useEffect(() => {
      if (generationGame === 0) {
         history.push('/game')
      }
   }, [generationGame])

   useEffect(() => { console.log(generationGame) }, [generationGame])

   return (
      <>
         {generationGame}
         <button>mudar pokemon</button>
      </>
   )
}