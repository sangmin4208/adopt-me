import { useQuery } from '@tanstack/react-query'
import { fetchBreedList } from '../services/fetchBreedList'

export default function useBreeds(animal) {
  const { data, isError, isLoading } = useQuery(
    ['breeds', animal],
    fetchBreedList,
  )
  return {
    breeds: data || [],
    isError,
    isLoading,
  }
}
