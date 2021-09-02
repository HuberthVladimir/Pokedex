import axios from 'axios'

import { api } from '../../services/api'
import { useEffect, useState } from 'react'
import { Loading } from '../../components/Loading'
import { Modal } from '../../components/Modal'
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
   const [loading, setLoading] = useState(true)
   const [amountCards, SetAmountCards] = useState(0)

   useEffect(() => {
      const getPokemonList = async () => {
         const { data: response } = await api.get(`/pokemon?limit=${amountCards}&offset=0`)
         let arrListPok = []
         for (let result of response.results) {
            const { data: responseMap } = await axios.get(result.url)
            arrListPok.push(responseMap)
         }
         setDataPokemon(arrListPok)
         setLoading(false)
      }
      getPokemonList()

   }, [amountCards])

   useEffect(() => {
      const intersectionObserver = new IntersectionObserver(entries => {
         if (entries.some(entry => entry.isIntersecting)) {
            SetAmountCards((currentValue) => currentValue < 898 ? currentValue + 15 : currentValue + 0);
         }
      })
      intersectionObserver.observe(document.querySelector('#end-page')!);
      return () => intersectionObserver.disconnect();
   }, [])

   function handleSearch(e: any) {
      setInputData(e.target.value)
   }

   return (
      <main>
         <Modal />

         <input type="seach" placeholder="You can seach your favorite Pokemon here 😜" name="PokemonSearch" onChange={handleSearch} />
         <div className={loading ? 'loading' : 'cardsPokemonList'} >

            {loading ?
               <Loading />
               :
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
                        return null
                     }
                  })
               )
            }
         </div>
         <div id="end-page" />

      </main>
   )
}