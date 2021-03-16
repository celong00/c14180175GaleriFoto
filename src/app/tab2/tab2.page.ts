import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  angka : number;
  random = 0;
  benar : boolean;
  constructor() {}
  check(){
    
    this.random = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
    alert(this.random)
    if(this.angka == this.random){
      this.benar = true;
    }else{
      this.benar = false;
    }
  }
}
