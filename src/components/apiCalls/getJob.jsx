

export default async function getJobs(id) {
    const result = await fetch(`http://localhost:5000/api/v1/jobs/${id}`)

    return result.json()
}