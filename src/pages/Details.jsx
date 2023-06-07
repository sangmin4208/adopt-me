import { useState } from 'react'
import { useParams } from 'react-router-dom'
import fetchPet from '../services/fetchPet'
import { useQuery } from '@tanstack/react-query'
import Carousel from '../components/Carousel'
import ErrorBoundary from '../components/ErrorBoundary'
import Modal from '../components/Modal'
const Details = () => {
  const [showModal, setShowModal] = useState(false)
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
    <>
      {showModal && (
        <Modal>
          <div>
            <h1>Would you like to adopt {pet.name}?</h1>
            <div className="buttons">
              <button onClick={() => setShowModal(false)}>Yes</button>
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
