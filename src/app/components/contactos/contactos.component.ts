import {Component, OnInit} from '@angular/core';
import {Usuario} from 'src/app/Interfaces/usuario';

const LISTA_USUARIOS: Usuario[] = [
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

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {

  displayedColumns: string[] = ['Nombre', 'Apellidos', 'Edad', 'Dni',
  'Cumpleanyos', 'ColorFavorito', 'Genero', 'Acciones'];
  dataSource = LISTA_USUARIOS;

  constructor() {
  }

  ngOnInit(): void {
  }

}
