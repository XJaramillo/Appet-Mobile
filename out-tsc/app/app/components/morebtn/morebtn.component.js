import { __decorate } from "tslib";
import { Component } from '@angular/core';
let MorebtnComponent = class MorebtnComponent {
    constructor(router, popoverctrl, auth) {
        this.router = router;
        this.popoverctrl = popoverctrl;
        this.auth = auth;
        this.veri = false;
    }
    ngOnInit() {
        this.auth.isAuth().subscribe(user => {
            if (user) {
                this.uid = user.uid;
            }
        });
    }
    /*programacion de la barra de arriba*/
    rentarArticulos() {
        this.router.navigate(['home/rentados']);
        this.popoverctrl.dismiss();
    }
    cerrarSesion() {
        console.log(this.uid);
        this.auth.logout(this.uid);
        this.popoverctrl.dismiss();
    }
    navigateProfile() {
        this.router.navigate(['home/profile']);
        this.popoverctrl.dismiss();
    }
};
MorebtnComponent = __decorate([
    Component({
        selector: 'app-morebtn',
        templateUrl: './morebtn.component.html',
        styleUrls: ['./morebtn.component.scss'],
    })
], MorebtnComponent);
export { MorebtnComponent };
//# sourceMappingURL=morebtn.component.js.map