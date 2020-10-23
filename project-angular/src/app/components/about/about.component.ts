import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public title: string;
  public subtitle:string;
  public email:string;
  public sesion: boolean;
  constructor() {
    this.title = "J.L Aramis Ramirez";
    this.subtitle = 'Ing. Mecatronico';
    this.email = 'joluramirezdi@ittepic.edu.mx';
    this.sesion = false;
  }

  ngOnInit(): void {
  }

}
