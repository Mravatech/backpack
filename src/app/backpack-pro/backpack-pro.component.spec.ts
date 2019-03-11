import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackpackProComponent } from './backpack-pro.component';

describe('BackpackProComponent', () => {
  let component: BackpackProComponent;
  let fixture: ComponentFixture<BackpackProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackpackProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackpackProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
