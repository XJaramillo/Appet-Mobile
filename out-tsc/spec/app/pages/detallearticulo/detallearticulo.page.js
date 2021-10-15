import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { MorebtnComponent } from 'src/app/components/morebtn/morebtn.component';
let DetallearticuloPage = class DetallearticuloPage {
    constructor(router, popoverctrl, activatedRoute, articuloService, alertController, toastController, auth, Authservice) {
        this.router = router;
        this.popoverctrl = popoverctrl;
        this.activatedRoute = activatedRoute;
        this.articuloService = articuloService;
        this.alertController = alertController;
        this.toastController = toastController;
        this.auth = auth;
        this.Authservice = Authservice;
        this.boolean = true;
        this.articulo = {
            id: '',
            titulo: '',
            descripcion: '',
            img: '',
            telefono: '',
            costo: '',
            userId: '',
            disponible: true,
            fecha: ''
        };
        this.textoBuscar = '';
        this.textoArticulo = '';
    }
    ngOnInit() {
        this.auth.isAuth().subscribe(user => {
            this.idu = user.uid;
            this.articulo.userId = this.idu;
        });
        this.articulosUsu();
    }
    articulosUsu() {
        this.articuloService.getArticulos().subscribe(arti => {
            this.Authservice.isAuth().subscribe(user => {
                if (user) {
                    this.articulos = [];
                    var cont = 0;
                    for (let i = 0; i < arti.length; i++) {
                        if (arti[i].userId == user.uid) {
                            this.articulos[cont] = arti[i];
                            cont++;
                        }
                    }
                }
            });
        });
    }
    editararticulo(id) {
        this.router.navigate(['home/articuloeditar/' + id]);
    }
    eliminarArticulo(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Eliminar',
                message: '¿Esta seguro de eliminar este artículo?',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                        }
                    }, {
                        text: 'Ok',
                        handler: () => {
                            this.eliminar(id);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    //mensaje inferior de eliminacion
    eliminar(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.articuloService.deleteArticulo(id).then(() => {
                this.router.navigateByUrl('/home/detallearticulo');
            }, err => {
            });
            const toast = yield this.toastController.create({
                color: 'dark',
                message: 'Artículo eliminado correctamente',
                duration: 2000
            });
            toast.present();
        });
    }
    // filtro 
    buscar(event) {
        this.textoBuscar = event.detail.value;
    }
    /*programacion barra arriba popover y btn salir btn dark mode*/
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
    cerrarSesion() {
        this.router.navigate(['']);
        this.popoverctrl.dismiss();
    }
    modoOscuro() {
        this.darkMode = this.darkMode;
        document.body.classList.toggle('dark');
    }
};
DetallearticuloPage = __decorate([
    Component({
        selector: 'app-detallearticulo',
        templateUrl: './detallearticulo.page.html',
        styleUrls: ['./detallearticulo.page.scss'],
    })
], DetallearticuloPage);
export { DetallearticuloPage };
//# sourceMappingURL=detallearticulo.page.js.map