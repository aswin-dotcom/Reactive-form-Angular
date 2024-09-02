import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecatFormComponent } from './recat-form.component';

describe('RecatFormComponent', () => {
  let component: RecatFormComponent;
  let fixture: ComponentFixture<RecatFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecatFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecatFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
