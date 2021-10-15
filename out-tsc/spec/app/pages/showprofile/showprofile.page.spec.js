import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ShowprofilePage } from './showprofile.page';
describe('ShowprofilePage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ShowprofilePage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(ShowprofilePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=showprofile.page.spec.js.map