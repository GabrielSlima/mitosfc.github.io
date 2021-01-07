import { Component } from '@angular/core';
import { Modality } from './interfaces/Modality'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mitosfc';
  scrollToElement($element:any): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  modalities: Modality[] = [{
    name: "Futsal",
    description: "Jogo entre duas equipes com 5 jogadores cada em uma quadra esportiva",
    color: "red-85"
  },{
    name: "Futebol Society",
    description: "Jogo entre duas equipes com 7 jogadores cada em uma quadra de grama sintética",
    color: "green-85"
  }]
}
