import { Component, OnInit } from '@angular/core';
import { ComentarioserviceService } from 'src/app/services/comentarioservice.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ComentarioI } from 'src/app/models/comentarios.interface';
import { AlertController } from '@ionic/angular';
import { MensajeComentarioI } from 'src/app/models/mensajeComentario.interface';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.page.html',
  styleUrls: ['./comentario.page.scss'],
})
export class ComentarioPage implements OnInit {

  comentarioUsuario: string;
  calificacionUsuario: number;

  mensajeComentario: MensajeComentarioI ={
    content: ''
  }
  comentarioTs: ComentarioI = {
    id: '',
    idPropietarioComen: '',
    usuarios: {
      idUsuarioRenta: ''
    },
    nombre: '',
    apellido: '',
  };

  get comentarioa() {
    return this.comentarioForm.get('comentarioa');
  }

  get calificaciona() {
    return this.comentarioForm.get('calificaciona');
  }

  public errorMessages = {
    comentarioa: [
      { type: 'required', message: '*' },
      { type: 'pattern', message: 'Debe ingresar el comentario' }
    ],
    calificaciona: [
      { type: 'required', message: '*' },
      { type: 'pattern', message: 'Debe ingresar una calificacion' }
    ],
  }

  comentarioForm = this.formBuilder.group({
    comentarioa: ['', [Validators.required, Validators.minLength(5)]],
    calificaciona: ['', [Validators.required, Validators.maxLength(1)]]
  });

  constructor(private comentarioservice: ComentarioserviceService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    public alertController: AlertController,
    private router: Router ) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.comentarioservice.getComentario(id).subscribe(comentarioData => {
        this.comentarioTs = comentarioData;
      });
    }
  }

  async enviarComentario() {

    this.calificacionUsuario = this.comentarioForm.value['calificaciona'];

    if (this.calificacionUsuario < 1 || this.calificacionUsuario > 5) {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Incorrecto',
        message: 'Debe ingresar una calificaci??n entre 1 y 5',
        buttons: [
          {
            text: 'Entendido',
            cssClass: 'secondary',
            handler: (blah) => {
            }
          }
        ]
      });
  
      await alert.present();
    } else {
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

  }

  valor(valor) {
    console.log(valor);
  }

}