/*
   -numeroPokedex
   -nome
   -sprite da frente
   -tipo
   habilidades
*/
import './styles.scss'
import { api } from '../../services/api'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface DataPokemon {
   id: number;
   name: string;
   types: any;
   abilities: [];
   sprites: any;
}

export function CardsPokemonsStats() {
   const [dataPokemon, setDataPokemon] = useState<DataPokemon[]>([])
   // const dataPokemonApi: DataPokemon[] = []
   useEffect(() => {
      api.get('/pokemon?limit=151&offset=0')
         .then(response => response.data.results)
         .then(data => data.map((dataPokemon: any) =>
            axios.get(dataPokemon.url)
               .then(response => setDataPokemon(oldState => [...oldState, response.data]))
         ))
   }, [])
   console.log(dataPokemon)

   return (
      <>
         {dataPokemon.map(data => {
            return (
               <section>
                  <img
                     src={data.sprites.front_default}
                     alt="pokemon"
                  />
                  <p>{data.types[0].type.name}</p>
                  {/* <div className='headerCard'>
                     <img
                        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                        alt="pokemon"
                     />
                     <div>
                        <p>#{data.id}</p>
                        <h1>Bulbasaur</h1>
                     </div>
                  </div>

                  <div className="pokemonInfos">
                     <div className="pokemonTypes">
                        <p className="title">Type: </p>
                        <p className="grass">{data.types[0].type.name}</p>
                        <p className="poison">{data.types[1].type.name}</p>
                     </div>

                     <div className="pokemonAbility">
                        <p className="abilityTitle">Abilitys: </p>
                        <p>overgrow</p>
                        <p>chlorophyll</p>
                        <p>chlorophyll</p>
                     </div>
                  </div> */}
               </section>

            )
         })}
      </>
   )
}