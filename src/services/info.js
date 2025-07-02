import { fetchData } from "../services/main";

function crearCarta(titulo, contenidoHTML) {
  const card = document.createElement("article");
  card.className = "carta";
  card.innerHTML = `
    <div class="cabecera">
      <h3>${titulo}</h3>
    </div>
    <div class="contenido">
      ${contenidoHTML}
    </div>
  `;
  return card;
}

async function mostrarLibros() {
  const libros = await fetchData("books");
  const container = document.getElementById("libros_container");
  container.innerHTML = "";
  libros.forEach((libro) => {
    const contenido = `
      <p><strong>Título:</strong> ${libro.title}</p>
      <p><em>Título original:${libro.originalTitle}</em></p>
      <p><strong>Fecha en que salió:</strong> ${libro.releaseDate}</p>
      <p><strong>Descripción:</strong> ${libro.description}</p>
      <p><strong>Cantidad de páginas:</strong> ${libro.pages}</p>
      
    `;
    const card = crearCarta(libro.title, contenido);
    container.appendChild(card);
  });
}
async function mostrarCasas() {
  const casas = await fetchData("houses");
  const container = document.getElementById("casas_container");
  container.innerHTML = "";

  casas.forEach(casa => {
    const coloresCasa = casa.colors.map((color) =>
          `<span class="colorPlaca" style="background-color:${color};">${color}</span>`).join("");
    const contenido = `
    <div class="cabecera">
    <h3><strong>Nombre casa: </strong>${casa.house}</h3>
    </div>
    <p><strong>Emoji: </strong> ${casa.emoji}</p>
    <p><strong>Fundador: </strong> ${casa.founder}</p>
    <p><strong>Animal representativo: </strong> ${casa.animal}</p>
    <p><strong>Colores: </strong></p>
    <div>${coloresCasa}</div>
  `;
  const card =crearCarta(casa.house, contenido)
    container.appendChild(card);
  });
}
async function mostrarHechizos() {
  const hechizos = await fetchData("spells");
  const container = document.getElementById("hechizos_container");
  container.innerHTML = "";

  hechizos.forEach((hechizo) => {
    const contenido = `
      <p><strong>Hechizo:</strong> ${hechizo.spell}</p>
      <p><strong>Sirve para:</strong> ${hechizo.use}</p>
    `;
    const card = crearCarta(hechizo.spell, contenido);
    container.appendChild(card);
  });
}
async function mostrarPersonajes() {
  const personajes = await fetchData("characters");
  const container = document.getElementById("personajes_container");
  container.innerHTML = "";

  personajes.forEach((personaje) => {
    const hijos = personaje.children.length
      ? personaje.children.join(", ")
      : "Sin hijos";

    const contenido = `
      <img src="${personaje.image}" alt="Imagen de ${personaje.nickname}" />
      <p><strong>Nombre completo:</strong> ${personaje.fullname}</p>
      <p><strong>Apodo:</strong> ${personaje.nickname}</p>
      <p><strong>Casa de Hogwarts:</strong> ${
        personaje.hogwartsHouse || "Sin casa"
      }</p>
      <p><strong>Interpretado por:</strong> ${personaje.interpretedBy}</p>
      <p><strong>Fecha de nacimiento:</strong> ${personaje.birthDate}</p>
      <p><strong>Hijos:</strong> ${hijos}</p>
    `;
    const card = crearCarta(personaje.nickname, contenido);
    container.appendChild(card);
  });
}

mostrarLibros();
mostrarCasas();
mostrarPersonajes();
mostrarHechizos();
  