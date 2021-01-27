import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq-root',
  templateUrl: './faq-root.component.html',
  styleUrls: ['./faq-root.component.scss']
})
export class FaqRootComponent implements OnInit {
  questions = [
    {
      question: '¿Qué es el CBD?',
      answer: `
      <p>CBD significa cannabidiol. Es uno de los más de 100 compuestos químicos activos (o "cannabinoides") en la planta de marihuana y cáñamp. </p>
      <p>Suele ser el segundo cannabinoide más abundante, detrás del THC.</p>
      `
    },
    {
      question: '¿El CBD proviene de la marihuana o del cáñamo? ¿Y cuál es la diferencia entre los dos?',
      answer: `
      <p>La marihuana y el cáñamo son dos variedades diferentes de cannabis que provienen de la misma especie de planta (Cannabis sativa L). En general, el CBD se encuentra en abundancia en ambos. Sin embargo, es importante tener en cuenta que el CBD se encuentra normalmente en las semillas y el tallo de la marihuana, no en los cogollos en flor (que es la parte que se fuma).</p>
      <p>La planta de cáñamo es una variedad de cannabis completamente diferente que contiene altas cantidades de CBD (tallo, cogollos, etc.) y prácticamente cero rastros de THC. Si una planta de cáñamo contiene más de 0.3% de THC, entonces técnicamente es una planta de “marihuana”.</p>
      <p>La mayoría de los productos a base de CBD provienen de la planta industrial de cáñamo.</p>
      `
    },
    {
      question: '¿Cuál es la diferencia entre el CBD y el THC?',
      answer: `
      <p>El THC afecta al cerebro al unirse a los receptores CB-1 naturales del sistema nervioso central. El CBD es una molécula de forma diferente que se une a los receptores CB-2 en las células y los tejidos corporales fuera del sistema nervioso central.</p>
      `
    },
    {
      question: '¿Me prondrá high el CBD?',
      answer: `
      <p>No, el CBD no te drogará. No es intoxicante. El THC es la molécula que se une a los receptores de nuestro cerebro y es la responsable de los efectos psicoactivos de la marihuana.</p>
      <p>De hecho, el CBD es antagónico al efecto de la marihuana; Algunas investigaciones expresan su potencial para evitar que las moléculas de THC se unan a los receptores del cerebro (de ahí la razón por la que a menudo se utiliza para controlar los efectos de la "paranoia" de las cepas superpotentes de THC).</p>
      `
    },
    {
      question: '¿CÓMO TOMO CBD?',
      answer: `
      <p>La mayoría de los productos de CBD se toman por vía oral a través de gotas de aceite que se colocan debajo de la lengua y se mantienen durante 60 segundos antes de tragar. Las cremas y ungüentos tópicos también son eficaces, al igual que fumar o vaporizar cepas de marihuana ricas en CBD como ACDC.</p>
      `
    },
    {
      question: '¿QUÉ ES EL ACEITE DE CBD?',
      answer: `
      <p>El aceite de CBD es un extracto de cáñamo industrial líquido que contiene CBD prácticamente puro. Por lo general, se elabora a partir de semillas de la planta de cáñamo (aceite de cáñamo CBD) y el tallo del cáñamo industrial.</p>
      `
    },
    {
      question: '¿CÓMO FUNCIONA EL CBD?',
      answer: `
      <p>El CBD funciona uniéndose a los receptores de cannabinoides en el sistema endocannabinoide del cuerpo. Estos receptores se han encontrado en prácticamente todos los tipos de células y tejidos del cuerpo humano (de ahí la aparentemente interminable variedad de usos del CBD).</p>
      `
    },
    {
      question: '¿ES EL CBD NATURAL?',
      answer: `
      <p>Sí. El CBD es un compuesto químico 100% natural que proviene directamente de la planta de cannabis. No está hecho sintéticamente.</p>
      `
    },
    {
      question: '¿TODAS LAS CEPAS DE MARIHUANA TIENEN CBD?',
      answer: `
      <p>No todas las variedades de marihuana tienen CBD en sus botones florales. Pero sí, cada planta de cannabis (ya sea marihuana o cáñamo) tendrá CBD en el tallo y las semillas.</p>
      `
    },
    {
      question: '¿CÓMO SE AISLA EL CBD DE LA PLANTA DE CANNABIS?',
      answer: `
      <p>La extracción con CO2 es el mejor método para extraer el aislado de CBD puro, en cuyo estado existe como un cristal transparente / blanco. Este método se prefiere a otros métodos porque prácticamente no deja rastros de contaminantes químicos en el producto final. </p>
      <p>La extracción con alcohol es otro método, en el que un líquido como etanol, butano o hexano se pasa a través de la materia prima de la planta para extraer el CBD y luego se evapora para dejar solo el cannabinoide activo. Este puede ser un método peligroso porque es propenso a dejar rastros excesivos de los químicos butano o hexano en el extracto.</p>
      <p>Además, infundir aceite vegetal (es decir, aceite de oliva) es otra forma eficaz de extraer CBD. Todo lo que debe hacer es triturar la materia prima vegetal, descarboxilarla (calentarla) y dejarla reposar en aceite hirviendo (100 grados Celsius) durante aproximadamente 2 horas.</p>
      `
    },
    {
      question: '¿HAY EFECTOS SECUNDARIOS DEL USO DE CBD? ¿ES SEGURO?',
      answer: `
      <p>El único peligro / efecto secundario significativo del medicamento es vapear aceites de CBD que se produjeron con un agente diluyente, como el propilenglicol. Cuando se quema / vaporiza, el propilenglicol produce formaldehído, que es un carcinógeno conocido.</p>
      <p>Los aceites de CBD producidos por extracción con CO2 son mucho más seguros y puros que los aceites producidos con alcohol líquido / agentes diluyentes. Aparte de eso, la mayoría de las investigaciones han concluido que el CBD es perfectamente seguro y no tiene efectos secundarios conocidos, aunque algunos usuarios han informado de somnolencia, aturdimiento, presión arterial baja y boca seca.</p>
      `
    },
    {
      question: '¿PUEDO COCINAR CON CBD?',
      answer: `
      <p>¡Absolutamente! Los aceites con infusión de CBD son un ingrediente fantástico para cocinar.</p>
      `
    },
    {
      question: '¿HAY ESTUDIOS SOBRE CBD?',
      answer: `
      <p>Se han realizado miles de estudios científicos específicamente sobre el CBD. Project CBD es una organización sin fines de lucro dedicada estrictamente a documentar el progreso de la investigación sobre esta increíble droga.</p>
      `
    },
    {
      question: '¿QUÉ PASA CON LOS TÓPICOS DE CBD… FUNCIONAN?',
      answer: `
      <p>Los tópicos de CBD han demostrado ser efectivos en varias circunstancias. Muchas personas confían en ellos.</p>
      `
    },
    {
      question: '¿Aparecerá el CBD en una prueba de drogas?',
      answer: `
      <p>Es increíblemente poco probable que un producto de CBD de alta calidad con un mínimo de THC aparezca en una prueba de drogas. Sin embargo, los productos de CBD de baja calidad pueden contener más trazas de THC de lo que afirman, en cuyo caso es posible que una prueba de detección detecte el medicamento. </p>
      <p>Las investigaciones han demostrado que las personas que consumen 6 mg de THC al día tienen un 25% de probabilidades de fallar en una prueba de drogas. Esto se traduce en aproximadamente 2000 mg por día de aceite de CBD con un contenido de THC del 0,3% o menos.</p>
      `
    },
    {
      question: '¿CÓMO SÉ QUÉ PORCIÓN DE CBD DEBO TOMAR?',
      answer: `
      <p>Este es complicado porque, por supuesto, depende de para qué estés usando el compuesto y también de qué tan fuerte sea el producto. La mayoría de las personas consumen entre 10 y 50 mg de CBD por día en total. (Como referencia, 1 ml de un aceite potente puede contener 50 mg de CBD.</p>
      <p>Asegúrese de leer la etiqueta de su producto para garantizar una porción adecuada. Por eso nosotros diseñamos unas tablas que funcionan dependiendo de tu peso y tu condición con base a muchos estudios clínicos aprobados.</p>
      `
    },
    {
      question: ' ¿CÓMO SÉ QUE ES SEGURO COMPRAR CBD EN LÍNEA?',
      answer: `
      <p>Para garantizar la legalidad de comprar productos de CBD en línea, debe asegurarse de que la empresa a la que está comprando sea de buena reputación y de que el producto esté elaborado con cáñamo industrial con menos del 0,3% de contenido de THC.</p>
      <p>Recuerde, millones de personas en todo el mundo usan productos de CBD todos los días. Es muy importante que el producto cuente con CoA (Certificado de Análisis) para poder verificar la pureza y calidad del producto.</p>
      `
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
