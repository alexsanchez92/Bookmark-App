import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkTableNgrxComponent } from './bookmark-table-ngrx.component';

describe('BookmarkTableNgrxComponent', () => {
  let component: BookmarkTableNgrxComponent;
  let fixture: ComponentFixture<BookmarkTableNgrxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarkTableNgrxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkTableNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
