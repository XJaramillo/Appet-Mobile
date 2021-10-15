import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let ComentarioPage = class ComentarioPage {
    constructor(comentarioservice, formBuilder, activatedRoute, alertController, router) {
        this.comentarioservice = comentarioservice;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.alertController = alertController;
        this.router = router;
        this.mensajeComentario = {
            content: ''
        };
        this.comentarioTs = {
            id: '',
            idPropietarioComen: '',
            usuarios: {
                idUsuarioRenta: ''
            },
            nombre: '',
            apellido: '',
        };
        this.errorMessages = {
            comentarioa: [
                { type: 'required', message: '*' },
                { type: 'pattern', message: 'Debe ingresar el comentario' }
            ],
            calificaciona: [
                { type: 'required', message: '*' },
                { type: 'pattern', message: 'Debe ingresar una calificaion' }
            ],
        };
        this.comentarioForm = this.formBuilder.group({
            comentarioa: ['', [Validators.required, Validators.minLength(5)]],
            calificaciona: ['', [Validators.required, Validators.maxLength(1)]]
        });
    }
    get comentarioa() {
        return this.comentarioForm.get('comentarioa');
    }
    get calificaciona() {
        return this.comentarioForm.get('calificaciona');
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        if (id) {
            this.comentarioservice.getComentario(id).subscribe(comentarioData => {
                this.comentarioTs = comentarioData;
            });
        }
    }
    enviarComentario() {
        return __awaiter(this, void 0, void 0, function* () {
            this.calificacionUsuario = this.comentarioForm.value['calificaciona'];
            if (this.calificacionUsuario < 0 || this.calificacionUsuario > 5) {
                const alert = yield this.alertController.create({
                    cssClass: 'my-custom-class',
                    header: 'Eliminar',
                    message: 'Debe ingresar una calificación entre 1 y 5',
                    buttons: [
                        {
                            text: 'Entendido',
                            cssClass: 'secondary',
                            handler: (blah) => {
                            }
                        }
                    ]
                });
                yield alert.present();
            }
            else {
                this.comentarioUsuario = this.comentarioForm.value['comentarioa'];
                this.calificacionUsuario = this.comentarioForm.value['calificaciona'];
                console.log(this.comentarioUsuario);
                console.log(this.comentarioTs.id);
                this.mensajeComentario.content = this.comentarioUsuario;
                this.comentarioservice.guadarComentario(this.mensajeComentario, this.comentarioTs.id);
                this.comentarioservice.guadarCalificacion(this.calificacionUsuario, this.comentarioTs.id);
                this.comentarioForm.reset();
                this.router.navigate(['/home/rentados']);
            }
        });
    }
    valor(valor) {
        console.log(valor);
    }
};
ComentarioPage = __decorate([
    Component({
        selector: 'app-comentario',
        templateUrl: './comentario.page.html',
        styleUrls: ['./comentario.page.scss'],
    })
], ComentarioPage);
export { ComentarioPage };
//# sourceMappingURL=comentario.page.js.map