import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  
  constructor(private alertController: AlertController,
    private navCtrl: NavController) { }

  nombre:string=''
  apellido:string=''
  direccion:string=''
  telefono:string=''

  ngOnInit() {
  }

  crear() {
    this.navCtrl.navigateForward(['/login'])
  }
  
}
