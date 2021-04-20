import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';


@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  usuario: Usuario = {
    id: 0,
    username: '',
    nombres: '',
    apellidos: '',
    correo: '',
    rol: 'alumno',
    contrasenia: '',
    foto: 'https://stest.billbyte.co/v3.0/dist/img/avatar/default.png'
  }

  constructor() { }
}
