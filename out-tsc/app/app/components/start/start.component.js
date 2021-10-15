import { __decorate } from "tslib";
import { Component } from '@angular/core';
let StartComponent = class StartComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    navigatelogin() {
        this.router.navigate(['login']);
    }
};
StartComponent = __decorate([
    Component({
        selector: 'app-start',
        templateUrl: './start.component.html',
        styleUrls: ['./start.component.scss'],
    })
], StartComponent);
export { StartComponent };
//# sourceMappingURL=start.component.js.map