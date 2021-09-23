import { ReactNode } from 'react'

export type DataPokemon = {
   id: string;
   name: string;
   types: Array<{ type: { name: string } }>;
   abilities: Array<{ ability: { name: string } }>;
   sprites: { front_default: string };
}

export type ComponentButtonProps = {
   handleClick?: any;
   children: string;
   color: string;
}

export type ComponentCardsPokemonsProps = {
   sprite: string;
   id: string;
   name: string;
   firstType: string;
   secondType: string;
   firstAbility?: string;
   secondAbility?: string;
   thirdAbility?: string;
}

export type ComponentDataPokemonModal = {
   id: string;
   name: string;
   types: Array<{ type: { name: string } }>;
   sprites: { other: { 'official-artwork': { front_default: string } } };
}

//context

export interface IProviderProps {
   children?: ReactNode;
}

export interface AppGlobalProps {
   modal: boolean
   setModal: (arg: boolean) => void
   requestIdModal: string | null
   setRequestIdModal: (arg: string | null) => void
   scrollPosition: number
   setScrollPosition: (arg: number) => void
   score: number[],
   setScore: (arg: number) => void
}