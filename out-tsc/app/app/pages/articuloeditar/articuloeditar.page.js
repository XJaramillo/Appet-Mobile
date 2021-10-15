import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { finalize } from 'rxjs/operators';
let ArticuloeditarPage = class ArticuloeditarPage {
    constructor(activatedRoute, articuloService, router, afSG, camera, platform, file, toastController, alertController) {
        this.activatedRoute = activatedRoute;
        this.articuloService = articuloService;
        this.router = router;
        this.afSG = afSG;
        this.camera = camera;
        this.platform = platform;
        this.file = file;
        this.toastController = toastController;
        this.alertController = alertController;
        this.articuloR = [];
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
    }
    ngOnInit() {
        this.obtenerArticulo();
    }
    obtenerArticulo() {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        if (id) {
            this.articuloService.getArticulo(id).subscribe(articuloData => {
                this.articulo = articuloData;
                console.log(this.articulo);
                this.disponible = this.articulo.disponible;
            });
        }
    }
    checkDisponible(check) {
        console.log(check);
    }
    //alertas para cada campo del artiuclo
    editarTitulo() {
        return __awaiter(this, void 0, void 0, function* () {
            const alerta = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Articulo',
                message: '¿Esta seguro de realizar el cambio a este artículo?',
                inputs: [
                    {
                        name: 'titulo',
                        type: 'text',
                        id: 'titulo',
                        value: this.articulo.titulo,
                        placeholder: 'Titulo'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                        }
                    }, {
                        text: 'Ok',
                        handler: (data) => {
                            //Validacion datos de usuario no esten vacios
                            if (data.titulo != "") {
                                console.log(data.titulo);
                                this.articuloService.updateArticulo(data.titulo, this.articulo.id);
                                this.obtenerArticulo();
                            }
                            else {
                                alert('Ingrese el titulo');
                                return false;
                            }
                        }
                    }
                ]
            });
            yield alerta.present();
        });
    }
    editarDescripcion() {
        return __awaiter(this, void 0, void 0, function* () {
            const alerta = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Articulo',
                message: '¿Esta seguro de realizar el cambio a este artículo?',
                inputs: [
                    {
                        name: 'descripcion',
                        type: 'text',
                        id: 'descripcion',
                        value: this.articulo.descripcion,
                        placeholder: 'Descripcion'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                        }
                    }, {
                        text: 'Ok',
                        handler: (data) => {
                            //Validacion datos de usuario no esten vacios
                            if (data.descripcion != "") {
                                console.log(data.descripcion);
                                this.articuloService.updateDescripcion(data.descripcion, this.articulo.id);
                                this.obtenerArticulo();
                            }
                            else {
                                alert('Ingrese una descripción');
                                return false;
                            }
                        }
                    }
                ]
            });
            yield alerta.present();
        });
    }
    editarTelefono() {
        return __awaiter(this, void 0, void 0, function* () {
            const alerta = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Articulo',
                message: '¿Esta seguro de realizar el cambio a este artículo?',
                inputs: [
                    {
                        name: 'telefono',
                        type: 'text',
                        id: 'telefono',
                        value: this.articulo.telefono,
                        placeholder: 'Telefono'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                        }
                    }, {
                        text: 'Ok',
                        handler: (data) => {
                            //Validacion datos de usuario no esten vacios
                            if (data.telefono != "") {
                                console.log(data.telefono);
                                this.articuloService.updateTelefono(data.telefono, this.articulo.id);
                                this.obtenerArticulo();
                            }
                            else {
                                alert('Ingrese número de telefono');
                                return false;
                            }
                        }
                    }
                ]
            });
            yield alerta.present();
        });
    }
    editarCosto() {
        return __awaiter(this, void 0, void 0, function* () {
            const alerta = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Articulo',
                message: '¿Esta seguro de realizar el cambio a este artículo?',
                inputs: [
                    {
                        name: 'costo',
                        type: 'number',
                        id: 'costo',
                        value: this.articulo.costo,
                        placeholder: 'Costo'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                        }
                    }, {
                        text: 'Ok',
                        handler: (data) => {
                            //Validacion datos de usuario no esten vacios
                            if (data.costo != "") {
                                console.log(data.costo);
                                this.articuloService.updateCosto(data.costo, this.articulo.id);
                                this.obtenerArticulo();
                            }
                            else {
                                alert('Ingrese número de costo');
                                return false;
                            }
                        }
                    }
                ]
            });
            yield alerta.present();
        });
    }
    editarDisponible() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(this.disponible);
            if (this.disponible == true) {
                console.log("tu articulo ya no esta disponible");
                const alert = yield this.alertController.create({
                    cssClass: 'my-custom-class',
                    header: 'Estado de tu artículo',
                    message: 'Tu articulo ya no esta disponible',
                    buttons: [
                        {
                            text: 'Entendido',
                            cssClass: 'secondary',
                            handler: (blah) => {
                                this.articuloService.updateDisponible(false, this.articulo.id);
                            }
                        }
                    ]
                });
                yield alert.present();
            }
            else {
                console.log("tu articulo ya esta disponible");
                const alert = yield this.alertController.create({
                    cssClass: 'my-custom-class',
                    header: 'Estado de tu artículo',
                    message: 'Tu articulo ya se encuentra disponible',
                    buttons: [
                        {
                            text: 'Entendido',
                            cssClass: 'secondary',
                            handler: (blah) => {
                                this.articuloService.updateDisponible(true, this.articulo.id);
                            }
                        }
                    ]
                });
                yield alert.present();
            }
        });
    }
    presentAlertCamera() {
        return __awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                message: '<strong>Seleccione:</strong>!!!',
                buttons: [
                    {
                        text: 'Camara',
                        handler: () => {
                            this.addPhoto('camera');
                        }
                    },
                    {
                        text: 'Galeria',
                        handler: () => {
                            this.addPhoto('library');
                        }
                    },
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    //metodo para tomar foto o subir desde galeria
    addPhoto(source) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (source) {
                case 'camera': {
                    const cameraPhoto = yield this.openCamera();
                    this.image = cameraPhoto;
                    const fileURI = this.image;
                    let file;
                    if (this.platform.is('ios')) {
                        file = fileURI.split('/').pop();
                    }
                    else {
                        file = fileURI.substring(fileURI.lastIndexOf('/') + 1);
                    }
                    const path = fileURI.substring(0, fileURI.lastIndexOf('/'));
                    const buffer = yield this.file.readAsArrayBuffer(path, file);
                    const blob = new Blob([buffer], { type: 'image/jpeg' });
                    const id = Math.random().toString(36).substring(2);
                    this.imagePath = `Articulos/articulo_${id}` + '.jpg';
                    const ref = this.afSG.ref(this.imagePath);
                    const task = ref.put(blob);
                    this.uploadPercent = task.percentageChanges();
                    task.snapshotChanges().pipe(finalize(() => this.downloadUrl = ref.getDownloadURL())).subscribe();
                    task.then((uploadSnapshot) => {
                        const downloadURL = ref.getDownloadURL();
                        downloadURL.subscribe(url => {
                            if (url) {
                                this.image = url;
                                this.foto = this.image;
                                this.articuloService.updateImg(this.image, this.articulo.id);
                                this.obtenerArticulo();
                            }
                        });
                    });
                    break;
                }
                case 'library': {
                    const libraryImage = yield this.openLibrary();
                    this.image = libraryImage;
                    const fileURI = this.image;
                    let file;
                    if (this.platform.is('ios')) {
                        file = fileURI.split('/').pop();
                    }
                    else {
                        file = fileURI.substring(fileURI.lastIndexOf('/') + 1, fileURI.indexOf('?'));
                    }
                    const path = fileURI.substring(0, fileURI.lastIndexOf('/'));
                    const buffer = yield this.file.readAsArrayBuffer(path, file);
                    const blob = new Blob([buffer], { type: 'image/jpeg' });
                    const id = Math.random().toString(36).substring(2);
                    this.imagePath = `Articulos/articulo_${id}` + '.jpg';
                    const ref = this.afSG.ref(this.imagePath);
                    const task = ref.put(blob);
                    this.uploadPercent = task.percentageChanges();
                    task.snapshotChanges().pipe(finalize(() => this.downloadUrl = ref.getDownloadURL())).subscribe();
                    task.then((uploadSnapshot) => {
                        const downloadURL = ref.getDownloadURL();
                        downloadURL.subscribe(url => {
                            if (url) {
                                this.image = url;
                                this.foto = this.image;
                                this.articuloService.updateImg(this.image, this.articulo.id);
                                this.obtenerArticulo();
                            }
                        });
                    });
                    break;
                }
            }
        });
    }
    //funciones para abrir galeria
    openLibrary() {
        return __awaiter(this, void 0, void 0, function* () {
            const options = {
                quality: 100,
                destinationType: this.camera.DestinationType.FILE_URI,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                targetWidth: 1000,
                targetHeight: 1000,
                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
            };
            return yield this.camera.getPicture(options);
        });
    }
    //funcion para abrir la camara
    openCamera() {
        return __awaiter(this, void 0, void 0, function* () {
            const options = {
                quality: 100,
                destinationType: this.camera.DestinationType.FILE_URI,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                targetWidth: 1000,
                targetHeight: 1000,
                sourceType: this.camera.PictureSourceType.CAMERA
            };
            return yield this.camera.getPicture(options);
        });
    }
    //alerta de mensajes
    confirmacionArticuloEditar() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                color: 'dark',
                message: 'Cambios guardados con exito!',
                duration: 3000
            });
            toast.present();
        });
    }
};
ArticuloeditarPage = __decorate([
    Component({
        selector: 'app-articuloeditar',
        templateUrl: './articuloeditar.page.html',
        styleUrls: ['./articuloeditar.page.scss'],
    })
], ArticuloeditarPage);
export { ArticuloeditarPage };
//# sourceMappingURL=articuloeditar.page.js.map