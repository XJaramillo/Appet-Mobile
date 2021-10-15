import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, Validators, FormGroup, Form, FormControl } from '@angular/forms';
interface user {
  inhabilitado: boolean
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  get emailv() {
    return this.LoginForm.get('emailv');
  }
  email: string;
  password: string;
  token: string;

  public errorMessages = {
    emailv: [
      { type: 'required', message: 'Correo electrónico es requerido' },
      { type: 'pattern', message: 'Verifique que su correo no tenga espacios al final o al inicio' }
    ]
  }
  LoginForm = this.formBuilder.group({
    emailv: ['', Validators.compose([Validators.maxLength(70), Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), Validators.required])]
  }
  );

  constructor(private formBuilder: FormBuilder, private fcm: FCM, private authService: AuthService, private router: Router, private AFauth: AngularFireAuth) { }

  ngOnInit() {
    this.fcm.getToken().then(token => {
      console.log(token);
      this.token = token;
    });
  }
  //Verificacion usuario dispone de cuenta y datos para ingreso al sistema
  verificacionLogin() {
    console.log("Entro a la funcion");
    this.authService.login(this.LoginForm.value['emailv'], this.password).then(res => {
      console.log("entra a la segunda");
      this.authService.verificacionDatos().then(resd => {
        console.log("habiltado");
        this.router.navigate(['home/articulos']);
        var tok = this.token
        if (tok != null) {
          console.log("Token............................." + this.token);
          this.authService.updateToken(this.token);
        }
      })
      this.router.navigate(['registro']);
      var tok = this.token
      if (tok != null) {
        console.log("Token............................." + this.token);
        this.authService.updateToken(this.token);
      }
    }).catch(e => alert('Email o contraseña incorrecta'));
  }
  //Restablecer contraseña de usuario.
  resetPassword() {
    this.email = this.LoginForm.value['emailv'];
    if (!this.email) {
      alert('Ingrese su email!');
    }
    this.authService.resetPasswordInit(this.email)
      .then(
        () => {
          this.router.navigate(['']);
          alert('Correo electronico para restablecer su contraseña fue enviado!'),
            (rejectionReason) => alert(rejectionReason);

        })
      .catch(e => alert('Error al tratar de restablecer contraseña'));
  }
  //navegacion al welcome
  navigateIndex() {
    this.router.navigate(['']);
  }
  //navegacion creacion de cuenta
  navigateSignup() {
    this.router.navigate(['signup']);
  }

}
