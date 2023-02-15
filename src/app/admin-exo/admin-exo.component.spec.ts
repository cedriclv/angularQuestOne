import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExoComponent } from './admin-exo.component';

describe('AdminExoComponent', () => {
  let component: AdminExoComponent;
  let fixture: ComponentFixture<AdminExoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminExoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminExoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
