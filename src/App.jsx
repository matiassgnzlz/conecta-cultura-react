import { useState } from "react";
import Cabecera from "./components/Cabecera";
import Navegacion from "./components/Navegacion";
import Cartelera from "./pages/Cartelera";
import { actividades } from "./data/actividades";
function App() {
const [categoria, setCategoria] = useState("Todas");
const visibles = categoria === "Todas"
? actividades
: actividades.filter((actividad) => actividad.categoria === categoria);
function inscribirTemporal(actividad) {
console.log("Actividad seleccionada:", actividad.nombre);
}
return (
<>
<Cabecera />
<Navegacion />
<main className="container py-4">
<select
className="form-select mb-4"
value={categoria}
onChange={(evento) => setCategoria(evento.target.value)}
>
<option>Todas</option>
<option>Música</option>
<option>Artes visuales</option>
</select>
<Cartelera
actividades={visibles}
onInscribir={inscribirTemporal}
/>
</main>
</>
);
}
export default App;