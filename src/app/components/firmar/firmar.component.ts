import { sha1 } from '@angular/compiler/src/i18n/digest';
import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';

import {UsuariosService} from '../../services/usuarios/usuarios.service'
import {ReportesService} from '../../services/reportes/reportes.service'

@Component({
  selector: 'app-firmar',
  templateUrl: './firmar.component.html',
  styleUrls: ['./firmar.component.css']
})
export class FirmarComponent implements OnInit {

  enctexto: any;
  destexto: any;
  encPass: number;
  desPass: any;
  textoEncriptado: any;
  textoDesencriptado: any;
  ver:string;
  verifica:any;
  constructor(private usuarioService:UsuariosService, private reporteService:ReportesService) { }

  convertirTexto(conversion: string) {

    //operaciones para crear reporte de la accion ejecutada
    this.reporteService.reporte.accion = conversion;
    this.reporteService.reporte.fk_usuario = this.usuarioService.usuarioActual.id;
    this.reporteService.insertarReporte().subscribe(
      res => {
        console.log(res)
      },
      err => {
        console.log(err)
      }
    )

    this.encPass = 0;
    if (conversion === 'encriptar') {

      this.textoEncriptado = CryptoJS.SHA256(this.enctexto.trim(), this.enctexto).toString();

    }
    if (conversion === 'desencriptar') {
      this.textoDesencriptado = 'Esto no es posible';
    }
  }

  verificar(conversion: string) {
    this.encPass = 0;
    if (conversion === 'encriptar') {
      this.convertirTexto;

   this.verifica= CryptoJS.SHA256(this.enctexto.trim(), this.enctexto).toString();
    if(this.textoEncriptado== this.verifica ){
      console.log('entre');
      this.ver='CONFIRMACION CORRECTA';
    }
  }
}



  ngOnInit(): void {

    this.convertirTexto;

    this.reporteService.reporte.herramienta = 'FIRMADO';
  }

}
