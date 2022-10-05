import { getLocaleDateTimeFormat } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PW3';
  subtitulo : string = "Aula sobre Angular";
  logo = 'favicon.ico';
  paragrafoData : string = '';
  nomes =['Eliane','Edson','Quiteria','Marco'];

  exibirAlert(){
    alert('Isso é um teste. Olá :D');
  }

  exibirNome(){
    return 'Iann';
  }

  // Forma do Iann

  exibirData(){
      if(this.paragrafoData == ''){
        return this.paragrafoData = 'Aula do dia 31/08/2022';
      }
      else{
        return (this.paragrafoData) = "";
      }
  }

  // Forma da Marion

  mostrar = false;
  exibirParagrafo(){
    this.mostrar = !this.mostrar;
  }
}
