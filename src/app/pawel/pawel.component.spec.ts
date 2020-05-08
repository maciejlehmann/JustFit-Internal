import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PawelComponent } from './pawel.component';

describe('PawelComponent', () => {
  let component: PawelComponent;
  let fixture: ComponentFixture<PawelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PawelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PawelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
