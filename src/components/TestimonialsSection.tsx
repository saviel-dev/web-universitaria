import { useEffect, useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "María González",
    career: "Egresada de Informática",
    year: "2023",
    quote: "El IUTTOL me brindó las herramientas y conocimientos necesarios para desarrollarme profesionalmente. Hoy trabajo en una empresa tecnológica líder gracias a la formación recibida.",
    initials: "MG",
  },
  {
    name: "Carlos Rodríguez",
    career: "Egresado de Administración",
    year: "2022",
    quote: "La calidad de los profesores y el enfoque práctico de las clases me prepararon para enfrentar los retos del mundo empresarial con confianza y profesionalismo.",
    initials: "CR",
  },
  {
    name: "Ana Martínez",
    career: "Egresada de Contaduría",
    year: "2023",
    quote: "Gracias al IUTTOL logré mi título profesional y ahora lidero el departamento de finanzas de una importante empresa. La educación aquí es de primera calidad.",
    initials: "AM",
  },
  {
    name: "José Pérez",
    career: "Egresado de Educación Preescolar",
    year: "2021",
    quote: "La formación pedagógica que recibí me ha permitido desarrollar metodologías innovadoras en el aula. IUTTOL forma verdaderos profesionales de la educación.",
    initials: "JP",
  },
  {
    name: "Laura Sánchez",
    career: "Egresada de Informática",
    year: "2022",
    quote: "Los laboratorios y el equipo tecnológico del IUTTOL me prepararon para enfrentar los desafíos del mundo digital actual. Recomiendo esta institución.",
    initials: "LS",
  },
];

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      result.push({ ...testimonials[index], originalIndex: index });
    }
    return result;
  };

  return (
    <section id="testimonios" ref={sectionRef} className="py-20 bg-secondary">
      <div className="container">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Testimonios
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto font-normal">
            Conoce las experiencias de nuestros egresados y cómo el IUTTOL transformó sus vidas profesionales.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 bg-background shadow-md h-10 w-10"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 bg-background shadow-md h-10 w-10"
            onClick={nextSlide}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6 px-4">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={`${testimonial.originalIndex}-${currentIndex}`}
                className={`bg-card p-8 border border-border relative transition-all duration-500 ${isVisible ? "animate-fade-up" : "opacity-0"
                  }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center font-medium text-lg">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground font-normal">{testimonial.career}</p>
                    <p className="text-xs text-primary font-normal">{testimonial.year}</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed italic font-normal">
                  "{testimonial.quote.split(" ").length > 25
                    ? testimonial.quote.split(" ").slice(0, 25).join(" ") + "..."
                    : testimonial.quote}"
                </p>
              </div>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentIndex
                    ? "bg-primary w-6"
                    : "bg-primary/30 hover:bg-primary/50"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
