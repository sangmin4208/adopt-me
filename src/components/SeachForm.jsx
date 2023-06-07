import BreedsSelect from './BreedsSelect'
import AnimalSelect from './AnimalSelect'
import { useAdoptedPets } from '../hooks/useAdoptedPets'

const SearchForm = ({
  animal,
  setAnimal,

  handleSubmit,
}) => {
  const [adoptedPets] = useAdoptedPets()

  return (
    <div className="search-params">
      <form onSubmit={handleSubmit}>
        <>
          <h2>
            {adoptedPets.length > 0
              ? 'You have adopted the following pets:'
              : 'You have not adopted any pets yet.'}
          </h2>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            {adoptedPets?.map((pet) => (
              <div key={pet.id} className="pet image-container">
                <img src={pet.images[0]} alt={pet.name}></img>
              </div>
            ))}
          </div>
        </>
        <label htmlFor="location">
          Location
          <input id="location" placeholder="Location" />
        </label>
        <AnimalSelect animal={animal} setAnimal={setAnimal} />
        <BreedsSelect animal={animal} />

        <button>Submit</button>
      </form>
    </div>
  )
}

export default SearchForm
