import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesComponentHtmlComponent } from './courses.component.html.component';

describe('CoursesComponentHtmlComponent', () => {
  let component: CoursesComponentHtmlComponent;
  let fixture: ComponentFixture<CoursesComponentHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesComponentHtmlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesComponentHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
