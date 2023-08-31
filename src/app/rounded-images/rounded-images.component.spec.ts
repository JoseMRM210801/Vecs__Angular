import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundedImagesComponent } from './rounded-images.component';

describe('RoundedImagesComponent', () => {
  let component: RoundedImagesComponent;
  let fixture: ComponentFixture<RoundedImagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoundedImagesComponent]
    });
    fixture = TestBed.createComponent(RoundedImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
