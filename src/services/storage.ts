export const setListPokemonAlreadyPlayed = (list: number[]) => localStorage.setItem('ALREADY_PLAYED', `${list}`)
export const deleteListPokemonAlreadyPlayed = () => localStorage.removeItem('ALREADY_PLAYED')

export const setScore = (list: number[]) => localStorage.setItem('SCORE', `${list}`)
export const deleteScore = () => localStorage.removeItem('SCORE')

export const setGeneration = (gen: number) => localStorage.setItem('GENERATION', `${gen}`)
export const deleteGeneration = () => localStorage.removeItem('GENERATION')