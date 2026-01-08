const testimonials = [
  {
    name: "María González",
    career: "Egresada de Informática",
    year: "2023",
    quote: "El IUTTOL me dio las herramientas para desarrollarme. Hoy trabajo en una empresa líder gracias a su formación.",
    initials: "MG",
  },
  {
    name: "Carlos Rodríguez",
    career: "Egresado de Administración",
    year: "2022",
    quote: "Profesores de calidad y enfoque práctico me prepararon para enfrentar retos empresariales con confianza.",
    initials: "CR",
  },
  {
    name: "Ana Martínez",
    career: "Egresada de Contaduría",
    year: "2023",
    quote: "Gracias al IUTTOL logré mi título y lidero finanzas en una gran empresa. La educación es de primera.",
    initials: "AM",
  },
  {
    name: "José Pérez",
    career: "Egresado de Educación Preescolar",
    year: "2021",
    quote: "La formación recibida me permitió desarrollar metodologías innovadoras. IUTTOL forma verdaderos profesionales.",
    initials: "JP",
  },
  {
    name: "Laura Sánchez",
    career: "Egresada de Informática",
    year: "2022",
    quote: "Laboratorios y equipo tecnológico me prepararon para los desafíos digitales. Recomiendo ampliamente esta institución.",
    initials: "LS",
  },
];

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section id="testimonios" className="py-20 bg-secondary">
      <div className="container">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Testimonios
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto font-normal">
            Conoce las experiencias de nuestros egresados y cómo el IUTTOL transformó sus vidas profesionales.
          </p>
        </div>

        <div className="px-4 md:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 pb-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-card p-8 h-full rounded-2xl border border-border/50 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/50 group relative overflow-hidden">
                    {/* Decorative accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />

                    <Quote className="w-12 h-12 text-primary/10 absolute top-6 right-6 group-hover:text-primary/20 transition-colors" />

                    <div className="flex items-center gap-4 mb-6 relative">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl shadow-md ring-2 ring-background shrink-0">
                        {testimonial.initials}
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground text-lg leading-tight">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground font-medium">{testimonial.career}</p>
                        <p className="text-xs text-primary font-semibold mt-0.5">Promoción {testimonial.year}</p>
                      </div>
                    </div>

                    <div className="relative">
                      <p className="text-foreground/80 leading-loose italic font-medium text-[15px]">
                        "{testimonial.quote}"
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 h-10 w-10 border-primary/20 hover:border-primary hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="hidden md:flex -right-12 h-10 w-10 border-primary/20 hover:border-primary hover:bg-primary hover:text-primary-foreground" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
