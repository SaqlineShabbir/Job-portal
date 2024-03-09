export default async function () {

    const result = await fetch('https://job-portal-kohl-six.vercel.app/api/v1/jobs?')


    return result.json()

}