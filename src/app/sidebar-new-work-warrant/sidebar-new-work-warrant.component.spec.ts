import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNewWorkWarrantComponent } from './sidebar-new-work-warrant.component';

describe('SidebarNewWorkWarrantComponent', () => {
  let component: SidebarNewWorkWarrantComponent;
  let fixture: ComponentFixture<SidebarNewWorkWarrantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarNewWorkWarrantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarNewWorkWarrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
