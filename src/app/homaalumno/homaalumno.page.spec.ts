import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HomaalumnoPage } from './homaalumno.page';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HomaalumnoPage', () => {
  let component: HomaalumnoPage;
  let fixture: ComponentFixture<HomaalumnoPage>;

  // Mock para QRScanner
  const qrScannerStub = {
    scan: () => Promise.resolve('mocked_scan_result')

  };

  // Mock para ActivatedRoute
  const activatedRouteStub = {
    snapshot: {
      paramMap: {
        get: () => 'some_id', 
      },
    },
    queryParams: of({}) 
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomaalumnoPage ],
      imports: [ HttpClientTestingModule ],
      providers: [
        { provide: QRScanner, useValue: qrScannerStub },
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ]
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomaalumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
