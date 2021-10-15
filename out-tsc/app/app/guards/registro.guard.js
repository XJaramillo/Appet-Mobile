import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
let RegistroGuard = class RegistroGuard {
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
                var veri = authe.displayName;
                var email = authe.emailVerified;
                var v = false;
                if (veri == null && email == true) {
                    v = false;
                }
                else {
                    v = true;
                }
                if (v == false) {
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
RegistroGuard = __decorate([
    Injectable({
        providedIn: 'root'
    })
], RegistroGuard);
export { RegistroGuard };
//# sourceMappingURL=registro.guard.js.map