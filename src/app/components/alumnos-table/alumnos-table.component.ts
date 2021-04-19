import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

//SERVICES
import {UsuariosService} from '../../services/usuarios/usuarios.service'

//MODELS
import {RolObj} from '../../models/rolObj'

export interface UserInformation {
  posicion: number;
  username: string;
  nombres: string;
  apellidos: string;
  correo: string;
  rol: string;
}

@Component({
  selector: 'app-alumnos-table',
  templateUrl: './alumnos-table.component.html',
  styleUrls: ['./alumnos-table.component.css']
})
export class AlumnosTableComponent implements OnInit {

  rolObj: RolObj = {
    rol: 0
  }

  ELEMENT_DATA: UserInformation[] = [];
  displayedColumns: string[] = ['posicion', 'username', 'nombres', 'apellidos', 'correo', 'rol'];
  dataSource = new MatTableDataSource<UserInformation>(this.ELEMENT_DATA);

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.getTableUsuarios()
  }

  getTableUsuarios(){
    this.usuariosService.tablaUsuarios(this.rolObj)
    .subscribe(res => this.dataSource.data = res as UserInformation[]);
  }

  onRowClicked(row:any){
    this.usuariosService.usuario.id = row.id;
    this.usuariosService.usuario.username = row.username;
    this.usuariosService.usuario.nombres = row.nombres;
    this.usuariosService.usuario.apellidos = row.apellidos;
    this.usuariosService.usuario.correo = row.correo;
    this.usuariosService.usuario.contrasenia = row.contrasenia;
    console.log(row)
  }

}
