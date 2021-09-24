import React, { useEffect } from "react"
import './card.scss'
import { useGloBalContext } from '../../../hooks/context'
import { useHistory } from "react-router"
import { setRangeGenerationPokemons, getRandomNumber } from '../../../functions'

export const CardPokemonGame = () => {
   const history = useHistory()
   const { alreadyPlayedPokemons, setAlreadyPlayedPokemons, actualPokemonGame, setActualPokemonGame, generationGame } = useGloBalContext()
   const { max, min } = setRangeGenerationPokemons(generationGame)

   useEffect(() => {
      if (generationGame === 0) {
         history.push('/game')
      }
   }, [generationGame, history])

   useEffect(() => {
      (() => {
         const newPokemon = getRandomNumber(max, min)

         if (alreadyPlayedPokemons.length === 0) {
            const arrayPokemonsPlayed = alreadyPlayedPokemons
            localStorage.setItem('ALREADY_PLAYED', JSON.stringify([...arrayPokemonsPlayed, newPokemon]))
            localStorage.setItem('POKEMON_GAME', JSON.stringify(newPokemon))
            setAlreadyPlayedPokemons([...arrayPokemonsPlayed, newPokemon])
            setActualPokemonGame(newPokemon)
            return
         }
         alreadyPlayedChecker()
      })()

   }, [])

   const alreadyPlayedChecker = () => {
      const newPokemon = getRandomNumber(max, min)

      if (!alreadyPlayedPokemons.includes(newPokemon)) {
         const arrayPokemonsPlayed = [...alreadyPlayedPokemons]
         arrayPokemonsPlayed.push(newPokemon)
         localStorage.setItem('ALREADY_PLAYED', JSON.stringify(arrayPokemonsPlayed))
         setAlreadyPlayedPokemons(arrayPokemonsPlayed)
         localStorage.setItem('POKEMON_GAME', JSON.stringify(newPokemon))
         setActualPokemonGame(newPokemon)
         return
      }

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      alreadyPlayedChecker()
   }

   return (
      <>
         {actualPokemonGame}
         <button onClick={alreadyPlayedChecker}>mudar pokemon</button>
      </>
   )
}