import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, Router } from '@angular/router';
import { MensajesService } from '../services/mensajes.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  mensajeCorreo=false;
  mensajePass=false;
  mensajeGeneral=false;
  emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  correo='';
  password='';

  get mensajes() {
    // this.mensajesService.agregarMensaje('Cuenta creada. Revise su correo electrónico');
    return this.mensajesService.mensajes;
  }

  constructor(
    private mensajesService: MensajesService,
    private router: Router
  ) {}

  validarCorreo() {
    if(!this.emailRegex.test(this.correo) || this.correo.length == 0) {
      return this.mensajeCorreo=true;
    } else {
      return this.mensajeCorreo=false;
    }
  }

  validarPass() {
    if(this.password.length == 0) {
      return this.mensajePass=true;
    } else {
      return this.mensajePass=false;
    }
  }

  loguear() {
    if(this.correo.length==0) {
      this.mensajeCorreo=true;
    } 

    if(this.password.length == 0) {
      this.mensajePass=true;
    } else {
      this.mensajePass=false;
    }

    if(this.mensajeCorreo==true || this.mensajePass==true) {
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/interfaz-principal']);
    }
  }
}
