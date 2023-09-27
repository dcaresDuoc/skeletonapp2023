
import { FormControl,FormGroup,Validators   } from '@angular/forms';
import { Router,NavigationExtras } from '@angular/router';
import { AnimationController, IonCard } from '@ionic/angular';
import type { Animation } from '@ionic/angular';
import type { QueryList } from '@angular/core';
import { Component,OnInit, ElementRef, ViewChildren, ViewChild } from '@angular/core';
import { usuario } from '../modelo/usuario';
import { perfil } from '../modelo/perfil';
import { curso } from '../modelo/curso';
import { AuthGuard } from '../guard/auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild(IonCard, { read: ElementRef }) card!: ElementRef<HTMLIonCardElement>;

  private animation!: Animation;
  private typeuser!: usuario;
  private typePerfil!: perfil;
  private curso!:curso;

  textBtn = "INGRESAR";
  textUser = "Usuario";
  textPass = "Contraseña";
  desUser = "ingrese usuario";
  desPass = "ingrese contraseña";

  listaPerfiles: perfil[] = [
    {
      id: 1,
      nombre: 'Alumno',
    },
    {
      id: 2,
      nombre: 'Docente',
    },
  ];

   listaUsuario: usuario[] = [
    {
      id: 167243460,
      nombre: 'Diego Cares',
      user:'dcares',
      correo: 'd.caresg@profesor.duoc.cl', 
      tipoPerfil: 2,
    },
    {
      id: 167243466,
      nombre: 'Pablo Olivares',
      user:'polivares',
      correo: 'polivares@duoc.cl', 
      tipoPerfil: 1,
    },
  ];

  // user={
  //   apellido:"Ejemplo ngmodel"
  // }

    usuario = new FormGroup({
    user: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(8)]),
    pass: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(4)]),
  });

  testclase(){
    this.router.navigate(['/home']);
}
validar(){
  
}


  goToPagina2() {
    let setData: NavigationExtras = {
      state: { user: this.usuario.value.user }
    };
  
    const usuarioActual = this.listaUsuario.find((usuario) => usuario.user === this.usuario.value.user);
    
    
    if (usuarioActual) {
      const perfilUsuario = this.listaPerfiles.find((perfil) => perfil.id === usuarioActual.tipoPerfil);
      console.log(perfilUsuario);
      if (perfilUsuario && perfilUsuario.id === 1) {
        this.auth.setAuthenticationStatus(true);
        this.router.navigate(['/homaalumno'],setData);
      } else if (perfilUsuario && perfilUsuario.id === 2) {
        this.auth.setAuthenticationStatus(true);
        this.router.navigate(['/home'],setData); 
      } else {
        console.log("Perfil no reconocido");
      }
    } else {
      this.auth.setAuthenticationStatus(false);
      console.log("Usuario no encontrado");
    }
  }


  // if (this.usuario.value.user == this.profe) {
  //   console.log("ingreso como docente");
  //   this.router.navigate(['/home'],setData); 
  // }

  // if (this.usuario.value.user == this.alumno) {
  //   console.log("ingreso como alumno");
  //   this.router.navigate(['/homaalumno'],setData); 
  // }      
  

  // ngAfterViewInit() {
  //   this.animation = this.animationCtrl
  //     .create()
  //     .addElement(this.card.nativeElement)
  //     .duration(1500)
  //     .iterations(Infinity)
  //     .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
  //     .fromTo('opacity', '1', '0.1');
  // }

  // play() {
  //   this.animation.play();
  // }

  constructor(private router: Router,private animationCtrl: AnimationController, private auth:AuthGuard) {}

  ngOnInit() {}

}


