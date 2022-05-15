import {Injectable} from '@angular/core';
import {Usuario} from "../Interfaces/usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  LISTA_USUARIOS: Usuario[] = [
    {
      Nombre: 'Julia', Apellidos: 'Leuenberger', Edad: 32,
      Dni: '28456891A', Cumpleanyos: '21-01-1990',
      ColorFavorito: 'Amarillo', Genero: 'Mujer'
    },
    {
      Nombre: 'Xabier', Apellidos: 'Legasa', Edad: 37,
      Dni: '28456891S', Cumpleanyos: '27-11-1984',
      ColorFavorito: 'Amarillo', Genero: 'Mujer'
    },
    {
      Nombre: 'Gato', Apellidos: 'Leuenberger', Edad: 6,
      Dni: '28456892P', Cumpleanyos: '01-09-2015',
      ColorFavorito: 'Negro', Genero: 'No especificado'
    },
    {
      Nombre: 'Coco', Apellidos: 'Legasa', Edad: 4,
      Dni: '66456891A', Cumpleanyos: '11-11-2018',
      ColorFavorito: 'Amarillo', Genero: 'No especificado'
    }
  ];

  constructor() {
  }

  getUsuarios() {
    return this.LISTA_USUARIOS.slice();
  }

  getUsuario(index: number) {
    return this.LISTA_USUARIOS[index];
  }



  eliminarUsuario(index: number) {
    this.LISTA_USUARIOS.splice(index, 1);
  }

  agregarUsuario(usuario: Usuario) {
     this.LISTA_USUARIOS.unshift(usuario);
  }

  editarUsuario(index: number) {
    this.LISTA_USUARIOS.splice(index);
  }

  editarUsuarioConcreto(usuario: Usuario, index: number) {
    this.LISTA_USUARIOS[index] = usuario;
  }
}
