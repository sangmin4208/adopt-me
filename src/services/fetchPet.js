const fetchPet = async ({ queryKey }) => {
  const [, id] = queryKey
  const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`)
  if (!res.ok) {
    throw new Error(`An error has occured: ${res.status} details: ${id}`)
  }
  return res.json()
}

export default fetchPet
