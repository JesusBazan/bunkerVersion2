
import * as CryptoJS from 'crypto-js';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-enc-des',
  templateUrl: './enc-des.component.html',
  styleUrls: ['./enc-des.component.css']
})
export class EncDesComponent implements OnInit {

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
