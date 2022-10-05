import { style } from '@angular/animations';
import { Component, IterableDiffers, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-escolar',
  templateUrl: './media-escolar.component.html',
  styleUrls: ['./media-escolar.component.css']
})
export class MediaEscolarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nota1 : number = 0;
  nota2 : number = 0;
  nota3 : number = 0;
  media : number = 0;
  resultado : string = '';

  calcularMedia(){
   this.media = (this.nota1 + this.nota2 + this.nota3) / 3;
   if(this.media >= 7){
     this.resultado = 'Aprovado';

    }
  else{
    this.resultado = 'Reprovado';
  }

}
}
