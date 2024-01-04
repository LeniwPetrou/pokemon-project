import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableScrollingViewportComponent } from './table-scrolling-viewport.component';

describe('TableScrollingViewportComponent', () => {
  let component: TableScrollingViewportComponent;
  let fixture: ComponentFixture<TableScrollingViewportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableScrollingViewportComponent]
    });
    fixture = TestBed.createComponent(TableScrollingViewportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
