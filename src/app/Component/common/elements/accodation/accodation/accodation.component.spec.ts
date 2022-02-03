import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccodationComponent } from './accodation.component';

describe('AccodationComponent', () => {
  let component: AccodationComponent;
  let fixture: ComponentFixture<AccodationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccodationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
