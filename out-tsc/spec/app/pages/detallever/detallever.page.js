import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DetalleverPage = class DetalleverPage {
    constructor(activatedRoute, articuloService, auth, chatservice, comentarioservice, router) {
        this.activatedRoute = activatedRoute;
        this.articuloService = articuloService;
        this.auth = auth;
        this.chatservice = chatservice;
        this.comentarioservice = comentarioservice;
        this.router = router;
        this.chatsR = [];
        this.c = [];
        this.comentariosUsuarios = [];
        this.comenartuid = [];
        this.comentauid = [];
        this.usuarioData = [];
        this.usuarioData2 = [];
        this.comen2 = [];
        this.usuariosComentario = {
            idUsuarioRenta: ''
        };
        this.comentario = {
            idPropietarioComen: '',
            usuarios: {
                idUsuarioRenta: ''
            },
            nombre: '',
            apellido: ''
        };
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
        this.auth.isAuth().subscribe(user => {
            if (user) {
                this.idu = user.uid;
            }
        });
        this.cargarComentarios();
    }
    ngAfterViewInit() {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        if (id) {
            this.articuloService.getArticulo(id).subscribe(articuloData => {
                this.articulo = articuloData;
            });
        }
    }
    cargarComentarios() {
        this.comentarioservice.getComentarios2().subscribe(res => {
            this.comentariosUsuarios = res;
        });
    }
    registrarComentario() {
        this.verificarComentario(this.articulo.titulo, this.articulo.img);
        alert("Ahora puedes Calificar el servicio.");
        this.chatservice.enviarNotificacionRenta(this.articulo.userId, this.articulo.titulo);
    }
    verificarComentario(titulo, img) {
        var usu1 = false;
        var usu2 = false;
        this.comentarioservice.getComen().subscribe(comentarios => {
            var contador = 0;
            var contador2 = 0;
            var contador3 = 0;
            console.log(this.comentariosUsuarios);
            for (let i = 0; i < this.comentariosUsuarios.length; i++) {
                if (this.comentariosUsuarios[i].idPropietarioComen == this.articulo.userId) {
                    this.comenartuid[contador2] = this.comentariosUsuarios[i];
                    usu1 = true;
                    contador2++;
                }
                if (this.comentariosUsuarios[i].idPropietarioComen == this.idu) {
                    this.comentauid[contador3] = this.comentariosUsuarios[i];
                    usu2 = true;
                    contador3++;
                }
            }
            contador = 0;
            contador2 = 0;
            contador3 = 0;
            this.agregarDocumentoArticulo(usu1, usu2);
            usu1 = false;
            usu2 = false;
        });
    }
    agregarDocumentoArticulo(usu1, usu2) {
        if (usu1 == false) {
            console.log("no existe objeto se va ha crear usu1");
            var uidarticuloUsu = this.articulo.userId;
            this.auth.obtenerDatos(uidarticuloUsu).subscribe(usa => {
                if (usa) {
                    const data = usa.data();
                    this.usuarioData[0] = data;
                    this.comentario.nombre = this.usuarioData[0].nombre;
                    this.comentario.apellido = this.usuarioData[0].apellido;
                    this.comentario.idPropietarioComen = this.articulo.userId;
                    this.comentario.usuarios = { idUsuarioRenta: this.idu };
                    this.comentarioservice.agregarComen(this.comentario.nombre, this.comentario.apellido, this.comentario.idPropietarioComen, this.comentario.usuarios.idUsuarioRenta);
                    uidarticuloUsu = "";
                }
            });
        }
        else {
            if (usu1 == true) {
                console.log("existe1");
                this.usuariosComentario.idUsuarioRenta == this.idu;
                this.comentarioservice.addUsers(this.idu, this.comenartuid[0].id);
            }
        }
        if (usu2 == false) {
            console.log("no existe objeto se va ha crear usu2");
            var articulousuaLo = this.idu;
            this.auth.obtenerDatos(articulousuaLo).subscribe(usa => {
                if (usa) {
                    const data2 = usa.data();
                    this.usuarioData2[0] = data2;
                    this.comentario.nombre = this.usuarioData2[0].nombre;
                    this.comentario.apellido = this.usuarioData2[0].apellido;
                    this.comentario.idPropietarioComen = this.idu;
                    this.comentario.usuarios = { idUsuarioRenta: this.articulo.userId };
                    this.comentarioservice.agregarComen(this.comentario.nombre, this.comentario.apellido, this.comentario.idPropietarioComen, this.comentario.usuarios.idUsuarioRenta);
                    articulousuaLo = "";
                }
            });
        }
        else {
            if (usu2 == true) {
                console.log("existe 2");
                this.usuariosComentario.idUsuarioRenta == this.articulo.userId;
                this.comentarioservice.addUsers(this.articulo.userId, this.comentauid[0].id);
            }
        }
    }
    registrarChat() {
        this.obtenerChat(this.articulo.titulo, this.articulo.descripcion, this.articulo.img);
    }
    obtenerChat(nombre, detalle, img) {
        this.chatservice.getChats().subscribe(chats => {
            this.auth.isAuth().subscribe(user => {
                this.user = user.uid;
                this.nombreu = user.displayName;
                var contador = 0;
                this.chatsR = [];
                for (let i = 0; i < chats.length; i++) {
                    if (chats[i].users.uidp == user.uid || chats[i].users.userr == user.uid) {
                        this.chatsR[contador] = chats[i];
                        contador++;
                    }
                }
                this.c = [];
                var con = 0;
                for (let i = 0; i < this.chatsR.length; i++) {
                    if (this.chatsR[i].nombre == nombre && this.chatsR[i].img == img) {
                        this.c[con] = this.chatsR[i];
                        con++;
                    }
                }
                if (this.c.length == 0) {
                    if (this.articulo.userId == this.user) {
                        alert("Articulo de su propiedad no puede contactarse a usted mismo");
                        this.regresar();
                    }
                    else {
                        this.auth.registrarChat(this.articulo.titulo, this.articulo.descripcion, this.articulo.img, this.articulo.userId, this.nombreu);
                        this.router.navigate(['home/chatgeneral']);
                    }
                }
                else {
                    this.router.navigate(['home/chatgeneral']);
                }
            });
        });
    }
    regresar() {
        this.router.navigate(['home/articulos']);
    }
    navigatePerfil(id) {
        this.router.navigate(['home/showprofile/' + id]);
    }
};
DetalleverPage = __decorate([
    Component({
        selector: 'app-detallever',
        templateUrl: './detallever.page.html',
        styleUrls: ['./detallever.page.scss'],
    })
], DetalleverPage);
export { DetalleverPage };
//# sourceMappingURL=detallever.page.js.map