import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Usuario} from 'src/app/models/usuario'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  API_base = 'http://3.135.1.124:3000';

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

  usuarioActual: Usuario = {
    id: 0,
    username: '',
    nombres: '',
    apellidos: '',
    correo: '',
    rol: '',
    contrasenia: '',
    foto: ''
  }

  rolUser: number = 0;

  constructor(private http : HttpClient) { }

  getUsuarios(){
    return this.http.get('/usuarios');
  }

  getUsuario(){

  }

  insertarUsuario(){
    this.usuario.id = 0;
    console.log(this.http.post('/insertarUsuario', this.usuario))
    return this.http.post('/insertarUsuario', this.usuario);
  }

  iniciarSesion( usuarioLog:any ){
    return this.http.post('/iniciarSesion',usuarioLog)
  }

  getUsuarioActual( usuarioLog:any ){
    return this.http.post('/usuarioActual',usuarioLog)
  }

  tablaUsuarios( rolObj:any ){
    return this.http.post('/getTablaUsuarios',rolObj)
  }

  actualizarUsuario(){
    console.log(this.http.post('/insertarUsuario', this.usuario))
    return this.http.post('/insertarUsuario', this.usuario);
  }

  eliminarUsuario( ){
    var id:any = this.usuario.id;
    return this.http.delete('/eliminarUsuario/'+id);
  }
}
