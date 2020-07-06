import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoNgrxComponent } from './no-ngrx.component';

describe('NoNgrxComponent', () => {
  let component: NoNgrxComponent;
  let fixture: ComponentFixture<NoNgrxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoNgrxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
