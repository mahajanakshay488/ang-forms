import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdformComponent } from './rdform.component';

describe('RdformComponent', () => {
  let component: RdformComponent;
  let fixture: ComponentFixture<RdformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
