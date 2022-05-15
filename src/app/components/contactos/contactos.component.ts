import {Component, OnInit} from '@angular/core';
import {Usuario} from 'src/app/Interfaces/usuario';
import {MatTableDataSource} from "@angular/material/table";
import {UsuarioServiceService} from "../../services/usuario-service.service";

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {

  listaDeUsuarios: Usuario[] = [];

  displayedColumns: string[] = ['Nombre', 'Apellidos', 'Edad', 'Dni',
  'Cumpleanyos', 'ColorFavorito', 'Genero', 'Acciones'];
  dataSource!: MatTableDataSource<any>;

  constructor(private _usuarioService: UsuarioServiceService) {
  }

  ngOnInit(): void {

    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.listaDeUsuarios = this._usuarioService.getUsuarios();
    this.dataSource = new MatTableDataSource(this.listaDeUsuarios);
  }

  eliminarUsuario(index: number) {
    console.log(index);

    this._usuarioService.eliminarUsuario(index);
    this.cargarUsuarios();
  }

  editarUsuario(index: number) {
    this._usuarioService.editarUsuario(index);
    this.cargarUsuarios();
  }
}
