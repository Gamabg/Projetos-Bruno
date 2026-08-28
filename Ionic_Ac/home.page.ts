import { Component } from '@angular/core';
@Component({
selector: 'app-home',
templateUrl: 'home.page.html',
styleUrls: ['home.page.scss'],
})
export class HomePage {
constructor() {}
dolares='';
reais=0;
converter(){
this.reais=parseFloat(this.dolares)*4.99;
}
}
