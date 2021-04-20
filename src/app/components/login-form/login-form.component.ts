import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { Respuesta } from 'src/app/models/respuesta';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioLog } from 'src/app/models/usuarioLog';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';
import { NotificationsService} from 'angular2-notifications'
//import { title } from 'node:process';

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
  infoU:any = [];

  //loginForm : FormGroup;
  constructor(private usuarioService: UsuariosService, private router: Router, private service: NotificationsService) { }

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

  onError(){
    this.service.error('Error', 'Credenciales incorrectas', {
      position: ["bottom", "left"],
      timeOut: 2000,
      animate: 'fade',
      showProgresBar: true
    });
  }

  iniciarSesion() {
    
    this.usuarioService.iniciarSesion(this.usuariosLog).subscribe(
      res => {
        //console.log(this.usuariosLog)
        this.reponse = res;
        //console.log(this.reponse[0]._roleresult)
        this.usuarioService.getUsuarioActual(this.usuariosLog).subscribe(
          res => {
            this.infoU = res;
            this.usuarioService.usuarioActual.id = this.infoU[0].id_usuario;
            this.usuarioService.usuarioActual.username = this.infoU[0].username;
            this.usuarioService.usuarioActual.nombres = this.infoU[0].nombres;
            this.usuarioService.usuarioActual.apellidos = this.infoU[0].apellidos;
            this.usuarioService.usuarioActual.correo = this.infoU[0].correo;
            this.usuarioService.usuarioActual.rol = this.infoU[0].rol;
            this.usuarioService.usuarioActual.contrasenia = this.infoU[0].contrasenia;
            this.usuarioService.usuarioActual.foto = this.infoU[0].foto;
          },
          err => {
            console.log(err)
          }
        )
        if(this.reponse[0]._roleresult == 1){
          this.router.navigate(['/view/dashboard']);
          this.usuarioService.rolUser = 1;
        }
        else if(this.reponse[0]._roleresult == 2){
          this.router.navigate(['/view/dashboardProf']);
          this.usuarioService.rolUser = 2;
        }
        else if(this.reponse[0]._roleresult == 3){
          this.router.navigate(['/view/dashboardCoor']);
          this.usuarioService.rolUser = 3;
        }
        else{
          this.onError();
        }

      },
      err => {
        console.log(err);
      }
    );
  }

}
