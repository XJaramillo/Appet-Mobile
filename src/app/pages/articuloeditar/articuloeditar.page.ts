import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticuloService } from 'src/app/services/articulo.service';
import { TaskI } from 'src/app/models/task.interface';
import { Observable } from 'rxjs/internal/Observable';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, Validators } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { finalize } from 'rxjs/operators';
import { Platform, ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-articuloeditar',
  templateUrl: './articuloeditar.page.html',
  styleUrls: ['./articuloeditar.page.scss'],
})
export class ArticuloeditarPage implements OnInit {

  imagePath: string;
  upload: any;
  captureDataUrl: string;
  habilitar: Boolean;
  disponible: boolean;

  //variables utilizadas en la imgen
  uploadPercent: Observable<number>;
  downloadUrl: Observable<string>;
  public image: string;
  public foto: string;
  public imgtemporal: string;
  public articuloR: any = [];


  articulo: TaskI = {
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

  constructor(private activatedRoute: ActivatedRoute, 
    private articuloService: ArticuloService, 
    private router: Router,
    public afSG: AngularFireStorage,
    private camera: Camera,
    private platform: Platform,
    private file: File,
    public toastController: ToastController,
    public alertController: AlertController
    ) { }

  ngOnInit() {

    this.obtenerArticulo();
    
  }

  obtenerArticulo(){
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.articuloService.getArticulo(id).subscribe(articuloData =>{
        this.articulo = articuloData;
        console.log(this.articulo);
        this.disponible = this.articulo.disponible;
      });
    }

  }



  //alertas para cada campo del artiuclo
  async editarTitulo(){

    const alerta = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'T??tulo',
      message: '??Est?? seguro de cambiar el t??tulo del servicio?',
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
          text: 'Si',
          handler: (data) => {
            //Validacion datos de usuario no esten vacios
            if(data.titulo!=""){
              console.log(data.titulo);
              this.articuloService.updateArticulo(data.titulo, this.articulo.id);
              this.obtenerArticulo();
            }else{
              alert('Ingrese el t??tulo');
              return false;
            }
            
          }
        }
      ]
    });

    await alerta.present();

  }

  async editarDescripcion(){

    const alerta = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Descripci??n',
      message: '??Est?? seguro de cambiar la descripci??n del servicio?',
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
          text: 'Si',
          handler: (data) => {
            //Validacion datos de usuario no esten vacios
            if(data.descripcion!=""){
              console.log(data.descripcion);
              this.articuloService.updateDescripcion(data.descripcion, this.articulo.id);
              this.obtenerArticulo();
            }else{
              alert('Ingrese una descripci??n');
              return false;
            }
            
          }
        }
      ]
    });

    await alerta.present();
  }

  async editarTelefono(){
    const alerta = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Tel??fono',
      message: '??Est?? seguro de cambiar el tel??fono de contacto?',
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
            if(data.telefono!=""){
              console.log(data.telefono);
              this.articuloService.updateTelefono(data.telefono, this.articulo.id);
              this.obtenerArticulo();
            }else{
              alert('Ingrese n??mero de telefono');
              return false;
            }
            
          }
        }
      ]
    });

    await alerta.present();
  }

  async editarCosto(){
    const alerta = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Precio',
      message: '??Est?? seguro de cambiar el precio del servicio?',
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
          text: 'Si',
          handler: (data) => {
            //Validacion datos de usuario no esten vacios
            if(data.costo!=""){
              console.log(data.costo);
              this.articuloService.updateCosto(data.costo, this.articulo.id);
              this.obtenerArticulo();
            }else{
              alert('Ingrese precio');
              return false;
            }
            
          }
        }
      ]
    });

    await alerta.present();
  }


  async presentAlertCamera() {
    const alert = await this.alertController.create({
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

    await alert.present();
  }

  //metodo para tomar foto o subir desde galeria
  async addPhoto(source: string) {

    switch (source) {
      case 'camera': {
        const cameraPhoto = await this.openCamera();
        this.image = cameraPhoto;
        const fileURI = this.image;
        let file: string;

        if (this.platform.is('ios')) {
          file = fileURI.split('/').pop();
        } else {
          file = fileURI.substring(fileURI.lastIndexOf('/') + 1);
        }
        const path: string = fileURI.substring(0, fileURI.lastIndexOf('/'));

        const buffer: ArrayBuffer = await this.file.readAsArrayBuffer(path, file);
        const blob: Blob = new Blob([buffer], { type: 'image/jpeg' });

        const id = Math.random().toString(36).substring(2);
        this.imagePath = `Articulos/articulo_${id}` + '.jpg';

        const ref = this.afSG.ref(this.imagePath);
        const task = ref.put(blob);

        this.uploadPercent = task.percentageChanges();
        task.snapshotChanges().pipe(
          finalize(() => this.downloadUrl = ref.getDownloadURL())
        ).subscribe();

        task.then((uploadSnapshot: firebase.storage.UploadTaskSnapshot)=>{
          const downloadURL = ref.getDownloadURL();
          downloadURL.subscribe(url=>{
            if(url){
              this.image = url;
              this.foto=this.image;
              this.articuloService.updateImg(this.image, this.articulo.id);
              this.obtenerArticulo();
            }
          });
        });

        break;
      }
      case 'library': {
        
        const libraryImage = await this.openLibrary();
        this.image = libraryImage;

        const fileURI = this.image;
        let file: string;

        if (this.platform.is('ios')) {
          file = fileURI.split('/').pop();
        } else {
          file = fileURI.substring(fileURI.lastIndexOf('/') + 1, fileURI.indexOf('?'));
        }

        const path: string = fileURI.substring(0, fileURI.lastIndexOf('/'));

        const buffer: ArrayBuffer = await this.file.readAsArrayBuffer(path, file);
        const blob: Blob = new Blob([buffer], { type: 'image/jpeg' });

        const id = Math.random().toString(36).substring(2);
        this.imagePath = `Articulos/articulo_${id}` + '.jpg';

        const ref = this.afSG.ref(this.imagePath);
        const task = ref.put(blob);

        this.uploadPercent = task.percentageChanges();
        task.snapshotChanges().pipe(
          finalize(() => this.downloadUrl = ref.getDownloadURL())
        ).subscribe();

        task.then((uploadSnapshot: firebase.storage.UploadTaskSnapshot)=>{
       
          const downloadURL = ref.getDownloadURL();
          downloadURL.subscribe(url=>{
            if(url){
              
              this.image = url;
              this.foto=this.image;
              this.articuloService.updateImg(this.image, this.articulo.id);
              this.obtenerArticulo();
            }
          });
        });

        break;
      }
    }
  }
  
  //funciones para abrir galeria
  async openLibrary() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 1000,
      targetHeight: 1000,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };
    return await this.camera.getPicture(options);
  }

  //funcion para abrir la camara
  async openCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 1000,
      targetHeight: 1000,
      sourceType: this.camera.PictureSourceType.CAMERA
    };
    return await this.camera.getPicture(options);
  }

  //alerta de mensajes
  async confirmacionArticuloEditar(){
    const toast = await this.toastController.create({
      color: 'dark',
      message: 'Cambios guardados con ??xito',
      duration: 3000
    });
    toast.present();
  }
}
