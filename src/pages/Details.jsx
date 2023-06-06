import { useParams } from 'react-router-dom'
import fetchPet from '../services/fetchPet'
import { useQuery } from '@tanstack/react-query'

const Details = () => {
  const { id } = useParams()
  const { data, isError, isLoading } = useQuery(['details', id], fetchPet)

  if (isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🚀</h2>
      </div>
    )
  }

  if (isError) {
    return <h2>Error: {isError.message}</h2>
  }

  const pet = data.pets[0]

  return (
    <div className="details">
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {`${pet.animal} - ${pet.breed} - ${pet.city}, ${pet.state}`}
          <button>Adopt {pet.name}</button>
          <p>{pet.description}</p>
        </h2>
      </div>
    </div>
  )
}
export default Details
