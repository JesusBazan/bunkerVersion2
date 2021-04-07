import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncDesComponent } from './enc-des.component';

describe('EncDesComponent', () => {
  let component: EncDesComponent;
  let fixture: ComponentFixture<EncDesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncDesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncDesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
