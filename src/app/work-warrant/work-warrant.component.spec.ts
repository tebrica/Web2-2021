import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkWarrantComponent } from './work-warrant.component';

describe('WorkWarrantComponent', () => {
  let component: WorkWarrantComponent;
  let fixture: ComponentFixture<WorkWarrantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkWarrantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkWarrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
