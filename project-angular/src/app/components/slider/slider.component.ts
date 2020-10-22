import { Component, OnInit,Input, Output } from '@angular/core';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
@Input() anchura: number;
@Input('etiqueta') captions: boolean;

  constructor() {

  }

  ngOnInit(): void {

    let slider: any;
    slider = $('.bxslider');
    slider.bxSlider({
      mode: 'fade',
      captions: this.captions,
      slideWidth: this.anchura
    });
  }





}
