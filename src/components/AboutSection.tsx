import { useEffect, useRef, useState } from "react";
import { Target, Eye, Award, Users } from "lucide-react";

const AboutSection = () => {
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

  const values = [
    { icon: Award, title: "Excelencia", desc: "Compromiso con la calidad educativa" },
    { icon: Users, title: "Comunidad", desc: "Ambiente colaborativo y de apoyo" },
  ];

  return (
    <section id="sobre" ref={sectionRef} className="py-20 bg-secondary">
      <div className="container">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Sobre Nosotros
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Misión */}
          <div className={`bg-card p-8 shadow-sm border border-border ${isVisible ? "animate-slide-left" : "opacity-0"}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-medium text-foreground">Misión</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-justify indent-6">
              Formar profesionales integrales y líderes tecnológicos con excelencia académica,
              valores éticos y capacidad de innovación, preparados para contribuir al desarrollo
              sostenible de la sociedad venezolana y responder a los desafíos del mundo globalizado.
            </p>
          </div>

          {/* Visión */}
          <div className={`bg-card p-8 shadow-sm border border-border ${isVisible ? "animate-slide-right" : "opacity-0"}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-medium text-foreground">Visión</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-justify indent-6">
              Ser reconocidos como una institución de educación superior de referencia nacional
              e internacional, destacada por la excelencia de sus programas académicos, la
              investigación aplicada y la formación de profesionales comprometidos con el
              progreso tecnológico y social.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className={`grid grid-cols-2 md:grid-cols-2 gap-6 ${isVisible ? "animate-fade-up delay-300" : "opacity-0"}`}>
          {values.map((value, index) => (
            <div key={index} className="text-center p-6 bg-card border border-border">
              <value.icon className="w-10 h-10 text-primary mx-auto mb-3" />
              <h4 className="font-medium text-foreground mb-1">{value.title}</h4>
              <p className="text-sm text-muted-foreground">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
