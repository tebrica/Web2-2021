import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorbaComponent } from './torba.component';

describe('TorbaComponent', () => {
  let component: TorbaComponent;
  let fixture: ComponentFixture<TorbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TorbaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TorbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
