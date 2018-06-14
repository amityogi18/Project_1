import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinusButtonComponent } from './minus-button.component';

describe('MinusButtonComponent', () => {
  let component: MinusButtonComponent;
  let fixture: ComponentFixture<MinusButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinusButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinusButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
