import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-morebtn',
  templateUrl: './morebtn.component.html',
  styleUrls: ['./morebtn.component.scss'],
})
export class MorebtnComponent implements OnInit {

  uid: string;
  veri: boolean =false;

  constructor(private router: Router,
    private popoverctrl: PopoverController, private auth: AuthService) { }

  ngOnInit() {
    this.auth.isAuth().subscribe(user => {
      if (user) { this.uid = user.uid; }
    }
    )
  }


  cerrarSesion() {
    console.log(this.uid)
    this.auth.logout(this.uid);
    this.popoverctrl.dismiss();
  }

  navigateProfile() {
    this.router.navigate(['home/profile']);
    this.popoverctrl.dismiss();
  }
}
