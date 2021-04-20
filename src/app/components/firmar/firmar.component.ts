import { sha1 } from '@angular/compiler/src/i18n/digest';
import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';

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
  constructor() { }

  convertirTexto(conversion: string) {

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
  }

}
