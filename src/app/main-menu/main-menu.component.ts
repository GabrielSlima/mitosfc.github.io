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
    let navbar_toggler_button = document.querySelector("#navbar-toggler-button");
    let logo = document.querySelector("#logo");
    let navbar_items = document.querySelectorAll('.nav-link')
    if((navbar_menu && logo) && ((window.pageYOffset > navbar_menu.clientHeight) || !this.isMenuCollapsed)){
      console.log('White nav...');
      navbar_menu.classList.add('bg-light');
      logo.classList.add('reduced-logo');
      navbar_menu.classList.add('navbar-border');
      if(navbar_toggler_button){
        navbar_toggler_button.classList.remove('navbar-toggler-white');
      }
      if(window.innerWidth >= 992){
        navbar_items.forEach(function (nav_link){
          console.log('Black link')
          nav_link.classList.add('black-link');
          nav_link.classList.remove('white-link');
        });
      }
    }
    else if(navbar_menu && logo && window.pageYOffset == 0 ){
      console.log('Transparent nav...');
      logo.classList.remove('reduced-logo');
      navbar_menu.classList.remove('navbar-border')
      if(this.isMenuCollapsed){
        navbar_menu.classList.remove('bg-light');
        if(navbar_toggler_button){
          navbar_toggler_button.classList.add('navbar-toggler-white')
        }
      }
      if(window.innerWidth >= 992){
        navbar_items.forEach(function (nav_link){
          console.log('White link')
          nav_link.classList.add('white-link');
          nav_link.classList.remove('black-link');
        });
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
