import { describe, test, expect } from "vitest";
import { Alumno } from "../src/Alumno";
import { Profesor } from "../src/Profesor";

describe ("Clase Alumno", () => {
  test ("Creación de un alumno", () => {
    let alumno1 = new Alumno( 'email', 'curso', 100, 8, 'nombre', 'apellido', 'fecha', 12345678, 'direccion', 123456789);
    expect(alumno1).toBeInstanceOf(Alumno);
  });
  test ("Mostrar datos de un alumno", () => {
    let alumno1 = new Alumno( 'email', 'curso', 100, 3, 'nombre', 'apellido', 'fecha', 12345678, 'direccion', 123456789);
    expect(alumno1.showData()).toBe("Nombre: nombre, Apellido: apellido, Fecha de nacimiento: fecha, DNI: 12345678, Dirección: direccion, Teléfono: 123456789, Email: email, Curso: curso, Coste de matrícula: 100, Nota: 3");
  });
});

describe ("Clase Profesor", () => {
  let profesor1 = new Profesor('email', 'horario_tutos', 'despacho', 5, 'nombre', 'apellido', 'fecha', 12345678, 'direccion', 123456789);
  test("Creación de un profesor", () => {
    expect(profesor1).toBeInstanceOf(Profesor);
  });
  test("Mostrar datos de un profesor", () => {
    expect(profesor1.showData()).toBe("Nombre: nombre, Apellido: apellido, Fecha de nacimiento: fecha, DNI: 12345678, Dirección: direccion, Teléfono: 123456789, Email: email, Horario de tutorías: horario_tutos, Despacho: despacho, Número de asignaturas: 5");
  });

})