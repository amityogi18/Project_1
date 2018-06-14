import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have talentNav porpery defined', () => {
    expect(component.talentNav).toBeDefined(true);
  });

  it('should have talenNav property equals to "#"', () => {
    expect(component.talentNav).toEqual('#');
  });

  it('should have talenNav property equals to "#/talentGrid"', () => {
    component.talentNav = '#/talentGrid';

    expect(component.talentNav).toEqual('#/talentGrid');
  });
});
