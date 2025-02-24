import { Profesor } from "../src/Profesor";
import { Alumno } from "./Alumno";
export interface IAsignatura {
  codigo: number;
  nombre_asig: string;
  titulacion: string;
  numero_horas: number;
  profesor: Profesor;
  alumnos: Alumno[];



}