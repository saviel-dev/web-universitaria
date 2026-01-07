import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCampus from "@/assets/hero-campus.jpg";
import heroLab from "@/assets/hero-lab.jpg";
import heroGraduation from "@/assets/hero-graduation.jpg";

const slides = [
  {
    image: heroCampus,
    title: "Bienvenidos al IUTTOL",
    subtitle: "Formando líderes tecnológicos desde 1974",
    cta: "Conoce más",
  },
  {
    image: heroLab,
    title: "Tecnología de Vanguardia",
    subtitle: "Laboratorios equipados para tu formación profesional",
    cta: "Ver carreras",
  },
  {
    image: heroGraduation,
    title: "Tu Futuro Comienza Aquí",
    subtitle: "Únete a miles de profesionales exitosos",
    cta: "Inscríbete",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <section id="inicio" className="relative h-[70vh] min-h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#003087]/70" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 animate-fade-up text-white">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-up delay-200 text-white">
                {slide.subtitle}
              </p>
              <Button
                size="lg"
                className="animate-fade-up delay-300 font-medium px-8 bg-white text-[#003087] hover:bg-gray-100 hover:text-[#003087]"
              >
                {slide.cta}
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 h-12 w-12"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 h-12 w-12"
        onClick={nextSlide}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
