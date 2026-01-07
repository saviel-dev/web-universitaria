import { useState, useEffect } from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ChevronRight, Shield, Lock, Eye, FileText, UserCheck } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
            setIsDark(true);
            document.documentElement.classList.add("dark");
        }
    }, []);

    const toggleTheme = () => {
        setIsDark(!isDark);
        if (!isDark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    const sections = [
        {
            id: "visitor-privacy",
            title: "Aviso de Privacidad para Visitantes",
            icon: Eye,
            content: "El Instituto Universitario de Tecnología 'Tomás Lander' (IUTTOL) se compromete a proteger la privacidad de los visitantes de nuestro sitio web. Recopilamos información limitada, como direcciones IP y datos de navegación, únicamente para mejorar la experiencia del usuario y garantizar la seguridad del sitio."
        },
        {
            id: "student-privacy",
            title: "Aviso de Privacidad para Alumnos y Aspirantes",
            icon: UserCheck,
            content: "La información académica y personal de nuestros alumnos y aspirantes es tratada con la más estricta confidencialidad. Los datos recopilados se utilizan exclusivamente para fines académicos, administrativos y de comunicación institucional, cumpliendo con las normativas legales vigentes."
        },
        {
            id: "data-protection",
            title: "Protección y Seguridad de Datos",
            icon: Shield,
            content: "Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos personales contra el acceso no autorizado, la pérdida o la alteración. Utilizamos protocolos de encriptación y servidores seguros para resguardar la información sensible."
        },
        {
            id: "rights",
            title: "Derechos de los Usuarios",
            icon: FileText,
            content: "Usted tiene derecho a acceder, rectificar o solicitar la eliminación de sus datos personales en nuestro poder. Para ejercer estos derechos, puede ponerse en contacto con nuestra oficina de administración a través de los canales oficiales proporcionados en este sitio web."
        }
    ];

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <TopBar />
            <Navbar isDark={isDark} toggleTheme={toggleTheme} />

            <main className="flex-grow">
                {/* Header Section */}
                <div className="bg-[#0929b4] text-white py-16">
                    <div className="container">
                        <h1 className="text-4xl font-bold mb-4">Política de Privacidad</h1>
                        <div className="flex items-center text-sm opacity-80 gap-2">
                            <a href="/" className="hover:underline">Inicio</a>
                            <ChevronRight className="w-4 h-4" />
                            <span>Política de Privacidad</span>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="container py-16">
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-12 text-center">
                            <h2 className="text-3xl font-semibold text-foreground mb-4">
                                Comprometidos con su Seguridad
                            </h2>
                            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
                            <p className="text-muted-foreground leading-relaxed">
                                En IUTTOL, valoramos su confianza y nos esforzamos por proteger su información personal.
                                Esta política detalla cómo manejamos los datos en nuestra institución, asegurando transparencia y cumplimiento legal.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            <Accordion type="single" collapsible className="w-full space-y-4">
                                {sections.map((section) => (
                                    <AccordionItem
                                        key={section.id}
                                        value={section.id}
                                        className="border border-border rounded-lg bg-card px-6"
                                    >
                                        <AccordionTrigger className="hover:no-underline py-6">
                                            <div className="flex items-center gap-4 text-left">
                                                <div className="p-2 bg-primary/10 rounded-full">
                                                    <section.icon className="w-5 h-5 text-primary" />
                                                </div>
                                                <span className="text-lg font-medium text-foreground">{section.title}</span>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="pb-6 text-muted-foreground leading-relaxed pl-[3.25rem]">
                                            {section.content}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-secondary py-16 border-t border-border">
                    <div className="container text-center">
                        <h2 className="text-2xl font-semibold mb-6">¿Listo para ser parte de nuestra comunidad?</h2>
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
                            Inscríbete en Línea
                        </Button>
                    </div>
                </div>
            </main>

            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default PrivacyPolicy;
