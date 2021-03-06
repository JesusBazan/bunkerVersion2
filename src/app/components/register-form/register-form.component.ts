import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuariosService } from '../../services/usuarios/usuarios.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

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

  hide = true;

  

  constructor( public usuariosService:UsuariosService ) { }

  ngOnInit(): void {

  }

  saveNewUser(){
    this.usuariosService.insertarUsuario().subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      } 
    );
  }

}
