import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ChatComponent = class ChatComponent {
    constructor(navparame, modal, chatService, AuthService, AngularFire) {
        this.navparame = navparame;
        this.modal = modal;
        this.chatService = chatService;
        this.AuthService = AuthService;
        this.AngularFire = AngularFire;
        this.usuarios = [];
    }
    ngOnInit() {
        this.chats = this.navparame.get('chat');
        this.obtenerUu();
        this.obtenerSMS(this.chats.id);
    }
    obtenerSMS(id) {
        this.chatService.getChatRoom(id).subscribe(room => {
            this.room = room;
        });
    }
    obtenerUu() {
        this.AngularFire.authState.subscribe(user => {
            if (user) {
                this.AuthService.obtenernombreUsuario(user.uid).subscribe(usa => {
                    const data2 = usa.payload.data();
                    this.nombre = data2.nombre;
                });
            }
        });
    }
    cerrarChat() {
        this.modal.dismiss();
    }
    enviarsms() {
        const mensaje = {
            nombre: this.nombre,
            textosms: this.mens,
            type: 'text',
            date: new Date()
        };
        var enviado = this.chats.nombre + " ( " + this.chats.creado + " )";
        this.chatService.sendsmsFire(mensaje, this.chats.id, enviado);
        this.mens = "";
    }
};
ChatComponent = __decorate([
    Component({
        selector: 'app-chat',
        templateUrl: './chat.component.html',
        styleUrls: ['./chat.component.scss'],
    })
], ChatComponent);
export { ChatComponent };
//# sourceMappingURL=chat.component.js.map