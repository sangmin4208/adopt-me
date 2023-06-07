export const fetchSearch = async ({ queryKey }) => {
  const [, { animal, location, breed }] = queryKey
  const res = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`,
  )
  if (!res.ok) {
    throw new Error(`pets failed with status ${res.status}`)
  }

  const data = await res.json()
  return data.pets
}
