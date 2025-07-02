const BASEAPI = "https://potterapi-fedeperin.vercel.app/es";

export async function fetchData(tipo) {
  try {
    const resp = await fetch(`${BASEAPI}/${tipo}`);
    if (!resp.ok) throw new Error("No se pudo con la info pa");
    const dato = await resp.json();
    return dato;
  } catch (e) {
    return console.error(e.message);
  }
}
