import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

//SERVICES
import {ReportesService} from '../../services/reportes/reportes.service'

//MODELS
import {RolObj} from '../../models/rolObj'

export interface PeriodicElement {
  posicion: number;
  username: string;
  nombres: string;
  apellidos: string;
  rol: string;
  herramienta: string;
  accion: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  rolObj: RolObj = {
    rol: 0
  }

  reponse: any = [];

  ELEMENT_DATA: PeriodicElement[] = [];
  displayedColumns: string[] = ['posicion', 'username', 'nombres', 'apellidos', 'rol', 'herramienta', 'accion'];
  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private reporteService: ReportesService) {}

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.getTableReportes()
  }

  getTableReportes(){
    this.reporteService.getTablaReportes(this.rolObj)
    .subscribe(res => this.dataSource.data = res as PeriodicElement[]);
  }

}
