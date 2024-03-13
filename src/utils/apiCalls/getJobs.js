export default async function () {
    const result = await fetch('http://localhost:5000/api/v1/jobs?')
    return result.json()
};