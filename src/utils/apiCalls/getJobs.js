export default async function () {
  const result = await fetch("http://localhost:3000/api/jobs?");

  return result.json();
}
