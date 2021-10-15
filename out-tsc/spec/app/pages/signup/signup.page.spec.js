import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SignupPage } from './signup.page';
describe('SignupPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SignupPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(SignupPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=signup.page.spec.js.map