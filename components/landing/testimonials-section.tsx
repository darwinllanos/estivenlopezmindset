"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Jero arias",
    role: "Empleado | Ahora vive de los negocios digitales",
    image: "/jeroarias.png",
    quote: "Pase de no tener absolutamente ni un peso para cenar a vivir en la abundancia, gracias Estiven, por que gracias a ti logre cambiar mi vida y la de mi familia, ahora vivo de los negocios digitales y tengo la libertad financiera que siempre soñé.",
    results: "De no tener para la cena a 3200 USD en un dia"
  },
  {
    name: "Sergio",
    role: "Empleado | Empresario",
    image: "/Sergio.png",
    quote: "Gracias a ti, logre cambiar mi vida. El que se pegue a esto sin duda tiene que crecer mucho. La mejor inversion que he hecho",
    results: "La mejor inversión que he hecho"
  },
  {
    name: "Santiago",
    role: "Ventas en la calle | Dropshipper",
    image: "/Santiago.png",
    quote: "Conoci a Estiven, logre entrenar con el, fue mi primer mentor mi me llevo a otro nivel en muy poco tiempo",
    results: "De vender celulares en la calle a facturar +600K USD en Dropshipping."
  },
  {
    name: "Andres",
    role: "Ex-Militar | Contruyendo mejor version",
    image: "/Andres.png",
    quote: "Gracias a estiven logre tener una mayor claridad hacia mis objetivos, ahora cada dia construyo mi mejor version y estoy mas cerca de alcanzar mi objetivo",
    results: "Alineado con su proposito"
  },
  {
    name: "Lucas",
    role: "Vida normal | Cambiando de estilo de vida",
    image: "/Lucas.png",
    quote: "Gracias a Dios el cambio en mi cuerpo una cosa fenomenal y he bajado mas de 14 kilos en mes y medio que llevo aca. Desde que Stiven me explico como medir macros y todo ha sido una locura",
    results: "Construyendo su marca personal y creciendo cada día"
  },
  {
    name: "Victor",
    role: "Encontrando su fe | Alineado con su proposito",
    image: "/General.png",
    quote: "La sala fenix  es un lugar donde encontre con la fe, ha sido un espacio increible de cambio. Estiven es otra vuelta. Tener a Dios como base, como guia siempre, respetar mi mente, mi cuerpo, mi mente mi alma.",
    results: "Alineado con su proposito"
  },
  {
    name: "Brayan",
    role: "Crecimiento personal | Alineado con su proposito",
    image: "/General.png",
    quote: "Es una locura en el popco tiempo que llevo en la sala, la alineacion, sabiduria, conocimiento y accion que transforma, yo solo tengo que agradecer primero a Dios por enviarme el mejor entorno para aprender y ser mejor cada dia, Stiven gracias por crear esta familia tan increible y el contenido de valor",
    results: "Alineado con su proposito"
  },
  {
    name: "Robinson",
    role: "Cambio de mentalidad | Crecimiento personal",
    image: "/General.png",
    quote: "La sala fenix para mi es un cambio por completo de la forma en como pensaba de la vida, me ayudo a cuestionarme y a establecer esa obsesion por querer un cambio, invertir en la sala fenix es la mejor decision que tome.",
    results: "Alineado con su proposito"
  },
  {
    name: "Nicky",
    role: "Crecimiento interior | Emprendedor",
    image: "/General.png",
    quote: "He ganado aqui aprendizaje, mentalidad, fisico, alineacion, ego fuera! Abri mi marca, cree un negocio del alquiler de vehiculos con la mentalidad que adquiri aqui, afronte la muerte de mi padre hace como 2 meses con gratitud. Todo desde el amor y entendiendo que la respuesta para todo es Dios.",
    results: "Alineado con su proposito"
  },
  {
    name: "Steven",
    role: "Cumbre de su vida | Alineado con su proposito",
    image: "/General.png",
    quote: "Me enfoque en entrar a la sala fenix y decidi invertir en mi y he cumplido suenos que eran solo una ilusion hace 3 anos en tan solo 3 meses. Gloria a Dios por colocarme en este entorno tan chimba.",
    results: "Alineado con su proposito"
  },
  {
    name: "Felipe",
    role: "Crecimiento personal",
    image: "/General.png",
    quote: "Gracias Stiven por removerme los miedos, por hacerme despertar esa hambre de mejorar cada dia y por impulsarme a trabajar mas por mis metas.",
    results: "Alineado con su proposito"
  },
  {
    name: "Daniel",
    role: "Sin dinero | Deudor | Cambiando su mentalidad",
    image: "/General.png",
    quote: "Empeze este ano debiendo aproximadamente 6000 dolares en tarjetas de credito que gaste en estupideces y unas de las cosas que me propuse este mes de enero es pagar almenos la mitad de esas deudas y apenas estamos a 12 de enero y ya he pagado 4000 dolares en las tarjetas y otras cosas mas realmente la mentalidad de estiven de que Dios es abundante ayuda muchhoo a seguir adelante apenas estoy iniciando dejando malos habitos y otras cosas pero este ano me he sentido bien conmigo mismo y siento que estoy avanznado. Gracias Stiven.",
    results: "sentirse bien consigo mismo y avanzando en su camino de crecimiento personal"
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 lg:py-32 bg-background" id="testimonios">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4">Testimonios Reales</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Lo que dicen quienes ya lo viven
          </h2>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden ring-4 ring-primary/20">
                    <img
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg md:text-xl text-card-foreground mb-6 leading-relaxed">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  
                  <div className="mb-4">
                    <p className="font-bold text-card-foreground text-lg">{testimonials[currentIndex].name}</p>
                    <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
                  </div>
                  
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm">
                    {testimonials[currentIndex].results}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-transparent"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-muted hover:bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
          
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-transparent"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Grid of Mini Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                index === currentIndex 
                  ? 'border-primary bg-primary/5' 
                  : 'border-border bg-card hover:border-primary/50'
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-card-foreground text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2">
                "{testimonial.quote.substring(0, 80)}..."
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
