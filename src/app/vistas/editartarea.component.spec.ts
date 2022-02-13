import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditartareaComponent } from './editartarea.component';

describe('EditartareaComponent', () => {
  let component: EditartareaComponent;
  let fixture: ComponentFixture<EditartareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditartareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditartareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
