import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
@Input() anchura: number;

  constructor() { }

  ngOnInit(): void {

    let slider: any;
    slider = $('.bxslider');

    $("#logo").click(function (e) {
      e.preventDefault()
      $("header").css("background", "yellow")
        .css("height", "50px")
    });

    slider.bxSlider({
      mode: 'fade',
      captions: false,
      slideWidth: this.anchura
    });
  }





}
