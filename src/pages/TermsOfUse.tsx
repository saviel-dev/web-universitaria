import { useState, useEffect } from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ChevronRight, FileCheck, AlertCircle, Copyright, Scale } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const TermsOfUse = () => {
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
            id: "acceptance",
            title: "Aceptación de los Términos",
            icon: FileCheck,
            content: "Al acceder y utilizar el sitio web del Instituto Universitario de Tecnología 'Tomás Lander' (IUTTOL), usted acepta cumplir con estos Términos de Uso y todas las leyes y regulaciones aplicables. Si no está de acuerdo con alguno de estos términos, le recomendamos no utilizar este sitio."
        },
        {
            id: "intellectual-property",
            title: "Propiedad Intelectual",
            icon: Copyright,
            content: "Todo el contenido presente en este sitio, incluyendo textos, gráficos, logotipos, imágenes y software, es propiedad exclusiva del IUTTOL o de sus proveedores de contenido y está protegido por las leyes de propiedad intelectual nacionales e internacionales."
        },
        {
            id: "site-use",
            title: "Uso Permitido del Sitio",
            icon: Scale,
            content: "Se concede permiso para descargar temporalmente una copia de los materiales (información o software) en el sitio web del IUTTOL solo para visualización transitoria personal y no comercial. Esta es la concesión de una licencia, no una transferencia de título."
        },
        {
            id: "limitations",
            title: "Limitación de Responsabilidad",
            icon: AlertCircle,
            content: "En ningún caso el IUTTOL o sus proveedores serán responsables de ningún daño (incluyendo, sin limitación, daños por pérdida de datos o beneficios, o debido a la interrupción del negocio) que surja del uso o la imposibilidad de usar los materiales en este sitio web."
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
                        <h1 className="text-4xl font-bold mb-4">Términos de Uso</h1>
                        <div className="flex items-center text-sm opacity-80 gap-2">
                            <a href="/" className="hover:underline">Inicio</a>
                            <ChevronRight className="w-4 h-4" />
                            <span>Términos de Uso</span>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="container py-16">
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-12 text-center">
                            <h2 className="text-3xl font-semibold text-foreground mb-4">
                                Normas y Condiciones
                            </h2>
                            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
                            <p className="text-muted-foreground leading-relaxed">
                                Estas condiciones rigen el uso de nuestro sitio web y servicios digitales.
                                Le invitamos a leerlas detenidamente para asegurar una experiencia transparente y segura.
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
            </main>

            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default TermsOfUse;
