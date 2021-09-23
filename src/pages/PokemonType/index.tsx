import axios from "axios";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import CardsPokemonsStats from '../../components/CardsPokemonsStats'

import './style.scss'
//import { Loading } from "../../components/Loading";
import { Modal } from "../../components/Modal";
import { BackToTop } from "../../components/BackToTop";

import { DataPokemon } from '../../types'

export function PokemonTypes() {
   const [dataPokemon, setDataPokemon] = useState<DataPokemon[]>([])
   const [type, setType] = useState(0)
   //const [loading, setLoading] = useState(type === 0 ? false : true)
   const [amountCards, SetAmountCards] = useState(0)

   useEffect(() => {
      const getPokemonList = async () => {

         if (type > 0) {
            const { data: response } = await api.get(`/type/${type}`)

            const amountCardsReturn = response.pokemon.slice(0, amountCards)

            let arrListPok = []
            for (let result of amountCardsReturn) {
               let pokeIdUrl = result.pokemon.url
               let idPokemon = pokeIdUrl.match(/[^/]+(?=\/$|$)/g).toString()

               if (idPokemon <= 898) {
                  const { data: responseMap } = await axios.get(pokeIdUrl)
                  arrListPok.push(responseMap)
               }
            }
            setDataPokemon(arrListPok)
         }
      }
      getPokemonList()

   }, [amountCards, type])

   useEffect(() => {
      setDataPokemon([])
      SetAmountCards(0)
   }, [type])

   useEffect(() => {
      const intersectionObserver = new IntersectionObserver(entries => {
         if (entries.some(entry => entry.isIntersecting)) {
            SetAmountCards((currentValue) => currentValue < 999 ? currentValue + 15 : 0);
         }
      })
      intersectionObserver.observe(document.querySelector('#end-page')!);
      return () => intersectionObserver.disconnect();
   }, [])

   return (
      <>
         <Modal />
         <BackToTop />

         <div className="custom-select">
            <select onChange={(e) => setType(+e.target.value)}>
               <option value="0">Select a Pokemon:</option>
               <option value="1">Normal</option>
               <option value="2">Fighting</option>
               <option value="3">Flying</option>
               <option value="4">Poison</option>
               <option value="5">Ground</option>
               <option value="6">Rock</option>
               <option value="7">Bug</option>
               <option value="8">Ghost</option>
               <option value="9">Steel</option>
               <option value="10">Fire</option>
               <option value="11">Water</option>
               <option value="12">Grass</option>
               <option value="13">Electric</option>
               <option value="14">Psychic</option>
               <option value="15">Ice</option>
               <option value="16">Dragon</option>
               <option value="17">Dark</option>
               <option value="18">Fairy</option>
            </select>
         </div>

         <div className="cardsPokemonList" >

            {
               type === 0 &&
               <>
                  <div></div>
                  <div></div>
                  <h1 style={{ textAlign: "center" }}
                  >Select a pokemon Type</h1>
               </>
            }


            {
               type > 0 &&
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
            <div id="end-page" />
         </div>
      </>
   )
}