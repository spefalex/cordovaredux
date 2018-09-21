import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
  LoadingController
} from "ionic-angular";
import { StorageService } from "../../Interface/Services/storage-service";
import { ImagePicker } from "@ionic-native/image-picker";
import { Base64 } from "@ionic-native/base64";
/**
 * Generated class for the AcceuilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-acceuil",
  templateUrl: "acceuil.html"
})
export class AcceuilPage {
  imgPreview = "assets/imgs/blank-avatar.jpg";
  loading: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storageService: StorageService,
    private imagePicker: ImagePicker,
    private base64: Base64,
    public loadingCtrl: LoadingController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad AcceuilPage");
    this.storageService.get("idUser").then(data => {
      console.log(data);
    });
  }

  getPhoto() {
    let options = {
      maximumImagesCount: 1
    };
    this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
          this.imgPreview = results[i];
          this.base64.encodeFile(results[i]).then((base64File: string) => {
          //  this.regData.avatar = base64File;
          console.log('avatar',base64File);
         
        }, (err) => {
            console.log(err);
          });
      }
    }, (err) => { });
  }
}
