import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import {Reporte} from '../../models/reporte'

@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  reporte: Reporte = {
    id:0,
    fk_usuario:0,
    created_at:'',
    herramienta:'',
    accion:''
  }

  API_base = 'http://3.135.1.124:3000';

  constructor(private http : HttpClient) { }

  getTablaReportes( rolObj:any ){
    return this.http.post('/getTablaReportes',rolObj)
  }

  insertarReporte(){
    this.reporte.id = 0;
    return this.http.post('/insertarReporte', this.reporte);
  }
}
