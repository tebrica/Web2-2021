import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNewincidentComponent } from './sidebar-newincident.component';

describe('SidebarNewincidentComponent', () => {
  let component: SidebarNewincidentComponent;
  let fixture: ComponentFixture<SidebarNewincidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarNewincidentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarNewincidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
