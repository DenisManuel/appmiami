import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateservicesComponent } from './privateservices.component';

describe('PrivateservicesComponent', () => {
  let component: PrivateservicesComponent;
  let fixture: ComponentFixture<PrivateservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivateservicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrivateservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
