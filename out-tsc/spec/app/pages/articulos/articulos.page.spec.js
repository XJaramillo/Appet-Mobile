import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ArticulosPage } from './articulos.page';
describe('ArticulosPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ArticulosPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(ArticulosPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=articulos.page.spec.js.map