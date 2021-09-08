import React, { useEffect, useState } from 'react'

import { IProviderProps, AppGlobalProps } from '../types'

const AppGlobalContext = React.createContext({} as AppGlobalProps)

export const AppProvider = ({ children }: IProviderProps) => {
   const [modal, setModal] = useState(false)
   const [requestIdModal, setRequestIdModal] = useState<string | null>(null)
   const [scrollPosition, setScrollPosition] = useState(0);

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
      <AppGlobalContext.Provider
         value={{
            modal, setModal,
            requestIdModal, setRequestIdModal,
            scrollPosition, setScrollPosition
         }}>
         {children}
      </AppGlobalContext.Provider>
   )
}

export default AppGlobalContext