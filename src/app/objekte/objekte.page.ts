import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-objekte',
  templateUrl: './objekte.page.html',
  styleUrls: ['./objekte.page.scss'],
})
export class ObjektePage implements OnInit {
  person: Person = {name: 'Rajgopu', vorname: 'Rakul'};

  constructor() { }

  ngOnInit() {
  }

}

interface Person{
  name: string;
  vorname: string;
}
