export const fetchBreedList = async ({ queryKey }) => {
  const [, animal] = queryKey
  if (!animal) {
    return []
  }
  const res = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`)
  if (!res.ok) {
    throw new Error(`breeds/${animal} failed with status ${res.status}`)
  }
  const data = await res.json()
  return data.breeds
}
