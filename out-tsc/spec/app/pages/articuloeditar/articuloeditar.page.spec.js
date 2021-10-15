import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ArticuloeditarPage } from './articuloeditar.page';
describe('ArticuloeditarPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ArticuloeditarPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(ArticuloeditarPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=articuloeditar.page.spec.js.map