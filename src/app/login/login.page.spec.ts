import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginPage } from './login.page';
import { ConsumoapiService } from '../services/consumoapi.service';
import { RouterTestingModule } from '@angular/router/testing';
import { of, throwError } from 'rxjs';
import { Router } from '@angular/router';

describe('LoginPage', () => {
  let component: LoginPage;
  let consumoApiServiceMock: any;
  let router: Router;

  beforeEach(async () => {
    consumoApiServiceMock = jasmine.createSpyObj('ConsumoapiService', ['login']);

    await TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        { provide: ConsumoapiService, useValue: consumoApiServiceMock },

      ],
    }).compileComponents();

    router = TestBed.inject(Router);
    spyOn(router, 'navigate');

    const fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to home on successful login', () => {
    const responseMock = { status: 200, body: { id: 1, user: 'user1', tipoPerfil: 1 } };
    consumoApiServiceMock.login.and.returnValue(of(responseMock));

    component.apiLogin();
    expect(router.navigate).toHaveBeenCalledWith(['/home'], jasmine.any(Object));
  });

});
