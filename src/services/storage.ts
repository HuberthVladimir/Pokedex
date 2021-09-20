export const setListPokemonAlreadyPlayed = (list: number[]) => localStorage.setItem('ALREADY_PLAYED', `${list}`)
export const getPokemonAlreadyPlayed = localStorage.getItem('ALREADY_PLAYED')
export const deleteListPokemonAlreadyPlayed = () => localStorage.removeItem('ALREADY_PLAYED')

export const setScore = (list: number[]) => localStorage.setItem('SCORE', `${list}`)
export const getScore = localStorage.getItem('SCORE')
export const deleteScore = () => localStorage.removeItem('SCORE')

export const setGenerationLocalStorage = (gen: string) => localStorage.setItem('GENERATION', `${gen}`)
export const getGenerationLocalStorage = localStorage.getItem('GENERATION')
export const deleteGenerationLocalStorage = () => localStorage.removeItem('GENERATION')

// interface LocalStorageProps {
//    type: 'GENERETION' | 'ALREADY_PLAYED' | 'SCORE'
//    value: string
// }

// export const setLocalStorage = ({ type, value }: LocalStorageProps) => {
//    localStorage.setItem(type, value)
// }

// export const getLocalStorage = (type) => {
//    localStorage.get
// }

// setLocalStorage()