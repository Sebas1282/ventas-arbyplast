import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexComponentDistribuidor } from './index.component';

describe('IndexComponent', () => {
  let component: IndexComponentDistribuidor;
  let fixture: ComponentFixture<IndexComponentDistribuidor>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexComponentDistribuidor]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComponentDistribuidor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
