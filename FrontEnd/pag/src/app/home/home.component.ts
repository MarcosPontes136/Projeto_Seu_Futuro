import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('menu', { static: true}) menu: ElementRef<HTMLDivElement>;
  @ViewChild('stars', { static: true}) stars: ElementRef<HTMLDivElement>;
  @ViewChild('moon', { static: true}) moon: ElementRef<HTMLDivElement>;
  @ViewChild('mountains_behind', { static: true}) mountains_behind: ElementRef<HTMLDivElement>;
  @ViewChild('text', { static: true}) text: ElementRef<HTMLDivElement>;
  @ViewChild('btn', { static: true}) btn: ElementRef<HTMLDivElement>;
  @ViewChild('mountains_front', { static: true}) mountains_front: ElementRef<HTMLDivElement>;
  @ViewChild('sec', { static: true}) sec: ElementRef<HTMLDivElement>;


  constructor(@Inject(DOCUMENT) private doument: Document) { 
  }

  ngOnInit(): void {
    this.initialAnimations();
    this.initScrollAnimations();

  }

  initScrollAnimations(): void{
    gsap.to(this.sec.nativeElement, {
      scrollTrigger: {
        scrub: true,
        toggleActions: "restart pause reverse pause",
      },
      opacity: 1,
      duration: 1
      
    });

    gsap.to(this.stars.nativeElement, {
      scrollTrigger: {
        scrub: 15,
      },
      x: 500,
    });

    gsap.to(this.moon.nativeElement, {
      scrollTrigger: {
        scrub: 8,
      },
      duration: 1.1,
      y: 260,
    });

    gsap.to(this.mountains_behind.nativeElement, {
      scrollTrigger: {
        scrub: 8,
      },
      duration: 1.1,
      y: 100,
    });

    gsap.to(this.text.nativeElement, {
      scrollTrigger: {
        scrub: 10,
      },
      duration: 1.1,
      x: -2900,
    });

    gsap.to(this.btn.nativeElement, {
      scrollTrigger: {
        scrub: 8,
      },
      duration: 1.1,
      y: 260,
    });

  }

  initialAnimations(): void{
    gsap.from(this.menu.nativeElement.childNodes,{
      duration: 0.5,
      opacity: 0,
      y: -20,
      stagger: 0.2,
      delay: 0.5,
    });
  }
}

