import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products = [
    {
      id: 1,
      name: 'Gotero',
      description: `
      <p>El aceite de CBD tiene múltiples beneficios físicos y mentales, entre ellos destacan: el ser altamente relajante, antiinflamatorio, analgésico, neuroprotector, antioxidante, antidepresivo y ansiolítico. De igual manera el cannabidiol disminuye convulsiones, nauseas, crecimiento de tumores, ataques epilépticos y la proliferación de células cancerígenas por medio de regular y fortalecer nuestro sistema inmune mejorando el funcionamiento celular del cuerpo. </p>
      <p>Estudios han demostrado que el aceite de CBD muestra grandes mejoras en enfermedades y padecimientos por sus múltiples efectos positivos para la salud, como lo es el insomnio, párkinson, epilepsia, fibromialgia, glaucoma, esclerosis múltiple, hipertensión, depresión, estrés y el control en ataques de ansiedad entre muchos otros.</p>
      <p>¿Listo para revolucionar tu salud de manera natural?</p>
      `,
      price: 1499,
      grammage: 2000,
      discount: 0.1,
      imgUrl: 'https://i.imgur.com/xuIcDYV.png'
    },
    {
      id: 2,
      name: 'Bálsamo',
      description: `
      <p>Nuestro bálsamo corporal con extracto de cáñamo ha demostrado tener muchos beneficios para los músculos, dolores y articulaciones. </p>
      <p>Este ayuda a calmar dolores físicos, neuropáticos e inflamaciones, ya sean causados por el estrés, la hiperactividad, tensión, desgaste muscular o por lesiones. Se ha demostrado la efectividad para combatir la rigidez en articulaciones, artritis, dolores de espalda, eczema, psoriasis y quemaduras.</p>
      <p>Los principales consumidores son atletas profesionales, trabajadores físicos, gente con actividades demandantes y cualquier persona con dolores corporales o accidentes.</p>
      <p>¡Regresa al juego rápidamente de manera natural!</p>
      `,
      price: 1499,
      grammage: 3333,
      discount: 0.1,
      imgUrl: 'https://i.imgur.com/HYSmmm9.jpg'
    },
    {
      id: 3,
      name: 'Crema Anti-envejecimiento',
      description: `
      <p>Nuestra crema anti-envejecimiento con vitaminas, ingredientes de plantas medicinales, colágeno y  extracto de cáñamo ha demostrado tener muchos beneficios para la piel como combatir los efectos de la edad gracias a que el CBD regula los receptores corporales y es por eso que  juega un papel importante en el equilibrio y funcionamiento celular de la piel. </p>
      <p>Este ayuda a reducir la inflamación en la piel causada por el acné o un mal cuidado, balancea la producción de sebo, grasas y melanina, incrementa la elasticidad, suaviza, hidrata y elimina manchas y arrugas. Todo esto gracias a que  mejora el funcionamiento y la proliferación celular en la zona aplicada. </p>
      <p>Por sus multiples beneficios combate irritaciones, imperfecciones, eczemas y psoriasis. </p>
      <p>¡Reaviva tu piel y dile adiós al envejecimiento de manera natural!</p>
      `,
      price: 1499,
      grammage: 1599,
      discount: 0.1,
      imgUrl: 'https://i.imgur.com/Qz6C41w.jpg'
    },
  ];

  constructor() { }

  getProducts(): Observable<Product[]> {
    return new Observable(obs => {
      setTimeout(() => {
        obs.next(this.products);
        obs.complete();
      }, 5000);
    });
  }

  getProduct(id: number): Observable<Product> {
    const arr = this.products
    let found: Product | undefined = undefined;
    let i = 0;
    while (found == null && i < arr.length) {
      if (arr[i].id === id) {
        found = arr[i];
      }
      i++; // i = i + 1; // i += 1; // i -= -1;
    }
    return new Observable(obs => {
      setTimeout(() => {
        obs.next(found);
        obs.complete();
      }, 2000);
    });
  }
}
