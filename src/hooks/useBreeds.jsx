import { useEffect, useState } from 'react'

const cache = {}

export default function useBreeds(animal) {
  const [breeds, setBreeds] = useState([])
  const [status, setStatus] = useState('unloaded')
  useEffect(() => {
    if (!animal) {
      setBreeds([])
    } else if (cache[animal]) {
      setBreeds(cache[animal])
    } else {
      requestBreeds()
    }
    async function requestBreeds() {
      setBreeds([])
      setStatus('loading')
      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`,
      )
      const json = await res.json()
      cache[animal] = json.breeds || []
      setBreeds(cache[animal])
      setStatus('loaded')
    }
  }, [animal])

  return [breeds, status]
}
