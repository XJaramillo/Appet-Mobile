import { __awaiter, __decorate } from "tslib";
import { Component, HostBinding } from '@angular/core';
import { MorebtnComponent } from 'src/app/components/morebtn/morebtn.component';
let ArticulosPage = class ArticulosPage {
    constructor(popoverctrl, articuloService, router, fcm, Authservicies, auth, Authservice) {
        this.popoverctrl = popoverctrl;
        this.articuloService = articuloService;
        this.router = router;
        this.fcm = fcm;
        this.Authservicies = Authservicies;
        this.auth = auth;
        this.Authservice = Authservice;
        this.classes = 'row';
        this.textoBuscar = '';
        this.articulo = {
            id: '',
            titulo: '',
            descripcion: '',
            img: '',
            telefono: '',
            costo: '',
            userId: '',
            disponible: true,
            fecha: '',
        };
    }
    ngOnInit() {
        /*this.fcm.getToken().then(token=>{
          console.log(token);
          this.saveToken(token);
        });*/
        this.articulosSinUsu();
    }
    articulosSinUsu() {
        this.articuloService.getArticulos().subscribe(arti => {
            this.Authservice.isAuth().subscribe(user => {
                this.articulos = [];
                var cont = 0;
                for (let i = 0; i < arti.length; i++) {
                    if (arti[i].userId !== user.uid) {
                        this.articulos[cont] = arti[i];
                        cont++;
                    }
                }
                console.log(this.articulos);
            });
        });
    }
    saveToken(token) {
        this.Authservicies.updateToken(token);
    }
    detalles(id) {
        this.router.navigate(['home/detallever/' + id]);
    }
    // filtro 
    buscar(event) {
        this.textoBuscar = event.detail.value;
        console.log(event);
        console.log(this.textoBuscar);
    }
    //boton more
    mostrarpop(evento) {
        return __awaiter(this, void 0, void 0, function* () {
            const popover = yield this.popoverctrl.create({
                component: MorebtnComponent,
                event: evento,
                translucent: true,
                mode: 'ios'
            });
            return yield popover.present();
        });
    }
};
__decorate([
    HostBinding('class')
], ArticulosPage.prototype, "classes", void 0);
ArticulosPage = __decorate([
    Component({
        selector: 'app-articulos',
        templateUrl: './articulos.page.html',
        styleUrls: ['./articulos.page.scss'],
    })
], ArticulosPage);
export { ArticulosPage };
//# sourceMappingURL=articulos.page.js.map