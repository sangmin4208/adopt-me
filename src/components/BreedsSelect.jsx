import useBreeds from '../hooks/useBreeds'

export default function BreedsSelect({ animal }) {
  const { breeds, isLoading, isError } = useBreeds(animal)

  return (
    <label>
      Breed
      <select name="breed" disabled={isLoading || isError}>
        <option />
        {breeds.map((breed) => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>
    </label>
  )
}
