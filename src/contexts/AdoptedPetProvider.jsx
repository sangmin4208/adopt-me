import React from 'react'
import AdoptedPetContext from './AdoptedPetContext'

export default function AdoptedPetProvider({ children }) {
  const state = React.useState([])
  return (
    <AdoptedPetContext.Provider value={state}>
      {children}
    </AdoptedPetContext.Provider>
  )
}
