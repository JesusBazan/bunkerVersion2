import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  hide = true;

  //loginForm : FormGroup;
  constructor() { }

  ngOnInit(): void {
    // this.loginForm = new FormGroup({
    //   email : new FormControl('',[Validators.required, Validators.email]),
    //   password : new FormControl('',[Validators.required, Validators.minLength(6)])
    // }
    // );
  }

}
