import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { SwiperConfigInterface, SwiperDirective } from 'ngx-swiper-wrapper';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  // Swiper wrapper
  @ViewChildren(SwiperDirective) swiperDirective: QueryList<SwiperDirective>;
  /* config: SwiperConfigInterface = {
    slidesPerView: 1,
    initialSlide: 0, // Slide Index Starting from 0
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  }; */
  index: number;

  // Useful swiper
  config: SwiperOptions = {
    autoplay: {
      delay: 5000, // Autoplay option having value in milliseconds (can be 0)
      disableOnInteraction: true
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true
    },
    spaceBetween: 30,
    loop: true,
    speed: 800
  };
  config2: SwiperOptions = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true
    },
    slidesPerView: 5,
    loop: true,
    speed: 800
  };

  constructor() { }

  ngOnInit(): void {
  }

  nextSlide() {
    console.log('Pene 1');
    this.swiperDirective.first.nextSlide();
  }

  prevSlide() {
    console.log('Pene 2');
    this.swiperDirective.first.prevSlide();
  }

}
