import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { map, take } from 'rxjs/operators';
let ArticuloService = class ArticuloService {
    constructor(afs) {
        this.afs = afs;
        this.articuloCollection = afs.collection('articulos');
        this.articulos = this.articuloCollection.snapshotChanges().pipe(map(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
    }
    getArticulos() {
        return this.articulos;
    }
    getArticulo(id) {
        return this.articuloCollection.doc(id).valueChanges().pipe(take(1), map(articulo => {
            articulo.id = id;
            return articulo;
        }));
    }
    getArticuloUsu(userId) {
        console.log(userId);
        return this.articuloCollection.doc(userId).valueChanges().pipe(take(1), map(articulo => {
            articulo.userId = userId;
            return articulo;
        }));
    }
    addArticulo(articulo) {
        return this.articuloCollection.add(articulo);
    }
    deleteArticulo(id) {
        return this.articuloCollection.doc(id).delete();
    }
    updateArticulo(titulore, id) {
        //si no funciona asi prueba con articulo.title, articulo.descripcion etc etc
        return this.articuloCollection.doc(id).update({ titulo: titulore }).then(() => {
            console.log("Actualizado");
        }).catch(function (err) {
            console.log(err);
        });
    }
    updateTitulo(id, titulor) {
        console.log(id);
        return this.articuloCollection.doc(id).update({ titulo: titulor });
    }
    updateDescripcion(descripcionR, id) {
        return this.articuloCollection.doc(id).update({ descripcion: descripcionR }).then(() => {
            console.log("Actualizado");
        }).catch(function (err) {
            console.log(err);
        });
    }
    updateTelefono(telefonoR, id) {
        return this.articuloCollection.doc(id).update({ telefono: telefonoR }).then(() => {
            console.log("Actualizado");
        }).catch(function (err) {
            console.log(err);
        });
    }
    updateCosto(costoR, id) {
        return this.articuloCollection.doc(id).update({ costo: costoR }).then(() => {
            console.log("Actualizado");
        }).catch(function (err) {
            console.log(err);
        });
    }
    updateImg(imgR, id) {
        return this.articuloCollection.doc(id).update({ img: imgR }).then(() => {
            console.log("actualizado");
        }).catch(function (err) {
            console.log(err);
        });
    }
    updateDisponible(estado, id) {
        return this.articuloCollection.doc(id).update({ disponible: estado }).then(() => {
            console.log("actualizado");
        }).catch(function (err) {
            console.log(err);
        });
    }
};
ArticuloService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ArticuloService);
export { ArticuloService };
//# sourceMappingURL=articulo.service.js.map