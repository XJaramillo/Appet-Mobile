import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { DetallearticuloPage } from './detallearticulo.page';
describe('DetallearticuloPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DetallearticuloPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(DetallearticuloPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=detallearticulo.page.spec.js.map