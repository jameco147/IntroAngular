import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'estudio';
  butonText: string = 'Save';
  isDisabled:boolean = false;
  name:string = '';
  position:string = '';

  saveEvent(){
    if (this.butonText === 'Save') {
      this.butonText = 'Edit';
      this.isDisabled = true;
    } else {
      this.butonText = 'Save';
      this.isDisabled = false;
      console.log(this.butonText);
    }
  }
  
  showInformation(){
    alert(this.name + " " + this.position);  
  }

  resetInformation(){
    this.name='';
    this.position='';
  }


}
