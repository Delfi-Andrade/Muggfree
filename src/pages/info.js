import { fetchData } from "../services/main";

const casas = fetchData("houses");
const libros= fetchData("books");
const personajes= fetchData("characters");
const hechizos= fetchData("spells");