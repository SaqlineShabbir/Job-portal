export default async function (queryString) {

    const result = await fetch(`http://localhost:5000/api/v1/jobs?${queryString}`)

    return result.json()

}