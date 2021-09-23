import { useEffect, useState } from 'react'
import { useGloBalContext } from '../../hooks/context'

import './styles.scss'

import { api } from '../../services/api'

import { ComponentDataPokemonModal } from '../../types'

export const Modal = () => {
   const { modal, setModal, requestIdModal } = useGloBalContext()
   const [dataPokemonModal, setDataPokemonModal] = useState<ComponentDataPokemonModal[]>([])
   const [typePokemonModal, setTypePokemonModal] = useState('')

   const hasSecondType = dataPokemonModal.map(data => {
      return (!!data?.types[1]?.type.name === true)
   })

   useEffect(() => {
      const requestModal = async () => {
         if (requestIdModal != null) {
            const { data: response } = await api.get(`/pokemon/${requestIdModal}`)
            setDataPokemonModal([response])
         }
      }
      requestModal()
   }, [requestIdModal])

   useEffect(() => {
      dataPokemonModal.map(data => setTypePokemonModal(data.types[0].type.name))
   }, [dataPokemonModal])

   return (
      <div id="modal" onClick={() => setModal(false)} style={modal ? { display: 'flex' } : { display: 'none' }} >

         <div className={`${typePokemonModal} content`} onClick={e => e.stopPropagation()} >

            <div className="closeButton" aria-label="botão de fechar modal" onClick={() => setModal(false)}>&times;</div>

            {dataPokemonModal.map((data) =>
               <div key={data.id} className='contentModal'>
                  <div className="topContent">
                     <img src={data.sprites.other['official-artwork'].front_default} alt={`${data.name} arte oficial`} />

                     <div className="infosPokemon">
                        <p>#{data.id}</p>
                        <h1>{data.name}</h1>
                     </div>
                  </div>
                  <div className="typesInfo">
                     <p className={data.types[0]?.type.name}>
                        {data.types[0].type.name}
                     </p>
                     {hasSecondType[0] &&
                        <p className={data.types[1]?.type.name}>
                           {data?.types[1]?.type.name}
                        </p>
                     }

                  </div>
               </div>
            )}

         </div>
      </div>
   )
}