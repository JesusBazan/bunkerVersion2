
import { BrowserModule } from '@angular/platform-browser';

import * as CryptoJS from 'crypto-js';
import { Component, OnInit } from '@angular/core';
import { CifradoS, TipoS } from 'src/app/models/interfaces'

import { DataService } from 'src/app/services/data/data.service';
import { from } from 'rxjs';



@Component({
  selector: 'app-enc-des',
  templateUrl: './enc-des.component.html',
  styleUrls: ['./enc-des.component.css'],
  providers: [DataService]
})
export class EncDesComponent implements OnInit {

  enctexto: any;
  destexto: any;
  encPass: any;
  desPass: any;
  textoEncriptado: any;
  textoDesencriptado: any;
  hash: any;
  simetrico: any;
  asimetrico: any
  aes: any;
  des: any;

  constructor(private dataSvc: DataService) { }
  //cosas para seleccionar cifrado
  public selectedcifrado: CifradoS = { id: 0, name: '' };
  public cifradoss: CifradoS[] = [];
  public tiposs: TipoS[] = [];
  //metodos para encriptar en espera RSA
  
  convertirTexto(conversion: string) {
    if (conversion === 'encriptar') {

      this.textoEncriptado = CryptoJS.AES.encrypt(this.enctexto.trim(), this.encPass.trim()).toString();

    }
    if (conversion === 'desencriptar') {
      this.textoDesencriptado = CryptoJS.AES.decrypt(this.enctexto.trim(), this.encPass.trim()).toString(CryptoJS.enc.Utf8);
    }
  }






  ngOnInit(): void {

    this.convertirTexto;

    this.cifradoss = this.dataSvc.getCifrados();

  }

  onSelect(id: number): void {
    console.log('Id', id);
    this.tiposs = this.dataSvc.getTipos().filter(item => item.tipoId == id);

 console.log('hola',this.dataSvc.getTipos().filter(item => item.tipoId == id));
 

    


  }


}


