"use client";

import { Quote, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";

export function StorySection() {
  return (
    <section className="py-20 lg:py-32 bg-card" id="historia">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-4">Mi Historia</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-card-foreground text-balance">
              De la incertidumbre a la libertad financiera
            </h2>
          </div>

          {/* Story Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img
                  src="/EstibenHistoria.png"
                  alt="Equipo de trabajo"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Quote Card */}
              <div className="absolute -bottom-8 -right-8 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
                <Quote className="h-8 w-8 opacity-50 mb-2" />
                <p className="text-sm italic">
                  "El mejor momento para empezar fue ayer. El segundo mejor momento es ahora."
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hace 5 años, mi vida era muy diferente. Trabajaba más de 12 horas 
                  diarias en un empleo que apenas me permitía llegar a fin de mes. 
                  No tenía tiempo para mi familia, vivía estresado y sentía que 
                  mi vida se escapaba entre las manos.
                </p>
                <p>
                  Un día, decido dejar mi empleo y emprender. Al principio 
                  fui dificil, pero algo en mi corazón me dijo que tenía que 
                  intentarlo. <strong className="text-card-foreground">Fue la mejor decisión de mi vida.</strong>
                </p>
                <p>
                  Hoy disfruto de libertad financiera, trabajo desde cualquier 
                  parte del mundo y, lo más importante, tengo tiempo de calidad 
                  con las personas que amo. He ayudado a docenas de personas 
                  a transformar sus vidas de la misma manera.
                </p>
              </div>

              {/* Video reference button */}
              <div className="pt-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="default" className="rounded-full">
                      <Play className="mr-2 h-4 w-4" /> Ver mi historia (video)
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl w-full">
                    <DialogTitle>Mi historia — Video</DialogTitle>
                    <DialogDescription>
                      Reproduce el video donde cuento mi historia completa.
                    </DialogDescription>
                    <div className="mt-4">
                      <div className="aspect-video w-full rounded-md overflow-hidden">
                        <iframe
                          src="https://www.youtube.com/embed/w0_dV8Y_Kr8?rel=0"
                          title="Mi historia"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        />
                      </div>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <DialogClose asChild>
                        <Button variant="ghost">Cerrar</Button>
                      </DialogClose>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              {/* Timeline */}
              <div className="border-l-2 border-primary/30 pl-6 space-y-6 mt-8">
                <div className="relative">
                  <div className="absolute -left-8 w-4 h-4 rounded-full bg-primary" />
                  <p className="text-sm text-muted-foreground">2018</p>
                  <p className="font-semibold text-card-foreground">Estudiando aviacion</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-8 w-4 h-4 rounded-full bg-primary/60" />
                  <p className="text-sm text-muted-foreground">2020</p>
                  <p className="font-semibold text-card-foreground">Trabajo en un empleo</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-8 w-4 h-4 rounded-full bg-accent" />
                  <p className="text-sm text-muted-foreground">2021</p>
                  <p className="font-semibold text-card-foreground">Emprendo</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-8 w-4 h-4 rounded-full bg-accent" />
                  <p className="text-sm text-muted-foreground">2023</p>
                  <p className="font-semibold text-card-foreground">Me alineo gracias a un mentor</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-8 w-4 h-4 rounded-full bg-accent" />
                  <p className="text-sm text-muted-foreground">2025</p>
                  <p className="font-semibold text-card-foreground">Viajo por el mundo</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-8 w-4 h-4 rounded-full bg-accent" />
                  <p className="text-sm text-muted-foreground">2026</p>
                  <p className="font-semibold text-card-foreground">Impacto en la vida de las personas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
