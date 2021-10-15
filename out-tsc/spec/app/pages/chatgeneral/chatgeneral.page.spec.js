import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ChatgeneralPage } from './chatgeneral.page';
describe('ChatgeneralPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ChatgeneralPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(ChatgeneralPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=chatgeneral.page.spec.js.map