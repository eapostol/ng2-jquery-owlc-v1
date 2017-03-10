/*
* // this.carouselParams["loop"] = true;
 //this.carouselParams["center"] = true;
 //this.carouselParams["items"] = 3;
 // this.carouselParams["margin"] = 10;
 // this.carouselParams["nav"] = true;
 // this.carouselParams["dots"] = true;
 //this.carouselParams["singleItem"] = false;
 //this.carouselParams["pagination"] = true;
 // this.carouselParams["responsive"] = {
 0:{items:1},600:{items:3},1000:{items:5}
 };
 */
export interface IOwlCarousel {
  loop?: boolean;
  margin?: number;
  nav?: boolean;
  dots?:boolean;
  responsive?: Object;
  singleItem?:boolean;
  pagination?:boolean;
  center?:boolean;
  items?:number;

}
