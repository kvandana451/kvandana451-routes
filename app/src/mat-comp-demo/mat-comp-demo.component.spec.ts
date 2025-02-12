import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCompDemoComponent } from './mat-comp-demo.component';

describe('MatCompDemoComponent', () => {
  let component: MatCompDemoComponent;
  let fixture: ComponentFixture<MatCompDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatCompDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatCompDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
