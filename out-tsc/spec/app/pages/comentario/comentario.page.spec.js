import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ComentarioPage } from './comentario.page';
describe('ComentarioPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ComentarioPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(ComentarioPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=comentario.page.spec.js.map