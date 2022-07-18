import axios from 'axios'
import { useEffect, useState } from 'react'

import { api } from 'services/api'
import { Loading } from 'components/Loading'
import { Modal } from 'components/Modal'
import { CardsPokemonsStats } from 'components/CardsPokemonsStats'
import { BackToTop } from 'components/BackToTop'
import { DataPokemon } from 'types'

import './styles.scss'

export function PokemonLIst() {
   const [dataPokemon, setDataPokemon] = useState<DataPokemon[]>([])
   const [inputData, setInputData] = useState<string | number>('')
   const [dataSearchingPokemon, setDataSearchingPokemon] = useState<DataPokemon[]>([])
   const [isSearching, setIsSearching] = useState(false)
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

   async function handleSubmit(e: any) {
      e.preventDefault()

      if (inputData === '') {
         setIsSearching(false)
         setDataSearchingPokemon([])
         setInputData('')

      } else if (isNaN(Number(inputData))) {
         setLoading(true)
         const { data: response } = await api.get(`https://pokeapi.co/api/v2/pokemon?limit=898&offset=0`)
         const searchResult = response.results.filter((data: any) => data.name.includes(`${inputData}`))
         let arrListPok = []
         for (let result of searchResult) {
            const { data: responseMap } = await axios.get(result.url)
            arrListPok.push(responseMap)
         }
         setDataSearchingPokemon(arrListPok)
         setIsSearching(true)
         setLoading(false)

      } else {
         const { data: response } = await api.get(`https://pokeapi.co/api/v2/pokemon/${inputData}`)
         setDataSearchingPokemon([response])
         setIsSearching(true)
      }
   }

   return (
      <main>
         <Modal />
         <BackToTop />

         <form className="input-label" onSubmit={handleSubmit}>
            <label htmlFor="PokemonSearch" className="sr-only">Pokemon Search</label>
            <input type="seach" placeholder="Search any pokemon by name or id" name="PokemonSearch" id="PokemonSearch" value={inputData} onChange={(e) => setInputData(e.target.value)} />

            <button type="submit" id="input-button">Search</button>

            {isSearching &&
               <button
                  type="button"
                  id="input-button"
                  style={{ background: "#000", color: "#FFF" }}
                  onClick={() => {
                     setIsSearching(false)
                     setInputData('')
                  }
                  }
               >
                  Reset search
               </button>}
         </form>

         <div className={loading ? 'loading' : 'cardsPokemonList'} >

            {loading ?
               <Loading />
               :
               !isSearching &&
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
               isSearching &&
               (
                  dataSearchingPokemon.map((data) => {
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
                  })
               )
            }
         </div>
         <div id="end-page" style={{ display: `${isSearching ? 'none' : 'block'}` }} />
      </main>
   )
}