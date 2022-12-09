
import { Component } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent{

  nameForm = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ])
  lastNameForm = new FormControl('', [Validators.required])
  emailForm = new FormControl('', [Validators.email, Validators.required])
  passwordForm = new FormControl('',[Validators.required, Validators.minLength(6)])

  formulario = new FormGroup({
    name: this.nameForm,
    lastName: this.lastNameForm,
    email: this.emailForm,
    password: this.passwordForm,
  })

  enviarForm() {
    console.log(this.formulario.value)
    this.formulario.reset()
  }

}
