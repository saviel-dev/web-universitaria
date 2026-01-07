import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    { icon: MapPin, text: "Ocumare del Tuy, Estado Miranda, Venezuela" },
    { icon: Phone, text: "+58 412-123-4567" },
    { icon: Mail, text: "info@iuttol.edu.ve" },
    { icon: Clock, text: "Martes y sábados, de 8:00 a 12:00 p. m., y viernes, de 7:00 a 4:30 p. m." },
  ];

  return (
    <section id="contacto" ref={sectionRef} className="py-20 bg-background">
      <div className="container">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Contáctanos
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes preguntas? Estamos aquí para ayudarte. Escríbenos y te responderemos lo antes posible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:px-20">
          {/* Contact Info */}
          <div className={`${isVisible ? "animate-slide-left" : "opacity-0"}`}>
            <h3 className="text-2xl font-medium text-foreground mb-6">Información de Contacto</h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-muted-foreground pt-2">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="mt-8 h-48 bg-secondary border border-border overflow-hidden rounded-md">
              <iframe
                title="Ubicación IUTTOL"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1964.6366113946056!2d-66.7775719!3d10.1158858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2ae78ecb89f88f%3A0x5848e8cfdd5cb94b!2sIUTTOL!5e0!3m2!1ses!2sve!4v1710000000000!5m2!1ses!2sve"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${isVisible ? "animate-slide-right" : "opacity-0"}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Nombre</label>
                  <Input
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-secondary border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-secondary border-border"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Asunto</label>
                <Input
                  placeholder="Asunto del mensaje"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="bg-secondary border-border"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Mensaje</label>
                <Textarea
                  placeholder="Escribe tu mensaje..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-secondary border-border resize-none"
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
