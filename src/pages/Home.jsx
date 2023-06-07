import { useState } from 'react'
import SearchForm from '../components/SeachForm'
import { useAnimals } from '../hooks/useAnimals'
import Results from '../components/Results'

const Home = () => {
  const [animal, setAnimal] = useState('')
  const [requestParams, setRequestParams] = useState({
    animal: '',
    breed: '',
    location: '',
  })
  const { pets, isLoading, isError } = useAnimals({ ...requestParams })
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    setRequestParams({
      animal: formData.get('animal') ?? '',
      breed: formData.get('breed') ?? '',
      location: formData.get('location') ?? '',
    })
  }
  return (
    <>
      <SearchForm
        animal={animal}
        setAnimal={setAnimal}
        handleSubmit={handleSubmit}
      />
      {isError && <h1>Error: {isError}</h1>}
      {isLoading && <h1>Loading...</h1>}
      {!isLoading && !isError && <Results pets={pets} />}
    </>
  )
}

export default Home
