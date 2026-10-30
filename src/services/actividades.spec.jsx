import { vi } from "vitest";
import { obtenerNombres } from "./actividades";

it("obtiene los nombres entregados por el servicio", async () => {
  const servicio = {
    listar: vi.fn().mockResolvedValue([
      { id: 1, nombre: "Guitarra", cupos: 10 }
    ])
  };

  const nombres = await obtenerNombres(servicio);

  expect(servicio.listar).toHaveBeenCalled();
  expect(nombres).toEqual(["Guitarra"]);
});
