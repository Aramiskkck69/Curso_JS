import { Component,OnInit  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  public sesion:boolean;
  public contador:number;
  constructor() {
    this.sesion = false;
    this.contador = 0;
  }
  ngOnInit(): void{
  }

  title = 'project-angular';

  sesionActive(){
    this.sesion = true;
    this.contador = this.contador + 1;
    if (this.contador > 1){
      this.sesion = false;
      this.contador=0;
      console.log(this.contador);
    }
  }
  sesionDesactive(){
    this.sesion = false;
    this.contador = 0;
  }

}

