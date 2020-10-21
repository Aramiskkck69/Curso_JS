import { Component, OnInit } from '@angular/core';
declare var bxSlider: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  public widthSlider:number;
  public anchuraToSlider: number;
  constructor(

  ) {
  }

  ngOnInit(): void {
  }

  cargarSlider(): any{
    this.anchuraToSlider = this.widthSlider;
  }
}
