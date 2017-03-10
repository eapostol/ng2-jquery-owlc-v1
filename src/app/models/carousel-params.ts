import { IOwlCarousel } from './i-owl-carousel';

export class CarouselParams implements IOwlCarousel{

  loop:boolean;
  margin:number;
  nav:boolean;
  dots:boolean;
  responsive:Object;
  singleItem:boolean;
  pagination:boolean;
  center:boolean;
  items:number;

  constructor(){

  }

}
