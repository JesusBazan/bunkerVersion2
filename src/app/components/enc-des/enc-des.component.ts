import { TipoS } from './../../models/interfaces';

import { BrowserModule } from '@angular/platform-browser';

import * as CryptoJS from 'crypto-js';
import { Component, OnInit } from '@angular/core';
import { CifradoS, } from 'src/app/models/interfaces'

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
  cif: any;
  tip: any;
  bit: any;
  res: any;

  constructor(private dataSvc: DataService) { }
  //cosas para seleccionar cifrado
  public selectedcifrado: CifradoS = { id: 0, name: '' };
  public cifradoss: CifradoS[] = [];
  public tiposs: TipoS[] = [];

  //metodos para encriptar en AES

  convertirTexto(conversion: string) {
    this.onSelect;

    if (conversion === 'encriptar') {

      this.textoEncriptado = CryptoJS.AES.encrypt(this.enctexto.trim(), this.encPass.trim()).toString();

    }
    if (conversion === 'desencriptar') {
      this.textoDesencriptado = CryptoJS.AES.decrypt(this.enctexto.trim(), this.encPass.trim()).toString(CryptoJS.enc.Utf8);
    }
  }
  // METODO PARA DES

  convertirTextoDES(conversion: string) {
    this.onSelect;

    if (conversion === 'encriptar') {

      this.textoEncriptado = CryptoJS.DES.encrypt(this.enctexto.trim(), this.encPass.trim()).toString();

    }
    if (conversion === 'desencriptar') {
      this.textoDesencriptado = CryptoJS.DES.decrypt(this.enctexto.trim(), this.encPass.trim()).toString(CryptoJS.enc.Utf8);
    }
  }

  //  METODO PARA HASH1

  convertirTextoHASH1(conversion: string) {
    this.onSelect;

    if (conversion === 'encriptar') {

      this.textoEncriptado = CryptoJS.SHA1(this.enctexto.trim(), this.encPass.trim()).toString();

    }
    if (conversion === 'desencriptar') {
      this.textoDesencriptado = CryptoJS.SHA1(this.enctexto.trim(), this.encPass.trim()).toString(CryptoJS.enc.Utf8);
    }
  }

  // METODO PARA SHA 256

  convertirTextoSHA256(conversion: string) {
    this.onSelect;

    if (conversion === 'encriptar') {

      this.textoEncriptado = CryptoJS.SHA256(this.enctexto.trim(), this.encPass.trim()).toString();

    }
    if (conversion === 'desencriptar') {
      this.textoDesencriptado = CryptoJS.SHA256(this.enctexto.trim(), this.encPass.trim()).toString(CryptoJS.enc.Utf8);
    }
  }

  //METODO PARA SHA 512

  convertirTextoSHA512(conversion: string) {
    this.onSelect;

    if (conversion === 'encriptar') {

      this.textoEncriptado = CryptoJS.SHA512(this.enctexto.trim(), this.encPass.trim()).toString();

    }
    if (conversion === 'desencriptar') {
      this.textoDesencriptado = CryptoJS.SHA512(this.enctexto.trim(), this.encPass.trim()).toString(CryptoJS.enc.Utf8);
    }
  }

  //METODO PARA MD5

  convertirTextoMD5(conversion: string) {
    this.onSelect;

    if (conversion === 'encriptar') {

      this.textoEncriptado = CryptoJS.SHA512(this.enctexto.trim(), this.encPass.trim()).toString();

    }
    if (conversion === 'desencriptar') {
      this.textoDesencriptado = CryptoJS.SHA512(this.enctexto.trim(), this.encPass.trim()).toString(CryptoJS.enc.Utf8);
    }
  }

  //METODO PARA DSA ******************************** 

  convertirTextoRSA(conversion: string) {
    this.onSelect;

    if (conversion === 'encriptar') {
      this.encPass=256

      this.textoEncriptado = CryptoJS.SHA384(this.enctexto.trim(), this.encPass).toString();

    }
    if (conversion === 'desencriptar') {
      this.res='no compa este no se puede desir';
      return this.res;

      
    }
  }



  ngOnInit(): void {

    this.onSelect

    this.cifradoss = this.dataSvc.getCifrados();


  }

  onSelect(id: number): void {
    // tomamos id
    console.log('Id', id);

    //filtramos por tipo y que este sea igual a id cifrados
    this.tiposs = this.dataSvc.getTipos().filter(item => item.tipoId == id);

    //console.log('hola',this.dataSvc.getTipos().filter(item => item.tipoId == id));
    //cifrado son 3
    this.cif = this.dataSvc.getCifrados().filter(item => item.id != 1);
    console.log(this.dataSvc.getCifrados().filter(item => item.id != 1), 'este es un cifraado')
    //Tipos son 7 
    this.tip = this.dataSvc.getTipos().filter(item => item.id != 0);

    console.log(this.dataSvc.getTipos().filter(item => item.id == 1), 'este es un tipo')


    //---BUSCAMOS ID DE CIFRADO  E ID TIPO DE CIFRADO E EJECUTAMOS METODO
    if (id == 1) {
      if (this.tip == 1) {
        this.convertirTexto;

      }
    }
    if (id == 1) {
      if (this.tip == 2) {
        this.convertirTextoDES;

      }

    }

    if (id == 2) {
      if (this.tip == 3) {
        this.convertirTextoHASH1;

      }

    }

    if (id == 2) {
      if (this.tip == 4) {
        this.convertirTextoSHA256;

      }

    }

    if (id == 2) {
      if (this.tip == 5) {
        this.convertirTextoSHA512;

      }

    }

    if (id == 2) {
      if (this.tip == 6) {
        this.convertirTextoMD5;

      }

    }

    





  }




}


