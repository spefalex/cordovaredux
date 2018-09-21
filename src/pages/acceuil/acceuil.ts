import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageService } from "../../Interface/Services/storage-service";
/**
 * Generated class for the AcceuilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-acceuil',
  templateUrl: 'acceuil.html',
})
export class AcceuilPage {
  imgPreview = 'assets/imgs/blank-avatar.jpg';
  constructor(public navCtrl: NavController, public navParams: NavParams, private storageService: StorageService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcceuilPage');
    this.storageService.get('idUser').then(data => {
     console.log(data)
    });
  }

}
