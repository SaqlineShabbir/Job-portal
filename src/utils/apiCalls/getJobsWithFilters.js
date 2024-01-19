export default async function (queryString) {

    const result = await fetch(`https://job-portall.onrender.com/api/v1/jobs?${queryString}`)

    return result.json()

}