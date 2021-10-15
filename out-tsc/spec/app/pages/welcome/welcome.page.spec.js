import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { WelcomePage } from './welcome.page';
describe('WelcomePage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WelcomePage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(WelcomePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=welcome.page.spec.js.map