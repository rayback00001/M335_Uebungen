import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.page.html',
  styleUrls: ['./array.page.scss'],
})
export class ArrayPage implements OnInit {

  fruechte: Frucht[] = [
    {name: 'Orange'},
    {name: 'Banane'},
    {name: 'Apfel'}
  ];
  constructor() { }

  ngOnInit() {
  }

}

interface Frucht{
  name: string;
}


