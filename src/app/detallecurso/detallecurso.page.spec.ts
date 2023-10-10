import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallecursoPage } from './detallecurso.page';

describe('DetallecursoPage', () => {
  let component: DetallecursoPage;
  let fixture: ComponentFixture<DetallecursoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetallecursoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
