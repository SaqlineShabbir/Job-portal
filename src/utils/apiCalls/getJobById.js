export default async function () {

    const result = await fetch(`https://job-portall.onrender.com/api/jobs`)


    return result.json()

}