import { Component, OnInit } from '@angular/core';
import { curso } from '../modelo/curso';
import { alumnos } from '../modelo/aluumnos';
import { ConsumoapiService } from '../services/consumoapi.service'; 
import { ActivatedRoute, Router, Route } from '@angular/router';
import * as qrcode from 'qrcode-generator';


@Component({
  selector: 'app-detallecurso',
  templateUrl: './detallecurso.page.html',
  styleUrls: ['./detallecurso.page.scss'],
})
export class DetallecursoPage implements OnInit {

  cursol: curso | undefined;
  alumnosl: alumnos[] | undefined = [];
  profesorId: number = 1; 
  cursoId:any;

  qrDataURL: string = ''; 

  constructor(private apiService: ConsumoapiService, private router: Router, private activeroute : ActivatedRoute) { 

    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.profesorId = this.router.getCurrentNavigation()?.extras.state?.['idProfesor'];
        this.cursoId = this.router.getCurrentNavigation()?.extras.state?.['idCurso'];
      }
    });
    
  }

  generateQRCode() {
    if (this.cursol) {
        const fechaActual = new Date().toISOString().split('T')[0];  // Fecha en formato YYYY-MM-DD
        const data = `${this.cursol.codigo}-${this.cursol.seccion}-${fechaActual}`;

        let qr = qrcode(4, 'L');
        qr.addData(data);
        qr.make();
        this.qrDataURL = qr.createDataURL(4);
    }
  }


  ngOnInit() {    
    this.apiService.obtenerCursosPorProfesor(this.profesorId).subscribe(
        data => {
          this.cursol = data.find((curso: curso) => curso.id === this.cursoId);
            this.alumnosl = this.cursol ? this.cursol.alumnos : []; 
            this.generateQRCode();
        },
        error => {
            console.error("Error obteniendo cursos:", error);
        }
    );
}

}
