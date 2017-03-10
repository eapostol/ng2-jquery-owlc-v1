///<reference path="../../typings/index.d.ts"/>

// import * as $ from 'jquery';
declare var $:any;

import {Component, ElementRef, AfterViewInit, OnDestroy} from '@angular/core';
import '../../node_modules/owl.carousel/dist/owl.carousel.js';
import { CarouselParams } from './models/carousel-params'
//import '../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';
//import '../../node_modules/owl.carousel/dist/assets/owl.carousel.min.css';
/*
* <link href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.1.6/assets/owl.carousel.min.css" rel="stylesheet" />
 <link href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.1.6/assets/owl.theme.default.min.css" rel="stylesheet" />
 <link href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.1.6/assets/owl.theme.green.min.css" rel="stylesheet"  />
*
*
* */



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  /*
  styleUrls:[
    '../styles/oc/2.1.6/owl.carousel.min.css',
    '../styles/oc/2.1.6/owl.theme.default.min.css',
    '../styles/oc/2.1.6/owl.theme.green.min.css'
  ]
  */
  /*styleUrls: ['./app.component.css','../../node_modules/owl.carousel/dist/assets/owl.carousel.min.css','../../node_modules/owl.carousel/dist/assets/owl.theme.default.min.css'] */
})
export class AppComponent implements AfterViewInit, OnDestroy {
  title:string = 'Angular 2.0, JQuery 3.3.x, Owl Carousel 2.2.x';

  // carousel params
  // carouselParams:Object = {};
  carouselParams:CarouselParams = new CarouselParams();
  oc:any;

  constructor(private el:ElementRef){
    let hasJQuery:boolean = this.checkJQuery();
    if (hasJQuery){
      let readyClosure = function(component:any){
        let readyFn = function(){
          console.log('jquery document ready');
          console.log(component); // will be document inside ready function
          component.oc = $('.owl-carousel');
          console.log(component.oc); // jquery targeting owl carousel
          console.log(component.carouselParams); // object
          console.log(component.oc.owlCarousel); // defined
          component.oc.owlCarousel(component.carouselParams);
        };

        return readyFn;
      };

      this.init(); // define parameters
      $(document).ready(readyClosure(this));

    }
    console.log("constructor complete");
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit");
    // console.log(this.el); // the app-root
    /* this.oc = $('.owl-carousel');
    console.log(this.oc); // jquery targeting owl carousel
    console.log(this.carouselParams); // object
    console.log(this.oc.owlCarousel); // defined
    this.oc.owlCarousel(this.carouselParams);
    */
    /*
    let onReadyClosure:Function = function(arg){
      // console.log(arg);
      let onReadyHandler = function(){
        console.log(arg); // returns component instance
        console.log($('.owl-carousel')); // returns div tag matching owl carousel inside html
        console.log(arg["carouselParams"]);
        $('owl-carousel').owlCarousel( arg["carouselParams"] );
        console.log("document.ready complete ");
      };
      return onReadyHandler;
    };
    $(document).ready(onReadyClosure(this));
     */
  }

  ngOnDestroy() {
    console.log("onDestroy");
    let carousel = $('.owl-carousel');
    carousel.data('owlCarousel').destroy();
    carousel = null;
  }

  init(){
    console.log("initializing...");
    this.carouselParams.loop = true;
    this.carouselParams.center = true;
    this.carouselParams.items = 3;
    this.carouselParams.margin = 10;
    this.carouselParams.nav = true;
    this.carouselParams.dots = true;
    this.carouselParams.singleItem = false;
    this.carouselParams.pagination = true;
    this.carouselParams.responsive = {
      0:{items:1},600:{items:3},1000:{items:5}
    };

    this.runJQueryTest();
  }

  checkJQuery(){
    console.log($.isFunction($));
    return ($.isFunction($));
  }

  runJQueryTest(){
    $("#testJQueryDiv").html("JQuery Active");

  }


}
