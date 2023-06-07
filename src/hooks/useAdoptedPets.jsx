import { useContext } from 'react'
import AdoptedPetContext from '../contexts/AdoptedPetContext'

export const useAdoptedPets = () => {
  return useContext(AdoptedPetContext)
}
