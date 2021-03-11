import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios/usuarios.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  hide = true;

  constructor( private usuariosService:UsuariosService) { }

  ngOnInit(): void {
    this.usuariosService.getUsuarios().subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }

}
