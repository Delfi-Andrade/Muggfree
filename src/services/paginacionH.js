import { fetchData } from "../services/main";

import { crearCarta } from "./info";
const hechizosPorPagina = 4;
let paginaActual = 1;

const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("siguiente");
const nroPagina = document.getElementById("pagina");

btnPrev.addEventListener("click", () => {
  if (paginaActual > 1) {
    paginaActual--;
    renderizarPagina(paginaActual);
  }
});

btnNext.addEventListener("click", () => {
paginaActual++;
renderizarPagina(paginaActual);
});
async function renderizarPagina(pagina) {
  const hechizos = await fetchData("spells");

  const inicio = (pagina - 1) * hechizosPorPagina;
  const fin = inicio + hechizosPorPagina;
  const hechizosPaginados = hechizos.slice(inicio, fin);
  const container = document.getElementById("hechizos_container");
  container.innerHTML = "";

  hechizosPaginados.forEach(hechizo => {
    const contenido = `
    <p><strong>Hechizo:</strong> ${hechizo.spell}</p>
    <p><strong>Sirve para:</strong> ${hechizo.use}</p>`;
    const card = crearCarta(hechizo.spell, contenido);
    container.appendChild(card);
  });

  nroPagina.textContent = `Página ${pagina} de ${Math.ceil(
    hechizos.length / hechizosPorPagina
  )}`;
  btnPrev.disabled = pagina === 1;
  btnNext.disabled = fin >= hechizos.length;
  
}

renderizarPagina(paginaActual);
