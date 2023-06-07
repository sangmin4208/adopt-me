import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import fetchPet from '../services/fetchPet'
import { useQuery } from '@tanstack/react-query'
import Carousel from '../components/Carousel'
import ErrorBoundary from '../components/ErrorBoundary'
import Modal from '../components/Modal'
import { useAdoptedPets } from '../hooks/useAdoptedPets'
const Details = () => {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)
  const { id } = useParams()
  const { data, isError, isLoading } = useQuery(['details', id], fetchPet)

  const [adoptedPets, setAdoptedPets] = useAdoptedPets() // eslint-disable-line no-unused-vars
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
  const isAlreadyAdopted = adoptedPets.some((p) => p.id === pet.id)

  const handleAdopt = () => {
    if (isAlreadyAdopted) {
      setAdoptedPets((prev) => prev.filter((p) => p.id !== pet.id))
      setShowModal(false)
    } else {
      setAdoptedPets((prev) => [...prev, pet])
      navigate('/')
    }
  }

  return (
    <>
      {showModal && (
        <Modal>
          <div>
            {isAlreadyAdopted ? (
              <>
                <h1>You have already adopted {pet.name}!</h1>
                <p>Are you sure you cancel your adoption of {pet.name}?</p>
              </>
            ) : (
              <h1>Would you like to adopt {pet.name}?</h1>
            )}

            <div className="buttons">
              <button onClick={handleAdopt}>Yes</button>
              <button onClick={() => setShowModal(false)}>No</button>
            </div>
          </div>
        </Modal>
      )}

      <div className="details">
        <Carousel images={pet.images} />
        <div>
          <h1>{pet.name}</h1>
          <h2>
            {`${pet.animal} - ${pet.breed} - ${pet.city}, ${pet.state}`}
            <button onClick={() => setShowModal(true)}>Adopt {pet.name}</button>
            <p>{pet.description}</p>
          </h2>
        </div>
      </div>
    </>
  )
}

function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  )
}

export default DetailsErrorBoundary
