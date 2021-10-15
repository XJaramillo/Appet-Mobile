import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let LoginPage = class LoginPage {
    constructor(formBuilder, fcm, authService, router, AFauth) {
        this.formBuilder = formBuilder;
        this.fcm = fcm;
        this.authService = authService;
        this.router = router;
        this.AFauth = AFauth;
        this.errorMessages = {
            emailv: [
                { type: 'required', message: 'Email es requerido' },
                { type: 'pattern', message: 'Verifique que su correo no tenga espacios al final o al inicio' }
            ]
        };
        this.LoginForm = this.formBuilder.group({
            emailv: ['', Validators.compose([Validators.maxLength(70), Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), Validators.required])]
        });
    }
    get emailv() {
        return this.LoginForm.get('emailv');
    }
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
                var tok = this.token;
                if (tok != null) {
                    console.log("Token............................." + this.token);
                    this.authService.updateToken(this.token);
                }
            });
            this.router.navigate(['registro']);
            var tok = this.token;
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
            .then(() => {
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
};
LoginPage = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.page.html',
        styleUrls: ['./login.page.scss'],
    })
], LoginPage);
export { LoginPage };
//# sourceMappingURL=login.page.js.map