import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RentadosPage } from './rentados.page';
describe('RentadosPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RentadosPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(RentadosPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=rentados.page.spec.js.map