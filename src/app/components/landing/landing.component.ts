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
  panelOpenState = false;
  actionUrl = 'https://outofyourmind.us10.list-manage.com/subscribe/post?u=3122891278a9a00335724905b&amp;id=3b59880b24';

  //#region ParticleJS
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
        value: 6,
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
  //#endregion

  //#region Testimonials swiper
  @ViewChildren(SwiperDirective) swiperDirective: QueryList<SwiperDirective>;
  config: SwiperConfigInterface = {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  };
  index: number;
  //#endregion

  //#region Articles
  articles = [
    {
      title: 'Lorem Ipsum',
      description: 'Donec dignissim enim quis augue euismod pellentesque.',
      imgUrl: '../../../../assets/img/articles-delete/article-1.jpeg'
    },
    {
      title: 'Lorem Ipsum',
      description: 'Donec dignissim enim quis augue euismod pellentesque.',
      imgUrl: '../../../../assets/img/articles-delete/article-2.jpeg'
    },
    {
      title: 'Lorem Ipsum',
      description: 'Donec dignissim enim quis augue euismod pellentesque.',
      imgUrl: '../../../../assets/img/articles-delete/article-3.jpeg'
    },
    {
      title: 'Lorem Ipsum',
      description: 'Donec dignissim enim quis augue euismod pellentesque.',
      imgUrl: '../../../../assets/img/articles-delete/article-4.jpeg'
    },
    {
      title: 'Lorem Ipsum',
      description: 'Donec dignissim enim quis augue euismod pellentesque.',
      imgUrl: '../../../../assets/img/articles-delete/article-5.jpeg'
    }
  ];
  //#endregion

  //#region Blog
  posts = [
    {
      views: 140,
      comments: 70,
      imgUrl: '../../../../assets/img/posts-delete/post-1.jpg'
    },
    {
      views: 207,
      comments: 32,
      imgUrl: '../../../../assets/img/posts-delete/post-2.jpg'
    },
    {
      views: 58,
      comments: 9,
      imgUrl: '../../../../assets/img/posts-delete/post-3.jpg'
    },
    {
      views: 140,
      comments: 70,
      imgUrl: '../../../../assets/img/posts-delete/post-1.jpg'
    },
    {
      views: 207,
      comments: 32,
      imgUrl: '../../../../assets/img/posts-delete/post-2.jpg'
    },
    {
      views: 58,
      comments: 9,
      imgUrl: '../../../../assets/img/posts-delete/post-3.jpg'
    },
    {
      views: 140,
      comments: 70,
      imgUrl: '../../../../assets/img/posts-delete/post-1.jpg'
    }
  ];
  @ViewChildren(SwiperDirective) swiperDirective2: QueryList<SwiperDirective>;
  config2: SwiperConfigInterface = {
    slidesPerView: 1,
    spaceBetween: 0,
    breakpoints: {
      500: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      700: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  };
  index2: number;
  //#endregion

  //#region Products
  products = [
    {
      name: 'Aceite CBD',
      grammage: '150 ml',
      price: 960,
      discount: 0.2,
      imgUrl: '../../../../assets/img/products-delete/gotas-new.png'
    },
    {
      name: 'Bálsamo CBD',
      grammage: '150 ml',
      price: 960,
      discount: 0.2,
      imgUrl: '../../../../assets/img/products-delete/balsamo.png'
    },
  ];
  @ViewChildren(SwiperDirective) swiperDirective3: QueryList<SwiperDirective>;
  config3: SwiperConfigInterface = {
    slidesPerView: 1,
    spaceBetween: 0,
    breakpoints: {
      630: {
        slidesPerView: 2,
        spaceBetween: 0,
      }
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  };
  index3: number;
  //#endregion

  constructor() { }

  ngOnInit(): void {
  }

  onWhatsApp() {
    window.open('https://wa.me/5217771996646?text=Hola,%20me%20interesa%20saber%20más%20de%20los%20servicios%20de%20OM');
  }

}
