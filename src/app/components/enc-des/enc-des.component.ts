import { FormControl } from '@angular/forms';
import { TipoS } from './../../models/interfaces';

import { BrowserModule } from '@angular/platform-browser';

import * as CryptoJS from 'crypto-js';
import { Component, OnInit } from '@angular/core';
import { CifradoS, } from 'src/app/models/interfaces'

import { DataService } from 'src/app/services/data/data.service';
import { from } from 'rxjs';

import { UsuariosService } from '../../services/usuarios/usuarios.service'
import { ReportesService } from '../../services/reportes/reportes.service'



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
  textoDesencriptado: string;
  tipodetexto: string;
  hash: string;
  simetrico: any;
  asimetrico: any
  aes: any;
  des: any;
  cif: any;
  tip: any;
  bit: any;
  res: any;
  verifica: string;
  ver: string;


  constructor(private dataSvc: DataService, private usuarioService: UsuariosService, private reporteService: ReportesService) { }
  //cosas para seleccionar cifrado
  public selectedcifrado: CifradoS = { id: 0, name: '' };
  public cifradoss: CifradoS[] = [];
  public tiposs: TipoS[] = [];


  ////////////////////////////////////    metodos para encriptar en AES     /////////////////////////////////////////

  convertirTexto(conversion: string) {

    this.onSelect;
    this.hash = 'AES'

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


    this.onSelect;
    if (conversion === 'encriptar') {


      this.textoEncriptado = CryptoJS.AES.encrypt(this.enctexto.trim(), this.encPass.trim()).toString();
      

    }
    if (conversion === 'desencriptar') {
      this.textoDesencriptado = CryptoJS.AES.decrypt(this.enctexto.trim(), this.encPass.trim()).toString(CryptoJS.enc.Utf8);
    }
    this.verificarcifrado;
  }
  ////////////////////////////////////////   METODO PARA DES     //////////////////////////////////////////////////////

  convertirTextoDES(conversion: string) {
    this.onSelect;
    this.hash = 'DES'

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

    if (conversion === 'encriptar') {

      this.textoEncriptado = CryptoJS.DES.encrypt(this.enctexto.trim(), this.encPass.trim()).toString();

    }
    if (conversion === 'desencriptar') {
      this.textoDesencriptado = CryptoJS.DES.decrypt(this.enctexto.trim(), this.encPass.trim()).toString(CryptoJS.enc.Utf8);
    }
    this.verificarcifradoDES;
  }

  /////////////////////////////////////////////  METODO PARA HASH1//////////////////////////////////////

  convertirTextoHASH1(conversion: string) {
    this.onSelect;
    this.hash = 'SHA1'
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

    if (conversion === 'encriptar') {

      this.textoEncriptado = CryptoJS.SHA1(this.enctexto.trim(), this.encPass.trim()).toString();

    }
    if (conversion === 'desencriptar') {
      this.textoDesencriptado = CryptoJS.SHA1(this.enctexto.trim(), this.encPass.trim()).toString(CryptoJS.enc.Utf8);
    }
    this.verificarcifradoSHA1;
  }

  /////////////////////////////////////   METODO PARA SHA 256    ///////////////////////////////////////////////

  convertirTextoSHA256(conversion: string) {
    this.onSelect;
    this.hash = 'SHA256'
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

    if (conversion === 'encriptar') {

      this.textoEncriptado = CryptoJS.SHA256(this.enctexto.trim(), this.encPass.trim()).toString();

    }
    if (conversion === 'desencriptar') {
      this.textoDesencriptado = CryptoJS.SHA256(this.enctexto.trim(), this.encPass.trim()).toString(CryptoJS.enc.Utf8);
    }
    this.verificarcifradoSHA256;
  }

  //////////////////////////////     METODO PARA SHA 512 ////////////////////////////////////

  convertirTextoSHA512(conversion: string) {
    this.onSelect;
    this.hash = 'SHA512'
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

    if (conversion === 'encriptar') {

      this.textoEncriptado = CryptoJS.SHA512(this.enctexto.trim(), this.encPass.trim()).toString();

    }
    if (conversion === 'desencriptar') {
      this.textoDesencriptado = CryptoJS.SHA512(this.enctexto.trim(), this.encPass.trim()).toString(CryptoJS.enc.Utf8);
    }
    this.verificarcifradoSHA512;
  }

  ////////////////////////////////////////  METODO PARA MD5 ///////////////////////////////////////////////////

  convertirTextoMD5(conversion: string) {
    this.onSelect;
    this.hash = 'MD5'
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

    if (conversion === 'encriptar') {

      this.textoEncriptado = CryptoJS.SHA512(this.enctexto.trim(), this.encPass.trim()).toString();

    }
    if (conversion === 'desencriptar') {
      this.textoDesencriptado = CryptoJS.SHA512(this.enctexto.trim(), this.encPass.trim()).toString(CryptoJS.enc.Utf8);
    }
    this.verificarcifradoMD5;
  }

  //////////////////////////////////////   METODO PARA RSA   ///////////////////////////////////////////////

  convertirTextoRSA(conversion: string) {
    this.onSelect;
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

      this.textoEncriptado = CryptoJS.HmacSHA512(this.enctexto.trim(), this.enctexto).toString();

    }
    if (conversion === 'desencriptar') {
      this.textoDesencriptado = CryptoJS.HmacSHA512(this.enctexto.trim(), this.encPass.trim()).toString(CryptoJS.enc.Utf8);
    }
    this.verificarcifradoRSA;
  }

  //**********************METODOs PARA VERIFICAR cifrados***************************
  //*********************                                ***************************
  verificarcifrado(conversion: string) {
    
    this.convertirTexto;
    if (conversion === 'encriptar') {
      console.log('ALGO')

     // this.textoEncriptado = CryptoJS.AES.encrypt(this.enctexto.trim(), this.encPass.trim()).toString();
     this.verifica = CryptoJS.AES.decrypt(this.enctexto.trim(), this.encPass.trim()).toString(CryptoJS.enc.Utf8);
     console.log(this.verifica);
      
      if(this.textoDesencriptado = this.verifica ){
        console.log('entre');
        this.ver='CONFIRMACION CORRECTA';
      }

    }  
 
  }

  verificarcifradoDES(conversion: string) {
    
    this.convertirTextoDES;
    if (conversion === 'encriptar') {
      console.log('ALGO')

     // this.textoEncriptado = CryptoJS.AES.encrypt(this.enctexto.trim(), this.encPass.trim()).toString();
     this.verifica = CryptoJS.DES.decrypt(this.enctexto.trim(), this.encPass.trim()).toString(CryptoJS.enc.Utf8);
     console.log(this.verifica);
      
      if(this.textoDesencriptado = this.verifica ){
        console.log('entre');
        this.ver='VERIFICACIÓN CORRECTA';
      }

    }  
 
  }

  verificarcifradoSHA1(conversion: string) {
    
    this.convertirTextoHASH1;
    if (conversion === 'encriptar') {
      console.log('ALGO')

     // this.textoEncriptado = CryptoJS.AES.encrypt(this.enctexto.trim(), this.encPass.trim()).toString();
     this.verifica =CryptoJS.SHA1(this.enctexto.trim(), this.encPass.trim()).toString(CryptoJS.enc.Utf8);
     console.log(this.verifica);
      
      if(this.textoDesencriptado = this.verifica ){
        console.log('entre');
        this.ver='CONFIRMACION CORRECTA';
      }

    }

 
  }

  verificarcifradoSHA256(conversion: string) {
    
    this.convertirTextoSHA256;
    if (conversion === 'encriptar') {
      console.log('ALGO')

     // this.textoEncriptado = CryptoJS.AES.encrypt(this.enctexto.trim(), this.encPass.trim()).toString();
     this.verifica =CryptoJS.SHA1(this.enctexto.trim(), this.encPass.trim()).toString(CryptoJS.enc.Utf8);
     console.log(this.verifica);
      
      if(this.textoDesencriptado = this.verifica ){
        console.log('entre');
        this.ver='CONFIRMACION CORRECTA';
      }

    }
  }

  verificarcifradoSHA512(conversion: string) {
    
    this.convertirTextoSHA512;
    if (conversion === 'encriptar') {
      console.log('ALGO')

     // this.textoEncriptado = CryptoJS.AES.encrypt(this.enctexto.trim(), this.encPass.trim()).toString();
     this.verifica =CryptoJS.SHA512(this.enctexto.trim(), this.encPass.trim()).toString(CryptoJS.enc.Utf8);
     console.log(this.verifica);
      
      if(this.textoDesencriptado = this.verifica ){
        console.log('entre');
        this.ver='CONFIRMACION CORRECTA';
      }

    }
  }

  verificarcifradoMD5(conversion: string) {
    
    this.convertirTextoSHA512;
    if (conversion === 'encriptar') {
      console.log('ALGO')

     // this.textoEncriptado = CryptoJS.AES.encrypt(this.enctexto.trim(), this.encPass.trim()).toString();
     this.verifica =CryptoJS.MD5(this.enctexto.trim(), this.encPass.trim()).toString(CryptoJS.enc.Utf8);
     console.log(this.verifica);
      
      if(this.textoDesencriptado = this.verifica ){
        console.log('entre');
        this.ver='CONFIRMACION CORRECTA';
      }

    }
  }

  verificarcifradoRSA(conversion: string) {
    
    this.convertirTextoSHA512;
    if (conversion === 'encriptar') {
      console.log('ALGO')

     // this.textoEncriptado = CryptoJS.AES.encrypt(this.enctexto.trim(), this.encPass.trim()).toString();
     this.verifica =CryptoJS.HmacSHA512(this.enctexto.trim(), this.encPass.trim()).toString(CryptoJS.enc.Utf8);
     console.log(this.verifica);
      
      if(this.textoDesencriptado = this.verifica ){
        console.log('entre');
        this.ver='CONFIRMACION CORRECTA';
      }

    }
  }


  




  ngOnInit(): void {

    this.onSelect

    this.cifradoss = this.dataSvc.getCifrados();

    this.reporteService.reporte.herramienta = 'ENCRIPTADOR';
  }

  onSelect(id: number): void {
    // tomamos id
    console.log('Id', id);

    //filtramos por tipo y que este sea igual a id cifrados
    this.tiposs = this.dataSvc.getTipos().filter(item => item.tipoId == id);

    //console.log('hola',this.dataSvc.getTipos().filter(item => item.tipoId == id));
    //cifrado son 3
    //this.cif = this.dataSvc.getCifrados().filter(item => item.id != 1);
    console.log(this.dataSvc.getCifrados().filter(item => item.id != 0), 'este es un cifraado')
    //Tipos son 7 
    this.tip = this.dataSvc.getTipos().filter(item => item.id != 0);

    console.log(this.dataSvc.getTipos().filter(item => item.id != 0), 'este es un tipo')


    //---BUSCAMOS ID DE CIFRADO  E ID TIPO DE CIFRADO E EJECUTAMOS METODO
    if (id == 1) {
      if (this.tip == 1) {
        //LLAMAR METODO
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

    if (id == 3) {
      if (this.tip == 7) {
        this.convertirTextoRSA;
        

      }


    }




  }





}


