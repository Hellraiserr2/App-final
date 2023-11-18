import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { RegistroserviceService } from '../registroservice.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin : FormGroup;
  usuarios: any[]=[];

  constructor( private alertController: AlertController,
    private navController: NavController,
    private registroService: RegistroserviceService,
    private fb : FormBuilder) {
      this.formularioLogin = this.fb.group({
        'correo':new FormControl("",Validators.required),
        'password': new FormControl("",Validators.required)
      })
     }

  ngOnInit() {
  }
  async Ingresar(){
    var f = this.formularioLogin.value;
    var a = 0;
    this.registroService.getUsuarios().then(datos=>{
      this.usuarios=datos; 
      if(datos.length==0){
        return null;
      }
      for (let obj of this.usuarios){
        if (obj.correoUsuario == f.correo && obj.passUsuario==f.password){
          a=1;
          console.log('ingresado');
          localStorage.setItem('ingresado','true');
          this.navController.navigateRoot('home');
          return;
        }
      }
    console.log(a);
    if(a==0){
      this.alertMsg();
    }
    return null;
    });
    
  }

  async alertMsg(){
    const alert = await this.alertController.create({
      header:'error',
      message:'los datos ingresados no son correctos',
      buttons:['aceptar'],
    });
    await alert.present();
    return;
  }

}

