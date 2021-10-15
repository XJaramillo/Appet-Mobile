import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { MorebtnComponent } from 'src/app/components/morebtn/morebtn.component';
import { Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
let NuevoarticuloPage = class NuevoarticuloPage {
    constructor(router, popoverctrl, articuloService, afSG, camera, platform, file, auth, alertController, formBuilder, toastController) {
        this.router = router;
        this.popoverctrl = popoverctrl;
        this.articuloService = articuloService;
        this.afSG = afSG;
        this.camera = camera;
        this.platform = platform;
        this.file = file;
        this.auth = auth;
        this.alertController = alertController;
        this.formBuilder = formBuilder;
        this.toastController = toastController;
        this.fotos = [];
        this.darkMode = true;
        this.articulo = {
            titulo: '',
            descripcion: '',
            img: '',
            telefono: '',
            costo: '',
            userId: '',
            disponible: true,
            fecha: '',
        };
        this.articuloId = null;
        this.errorMessages = {
            tituloa: [
                { type: 'required', message: '*' },
                { type: 'pattern', message: 'Debe ingresar el titulo del servicio' }
            ],
            descripciona: [
                { type: 'required', message: '*' },
                { type: 'pattern', message: 'Ingrese una descripción para el servicio' }
            ],
            telefonoa: [
                { type: 'pattern', message: 'Número incorrecto, por favor verifique el número' }
            ],
            costoa: [
                { type: 'pattern', message: 'Debe ingresar el costo del servicio' }
            ]
        };
        this.articuloForm = this.formBuilder.group({
            tituloa: ['', [Validators.required, Validators.minLength(2)]],
            descripciona: ['', [Validators.required, Validators.minLength(2)]],
            telefonoa: ['', Validators.pattern("^((\\+593-?)|0)?[0-9]{9}$")],
            costoa: ['', [Validators.required, Validators.minLength(1)]]
        });
    }
    //variables para el form de articulo
    get tituloa() {
        return this.articuloForm.get('tituloa');
    }
    get descripciona() {
        return this.articuloForm.get('descripciona');
    }
    get descrtelefonoaipciona() {
        return this.articuloForm.get('telefonoa');
    }
    get costoa() {
        return this.articuloForm.get('telefonoa');
    }
    ngOnInit() {
        this.auth.isAuth().subscribe(user => {
            if (user) {
                this.idu = user.uid;
                this.articulo.userId = this.idu;
            }
        });
        this.fechaAr = new Date();
        this.articulo = {
            titulo: '',
            descripcion: '',
            img: '',
            telefono: '',
            costo: '',
            userId: '',
            disponible: true,
            fecha: this.fechaAr
        };
        this.foto = "assets/images/camera.png";
        this.habilitar = false;
    }
    //se crea un nuevo articulo en la base de datos con todos los campos de la interfaz
    nuevo() {
        this.articulo.titulo = this.articuloForm.value['tituloa'];
        this.articulo.descripcion = this.articuloForm.value['descripciona'];
        this.articulo.telefono = '0' + this.articuloForm.value['telefonoa'];
        this.articulo.costo = this.articuloForm.value['costoa'];
        this.articulo.img = this.image;
        console.log(this.articulo);
        this.articuloService.addArticulo(this.articulo).then(() => {
            this.router.navigate(['/home/nuevoarticulo']);
            this.confirmacionArticulo();
            this.cancelar();
        }, err => {
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
                    const id = Math.random().toString(36).substring(2);
                    this.imagePath = `Articulos/articulo_${id}` + '.jpg';
                    const ref = this.afSG.ref(this.imagePath);
                    const task = ref.put(blob);
                    this.uploadPercent = task.percentageChanges();
                    task.snapshotChanges().pipe(finalize(() => this.downloadUrl = ref.getDownloadURL())).subscribe();
                    task.then((uploadSnapshot) => {
                        console.log("Imagen subida");
                        const downloadURL = ref.getDownloadURL();
                        downloadURL.subscribe(url => {
                            if (url) {
                                this.image = url;
                                this.foto = this.image;
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
                    const id = Math.random().toString(36).substring(2);
                    this.imagePath = `Articulos/articulo_${id}` + '.jpg';
                    const ref = this.afSG.ref(this.imagePath);
                    const task = ref.put(blob);
                    this.uploadPercent = task.percentageChanges();
                    task.snapshotChanges().pipe(finalize(() => this.downloadUrl = ref.getDownloadURL())).subscribe();
                    task.then((uploadSnapshot) => {
                        console.log("Imagen subida");
                        const downloadURL = ref.getDownloadURL();
                        downloadURL.subscribe(url => {
                            if (url) {
                                this.image = url;
                                this.foto = this.image;
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
                message: '<strong>Seleccione:</strong>!!!',
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
                            console.log('Galeria');
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
    //alerta de mensajes
    confirmacionArticulo() {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                color: 'dark',
                message: 'Artículo creado con exito!',
                duration: 3000
            });
            toast.present();
        });
    }
    //boton para cancelar todo
    cancelar() {
        this.articuloForm.reset();
        this.foto = "assets/images/camera.png";
        //this.articulo.img = "assets/images/camera.png";
        //this.habilitar = false;
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
    idUser() {
    }
};
NuevoarticuloPage = __decorate([
    Component({
        selector: 'app-nuevoarticulo',
        templateUrl: './nuevoarticulo.page.html',
        styleUrls: ['./nuevoarticulo.page.scss'],
    })
], NuevoarticuloPage);
export { NuevoarticuloPage };
//# sourceMappingURL=nuevoarticulo.page.js.map