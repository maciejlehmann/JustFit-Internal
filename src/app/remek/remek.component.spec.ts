import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemekComponent } from './remek.component';

describe('RemekComponent', () => {
  let component: RemekComponent;
  let fixture: ComponentFixture<RemekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
