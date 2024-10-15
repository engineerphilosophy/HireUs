import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GisDataComponent } from './gis-data.component';

describe('GisDataComponent', () => {
  let component: GisDataComponent;
  let fixture: ComponentFixture<GisDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GisDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GisDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
