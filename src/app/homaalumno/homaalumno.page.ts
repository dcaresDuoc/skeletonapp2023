import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsumoapiService } from '../services/consumoapi.service';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { AlertController } from '@ionic/angular';
import { Camera } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';


@Component({
  selector: 'app-homaalumno',
  templateUrl: './homaalumno.page.html',
  styleUrls: ['./homaalumno.page.scss'],
})
export class HomaalumnoPage implements OnInit {
  userHome: any;
  idAlumno: any;

  constructor(
    private qrScanner: QRScanner,
    private activeroute: ActivatedRoute,
    private router: Router,
    private apiService: ConsumoapiService,
    private alertController: AlertController
  ) {
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.userHome = this.router.getCurrentNavigation()?.extras.state?.['user'];
        this.idAlumno = this.router.getCurrentNavigation()?.extras.state?.['id'];
      }
    });
  }

  ngOnInit() {
    this.requestCameraPermission();
  }

  async requestCameraPermission() {
    if (Capacitor.getPlatform() !== 'web') {
      const cameraStatus = await Camera.checkPermissions();

      if (cameraStatus.camera !== 'granted') {
        await Camera.requestPermissions();
        this.startScanner();
      } else {
        this.startScanner();
      }
    }
  }

  async startScanner() {
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          let scanSub = this.qrScanner.scan().subscribe((text: string) => {
            console.log('Scanned something', text);
            const [codigo, seccion, fecha] = text.split('-');
            this.registrarAsistencia(codigo, seccion, fecha);
            this.qrScanner.hide();
            scanSub.unsubscribe();
          });

          this.qrScanner.show();
        } else if (status.denied) {
          this.showSettingsAlert();
        }
      })
      .catch((e: any) => console.log('Error:', e));
  }

  async showSettingsAlert() {
    const alert = await this.alertController.create({
      header: 'Permiso de Cámara',
      message: 'Se necesita acceso a la cámara para escanear códigos QR. Por favor, habilite el acceso a la cámara en la configuración de su dispositivo.',
      buttons: ['OK']
    });

    await alert.present();
  }

  registrarAsistencia(codigo: string, seccion: string, fecha: string) {
    const body = {
      alumno_id: this.idAlumno,
      codigo: codigo,
      seccion: seccion,
      fecha: fecha
    };

    this.apiService.registrarAsistencia(body).subscribe(response => {
      console.log(response);
    });
  }
}
