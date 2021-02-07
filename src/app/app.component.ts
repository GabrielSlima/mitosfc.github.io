import { Component, OnInit, HostListener, Directive, EventEmitter, Output} from '@angular/core';
import { Modality } from './interfaces/Modality'
import { Review } from './interfaces/Review'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  last_processed_photo_position = 'None';
  large_screen = true;
  photo_left = true;
  @Output('ngInit') initEvent: EventEmitter<any> = new EventEmitter();

  title = 'mitosfc';
  scrollToElement($element:any): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  modalities: Modality[] = [{
    name: "Futsal",
    description: "Jogo entre duas equipes com 5 jogadores cada em uma quadra esportiva",
    color: "red-85",
    image_name: 'index.jpeg'
  },{
    name: "Futebol Society",
    description: "Jogo entre duas equipes com 7 jogadores cada em uma quadra de grama sintética",
    color: "green-85",
    image_name: '3.jpeg'

  }]

  reviews: Review[] = [{
    client_name: "Bruno Martins",
    photo_name: "assets/images/reviews/bruno-martins-facebook.png",
    uri: "https://m.facebook.com/story.php?story_fbid=3459304310763530&id=100000519848476&__tn__=%2As%2As"
  }, {
    client_name: "João Guilherme",
    photo_name: "assets/images/reviews/joao-guilherme-facebook.png",
    uri: "https://m.facebook.com/story.php?story_fbid=477368546530019&id=100027706333069&ref=page_internal&__tn__=%2As%2As"
  }, {
    client_name: "Zotinn Santos",
    photo_name: "assets/images/reviews/zotinn-santos-facebook.png",
    uri: "https://m.facebook.com/story.php?story_fbid=1477478735781808&id=100005590862105&__tn__=%2As%2As"
  }]


  ngOnInit(): void {
    this.large_screen = window.innerWidth > 1080;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any){
    console.log('Resizing modalities');
    this.large_screen = event.target.innerWidth  >= 1080;
  }

  checkPhotoPosition(modality: any){
    let position = '';
    if(this.photo_left){
      this.photo_left = !this.photo_left;
      position = 'left';
    }else {
      this.photo_left = !this.photo_left;
      position = 'right';
    }
    this.last_processed_photo_position = position;
    console.log(this.last_processed_photo_position);
    return position
  }
}
