const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile']

const AnimalSelect = ({ animal, setAnimal }) => {
  return (
    <label>
      Animal
      <select
        value={animal}
        name="animal"
        onChange={(e) => setAnimal(e.target.value)}
      >
        <option />
        {ANIMALS.map((animal) => (
          <option key={animal} value={animal}>
            {animal}
          </option>
        ))}
      </select>
    </label>
  )
}

export default AnimalSelect
