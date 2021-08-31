import React, { ReactNode, useEffect } from 'react'

export interface IProviderProps {
   children?: ReactNode;
}

interface AppGlobalProps {
   modal: boolean
   setModal: (arg: boolean) => void
   requestIdModal: string | null
   setRequestIdModal: (arg: string | null) => void
}

const AppGlobalContext = React.createContext({} as AppGlobalProps)

export const AppProvider = ({ children }: IProviderProps) => {
   const [modal, setModal] = React.useState(false)
   const [requestIdModal, setRequestIdModal] = React.useState<string | null>(null)

   useEffect(() => {
      if (!modal) {
         setRequestIdModal(null)
      }
   }, [modal])

   return (
      <AppGlobalContext.Provider
         value={{
            modal, setModal,
            requestIdModal, setRequestIdModal
         }}>
         {children}
      </AppGlobalContext.Provider>
   )
}

export default AppGlobalContext