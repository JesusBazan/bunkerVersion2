import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Usuario} from 'src/app/models/usuario'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  API_base = 'http://3.135.1.124:3000';

  constructor(private http : HttpClient) { }

  getUsuarios(){
    return this.http.get('/usuarios');
  }

  getUsuario(){

  }

  insertarUsuario( usuario:Usuario){
    return this.http.post('/insertarUsuario', usuario);
  }

  iniciarSesion( usuarioLog:any ){
    return this.http.post('/iniciarSesion',usuarioLog)
  }

  tablaUsuarios( rolObj:any ){
    return this.http.post('/getTablaUsuarios',rolObj)
  }

  actualizarUsuario(){

  }

  eliminarUsuario(){

  }
}
