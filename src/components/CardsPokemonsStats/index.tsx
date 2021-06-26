import './styles.scss'

interface CardsPokemonsProps {
   sprite: string;
   id: string;
   name: string;
   firstType: string;
   secondType: string;
   firstAbility?: string;
   secondAbility?: string;
   thirdAbility?: string;
}

const CardsPokemonsStats: React.FC<CardsPokemonsProps> = ({ sprite, id, name, firstType, secondType, firstAbility, secondAbility, thirdAbility }) => {

   return (
      <>
         <section className={firstType}>
            <div className='headerCard'>
               <img
                  src={sprite}
                  alt={name}
               />
               <div>
                  <p>#{id}</p>
                  <h1>{name}</h1>
               </div>
            </div>

            <div className="pokemonInfos">
               <div className="pokemonTypes">
                  <p className="title">Type: </p>
                  <p className={firstType}>{firstType}</p>
                  <p className={secondType}>{secondType}</p>
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