import { IAsignatura } from "../src/IAsignatura";
import { Profesor } from "./Profesor";
import { Alumno } from "./Alumno";

export class Asignatura implements IAsignatura {
  constructor(
    private _codigo: number,
    private _nombre_asig: string,
    private _titulacion: string,
    private _numero_horas: number,
    private _profesor: Profesor,
    private _alumnos: Alumno[],
  ) {
  }
  get codigo(): number {
    return this._codigo;
  }
  get nombre_asig(): string {
    return this._nombre_asig;
  }
  get titulacion(): string {
    return this._titulacion;
  }
  get numero_horas(): number {
    return this._numero_horas;
  }
  get profesor(): Profesor {
    return this._profesor;
  }
  get alumnos(): Alumno[] {
    return this._alumnos;
  }

  set codigo(codigo: number) {
    this._codigo = codigo;
  }
  set nombre_asig(nombre_asig: string) {
    this._nombre_asig = nombre_asig;
  }
  set titulacion(titulacion: string) {
    this._titulacion = titulacion;
  }
  set numero_horas(numero_horas: number) {
    this._numero_horas = numero_horas;
  }
  set profesor(profesor: Profesor) {
    this._profesor = profesor;
  }
  set alumnos(alumnos: Alumno[]) {
    this._alumnos = alumnos;
  }
  /**
   * Funcion que muestra los datos del profesor que imparte la asignatura.
   * @returns string
   */
  showProfesorData(): string {
    let result: string = this.profesor.showData();
    return result;
  };
  /**
   * Funcion que muestra los datos de cada alumno
   * @returns string[]
   */
  showAlumnosData(): string[] {
    let result: string[] = [];
    this.alumnos.forEach((alumno) => {
      result.push(alumno.showData());
    });
    return result;
  };
  /**
   * Función que comprueba si el nombre que se le pasa es el profesor que imparte la asignatura
   * @param name - nombre del profesor
   * @returns boolean
   */
  searchProfesorByName(name: string): boolean {
    if (this.profesor.nombre === name) {
      return true;
    } else {
      return false;
    }
  }
  /**
   * Función que dado un email, es el del profesor que imparte la asignatura
   * @param email - email del profesor
   * @returns string
   */
  searchProfesorByEmail(email: string): string {
    if (this.profesor.email === email) {
      return this.profesor.showData();
    } else {
      return "No se ha encontrado al profesor";
    }
  }
  
  searchAlumnoByName(name: string): string[] | undefined {
    if (!this.alumnos.some((alumno) => alumno.nombre === name)) {
      return undefined;
    }
    let alumnos_result: Alumno[] = this.alumnos.filter((alumno) => alumno.nombre === name);
    let result: string[] = [];
    alumnos_result.forEach((alumno) => {
      result.push(alumno.showData());
    });
    
    return result;
  }
  searchAlumnoByEmail(email: string): string[] | undefined {
    if (!this.alumnos.some((alumno) => alumno.email === email)) {
      return undefined;
    }
    let alumnos_result: Alumno[] = this.alumnos.filter((alumno) => alumno.email === email);
    let result: string[] = [];
    alumnos_result.forEach((alumno) => {
      result.push(alumno.showData());
    });
    
    return result;
  }



}