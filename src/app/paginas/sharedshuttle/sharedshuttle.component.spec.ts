import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedshuttleComponent } from './sharedshuttle.component';

describe('SharedshuttleComponent', () => {
  let component: SharedshuttleComponent;
  let fixture: ComponentFixture<SharedshuttleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedshuttleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SharedshuttleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
