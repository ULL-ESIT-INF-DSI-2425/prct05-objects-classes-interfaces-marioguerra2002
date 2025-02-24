import { Persona } from '../src/Persona';
import { IProfesor } from '../src/IProfesor';

/**
 * Clase Profesor que hereda de Persona e implementa IProfesor.
 */
export class Profesor extends Persona implements IProfesor {
  constructor(
    private _email: string,
    private _horario_tutorias: string,
    private _despacho: string,
    private _num_asignaturas: number,
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
  get horario_tutorias(): string {
    return this._horario_tutorias;
  }
  get despacho(): string {
    return this._despacho;
  }
  get num_asignaturas(): number {
    return this._num_asignaturas;
  }

  set email(email: string) {
    this._email = email;
  }
  set horario_tutorias(horario_tutorias: string) {
    this._horario_tutorias = horario_tutorias;
  }
  set despacho(despacho: string) {
    this._despacho = despacho;
  }
  /**
   * Función que imprime los datos del profesor.
   * @returns string
   */
  showData(): string {
    let result: string = `Nombre: ${this.nombre}, Apellido: ${this.apellido}, Fecha de nacimiento: ${this.fecha}, DNI: ${this.dni}, Dirección: ${this.direccion}, Teléfono: ${this.telefono}, Email: ${this.email}, Horario de tutorías: ${this.horario_tutorias}, Despacho: ${this.despacho}, Número de asignaturas: ${this.num_asignaturas}`;
    return result;
  }
  
}