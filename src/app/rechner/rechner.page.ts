import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rechner',
  templateUrl: './rechner.page.html',
  styleUrls: ['./rechner.page.scss'],
})
export class RechnerPage implements OnInit {
  eingabe: string = '';
  constructor() { }

  ngOnInit() {
  }
 
  add(input: any){
    this.eingabe += input;
  }

  calc(){
    var result = eval(this.eingabe);
    this.eingabe = result;
  }

  reset(){
    this.eingabe = "";
  }

}
