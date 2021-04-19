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
        console.log(this.usuariosLog)
        this.reponse = res;
        //console.log(this.reponse[0]._roleresult)
        if(this.reponse[0]._roleresult == 1){
          this.router.navigate(['/view/dashboard']);
        }
        else if(this.reponse[0]._roleresult == 2){
          this.router.navigate(['/view/dashboardProf']);
        }
        else if(this.reponse[0]._roleresult == 3){
          this.router.navigate(['/view/dashboardCoor']);
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
