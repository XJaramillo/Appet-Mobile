import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { firestore } from 'firebase';
let ComentarioserviceService = class ComentarioserviceService {
    constructor(afs) {
        this.afs = afs;
        this.comentarioCollection = afs.collection('comentarios');
        this.comentarios = this.comentarioCollection.snapshotChanges().pipe(map(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
    }
    getComentarioss() {
        return this.afs.collection('comentarios').snapshotChanges().pipe(map(rooms => {
            return rooms.map(a => {
                const data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        }));
    }
    getComentarios() {
        return this.comentarios;
    }
    getComentario(id) {
        return this.comentarioCollection.doc(id).valueChanges().pipe(take(1), map(comenta => {
            comenta.id = id;
            return comenta;
        }));
    }
    getComentarios2() {
        return this.comentarioCollection.snapshotChanges().pipe(map(rooms => {
            return rooms.map(a => {
                const data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        }));
    }
    getComentarioRoom(idComentario) {
        return this.comentarioCollection.doc(idComentario).valueChanges();
    }
    addComentario(comentario) {
        return this.comentarioCollection.add(comentario);
    }
    guadarComentario(comentario, idComentario) {
        this.afs.collection('comentarios').doc(idComentario).update({
            comentariosUsuarios: firestore.FieldValue.arrayUnion(comentario),
        });
    }
    guadarCalificacion(calificacion, idComentario) {
        this.afs.collection('comentarios').doc(idComentario).update({
            calificacionUsuarios: firestore.FieldValue.arrayUnion(calificacion),
        });
    }
    addUsers(usuarioId, idComentario) {
        this.afs.collection('comentarios').doc(idComentario).update({
            usuarios: firestore.FieldValue.arrayUnion(usuarioId),
        });
    }
    getComen() {
        return this.afs.collection('comentarios').get();
    }
    agregarComen(nombre, apellido, idPropietarioComen, uid) {
        console.log("uno");
        this.afs.collection('comentarios').add({ nombre: nombre,
            apellido: apellido,
            idPropietarioComen: idPropietarioComen,
            usuarios: firestore.FieldValue.arrayUnion(uid)
        });
    }
    buscarComentariosUsu(uid) {
        return this.afs.collection('comentarios', ref => ref.where('usuarios', 'array-contains', uid));
    }
};
ComentarioserviceService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ComentarioserviceService);
export { ComentarioserviceService };
//# sourceMappingURL=comentarioservice.service.js.map