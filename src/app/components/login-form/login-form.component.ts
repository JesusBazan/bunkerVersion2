import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
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

  //loginForm : FormGroup;
  constructor( private usuarioService: UsuariosService, private router: Router) { }

  ngOnInit(): void {
    // this.loginForm = new FormGroup({
    //   email : new FormControl('',[Validators.required, Validators.email]),
    //   password : new FormControl('',[Validators.required, Validators.minLength(6)])
    // }
    // );
  }

  getUsers(){
    this.usuarioService.getUsuarios().subscribe(
      res => {
        this.usuarios = res;
      },
      err => {
        console.log(err);
      }
    )
  }

  iniciarSesion(){
    this.router.navigate(['/view/dashboard']);
  }

}
