import { TestBed } from '@angular/core/testing';
import { ReadchatsService } from './readchats.service';
describe('ReadchatsService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ReadchatsService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=readchats.service.spec.js.map