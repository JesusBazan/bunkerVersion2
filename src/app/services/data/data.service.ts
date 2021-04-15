import { Injectable } from '@angular/core';
import{CifradoS,TipoS}from 'src/app/models/interfaces'
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private cifrados: CifradoS[]=[
    {
      id:1,
      name:'Cifrado Simétrico'
    },
    {
      id:2,
      name:'Cifrado Hash'
    },
    {
      id:3,
      name:'Cifrado Asimétrico'
    }
  ];
  private tipos : TipoS[]=[
    {
      id:1,
      tipoId:1,
      name:'AES'
    },
    {
      id:2,
      tipoId:1,
      name:'DES'     
    },
    {
      id:3,
      tipoId:2,
      name:'SHA 1'     
    },
    {
      id:4,
      tipoId:2,
      name:'SHA 256'     
    },
    {
      id:5,
      tipoId:2,
      name:'SHA 512'     
    },
    {
      id:6,
      tipoId:2,
      name:'MD5'     
    },
    {
      id:7,
      tipoId:3,
      name:'RSA'     
    },


  ];
  

  getCifrados():CifradoS[]{
    return this.cifrados;

  }
  getTipos():TipoS[]{
    
    return this.tipos;
  }
}
