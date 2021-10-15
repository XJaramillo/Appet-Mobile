import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { finalize } from 'rxjs/operators';
let ProfilePage = class ProfilePage {
    constructor(camera, platform, file, router, auth, alertController, storage, db, authF, comentarioService) {
        this.camera = camera;
        this.platform = platform;
        this.file = file;
        this.router = router;
        this.auth = auth;
        this.alertController = alertController;
        this.storage = storage;
        this.db = db;
        this.authF = authF;
        this.comentarioService = comentarioService;
        this.usersR = [];
    }
    ngOnInit() {
        //inicia datos usuario
        this.datosUsuario();
    }
    //funcion para obtener datos usuario
    datosUsuario() {
        this.usersR = [];
        this.auth.isAuth().subscribe(us => {
            if (us) {
                this.auth.obtenernombreUsuario(us.uid).subscribe(usa => {
                    const data2 = usa.payload.data();
                    this.usersR[0] = data2;
                    console.log(this.usersR[0].uid);
                    this.cargarCalificaciones(this.usersR[0].uid);
                });
            }
        });
    }
    //navegacion para home/articulos
    navigateArticulos() {
        this.router.navigate(['home/articulos']);
    }
    //Alert actualizacion direccion
    presentAlertDireccion() {
        return __awaiter(this, void 0, void 0, function* () {
            const alerta = yield this.alertController.create({
                cssClass: 'my-custom-class',
                message: 'Escriba su dirección',
                inputs: [
                    {
                        name: 'direccion',
                        type: 'text',
                        id: 'direccion',
                        value: this.usersR[0].direccion,
                        placeholder: 'Dirección'
                    },
                ],
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Ok',
                        handler: (data) => {
                            //Validacion datos de usuario no esten vacios
                            if (data.direccion != "") {
                                this.auth.updateDireccion(data.direccion);
                            }
                            else {
                                alert('Ingrese dirección');
                                return false;
                            }
                        }
                    }
                ]
            });
            yield alerta.present();
        });
    }
    //AlertActualizacion Nombre y Apellido
    presentAlertNombreApellido() {
        return __awaiter(this, void 0, void 0, function* () {
            const alerta = yield this.alertController.create({
                cssClass: 'my-custom-class',
                message: 'Escriba su nombre y apellido',
                inputs: [
                    {
                        name: 'nombre',
                        type: 'text',
                        id: 'nombre',
                        value: this.usersR[0].nombre,
                        placeholder: 'Nombre'
                    },
                    {
                        name: 'apellido',
                        type: 'text',
                        id: 'apellido',
                        value: this.usersR[0].apellido,
                        placeholder: 'Apellido'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Ok',
                        handler: (data) => {
                            //Validacion datos de usuario no esten vacios
                            if (data.nombre != "" && data.apellido != "") {
                                this.auth.updateNombreApellido(data.nombre, data.apellido);
                            }
                            else {
                                alert('Ingrese nombre y apellido');
                                return false;
                            }
                        }
                    }
                ]
            });
            yield alerta.present();
        });
    }
    //Alerta para modificacion de Celular
    presentAlertCellphone() {
        return __awaiter(this, void 0, void 0, function* () {
            const alerta = yield this.alertController.create({
                cssClass: 'my-custom-class',
                message: 'Ingrese numero Celular',
                inputs: [
                    {
                        name: 'telefono',
                        type: 'tel',
                        id: 'telefono',
                        value: this.usersR[0].telefono,
                        attributes: {
                            minlength: 10,
                            maxlength: 10
                        },
                        placeholder: 'Número Celular'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Ok',
                        handler: (data) => {
                            const tel = data.telefono;
                            //verificacion de celular no este vacio y esten 10 digitos
                            if (data.telefono != "" && tel.length == 10) {
                                this.auth.updatePhone(data.telefono);
                            }
                            else {
                                alert('Ingrese el numero correctamente');
                                return false;
                            }
                        }
                    }
                ]
            });
            yield alerta.present();
        });
    }
    //Subir imagen a FirebaseStorage
    //Actualizacion de imagen dentro de Firebase database y user
    updateImage() {
        this.authF.authState.subscribe(auth => {
            this.db.collection('users').doc(auth.uid).update({ urlimage: this.image
            }).then(() => {
                this.auth.isAuth().subscribe(user => {
                    if (user) {
                        user.updateProfile({
                            photoURL: this.image
                        }).then(function () {
                            console.log('User Update');
                        }).catch(function (error) {
                            console.log('error', error);
                        });
                    }
                });
            }).catch(function (err) {
                console.log(err);
            });
        });
    }
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
                    const id = this.usersR[0].uid;
                    this.imagePath = `Perfiles/profile_${id}` + '.jpg';
                    const ref = this.storage.ref(this.imagePath);
                    const task = ref.put(blob);
                    this.uploadPercent = task.percentageChanges();
                    task.snapshotChanges().pipe(finalize(() => this.urlImage = ref.getDownloadURL())).subscribe();
                    task.then((uploadSnapshot) => {
                        const downloadURL = ref.getDownloadURL();
                        downloadURL.subscribe(url => {
                            if (url) {
                                this.image = url;
                                this.updateImage();
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
                    const id = this.usersR[0].uid;
                    this.imagePath = `Perfiles/profile_${id}` + '.jpg';
                    const ref = this.storage.ref(this.imagePath);
                    const task = ref.put(blob);
                    this.uploadPercent = task.percentageChanges();
                    task.snapshotChanges().pipe(finalize(() => this.urlImage = ref.getDownloadURL())).subscribe();
                    task.then((uploadSnapshot) => {
                        const downloadURL = ref.getDownloadURL();
                        downloadURL.subscribe(url => {
                            if (url) {
                                this.image = url;
                                this.updateImage();
                            }
                        });
                    });
                    break;
                }
            }
        });
    }
    //funciones para abrir la camara
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
    presentAlertCamera() {
        return __awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                message: '<strong>Seleccione:</strong>',
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
                        text: 'Cancel',
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
    //seccion de comentarios
    cargarCalificaciones(idUsuario) {
        this.comentarioService.getComentarios().subscribe(res => {
            this.comentarios = [];
            var contador = 0;
            for (let i = 0; i < res.length; i++) {
                if (res[i].idPropietarioComen == idUsuario) {
                    this.comentarios[contador] = res[i];
                    contador++;
                    this.idComentario = res[i].id;
                    //console.log(this.idComentario);
                    this.comentarioService.getComentarioRoom(this.idComentario).subscribe(room => {
                        console.log(room);
                        this.room = room;
                        console.log(this.room.calificacionUsuarios.length);
                        var promedio = 0.0;
                        var dividir = 0.0;
                        for (let i = 0; i < this.room.calificacionUsuarios.length; i++) {
                            promedio = this.room.calificacionUsuarios[i] + promedio;
                            dividir = promedio / this.room.calificacionUsuarios.length;
                            this.calificacionTotal = dividir;
                            console.log(this.calificacionTotal);
                        }
                    });
                }
            }
        });
    }
};
ProfilePage = __decorate([
    Component({
        selector: 'app-profile',
        templateUrl: './profile.page.html',
        styleUrls: ['./profile.page.scss'],
    })
], ProfilePage);
export { ProfilePage };
//# sourceMappingURL=profile.page.js.map