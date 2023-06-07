import BreedsSelect from './BreedsSelect'
import AnimalSelect from './AnimalSelect'

const SearchForm = ({
  animal,
  setAnimal,

  handleSubmit,
}) => {
  return (
    <div className="search-params">
      <form onSubmit={handleSubmit}>
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
