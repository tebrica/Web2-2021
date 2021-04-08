import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvaCovekaComponent } from './dva-coveka.component';

describe('DvaCovekaComponent', () => {
  let component: DvaCovekaComponent;
  let fixture: ComponentFixture<DvaCovekaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DvaCovekaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DvaCovekaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
