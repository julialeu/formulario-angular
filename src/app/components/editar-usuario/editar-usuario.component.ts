import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UsuarioServiceService} from "../../services/usuario-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Usuario} from "../../Interfaces/usuario";

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  tiles: any[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  form: FormGroup;
  numUser: number;

  constructor(private fb: FormBuilder,
              private _usuarioService: UsuarioServiceService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private route: ActivatedRoute
  ) {
    this.numUser = 0;
    this.form = this.fb.group({
      Nombre: ['', Validators.required],
      Apellidos: ['', Validators.required],
      Edad: ['', Validators.required],
      Dni: ['', Validators.required],
      Cumpleanyos: ['', Validators.required],
      ColorFavorito: ['', Validators.required],
      Genero: ['', Validators.required],
    })

    this.activatedRoute.params.subscribe(params => {
      let index = params['index'];
      this.numUser = index;
      const userToEdit = this._usuarioService.getUsuario(index);

      this.form.patchValue({
          Nombre: userToEdit.Nombre,
          Apellidos: userToEdit.Apellidos,
          Edad: userToEdit.Edad,
          Dni: userToEdit.Dni,
          Cumpleanyos: userToEdit.Cumpleanyos,
          ColorFavorito: userToEdit.ColorFavorito,
          Genero: userToEdit.Genero
        }
      )
    });

  }

  ngOnInit(): void {
    this.numUser = 0;
  }

  editarUsuario() {
    const user: Usuario = {
      Nombre: this.form.value.Nombre,
      Apellidos: this.form.value.Apellidos,
      Edad: this.form.value.Edad,
      Dni: this.form.value.Dni,
      Cumpleanyos: this.form.value.Cumpleanyos,
      ColorFavorito: this.form.value.ColorFavorito,
      Genero: this.form.value.Genero,
    }

    this._usuarioService.editarUsuarioConcreto(user, this.numUser);
    this.router.navigate(['/']);
  }
}
