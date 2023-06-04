import { useEffect, useState } from 'react'
import Results from './Results'
import useBreeds from '../hooks/useBreeds'

const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile']

const SearchParams = () => {
  const [location, setLocation] = useState('Seattle, WA')
  const [animal, setAnimal] = useState('')
  const [breed, setBreed] = useState('')
  const [pets, setPets] = useState([])
  const [breeds] = useBreeds(animal)

  useEffect(() => {
    async function initialize() {
      const pets = await requestPets()
      setPets(pets)
    }
    initialize()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setBreed('')
  }, [breeds])

  const requestPets = async () => {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`,
    )
    const json = await res.json()
    return json.pets
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const results = await requestPets()
    setPets(results)
  }
  return (
    <div className="search-params">
      <form onSubmit={handleSubmit}>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label>
          Animal
          <select value={animal} onChange={(e) => setAnimal(e.target.value)}>
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label>
          Breed
          <select value={breed} onChange={(e) => setBreed(e.target.value)}>
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>

        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  )
}

export default SearchParams
