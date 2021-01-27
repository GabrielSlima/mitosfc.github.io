import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
  animations: [
    trigger('openClose', [
      state('closed', style({
        backgroundColor: 'green !important'
      })),
      state('open', style({
        backgroundColor: 'red'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('.5s')
      ])
    ])
  ]
})
export class MainMenuComponent implements OnInit {

  public isOffsetZero = true;

  public isMenuCollapsed = true;
  
  collapseMenu(): void{
    this.isMenuCollapsed = !this.isMenuCollapsed
    this.isOffsetZero = window.pageYOffset == 0;
    this.onWindowScroll();
  }

  @HostListener('window:scroll', ['$event'])

  onWindowScroll(){
    console.log(window.pageYOffset);
    let navbar_menu = document.querySelector('#responsive-nav');
    let navbar_toggler_button = document.querySelector("#navbar-toggler-button")
    let logo = document.querySelector("#logo")
    
    if((navbar_menu && logo) && ((window.pageYOffset > navbar_menu.clientHeight) || !this.isMenuCollapsed)){
      console.log('White nav...');
      navbar_menu.classList.add('bg-light');
      logo.classList.add('reduced-logo');
      if(navbar_toggler_button){
        navbar_toggler_button.classList.remove('navbar-toggler-white');
        navbar_toggler_button.classList.add('.navbar-bordered');
      }
    }
    else if(navbar_menu && logo && window.pageYOffset == 0 ){
      console.log('Transparent nav...');
      logo.classList.remove('reduced-logo');
      if(this.isMenuCollapsed){
        navbar_menu.classList.remove('bg-light');
        if(navbar_toggler_button){
          navbar_toggler_button.classList.add('navbar-toggler-white')
          navbar_toggler_button.classList.remove('.navbar-bordered');
        }
      }
    }
  }
  scrollToElement(element_id: string): void {
    let element = document.querySelector(element_id);
    if(element) element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
  constructor() { }

  ngOnInit(): void {
    this.isOffsetZero = window.pageYOffset == 0;
  }

}
