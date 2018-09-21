import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { AppStore } from "../../app/app.store";
import { Store } from "@ngrx/store";
import { LoginAction } from "../../Interface/User/user.reducer";
import { UserService } from "../../Interface/User/user.service";

import { StorageService } from "../../Interface/Services/storage-service";
import { AcceuilPage } from "../acceuil/acceuil";
import { Subscription } from "rxjs";
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  private username: string;
  private password: string;
  private message: string;
  private userStateSubscription: Subscription;
  imgPreview = 'assets/imgs/blank-avatar.jpg';
  constructor(
    public navCtrl: NavController,
    private store: Store<AppStore>,
    private us: UserService,
    private storageService: StorageService
  ) {}
  ionViewDidEnter() {
    this.userStateSubscription = this.store
      .select("userState")
      .subscribe(userState => {
        console.log(userState.message);
        this.message = userState.message;
        if (userState.user) {
          this.storageService.set('idUser',userState.user);
          this.navCtrl.push(AcceuilPage);
        }
      });
  }
  ionViewDidLeave() {
    this.userStateSubscription.unsubscribe();
  }

  login() {
    this.store.dispatch(new LoginAction(this.username, this.password));
    /*this.us.logina(this.username, this.password).then(data=>{
  console.log(data)
      })*/
  }
}
