import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWorkWarrantComponent } from './new-work-warrant.component';

describe('NewWorkWarrantComponent', () => {
  let component: NewWorkWarrantComponent;
  let fixture: ComponentFixture<NewWorkWarrantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewWorkWarrantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewWorkWarrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
