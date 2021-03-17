import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { Respuesta } from 'src/app/models/respuesta';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioLog } from 'src/app/models/usuarioLog';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  hide = true;

  currentUsername = '';
  currentPassword = '';

  usuarios: any = [];

  usuariosLog: UsuarioLog = {
    username: "",
    contrasenia: ""
  }

  reponse: any = [];

  //loginForm : FormGroup;
  constructor(private usuarioService: UsuariosService, private router: Router) { }

  ngOnInit(): void {
    // this.loginForm = new FormGroup({
    //   email : new FormControl('',[Validators.required, Validators.email]),
    //   password : new FormControl('',[Validators.required, Validators.minLength(6)])
    // }
    // );
  }

  getUsers() {
    this.usuarioService.getUsuarios().subscribe(
      res => {
        
        this.usuarios = res;
        console.log(this.usuarios[0].username)
      },
      err => {
        console.log(err);
      }
    )
  }

  iniciarSesion() {
    this.router.navigate(['/view/dashboard']);
    this.usuarioService.iniciarSesion(this.usuariosLog).subscribe(
      res => {
        console.log(this.usuariosLog)
        this.reponse = res;
        console.log(this.reponse[0].res)

      },
      err => {
        console.log(err);
      }
    );
  }

}
