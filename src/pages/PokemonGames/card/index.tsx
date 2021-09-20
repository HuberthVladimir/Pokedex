import React, { useContext } from "react"
import './card.scss'
// import { getGeneration } from '../../../services/storage'
// import { useHistory } from 'react-router-dom'
import useAppGlobalContext from '../../../services/context'

export const CardPokemonGame = () => {
   const { generation } = useContext(useAppGlobalContext)

   React.useEffect(() => {
      console.log(generation)
   }, [generation])

   return (
      <>
      </>

   )
}