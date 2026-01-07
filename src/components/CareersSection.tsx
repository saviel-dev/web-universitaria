import { useEffect, useRef, useState } from "react";
import { Briefcase, Monitor, Calculator, Baby } from "lucide-react";
import { Button } from "@/components/ui/button";

const careers = [
  {
    icon: Briefcase,
    title: "Administración",
    description: "Forma profesionales capaces de gestionar organizaciones con eficiencia, liderazgo y visión estratégica para el éxito empresarial.",
    duration: "3 años",
    color: "bg-blue-500",
  },
  {
    icon: Monitor,
    title: "Informática",
    description: "Desarrolla competencias en programación, sistemas de información, redes y tecnologías emergentes para la era digital.",
    duration: "3 años",
    color: "bg-emerald-500",
  },
  {
    icon: Calculator,
    title: "Contaduría y Finanzas",
    description: "Prepara expertos en análisis financiero, contabilidad y gestión económica con ética y responsabilidad profesional.",
    duration: "3 años",
    color: "bg-amber-500",
  },
  {
    icon: Baby,
    title: "Educación Preescolar",
    description: "Forma educadores especializados en el desarrollo integral de la primera infancia con metodologías innovadoras.",
    duration: "3 años",
    color: "bg-rose-500",
  },
];

const CareersSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="carreras" ref={sectionRef} className="py-20 bg-background">
      <div className="container">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nuestras Carreras
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos programas académicos de calidad diseñados para formar profesionales 
            competitivos y preparados para los retos del mercado laboral actual.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {careers.map((career, index) => (
            <div
              key={index}
              className={`group bg-card border border-border p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`${career.color} p-4 rounded inline-block mb-4`}>
                <career.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{career.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {career.description}
              </p>
              <div className="flex justify-between items-center pt-4 border-t border-border">
                <span className="text-sm text-primary font-medium">
                  Duración: {career.duration}
                </span>
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                  Ver más →
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
