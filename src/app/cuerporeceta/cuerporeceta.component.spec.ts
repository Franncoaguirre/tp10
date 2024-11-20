import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerporecetaComponent } from './cuerporeceta.component';

describe('CuerporecetaComponent', () => {
  let component: CuerporecetaComponent;
  let fixture: ComponentFixture<CuerporecetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuerporecetaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuerporecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
