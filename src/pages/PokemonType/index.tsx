import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { api } from "../../services/api";
import CardsPokemonsStats from '../../components/CardsPokemonsStats'

import './style.scss'
import { Loading } from "../../components/Loading";

interface DataPokemon {
   id: string;
   name: string;
   types: Array<{ type: { name: string } }>;
   abilities: Array<{ ability: { name: string } }>;
   sprites: { front_default: string };
}

export function PokemonTypes() {
   const [dataPokemon, setDataPokemon] = useState<DataPokemon[]>([])
   const [type, setType] = useState(0)
   const [loading, setLoading] = useState(type === 0 ? false : true)
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
            setLoading(false)
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
         <div className="buttonsSection">
            <Button handleClick={() => setType(1)} color="normal">Normal</Button>
            <Button handleClick={() => setType(2)} color="fighting">Fighting</Button>
            <Button handleClick={() => setType(3)} color="flying">Flying</Button>
            <Button handleClick={() => setType(4)} color="poison">Poison</Button>
            <Button handleClick={() => setType(5)} color="ground">Ground</Button>
            <Button handleClick={() => setType(6)} color="rock">Rock</Button>
            <Button handleClick={() => setType(7)} color="bug">Bug</Button>
            <Button handleClick={() => setType(8)} color="ghost">Ghost</Button>
            <Button handleClick={() => setType(9)} color="steel">Steel</Button>
            <Button handleClick={() => setType(10)} color="fire">Fire</Button>
            <Button handleClick={() => setType(11)} color="water">Water</Button>
            <Button handleClick={() => setType(12)} color="grass">Grass</Button>
            <Button handleClick={() => setType(13)} color="electric">Electric</Button>
            <Button handleClick={() => setType(14)} color="psychic">Psychic</Button>
            <Button handleClick={() => setType(15)} color="ice">Ice</Button>
            <Button handleClick={() => setType(16)} color="dragon">Dragon</Button>
            <Button handleClick={() => setType(17)} color="dark">Dark</Button>
            <Button handleClick={() => setType(18)} color="fairy">Fairy</Button>
         </div>

         <div className={type > 0 ? 'cardsPokemonList' : 'loading'} >

            {
               type === 0 &&
               <h1>Select a pokemon Type</h1>
            }
            {
               loading ?
                  <Loading />
                  :
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