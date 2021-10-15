import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { DetalleverPage } from './detallever.page';
describe('DetalleverPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DetalleverPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(DetalleverPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=detallever.page.spec.js.map