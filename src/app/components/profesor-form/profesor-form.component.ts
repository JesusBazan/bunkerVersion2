import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuariosService } from '../../services/usuarios/usuarios.service';
import { NotificationsService} from 'angular2-notifications'


@Component({
  selector: 'app-profesor-form',
  templateUrl: './profesor-form.component.html',
  styleUrls: ['./profesor-form.component.css']
})
export class ProfesorFormComponent implements OnInit {

  usuario: Usuario = {
    id: 0,
    username: 'shasha',
    nombres: '',
    apellidos: '',
    correo: '',
    rol: 'alumno',
    contrasenia: '',
    foto: 'https://stest.billbyte.co/v3.0/dist/img/avatar/default.png'
  }

  hide = true;

  constructor( public usuariosService:UsuariosService, private service: NotificationsService ) { }

  ngOnInit(): void {
  }

  onError(mensaje:string){
    this.service.error('Error', mensaje, {
      position: ["bottom", "left"],
      timeOut: 2000,
      animate: 'fade',
      showProgresBar: true
    });
  }

  onSucces(mensaje:string){
    this.service.success('Succes', mensaje, {
      position: ["bottom", "left"],
      timeOut: 2000,
      animate: 'fade',
      showProgresBar: true
    });
  }

  saveNewUser(){
    this.usuariosService.usuario.rol = 'profesor';
    this.usuariosService.insertarUsuario().subscribe(
      res => {
        console.log(res);
        this.onSucces("Usuario creado correctamente")
      },
      err => {
        console.log(err);
        this.onError("Error al crear el usuario")
      } 
    );
  }

  updateUser(){
    this.usuariosService.usuario.rol = 'profesor';
    this.usuariosService.actualizarUsuario().subscribe(
      res => {
        console.log(res);
        this.onSucces("Usuario actualizado")
      },
      err => {
        console.log(err);
        this.onError("Error al actualizar")
      } 
    );
  }

  deleteUser(){
    this.usuariosService.eliminarUsuario().subscribe(
      res => {
        console.log(res);
        this.onSucces("Usuario eliminado")
      },
      err => {
        console.log(err);
        this.onError("Error al eliminar")
      } 
    );
  }

}
