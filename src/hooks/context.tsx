import React, { useContext, useEffect, useState } from "react"

import { IProviderProps, AppGlobalProps } from "types"

const useAppGlobalContext = React.createContext({} as AppGlobalProps)

export const AppProvider = ({ children }: IProviderProps) => {
  const [modal, setModal] = useState(false)
  const [requestIdModal, setRequestIdModal] = useState<string | null>(null)
  const [generationGame, setGenerationGame] = useState(() => {
    const generation = localStorage.getItem("GENERATION")

    if (generation) {
      return JSON.parse(generation)
    }

    return 0
  })
  const [score, setScore] = useState(() => {
    const storageScore = localStorage.getItem("SCORE")

    if (storageScore) {
      return JSON.parse(storageScore)
    }

    return []
  })
  const [actualPokemonGame, setActualPokemonGame] = useState(() => {
    const actualPokemon = localStorage.getItem("POKEMON_GAME")

    if (actualPokemon) {
      return JSON.parse(actualPokemon)
    }

    return 0
  })
  const [alreadyPlayedPokemons, setAlreadyPlayedPokemons] = useState(() => {
    const pokemonAlreadyPlayed = localStorage.getItem("ALREADY_PLAYED")

    if (pokemonAlreadyPlayed) {
      return JSON.parse(pokemonAlreadyPlayed)
    }

    return []
  })

  useEffect(() => {
    if (!modal) setRequestIdModal(null)
  }, [modal])

  return (
    <useAppGlobalContext.Provider
      value={{
        modal,
        setModal,
        requestIdModal,
        setRequestIdModal,
        score,
        setScore,
        actualPokemonGame,
        setActualPokemonGame,
        generationGame,
        setGenerationGame,
        alreadyPlayedPokemons,
        setAlreadyPlayedPokemons,
      }}
    >
      {children}
    </useAppGlobalContext.Provider>
  )
}

export function useGloBalContext(): AppGlobalProps {
  const context = useContext(useAppGlobalContext)

  return context
}
