import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, Content } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

/*
  Generated class for the WishList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-wish-list',
  templateUrl: 'wish-list.html'
})
export class WishListPage {
  wishList: FirebaseListObservable<any>;
  angFireDB: any;

  constructor(private nav: NavController, public navParams: NavParams, public alertCtrl: AlertController, angFire: AngularFire) {
    this.angFireDB = angFire;
    this.wishList = angFire.database.list('/wishlist');
  }

  wishTapped(wish):void {
    let prompt = this.alertCtrl.create({
      title: "Get this Item",
      message: "Please enter your name and any notes that would be helpful",
      inputs: [
        {
          name: 'wl_takenby',
          placeholder: 'Name'
        },
        {
          name: 'wl_notes',
          placeholder: 'Notes'
        },
        ],
        buttons: [
        {
          text: "Cancel",
          handler: data => {
            console.log('cancel clicked')
          }
        },
        {
          text: "Submit",
          handler: data => {
            this.wishList.update(wish.$key,{
            wl_taken: "true",
            wl_takenby: data.wl_takenby,
            wl_notes: data.wl_notes
            })
          }
        }]
    });

    prompt.present();
  }

  addToWishlist():void{
    let prompt = this.alertCtrl.create({
      title: 'New Wish List Item',
      message: 'Enter the task details in the form below',
      inputs: [
        {
          name: 't_name',
          placeholder: "Task Name"
        },
        {
          name: 't_description',
          placeholder: "Task Description"
        },
      ],
      buttons: [
        {
          text: "Cancel",
          handler: data => {
            console.log('cancel clicked')
          }
        },
        {
          text: "Submit",
          handler: data => {
            var newRef = this.wishList.push({
              wl_name: data.t_name,
              wl_description: data.t_description,
              wl_taken: false,
              wl_takenby: '',
              wl_notes: ''
            })
          }
        }
      ]
    });

    prompt.present();
  }

}
