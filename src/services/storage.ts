export const setListPokemonAlreadyPlayed = (list: number[]) => localStorage.setItem('ALREADY_PLAYED', `${list}`)
export const getPokemonAlreadyPlayed = localStorage.getItem('ALREADY_PLAYED')
export const deleteListPokemonAlreadyPlayed = () => localStorage.removeItem('ALREADY_PLAYED')

export const setScore = (list: number[]) => localStorage.setItem('SCORE', `${list}`)
export const getScore = localStorage.getItem('SCORE')
export const deleteScore = () => localStorage.removeItem('SCORE')

export const setGeneration = (gen: number) => localStorage.setItem('GENERATION', `${gen}`)
export const getGeneration = localStorage.getItem('GENERATION')
export const deleteGeneration = () => localStorage.removeItem('GENERATION')