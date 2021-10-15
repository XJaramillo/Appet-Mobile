import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
let AuthGuard = class AuthGuard {
    constructor(AFauth, router) {
        this.AFauth = AFauth;
        this.router = router;
    }
    canActivate(next, state) {
        return this.AFauth.authState.pipe(map(auth => {
            if (isNullOrUndefined(auth)) {
                this.router.navigate(['']);
                return false;
            }
            else {
                var authe = auth;
                var veri = authe.emailVerified;
                if (veri == true) {
                    return true;
                }
                else {
                    this.AFauth.signOut();
                    alert("Verifica tu correo electronico");
                    this.router.navigate(['']);
                    return false;
                }
            }
        }));
    }
};
AuthGuard = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthGuard);
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map