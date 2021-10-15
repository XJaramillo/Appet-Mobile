import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
let SignoutGuard = class SignoutGuard {
    constructor(AFauth, router) {
        this.AFauth = AFauth;
        this.router = router;
    }
    canActivate(next, state) {
        return this.AFauth.authState.pipe(map(auth => {
            if (isNullOrUndefined(auth)) {
                return true;
            }
            else {
                var authe = auth;
                var veri = authe.emailVerified;
                if (veri == false) {
                    this.AFauth.signOut();
                    alert("Verifica tu correo electronico");
                    return true;
                }
                else {
                    this.router.navigate(['home/articulos']);
                    return false;
                }
            }
        }));
    }
};
SignoutGuard = __decorate([
    Injectable({
        providedIn: 'root'
    })
], SignoutGuard);
export { SignoutGuard };
//# sourceMappingURL=signout.guard.js.map