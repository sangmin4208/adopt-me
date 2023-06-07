import { useQuery } from '@tanstack/react-query'
import { fetchSearch } from '../services/fetchSearch'

export const useAnimals = ({ animal, breed, location }) => {
  const { data, isLoading, isError } = useQuery(
    ['animals', { animal, breed, location }],
    fetchSearch,
  )
  return {
    pets: data || [],
    isLoading,
    isError,
  }
}
