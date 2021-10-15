import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SlidesComponent } from './slides.component';
describe('SlidesComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SlidesComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(SlidesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=slides.component.spec.js.map