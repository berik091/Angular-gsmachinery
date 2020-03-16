import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoutfoundcomponentComponent } from './noutfoundcomponent.component';

describe('NoutfoundcomponentComponent', () => {
  let component: NoutfoundcomponentComponent;
  let fixture: ComponentFixture<NoutfoundcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoutfoundcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoutfoundcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
