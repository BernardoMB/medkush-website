// tslint:disable: quotemark
// tslint:disable: object-literal-key-quotes
import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { SwiperConfigInterface, SwiperDirective } from 'ngx-swiper-wrapper';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  // ParticleJS configuration
  width = 100;
  height = 100;
  myStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    'z-index': -1,
  };
  myParams: object = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#6bb139'
      },
      shape: {
        type: 'circle',
        polygon: {
          nb_sides: 7
        },
        "image": {
          src: "img/github.svg",
          width: 100,
          height: 100
        }
      },
      "opacity": {
        value: 0.8,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      "line_linked": {
        enable: true,
        distance: 150,
        color: "#6b4f71",
        opacity: 0.4,
        width: 1.5
      },
      "move": {
        enable: true,
        speed: 4,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  };
  myParams2: object = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#F68B21'
      },
      shape: {
        type: 'circle',
        polygon: {
          nb_sides: 7
        },
        "image": {
          src: "img/github.svg",
          width: 100,
          height: 100
        }
      },
      "opacity": {
        value: 0.8,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      "line_linked": {
        enable: true,
        distance: 150,
        color: "#6b4f71",
        opacity: 0.4,
        width: 1.5
      },
      "move": {
        enable: true,
        speed: 4,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  };

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
    slidesPerView: 1.2,
    breakpoints: {
      640: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      },
      1024: {
        slidesPerView: 4
      }
    },
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
