import { IPersona } from '../src/IPersona';
/**
 * Clase abstracta Persona que contiene los elementos comunes de Alumno y Profesor.
 */
export abstract class Persona implements IPersona {
  constructor(
    private _nombre: string,
    private _apellido: string,
    private _fecha: string,
    private _dni: number,
    private _direccion: string,
    private _telefono: number,
  ) {}
  /**
   * Getters y setters de las propiedades de Persona.
   */
  get nombre(): string {
    return this._nombre;
  }
  get apellido(): string {
    return this._apellido;
  }
  get fecha(): string {
    return this._fecha;
  }
  get dni(): number {
    return this._dni;
  }
  get direccion(): string {
    return this._direccion;
  }
  get telefono(): number {
    return this._telefono;
  }

  set nombre(nombre: string) {
    this._nombre = nombre;
  }
  set apellido(apellido: string) {
    this._apellido = apellido;
  }
  set fecha(fecha: string) {
    this._fecha = fecha;
  }
  set dni(dni: number) {
    this._dni = dni;
  }
  set direccion(direccion: string) {
    this._direccion = direccion;
  }
  set telefono(telefono: number) {
    this._telefono = telefono;
  }
  /**
   * Método abstracto que muestra los datos de la persona.
   * @returns string
   */
  abstract showData(): string;
}
