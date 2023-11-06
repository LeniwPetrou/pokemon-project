import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandedElementComponent } from './expanded-element.component';

describe('ExpandedElementComponent', () => {
  let component: ExpandedElementComponent;
  let fixture: ComponentFixture<ExpandedElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpandedElementComponent]
    });
    fixture = TestBed.createComponent(ExpandedElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
