import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { firestore } from 'firebase';
import { HttpHeaders } from '@angular/common/http';
let ReadchatsService = class ReadchatsService {
    constructor(http, db, Authservicies) {
        this.http = http;
        this.db = db;
        this.Authservicies = Authservicies;
        this.chats = [];
    }
    //funciones
    //obtener chats
    getChats() {
        this.Authservicies.isAuth().subscribe(user => {
            if (user) {
                this.uid = user.uid;
            }
        });
        return this.db.collection('chats').snapshotChanges().pipe(map(rooms => {
            return rooms.map(a => {
                const data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        }));
    }
    //obtener token de usuarios dentro de chat
    obtenertoken(idchat) {
        this.db.collection("chats").doc(idchat).snapshotChanges().subscribe(mens => {
            const data2 = mens.payload.data();
            var usere = data2.users.userr;
            var userpe = data2.users.uidp;
            if (this.uid == usere) {
                this.usuarioen = userpe;
            }
            else {
                if (this.uid == userpe) {
                    this.usuarioen = usere;
                }
            }
            this.obtenertokenUsu(this.usuarioen);
        });
    }
    //token de usuario para envio de notificacion
    obtenertokenUsu(idusuario) {
        this.db.collection("users").doc(idusuario).snapshotChanges().subscribe(usu => {
            const data3 = usu.payload.data();
            var token = data3.token;
            this.token = token;
        });
    }
    //obtencion de chats individualmente
    getChatRoom(idchat) {
        console.log(idchat);
        var id = idchat;
        this.obtenertoken(id);
        return this.db.collection('chats').doc(idchat).valueChanges();
    }
    //envio de mensaje y notificacion a usuarios
    sendsmsFire(mensaje, idchat, enviado) {
        this.db.collection('chats').doc(idchat).update({
            mensajes: firestore.FieldValue.arrayUnion(mensaje),
        });
        var sms = mensaje.textosms;
        var nombre = mensaje.nombre;
        console.log(enviado);
        this.sendNotifi(sms, nombre, enviado);
    }
    //envio de notificaciones con la utilizacion de api FCM y metodo post.
    sendNotifi(sms, nombre, enviado) {
        console.log("entro a la funcion" + sms + nombre + this.token);
        let options = { headers: new HttpHeaders({ 'Authorization': 'key=AAAAkptO3BA:APA91bFn2799tCDyL7TXPwMUaPeFo5p2_WyL49jyUbmj3WZb-DwIhhvnNClL6DLgeo769XsosUs9lXqDj2pWjqtP3pATpCWqVifywm7Tu6hazA0A-0f0RflQ9juUcERpHrz-Gqnv_oxM',
                'Content-Type': 'application/json' }) };
        //estructura de notificacion.
        let notification = {
            "notification": {
                "title": enviado,
                "body": "[De: " + nombre + "]: \n " + sms,
                "click_action": "FCM_PLUGIN_ACTIVITY",
                "sound": "default",
                "icon": "ic_launcher"
            }, "data": {},
            "to": this.token
        };
        let url = 'https://fcm.googleapis.com/fcm/send';
        this.http.post(url, notification, options).subscribe(data => {
            console.log('enviado');
        }, error => {
            console.log('error saving token', error);
        });
    }
    enviarNotificacionRenta(idusuariotoken, titulo) {
        console.log(idusuariotoken);
        this.db.collection("users").doc(idusuariotoken).snapshotChanges().subscribe(usu => {
            const data3 = usu.payload.data();
            var tokennn = data3.token;
            var nombre = data3.nombre + " " + data3.apellido;
            this.tokenn = tokennn;
            this.usuarioArticulo = nombre;
            console.log(this.tokenn);
            console.log(this.usuarioArticulo);
            this.sendnotificacionRenta(titulo, this.usuarioArticulo);
        });
    }
    sendnotificacionRenta(titulo, nombre) {
        console.log("entro a la funcion" + titulo + nombre + this.tokenn);
        let options = { headers: new HttpHeaders({ 'Authorization': 'key=AAAAkptO3BA:APA91bFn2799tCDyL7TXPwMUaPeFo5p2_WyL49jyUbmj3WZb-DwIhhvnNClL6DLgeo769XsosUs9lXqDj2pWjqtP3pATpCWqVifywm7Tu6hazA0A-0f0RflQ9juUcERpHrz-Gqnv_oxM',
                'Content-Type': 'application/json' }) };
        //estructura de notificacion.
        let notification = {
            "notification": {
                "title": titulo,
                "body": "Rentaron tu artículo",
                "click_action": "FCM_PLUGIN_ACTIVITY",
                "sound": "default",
                "icon": "ic_launcher"
            }, "data": {},
            "to": this.tokenn
        };
        let url = 'https://fcm.googleapis.com/fcm/send';
        this.http.post(url, notification, options).subscribe(data => {
            console.log('enviado');
        }, error => {
            console.log('error saving token', error);
        });
    }
};
ReadchatsService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ReadchatsService);
export { ReadchatsService };
//# sourceMappingURL=readchats.service.js.map