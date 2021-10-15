import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let SignupPage = class SignupPage {
    constructor(formBuilder, auth, router, storage) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.router = router;
        this.storage = storage;
        this.errorMessages = {
            emailv: [
                { type: 'required', message: 'Email es requerido' },
                { type: 'pattern', message: 'Ingrese un correo válido' }
            ],
            passv: [
                { type: 'required', message: 'Contraseña es requerida' },
                { type: 'minlength', message: 'Ingrese una contraseña de mínimo 6 caracteres' }
            ],
            confirmpass: [
                { type: 'required', message: 'Contraseña es requerida' },
                { type: 'confirmPasswordMatch', message: 'Contraseña no coincide' }
            ],
        };
        this.registrationForm = this.formBuilder.group({
            emailv: ['', Validators.compose([Validators.maxLength(70), Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), Validators.required])],
            passv: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
            confirmpass: ['', Validators.compose([Validators.required])],
        }, {
            validator: this.confirmPasswordMatch('passv', 'confirmpass')
        });
    }
    get emailv() {
        return this.registrationForm.get('emailv');
    }
    get passv() {
        return this.registrationForm.get('passv');
    }
    get confirmpass() {
        return this.registrationForm.get('confirmpass');
    }
    ngOnInit() {
    }
    ingresarUsuario() {
        this.auth.registrarUsu(this.registrationForm.value['emailv'], this.registrationForm.value['passv']).then((auth) => {
            this.navigateLogin();
            console.log(auth);
        }).catch(err => console.log(err));
    }
    isChecked(control) {
        if (control.value != true) {
            return {
                "notChecked": true
            };
        }
        return null;
    }
    confirmPasswordMatch(controlName, matchingControlName) {
        return (FormGroup) => {
            const control = FormGroup.controls[controlName];
            const matchingControl = FormGroup.controls[matchingControlName];
            if (control.value != matchingControl.value) {
                matchingControl.setErrors({ confirmPasswordMatch: true });
            }
            else {
                matchingControl.setErrors(null);
            }
        };
    }
    navigateLogin() {
        this.router.navigate(['login']);
    }
};
SignupPage = __decorate([
    Component({
        selector: 'app-signup',
        templateUrl: './signup.page.html',
        styleUrls: ['./signup.page.scss'],
    })
], SignupPage);
export { SignupPage };
//# sourceMappingURL=signup.page.js.map