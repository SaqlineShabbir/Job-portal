export default async function getUser(id) {
    const result = await fetch(`http://localhost:5000/api/v1/users/${id}`)

    return result.json()
}