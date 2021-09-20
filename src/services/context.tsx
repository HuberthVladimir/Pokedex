import React, { useEffect, useState } from 'react'

import { IProviderProps, AppGlobalProps } from '../types'
//import { } from '../services/storage'

const useAppGlobalContext = React.createContext({} as AppGlobalProps)

export const AppProvider = ({ children }: IProviderProps) => {
   const [modal, setModal] = useState(false)
   const [requestIdModal, setRequestIdModal] = useState<string | null>(null)
   const [scrollPosition, setScrollPosition] = useState(0);
   const [generation, setGeneration] = useState(localStorage.getItem('GENERATION') || '');

   useEffect(() => {
      if (!modal) setRequestIdModal(null)
   }, [modal])

   useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => window.removeEventListener('scroll', handleScroll)
   }, []);

   const handleScroll = () => {
      const position = window.pageYOffset
      setScrollPosition(position)
   }

   const setGenerationLocalStorage = (value: string) => {
      setGeneration(value)
      localStorage.setItem('GENERATION', value)
   }

   return (
      <useAppGlobalContext.Provider
         value={{
            modal, setModal,
            requestIdModal, setRequestIdModal,
            scrollPosition, setScrollPosition,
            generation, setGeneration,
            setGenerationLocalStorage
         }}>
         {children}
      </useAppGlobalContext.Provider>
   )
}

export default useAppGlobalContext