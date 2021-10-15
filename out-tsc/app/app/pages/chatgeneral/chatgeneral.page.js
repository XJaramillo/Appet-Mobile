import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { MorebtnComponent } from 'src/app/components/morebtn/morebtn.component';
import { ChatComponent } from 'src/app/components/chat/chat.component';
let ChatgeneralPage = class ChatgeneralPage {
    constructor(popoverctrl, Authservice, chatservice, modal) {
        this.popoverctrl = popoverctrl;
        this.Authservice = Authservice;
        this.chatservice = chatservice;
        this.modal = modal;
        this.chatsR = [];
        this.textoBuscar = '';
    }
    ngOnInit() {
        this.obtenerChat();
    }
    obtenerChat() {
        this.chatservice.getChats().subscribe(chats => {
            this.Authservice.isAuth().subscribe(user => {
                if (user) {
                    this.chatsR = [];
                    var cont = 0;
                    for (let i = 0; i < chats.length; i++) {
                        if (chats[i].users.uidp == user.uid || chats[i].users.userr == user.uid) {
                            this.chatsR[cont] = chats[i];
                            cont++;
                        }
                    }
                }
            });
        });
    }
    //funcion popover 
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
    openchat(chat) {
        this.modal.create({
            component: ChatComponent,
            componentProps: {
                chat: chat
            }
        }).then((modal) => modal.present());
    }
    buscar(event) {
        this.textoBuscar = event.detail.value;
        console.log(event);
        console.log(this.textoBuscar);
    }
};
ChatgeneralPage = __decorate([
    Component({
        selector: 'app-chatgeneral',
        templateUrl: './chatgeneral.page.html',
        styleUrls: ['./chatgeneral.page.scss'],
    })
], ChatgeneralPage);
export { ChatgeneralPage };
//# sourceMappingURL=chatgeneral.page.js.map