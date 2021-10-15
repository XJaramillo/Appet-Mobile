import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
//Librerias para observables y Finalize
import { finalize } from 'rxjs/operators';
//Formulario
import { Validators } from '@angular/forms';
let RegistroPage = class RegistroPage {
    constructor(camera, platform, file, alertController, formBuilder, auth, db, authF, router, storage) {
        this.camera = camera;
        this.platform = platform;
        this.file = file;
        this.alertController = alertController;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.db = db;
        this.authF = authF;
        this.router = router;
        this.storage = storage;
        this.errorMessages = {
            nombrev: [
                { type: 'required', message: 'Su Nombre es Requerido' },
                { type: 'pattern', message: 'Ingrese su Nombre' }
            ],
            apellidov: [
                { type: 'required', message: 'Su Apellido es Requerido' },
                { type: 'minlength', message: 'Ingrese su Apellido' }
            ],
            telv: [
                { type: 'pattern', message: 'Ingrese correctamente su número de celular' }
            ],
            direccionv: [
                { type: 'required', message: 'Su dirección es Requerida' },
                { type: 'minlength', message: 'Ingrese su dirección' }
            ],
        };
        this.profileForm = this.formBuilder.group({
            nombrev: ['', [Validators.required, Validators.minLength(5)]],
            apellidov: ['', Validators.compose([Validators.minLength(3), Validators.required])],
            telv: ['', Validators.pattern("^((\\+593-?)|0)?[0-9]{9}$")]
        });
        //invocacion a la interface de clsprofile
        this.clsprofile = {};
    }
    get nombrev() {
        return this.profileForm.get('nombrev');
    }
    get apellidov() {
        return this.profileForm.get('apellidov');
    }
    get telv() {
        return this.profileForm.get('telv');
    }
    get direccionv() {
        return this.profileForm.get('direccionv');
    }
    ngOnInit() {
        this.auth.isAuth().subscribe(user => {
            if (user) {
                this.iduser = user.uid;
            }
        });
        this.c = "assets/images/camera.png";
    }
    //carga de imagen en Firestorage
    onUpload(e) {
        //Obtencion de Usuario Logueado
        this.auth.isAuth().subscribe(user => {
            //Constante con el evento de imagen
            const file = e.target.files[0];
            const filePath = `Perfiles/profile_${user.uid}`;
            const ref = this.storage.ref(filePath);
            //Guarda la imagen en el Storage
            const task = this.storage.upload(filePath, file);
            //Porcentaje de subida de imagen
            this.uploadPercent = task.percentageChanges();
            task.snapshotChanges().pipe(finalize(() => this.urlImage = ref.getDownloadURL())).subscribe();
            task.then((uploadSnapshot) => {
                console.log("Imagen subida");
                const downloadURL = ref.getDownloadURL();
                downloadURL.subscribe(url => {
                    if (url) {
                        console.log(url);
                        this.image = url;
                        this.c = this.image;
                    }
                });
            });
        });
    }
    //Actualizacion de Perfil 
    updateProfile() {
        this.authF.authState.subscribe(auth => {
            this.db.collection('users').doc(auth.uid).update({ nombre: this.profileForm.value['nombrev'],
                apellido: this.profileForm.value['apellidov'],
                telefono: this.profileForm.value['telv'],
                direccion: this.profileForm.value['direccionv'],
                urlimage: this.image
            }).then(() => {
                this.auth.isAuth().subscribe(user => {
                    if (user) {
                        user.updateProfile({
                            displayName: this.profileForm.value['nombrev'] + " " + this.profileForm.value['apellidov'],
                            photoURL: this.image,
                        }).then(function () {
                            console.log('User Update');
                        }).catch(function (error) {
                            console.log('error', error);
                        });
                    }
                });
                this.router.navigate(['login']);
            }).catch(function (err) {
                console.log(err);
            });
        });
    }
    addPhoto(source) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (source) {
                case 'camera': {
                    console.log('camera');
                    const cameraPhoto = yield this.openCamera();
                    this.image = cameraPhoto;
                    console.log(this.image);
                    const fileURI = this.image;
                    let file;
                    if (this.platform.is('ios')) {
                        file = fileURI.split('/').pop();
                    }
                    else {
                        file = fileURI.substring(fileURI.lastIndexOf('/') + 1);
                        console.log(file);
                    }
                    const path = fileURI.substring(0, fileURI.lastIndexOf('/'));
                    console.log(path);
                    const buffer = yield this.file.readAsArrayBuffer(path, file);
                    const blob = new Blob([buffer], { type: 'image/jpeg' });
                    const id = this.iduser;
                    console.log(id);
                    this.imagePath = `Perfiles/profile_${id}` + '.jpg';
                    const ref = this.storage.ref(this.imagePath);
                    const task = ref.put(blob);
                    this.uploadPercent = task.percentageChanges();
                    task.snapshotChanges().pipe(finalize(() => this.urlImage = ref.getDownloadURL())).subscribe();
                    task.then((uploadSnapshot) => {
                        console.log("Imagen subida");
                        const downloadURL = ref.getDownloadURL();
                        downloadURL.subscribe(url => {
                            if (url) {
                                console.log(url);
                                this.image = url;
                                this.c = this.image;
                            }
                        });
                    });
                    break;
                }
                case 'library': {
                    console.log('library');
                    const libraryImage = yield this.openLibrary();
                    this.image = libraryImage;
                    console.log(this.image);
                    const fileURI = this.image;
                    let file;
                    if (this.platform.is('ios')) {
                        file = fileURI.split('/').pop();
                    }
                    else {
                        file = fileURI.substring(fileURI.lastIndexOf('/') + 1, fileURI.indexOf('?'));
                        console.log("aqui");
                        console.log(file);
                    }
                    const path = fileURI.substring(0, fileURI.lastIndexOf('/'));
                    console.log(path);
                    const buffer = yield this.file.readAsArrayBuffer(path, file);
                    const blob = new Blob([buffer], { type: 'image/jpeg' });
                    const id = this.iduser;
                    console.log(id);
                    this.imagePath = `Perfiles/profile_${id}` + '.jpg';
                    const ref = this.storage.ref(this.imagePath);
                    const task = ref.put(blob);
                    this.uploadPercent = task.percentageChanges();
                    task.snapshotChanges().pipe(finalize(() => this.urlImage = ref.getDownloadURL())).subscribe();
                    task.then((uploadSnapshot) => {
                        console.log("Imagen subida");
                        const downloadURL = ref.getDownloadURL();
                        downloadURL.subscribe(url => {
                            if (url) {
                                console.log(url);
                                this.image = url;
                                this.c = this.image;
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
                message: '<strong>Seleccione alguna opción:</strong>',
                buttons: [
                    {
                        text: 'Camara',
                        handler: () => {
                            console.log('Camara');
                            this.addPhoto('camera');
                        }
                    },
                    {
                        text: 'Galeria',
                        handler: () => {
                            console.log('Galería');
                            this.addPhoto('library');
                        }
                    },
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
RegistroPage = __decorate([
    Component({
        selector: 'app-registro',
        templateUrl: './registro.page.html',
        styleUrls: ['./registro.page.scss'],
    })
], RegistroPage);
export { RegistroPage };
//# sourceMappingURL=registro.page.js.map