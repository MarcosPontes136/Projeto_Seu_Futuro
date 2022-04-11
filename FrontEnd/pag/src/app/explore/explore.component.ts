import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  @ViewChild('menu', { static: true}) menu: ElementRef<HTMLDivElement>;
  @ViewChild('stars', { static: true}) stars: ElementRef<HTMLDivElement>;

  

  constructor(@Inject(DOCUMENT) private doument: Document) { }

  ngOnInit(): void {
    this.initialAnimations();
    this.initScrollAnimations();
  }

  initialAnimations(): void{

  }

  initScrollAnimations(): void{
    /*gsap.to(this.stars.nativeElement, {
      scrollTrigger: {
        scrub: 15,
      },
      x: 500,
    });*/ 
  }
}