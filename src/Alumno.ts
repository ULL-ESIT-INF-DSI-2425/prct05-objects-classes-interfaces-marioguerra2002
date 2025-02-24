import { Persona } from '../src/Persona';
import { IAlumno } from '../src/IAlumno';
/**
 * Clase Alumno que hereda de Persona e implementa la interfaz IAlumno.
 */
export class Alumno extends Persona implements IAlumno {
  constructor(
    private _email: string,
    private _curso: string,
    private _coste_matricula: number,
    private _nota: number,
    nombre: string,
    apellido: string,
    fecha: string,
    dni: number,
    direccion: string,
    telefono: number,
  ) {
    super(nombre, apellido, fecha, dni, direccion, telefono);
  }
  get email(): string {
    return this._email;
  }
  get curso(): string {
    return this._curso;
  }
  get coste_matricula(): number {
    return this._coste_matricula;
  }
  get nota(): number {
    return this._nota;
  }

  set email(email: string) {
    this._email = email;
  }
  set curso(curso: string) {
    this._curso = curso;
  }
  set coste_matricula(coste_matricula: number) {
    this._coste_matricula = coste_matricula;
  }
  set nota(nota: number) {
    this._nota = nota;
  }
  /**
   * Función que imprime los datos del alumno.
   * @returns string
   */
  showData(): string {
    let result: string = `Nombre: ${this.nombre}, Apellido: ${this.apellido}, Fecha de nacimiento: ${this.fecha}, DNI: ${this.dni}, Dirección: ${this.direccion}, Teléfono: ${this.telefono}, Email: ${this.email}, Curso: ${this.curso}, Coste de matrícula: ${this.coste_matricula}, Nota: ${this.nota}`;
    return result;
  }
}