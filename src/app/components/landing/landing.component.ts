// tslint:disable: quotemark
// tslint:disable: object-literal-key-quotes
import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SwiperConfigInterface, SwiperDirective } from 'ngx-swiper-wrapper';
import { SwiperOptions } from 'swiper';
import { Product } from '../../modules/products/interfaces/product.interface';
import { Testimonial } from '../../modules/shared/interfaces/testimonial.interface';

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
    /* 'z-index': -1, */
  };
  myParams: object = {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800
        }
      },
      "color": {
        "value": ["#BD10E0","#7dc832","#f78a21","#7be4ff"]
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
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
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
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
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

  //#region Nyan Cat ParticleJS
  count = 0;
  showEasterEgg = false;
  nyanWidth = 100;
  nyanHeight = 100;
  nyanStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    /* 'z-index': -1, */
  };
  nyanParams: object = {
    particles: {
      number: {
        value: 100,
        density: {
          enable: false,
          value_area: 800
        }
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "star",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "http://wiki.lexisnexis.com/academic/images/f/fb/Itunes_podcast_icon_300.jpg",
          width: 100,
          height:100
        }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 4,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable:false,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 14,
        direction: "left",
        random: false,
        straight: true,
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
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 200,
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
  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Francisco Hernandez ',
      age: 68,
      healtCondition: 'Parkinson',
      text: `
        <p><b><b>Resultados:</b></b> Hay cambios notablemente fuertes después de la primer toma de aceite MedKush, la temblorina desapareció en el día uno, el señor comenta que con ningún medicamento tiene tanta mejoría a esta condición. Ademas el señor se siente mucho mas relajado y tranquilo.</p>
        <p><b>Día 3:</b> tomando 2 dosis (por la mañana y noche) ya no ha tenido temblorina en día y medio.</p>
      `,
      rating: 5,
    },
    {
      id: 2,
      name: 'Gabriela Fernandez',
      age: 30,
      healtCondition: 'Ansiedad y problemas de sueño',
      text: `
        <p><b><b>Resultados:</b></b> El día 1 no notó mucha mejora, día 2 pudo mantenerse más relajada a lo largo del
        día y concilio el sueño con más facilidad.</p>
      `,
      rating: 4,
    },
    {
      id: 3,
      name: 'Karla Arellano',
      age: 35,
      healtCondition: 'Estrés crónico',
      text: `
        <p><b>Resultados:</b> Desde el primer día obtuvo los resultados \"se sentía más relajada en el trascurso
        del día\" descansó mucho mejor.</p>
      `,
      rating: 4,
    },
    {
      id: 4,
      name: 'Daniel Pulido',
      age: 25,
      healtCondition: 'Estrés y ansiedad',
      text: `
        <p><b>Resultados:</b> Toma la dosis mínima de vez en cuando, \"me siento muy bien cuando lo tomo \"Lo
        tomo cuando tengo que relajarme y si me funciona, también para poner la mente en orden\".
        </p>
      `,
      rating: 3,
    },
    {
      id: 5,
      name: 'Susana',
      age: 28,
      healtCondition: 'Ataques de ansiedad/pánico',
      text: `
        <p><b>Resultados:</b> \"He dormido más\" \"Tenía insomnio\" \"no me he levantado cansada\" con una dosis
        muy baja \"no me han dado ataques y eso me tranquiliza\".</p>
      `,
      rating: 4,
    },
    {
      id: 6,
      name: 'Antonia',
      age: 38,
      healtCondition: 'No dormía bien, tenia ansiedad eventual',
      text: `
        <p><b>Resultados:</b> Los días que lo ha tomado por la noche \"Duerme muy bien y se siente más
        descansada\". Si tiene un día complicado lo toma por la mañana \"Me siento muy tranquila y
        calmada\".</p>
      `,
      rating: 5,
    },
    {
      id: 7,
      name: 'Maria Fernanda',
      age: 35,
      healtCondition: 'Estrés y ansiedad (ya tomaba CBD)',
      text: `
        <p><b>Resultados:</b> Notó mucha diferencia, llevaba 3 días sin dormir usando otro aceite, con
        el nuestro en la primer toma durmió super bien, el efecto lo sintió mucho más rápido que la
        competencia, le llamo la atención el olor porque no huele a marihuana. Me relajó muchísimo; me sentí literal en paz.</p>
      `,
      rating: 5,
    },
    {
      id: 8,
      name: 'Sofía Álvarez',
      age: 41,
      healtCondition: 'Problemas para dormir y descansar',
      text: `
        <p><b>Resultados:</b> Las primeras dos noches descanse muchisisisimo. siento que descanso
        mucho más.</p>
      `,
      rating: 4,
    },
    {
      id: 9,
      name: 'Lulú Del Valle',
      age: 43,
      healtCondition: 'Dolor de espalda crónico',
      text: `
        <p><b>Resultados:</b> Después de despertarme empezaba con dolor muy fuerte de espalda, lloraba de
        dolor, me dejaba sin aire. Desde el día 3 tomando CBD desapareció el dolor por completo y no
        ha regresado.</p>
      `,
      rating: 4,
    },
    {
      id: 10,
      name: 'Lourdes Sanchez',
      age: 75,
      healtCondition: 'Dolor en cadera y gluteos',
      text: `
        <p><b>Resultados:</b> Se me quitó el dolor en la nalga que llevaba 2 años y medio, habían mañanas en
        las que no me podía levantar. También ha mejorado mi digestión.</p>
      `,
      rating: 5,
    },
    {
      id: 11,
      name: 'Ana Diez',
      age: 49,
      healtCondition: 'Dolores generales, estrés',
      text: `
        <p><b>Resultados:</b> Escéptica el primer par de días no sintió cambios, a los 4 días notó que los
        dolores corporales estaban disminuyendo considerablemente hasta desaparecer por completo
        a la semana.</p>
      `,
      rating: 4,
    },
    {
      id: 12,
      name: 'Claudia Pulido',
      age: 39,
      healtCondition: 'Insomnio y problemas para entrar en sueño profundo',
      text: `
        <p><b>Resultados:</b> El primer día no sintió diferencia en la manera conciliar el sueño, pensó que no le
        servía, después del segundo día quedo fascinada por lo bien que durmió “me paraba al baño o
        por agua unas 3 veces por noche, desde que estoy tomando CBD no despierto por la noche y
        me levanto más descansada".</p>
      `,
      rating: 3,
    },
    {
      id: 13,
      name: 'Lourdes Verges',
      age: 73,
      healtCondition: 'Neurosis, maculopatía miopica (ceguera)',
      text: `
        <p><b>Resultados:</b> Tengo el 2% del funcionamiento de mi vista, desde que empecé a tomar CBD
        entra más luz en mi visión. Me siento mucho más tranquila en el transcurso del día y he
        sentido mejora en las articulaciones de las manos, tengo mucha mas movilidad.</p>
      `,
      rating: 5,
    },
    {
      id: 14,
      name: 'David Portillo',
      age: 41,
      healtCondition: 'Problemas para dormir',
      text: `
        <p><b>Resultados:</b> Cada vez que lo tomo duermo con más facilidad y descanso mejor, también he
        tenido menos problemas para ir al baño.</p>
      `,
      rating: 3,
    },
    {
      id: 15,
      name: 'Beatriz Evia',
      age: 67,
      healtCondition: 'Dolor de hombro y ansiedad',
      text: `
        <p><b>Resultados:</b> El dolor disminuye considerablemente los días que tomo el CBD, también cuando
        estoy ansiosa lo tomo y me relaja casi instantáneamente.</p>
      `,
      rating: 4,
    },
    {
      id: 16,
      name: 'Petrouschka Morales',
      age: 56,
      healtCondition: 'Estrés y ansiedad',
      text: `
        <p><b>Resultados:</b> Me he sentido muy feliz desde que tomo las gotitas, muchas gracias.</p>
      `,
      rating: 5,
    },
    {
      id: 17,
      name: 'Andrea Casanova',
      age: 22,
      healtCondition: 'Ansiedad e Insomnio',
      text: `
        <p><b>Resultados:</b> La verdad estoy super contenta con el producto! Me bajo muchísimo la ansiedad
        ya no me da insomnio!</p>
      `,
      rating: 5,
    },
    {
      id: 18,
      name: ' Florencia Alduncin',
      age: 30,
      healtCondition: 'Ansiedad',
      text: `
        <p><b>Resultados:</b> “Amoooooo el producto, el efecto es excelente como suplemento.”</p>
      `,
      rating: 5,
    },
    {
      id: 19,
      name: 'Isabel Quintanar',
      age: 72,
      healtCondition: 'Dolores de espalda',
      text: `
        <p>Resultado: “Cuando conocí el bálsamo con CBD me lo aplique en la espalda baja, en donde
        sufría de dolor desde hace año y medio y a la segunda aplicación desapareció el dolor.”</p>
      `,
      rating: 4,
    },
    {
      id: 20,
      name: 'Israel Gonzalez',
      age: 3,
      healtCondition: 'Autismo',
      text: `
        <p>Todas las noches se despertaba 2 o 3 veces, desde que comenzó a tomar CBD
        duerme de corrido toda la noche. En el día su energía ya no es agresiva y desaparecieron los
        ataques de agresión.</p>
      `,
      rating: 5,
    },
    {
      id: 21,
      name: 'Fernanda Simón',
      age: 23,
      healtCondition: 'Ansiedad',
      text: `
        <p><b>Resultados:</b> Me encanto! Me bajó muchísimo la ansiedad y me ayudo bastante con el
        insomnio.</p>
      `,
      rating: 4,
    },
    {
      id: 22,
      name: 'Bárbara Partida',
      age: 25,
      healtCondition: 'Dolores musculares e Insomnio',
      text: `
        <p><b>Resultados:</b> Yo lo uso un buen para el dolor muscular del día siguiente de entrenar y también
        para dormir me ha ayudado muchísimo! Justo le di a mi abuela por un dolor muy fuerte que
        traía y el efecto anestésico le esta ayudando mucho. Gracias!</p>
      `,
      rating: 4,
    },
    {
      id: 23,
      name: 'Zoé',
      age: 23,
      healtCondition: 'Ansiedad y dolores musculares post-entrenamiento',
      text: `
        <p><b>Resultados:</b> Llevo 3 meses tomando CBD y mi ansiedad es casi nula, mi mamá y mi prima que
        ya lo toman también están encantadas. He estado haciendo ejercicio al que no estoy
        acostumbrada y me sirve un buen para que no me duela tanto al día siguiente.
        </p>
      `,
      rating: 4,
    },
    {
      id: 24,
      name: 'César Madín',
      age: 27,
      healtCondition: 'Dolores',
      text: `
        <p><b>Resultados:</b> El producto lo conseguí para mi madre que tenia un dolor en la espalda y en las
        manos crónico. Le sugerí el CBD y desde la primera semana ella empezó a sentir mucha
        mejora en los dolores y también descansa mejor. Es muy buen producto y bastante confiable.</p>
      `,
      rating: 4,
    }
  ];
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
  // products = [
  //   {
  //     name: 'Aceite CBD',
  //     grammage: '150 ml',
  //     price: 1499,
  //     discount: 0.2,
  //     imgUrl: '../../../../assets/img/products-delete/gotas-new.png'
  //   },
  //   {
  //     name: 'Bálsamo CBD',
  //     grammage: '150 ml',
  //     price: 1499,
  //     discount: 0.2,
  //     imgUrl: '../../../../assets/img/products-delete/balsamo.png'
  //   },
  // ];
  products;
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

  constructor(
    private readonly route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      console.log('Resolved data', {data});
      if (data && data.productsInfo && data.productsInfo.products) {
        this.products = data.productsInfo.products;
      }
    });
  }

  navigateToProduct(productId: number) {
    this.router.navigate([`products/${productId}`], { skipLocationChange: false });
  }

  onContactWhatsApp() {
    window.open('https://wa.me/5217771996646?text=Hola,%20me%20interesa%20saber%20más%20sobre%20los%20productos%20de%20Medkush');
  }

  onWhatsApp(product: Product) {
    window.open(`https://wa.me/5217771996646?text=Hola,%20quiero%20comprar%20el%20producto%20%22${product.name}%22%20de%20de%20Medkush.`);
  }

  // Easter Egg
  incrementCount() {
    this.count++;
    if (this.count % 5 === 4) {
      this.showEasterEgg = true;
    } else {
      this.showEasterEgg = false;
    }
  }
}
