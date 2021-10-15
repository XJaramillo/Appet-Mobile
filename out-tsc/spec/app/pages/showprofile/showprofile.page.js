import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ShowprofilePage = class ShowprofilePage {
    constructor(articuloService, activatedRoute, router, auth, comentarioService) {
        this.articuloService = articuloService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.auth = auth;
        this.comentarioService = comentarioService;
        this.usersR = [];
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
        /*
        
        this.comentarioService.getComentarioRoom(id).subscribe(room=>{
          console.log(room);
          this.room = room;
        });
        */
    }
    ngAfterViewInit() {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        if (id) {
            this.articuloService.getArticulo(id).subscribe(articuloData => {
                this.articulo = articuloData;
                //console.log(this.articulo.userId);
                this.datosUsuario(this.articulo.userId);
                this.cargarCalificaciones(this.articulo.userId);
            });
        }
    }
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
    datosUsuario(id) {
        this.auth.obtenernombreUsuario(id).subscribe(usa => {
            const data2 = usa.payload.data();
            this.usersR[0] = data2;
            //console.log(this.usersR);
        });
    }
    navigateArticulo() {
        this.router.navigate(['home/detallever/' + this.articulo.id]);
    }
};
ShowprofilePage = __decorate([
    Component({
        selector: 'app-showprofile',
        templateUrl: './showprofile.page.html',
        styleUrls: ['./showprofile.page.scss'],
    })
], ShowprofilePage);
export { ShowprofilePage };
//# sourceMappingURL=showprofile.page.js.map