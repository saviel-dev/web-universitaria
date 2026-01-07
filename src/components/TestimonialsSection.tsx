import { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";

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
];

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section id="testimonios" ref={sectionRef} className="py-20 bg-secondary">
      <div className="container">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Testimonios
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conoce las experiencias de nuestros egresados y cómo el IUTTOL transformó sus vidas profesionales.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-card p-8 border border-border relative ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.career}</p>
                  <p className="text-xs text-primary">{testimonial.year}</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed italic">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
