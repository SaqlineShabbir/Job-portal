export default async function () {

    const result = await fetch('https://job-portall.onrender.com/api/v1/jobs?')


    return result.json()

}