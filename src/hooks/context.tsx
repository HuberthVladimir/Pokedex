import React, { useContext, useEffect, useState } from 'react'

import { IProviderProps, AppGlobalProps } from '../types'

const useAppGlobalContext = React.createContext({} as AppGlobalProps)

export const AppProvider = ({ children }: IProviderProps) => {
   const [modal, setModal] = useState(false)
   const [requestIdModal, setRequestIdModal] = useState<string | null>(null)
   const [scrollPosition, setScrollPosition] = useState(0)
   const [score, setScore] = useState(() => {
      const storageScore = localStorage.getItem('SCORE')

      if (storageScore) {
         return JSON.parse(storageScore)
      }

      return []
   })

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

   return (
      <useAppGlobalContext.Provider
         value={{
            modal, setModal,
            requestIdModal, setRequestIdModal,
            scrollPosition, setScrollPosition,
            score, setScore,
         }}>
         {children}
      </useAppGlobalContext.Provider>
   )
}

export function useGloBalContext(): AppGlobalProps {
   const context = useContext(useAppGlobalContext)

   return context
}