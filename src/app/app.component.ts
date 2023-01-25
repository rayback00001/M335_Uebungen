import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {title: 'Navigation', url:'/navigation', icon:'arrow-forward-circle'},
    {title: 'Navigation-Detail', url:'/navigation-detail', icon:'newspaper'},
    {title: 'Objekte', url:'/objekte', icon:'newspaper'},
    {title: 'String', url:'/string', icon:'newspaper'},
    {title: 'Zahlen', url:'/zahlen', icon:'newspaper'},
    {title: 'Array', url:'/array', icon:'newspaper'},
    {title: 'Data Binding', url:'/data-binding', icon:'newspaper'},
    {title: 'Rechner', url:'/rechner', icon:'newspaper'},
    {title: 'Alerts', url:'/alerts', icon:'newspaper'}
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
