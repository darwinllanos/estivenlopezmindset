"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Necesito experiencia previa?",
    answer: "No, absolutamente no. El 80% de nuestros alumnos más exitosos comenzaron sin ninguna experiencia. Nuestro sistema de entrenamiento y mentoría te guiará paso a paso. Lo único que necesitas es ganas de aprender y disposición para trabajar en ti mismo."
  },
  {
    question: "¿Cuánto tiempo necesito dedicar?",
    answer: "Puedes comenzar dedicando solo 2-3 horas diarias mientras mantienes tu trabajo actual. A medida que tus resultados crezcan, podrás decidir si quieres hacerlo a tiempo completo. La clave está en la consistencia, no en la cantidad de horas."
  },
  {
    question: "¿Cuánto dinero necesito para empezar?",
    answer: "La inversión inicial es mínima comparada con cualquier negocio tradicional. Ofrecemos inicio desde $99 USD que incluyen productos, materiales de marketing y acceso a nuestra plataforma de entrenamiento."
  },
  {
    question: "¿En cuánto tiempo veré resultados?",
    answer: "Esto depende de tu nivel de compromiso y acción. Algunas personas ven sus primeros resultados en las primeras 2 semanas, mientras que otras tardan 2-3 meses. Lo importante es que con trabajo constante, los resultados son inevitables. Tenemos historias de personas que reemplazaron su sueldo en 6-12 meses."
  },
  {
    question: "¿Qué soporte recibiré al unirme?",
    answer: "Tendrás acceso a: 1) Un mentor personal que te guiará en tus primeros días, 2) Grupo de WhatsApp con el equipo activo 24/7, 3) Entrenamientos semanales en vivo, 4) Biblioteca de recursos y materiales, 5) Eventos presenciales y virtuales mensuales."
  }
];

export function FAQSection() {
  return (
    <section className="py-20 lg:py-32 bg-card" id="faq">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-4">Preguntas Frecuentes</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-card-foreground mb-6 text-balance">
              Resolvemos tus dudas
            </h2>
            <p className="text-lg text-muted-foreground">
              Aquí encontrarás respuestas a las preguntas más comunes. 
              Si tienes alguna otra, no dudes en contactarnos.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background rounded-2xl border border-border px-6 data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-card-foreground hover:text-primary py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              ¿Tienes más preguntas? Estamos aquí para ayudarte.
            </p>
            <a 
              href="#contacto" 
              className="text-primary font-semibold hover:underline"
            >
              Contáctanos directamente →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
