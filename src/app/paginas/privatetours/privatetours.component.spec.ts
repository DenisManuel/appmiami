import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivatetoursComponent } from './privatetours.component';

describe('PrivatetoursComponent', () => {
  let component: PrivatetoursComponent;
  let fixture: ComponentFixture<PrivatetoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivatetoursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrivatetoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
