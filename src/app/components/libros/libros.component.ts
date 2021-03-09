import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';


@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  enctexto: any;
  destexto: any;
  encPass: any;
  desPass: any;
  textoEncriptado: any;
  textoDesencriptado: any;

  constructor() { }

  convertirTexto(conversion: string) {
    if (conversion === 'encriptar') {
      this.textoEncriptado = CryptoJS.AES.encrypt(this.enctexto.trim(), this.encPass.trim()).toString();
    } else {
      this.textoDesencriptado = CryptoJS.AES.decrypt(this.destexto.trim(), this.desPass.trim()).toString(CryptoJS.enc.Utf8);
    }
}

  ngOnInit(): void {

    this.convertirTexto;
  }

}
