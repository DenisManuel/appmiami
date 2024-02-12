import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaportComponent } from './seaport.component';

describe('SeaportComponent', () => {
  let component: SeaportComponent;
  let fixture: ComponentFixture<SeaportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeaportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeaportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
