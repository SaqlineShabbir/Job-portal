export default async function (queryString) {
  const result = await fetch(
    `https://job-portal-kohl-six.vercel.app/api/jobs?${queryString}`
  );

  return result.json();
}
