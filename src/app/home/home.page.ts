import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,NavigationExtras } from "@angular/router";
import { ConsumoapiService } from '../services/consumoapi.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  userHome: any;
  pass: any;
  value = "dcaresg";
  idProfesor : any;

  cursos: any[] = [];

  constructor(private activeroute: ActivatedRoute, private router: Router, private apiService : ConsumoapiService) {
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.userHome = this.router.getCurrentNavigation()?.extras.state?.['user'];
        this.idProfesor = this.router.getCurrentNavigation()?.extras.state?.['id'];
      }
    });

  }

  verDetalleCurso(cursoId: number) {
    let setData: NavigationExtras = {
      state: {
        idProfesor: this.idProfesor,
        idCurso : cursoId        
      }
    };
    this.router.navigate(['/detallecurso'],setData);
}


  ngOnInit() {
    this.apiService.obtenerCursosPorProfesor(this.idProfesor).subscribe(data => {
      this.cursos = data;
      console.log(this.cursos);
    });
  }


}
