import { __decorate } from "tslib";
import { Component } from '@angular/core';
let RentadosPage = class RentadosPage {
    constructor(comentarioService, auth, router) {
        this.comentarioService = comentarioService;
        this.auth = auth;
        this.router = router;
        this.comentariost = [];
        this.ids = [];
    }
    ngOnInit() {
        this.cargarCalificaciones();
    }
    cargarCalificaciones() {
        this.auth.isAuth().subscribe(user => {
            if (user) {
                this.idu = user.uid;
                this.comentarios = [];
                var contador = 0;
                this.comentarioService.buscarComentariosUsu(this.idu).snapshotChanges().subscribe(comen => {
                    if (comen) {
                        for (let i = 0; i < comen.length; i++) {
                            const data = comen[contador].payload.doc.data();
                            data.id = comen[contador].payload.doc.id;
                            this.comentariost[contador] = data;
                            contador++;
                        }
                    }
                });
            }
        });
    }
    calificar(comentarioID) {
        console.log(comentarioID);
        this.router.navigate(['home/comentario/' + comentarioID]);
    }
};
RentadosPage = __decorate([
    Component({
        selector: 'app-rentados',
        templateUrl: './rentados.page.html',
        styleUrls: ['./rentados.page.scss'],
    })
], RentadosPage);
export { RentadosPage };
//# sourceMappingURL=rentados.page.js.map