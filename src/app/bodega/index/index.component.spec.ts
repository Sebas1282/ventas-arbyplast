import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexComponentBodega} from './index.component';

describe('IndexComponent', () => {
  let component: IndexComponentBodega;
  let fixture: ComponentFixture<IndexComponentBodega>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexComponentBodega ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComponentBodega);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
