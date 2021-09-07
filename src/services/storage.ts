export const setListPokemonAlreadyPlayed = (list: number[]) => localStorage.setItem('ALREADY_PLAYED', `${list}`)
export const deleteListPokemonAlreadyPlayed = () => localStorage.removeItem('ALREADY_PLAYED')

export const setScore = (list: number[]) => localStorage.setItem('SCORE', `${list}`)
export const deleteScore = (list: number[]) => localStorage.removeItem('SCORE')