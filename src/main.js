async function fetchApi() {
  const casas = await fetch(
    " https://potterapi-fedeperin.vercel.app/es/houses"
  );
  return console.log(casas);
}
fetchApi();