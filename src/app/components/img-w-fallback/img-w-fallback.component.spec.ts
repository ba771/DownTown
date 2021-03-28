import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgWFallbackComponent } from './img-w-fallback.component';

describe('ImgWFallbackComponent', () => {
  let component: ImgWFallbackComponent;
  let fixture: ComponentFixture<ImgWFallbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgWFallbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgWFallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
