import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {AngularFireStorage} from '@angular/fire/storage';
import {FormBuilder, Validators, FormGroup, Form, FormControl} from '@angular/forms';
import {Observable} from 'rxjs/internal/Observable';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  get emailv(){
    return this.registrationForm.get('emailv');
  }
  get passv(){
    return this.registrationForm.get('passv');
  }
  get confirmpass(){
    return this.registrationForm.get('confirmpass');
  }
  public errorMessages = {
    emailv : [
      {type: 'required', message: 'Correo electrónico es requerido'},
      {type: 'pattern', message: 'Ingrese un correo válido'}
    ],
    passv : [
      {type: 'required', message: 'Contraseña es requerida'},
      {type: 'minlength', message: 'Ingrese una contraseña de mínimo 6 caracteres'}
    ],
    confirmpass:[
      {type: 'required', message: 'Contraseña es requerida'},
      {type: 'confirmPasswordMatch', message: 'Contraseña no coincide'}
    ],

  }

  registrationForm = this.formBuilder.group({
    emailv: ['', Validators.compose([Validators.maxLength(70), Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), Validators.required])],
    passv: ['',Validators.compose([Validators.required, Validators.minLength(6)])],
    confirmpass: ['',Validators.compose([Validators.required])],

  },{
    validator: this.confirmPasswordMatch('passv','confirmpass')
  });



  constructor(private formBuilder: FormBuilder,private auth: AuthService, private router: Router, private storage: AngularFireStorage) { }

  ngOnInit() {
  }
  ingresarUsuario(){

    this.auth.registrarUsu(this.registrationForm.value['emailv'],this.registrationForm.value['passv']).then((auth)=>{
      this.navigateLogin();
      console.log(auth);
    }).catch(err =>console.log(err));
  }
  isChecked(control: FormControl): any{
    if(control.value != true){
      return {
        "notChecked": true
      };
    }
    return null;
  }
  confirmPasswordMatch(controlName: string, matchingControlName:string){
    return (FormGroup: FormGroup)=>{
      const control = FormGroup.controls[controlName];
      const matchingControl= FormGroup.controls[matchingControlName];
      if(control.value!= matchingControl.value){
        matchingControl.setErrors({confirmPasswordMatch:true});
      }else{
        matchingControl.setErrors(null);
      }
    }

  }

  navigateLogin(){
    this.router.navigate(['login']);
  }

}