import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomaalumnoPage } from './homaalumno.page';

describe('HomaalumnoPage', () => {
  let component: HomaalumnoPage;
  let fixture: ComponentFixture<HomaalumnoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomaalumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
