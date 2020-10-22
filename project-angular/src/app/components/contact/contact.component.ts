import { Component, OnInit, ElementRef ,ViewChild} from '@angular/core';




@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  public widthSlider:number;
  public anchuraToSlider: any;
  public caption: boolean;
  @ViewChild('Textos') textos: ElementRef;


  constructor(
  ) {
    this.caption = true;

  }
  ngOnInit(): void {
  //alert(document.querySelector('#texto').innerHTML);
    console.log(this.textos);
  }

  cargarSlider(): any{

    this.anchuraToSlider = this.widthSlider;
  }
  resetSlider(): any{
    this.anchuraToSlider = null;
  }
}
