import { useGloBalContext } from '../../hooks/context'

import './styles.scss'

import { ComponentCardsPokemonsProps } from '../../types'

const CardsPokemonsStats = ({ sprite, id, name, firstType, secondType, firstAbility, secondAbility, thirdAbility }: ComponentCardsPokemonsProps) => {

   const { setModal, setRequestIdModal } = useGloBalContext()

   const handleClickModal = () => {
      setModal(true)
      setRequestIdModal(id)
   }

   return (
      <>
         <section className={`card ${firstType}`} onClick={handleClickModal}>
            <div className='headerCard'>
               <img
                  src={sprite}
                  alt={name}
                  loading="lazy"
               />
               <div>
                  <p>#{id}</p>
                  <h1>{name}</h1>
               </div>
            </div>

            <div className="pokemonInfos">
               <div className="pokemonTypes">
                  <p className="title">Type: </p>
                  <p className={`typeTag ${firstType}`}>{firstType}</p>
                  <p className={secondType ? `typeTag ${secondType}` : ''}>{secondType}</p>
               </div>
               <div className="pokemonAbility">
                  <p className="abilityTitle">Abilitys: </p>
                  <p>{firstAbility}</p>
                  <p>{secondAbility}</p>
                  <p>{thirdAbility}</p>
               </div>
            </div>
         </section>

      </>
   )
}

export default CardsPokemonsStats
