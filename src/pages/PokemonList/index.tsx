import { api } from '../../services/api'
import { useEffect, useState } from 'react'
import axios from 'axios'
import CardsPokemonsStats from '../../components/CardsPokemonsStats'

import './styles.scss'

interface DataPokemon {
   id: string;
   name: string;
   types: Array<{ type: { name: string } }>;
   abilities: Array<{ ability: { name: string } }>;
   sprites: { front_default: string };
}

export function PokemonLIst() {
   const [dataPokemon, setDataPokemon] = useState<DataPokemon[]>([])
   const [inputData, setInputData] = useState('')

   useEffect(() => {
      const getPokemonList = async () => {
         const { data: response } = await api.get('/pokemon?limit=151&offset=0')
         response.results.map(async (result: { url: string }) => {
            const { data: responseMap } = await axios.get(result.url)
            setDataPokemon(oldState => [...oldState, responseMap])
         }
         )
      }

      getPokemonList()

   }, [])

   function handleSearch(e: any) {
      setInputData(e.target.value)
   }

   return (
      <main>
         <input type="seach" placeholder="You can seach your favorite Pokemon here 😜" name="PokemonSearch" onChange={handleSearch} />
         <div className="cardsPokemonList" >
            {
               !inputData &&
               (
                  dataPokemon.map((data) =>
                  (
                     <CardsPokemonsStats
                        key={data.id}
                        id={data.id}
                        name={data.name}
                        firstType={data.types[0].type.name}
                        secondType={data.types[1]?.type?.name}
                        firstAbility={data.abilities[0].ability.name}
                        secondAbility={data.abilities[1]?.ability?.name}
                        thirdAbility={data.abilities[2]?.ability?.name}
                        sprite={data.sprites.front_default}
                     />
                  )
                  )
               )
            }
            {
               inputData &&
               (
                  dataPokemon.map((data) => {
                     if (data.name.includes(inputData)) {
                        return <CardsPokemonsStats
                           key={data.id}
                           id={data.id}
                           name={data.name}
                           firstType={data.types[0].type.name}
                           secondType={data.types[1]?.type?.name}
                           firstAbility={data.abilities[0].ability.name}
                           secondAbility={data.abilities[1]?.ability?.name}
                           thirdAbility={data.abilities[2]?.ability?.name}
                           sprite={data.sprites.front_default}
                        />
                     } else {
                        return <p>We couldn't find your seach. Sry</p>
                     }
                  })
               )
            }
         </div>
      </main>
   )
}