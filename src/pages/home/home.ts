import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { AppStore } from "../../app/app.store";
import { Store } from "@ngrx/store";
import { LoginAction } from "../../Interface/User/user.reducer";
import { AcceuilPage } from "../acceuil/acceuil";
import { Subscription } from "rxjs";
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  private username: string;
  private password: string;
  private error: boolean;
  private userStateSubscription: Subscription;

  constructor(public navCtrl: NavController, private store: Store<AppStore>) {}
  ionViewDidEnter() {
    this.userStateSubscription = this.store
      .select("userState")
      .subscribe(userState => {
        this.error = userState.error;

        if (userState.user) {
          this.navCtrl.push(AcceuilPage);
        }
      });
  }
  ionViewDidLeave() {
    this.userStateSubscription.unsubscribe();
  }

  login() {
    this.store.dispatch(new LoginAction(this.username, this.password));
  }
}
