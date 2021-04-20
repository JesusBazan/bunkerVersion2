import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import {Reporte} from '../../models/reporte'

@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  API_base = 'http://3.135.1.124:3000';

  reporte: Reporte = {
    id:0,
    fk_usuario:0,
    created_at:'',
    herramienta:'',
    accion:''
  }

  constructor(private http : HttpClient) { }

  getTablaReportes( rolObj:any ){
    return this.http.post('/getTablaReportes',rolObj)
  }

  insertarReporte(){
    console.log(this.reporte);
    return this.http.post('/insertarReporte', this.reporte);
  }


}
