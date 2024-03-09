export default async function (queryString) {

    const result = await fetch(`http://localhost:3000/api/jobs?${queryString}`)

    return result.json()

}