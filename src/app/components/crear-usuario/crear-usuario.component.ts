import {Component, NgModule, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Usuario} from "../../Interfaces/usuario";
import {UsuarioServiceService} from "../../services/usuario-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css'],
})


export class CrearUsuarioComponent implements OnInit {

  tiles: any[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  form: FormGroup;

  constructor(private fb: FormBuilder, private _usuarioService: UsuarioServiceService,
              private router: Router) {
    this.form = this.fb.group({
      Nombre: ['', Validators.required],
      Apellidos: ['', Validators.required],
      Edad: ['', Validators.required],
      Dni: ['', Validators.required],
      Cumpleanyos: ['', Validators.required],
      ColorFavorito: ['', Validators.required],
      Genero: ['', Validators.required],
    })
  }

  ngOnInit(): void {

  }

  agregarUsuario() {
    const user: Usuario = {
      Nombre: this.form.value.Nombre,
      Apellidos: this.form.value.Apellidos,
      Edad: this.form.value.Edad,
      Dni: this.form.value.Dni,
      Cumpleanyos: this.form.value.Cumpleanyos,
      ColorFavorito: this.form.value.ColorFavorito,
      Genero: this.form.value.Genero,
    }

    this._usuarioService.agregarUsuario(user);
    this.router.navigate(['/']);
  }

}
