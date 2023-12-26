import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakerGridComponent } from './sneaker-grid.component';

describe('SneakerGridComponent', () => {
  let component: SneakerGridComponent;
  let fixture: ComponentFixture<SneakerGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SneakerGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SneakerGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
