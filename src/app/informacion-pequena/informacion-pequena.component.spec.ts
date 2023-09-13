import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionPequenaComponent } from './informacion-pequena.component';

describe('InformacionPequenaComponent', () => {
  let component: InformacionPequenaComponent;
  let fixture: ComponentFixture<InformacionPequenaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformacionPequenaComponent]
    });
    fixture = TestBed.createComponent(InformacionPequenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
