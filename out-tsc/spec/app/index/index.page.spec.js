import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { IndexPage } from './index.page';
describe('IndexPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IndexPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(IndexPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=index.page.spec.js.map