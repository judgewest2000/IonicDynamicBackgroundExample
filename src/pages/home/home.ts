import { Component, ViewChild } from '@angular/core';
import { NavController, Content } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController) {

  }

  availableImages: string[] = [
    'christmas-colour.png',
    'christmas-dark.png'
  ];


  getFullPath(imgName: string){
    return `assets/imgs/${imgName}`;
  }

  selectImage(imgName: string){
    const scrollElement = this.content.getScrollElement();
    scrollElement.style.backgroundImage = `url('${this.getFullPath(imgName)}')`;
  }


  ionViewDidLoad() {
    window['abc'] = this.content;
    console.log('doneeeee');
  }

}
