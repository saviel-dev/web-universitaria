import { useEffect, useRef, useState } from "react";
import { GraduationCap, BookOpen, Users, Award } from "lucide-react";

const stats = [
  { icon: GraduationCap, value: 5000, label: "Egresados", suffix: "+" },
  { icon: BookOpen, value: 4, label: "Carreras", suffix: "" },
  { icon: Users, value: 1200, label: "Estudiantes Activos", suffix: "+" },
  { icon: Award, value: 50, label: "Años de Trayectoria", suffix: "" },
];

const AnimatedCounter = ({ value, suffix, isVisible }: { value: number; suffix: string; isVisible: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <span className="text-4xl md:text-5xl font-semibold text-white">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-[#0929b4]">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center ${isVisible ? "animate-count" : "opacity-0"}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <stat.icon className="w-12 h-12 text-white/80 mx-auto mb-4" />
              <AnimatedCounter value={stat.value} suffix={stat.suffix} isVisible={isVisible} />
              <p className="text-white/80 mt-2 font-normal">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
