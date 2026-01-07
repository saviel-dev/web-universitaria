import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "584121234567";
  const message = "Hola, me gustaría obtener más información sobre el IUTTOL.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-whatsapp hover:bg-whatsapp/90 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 animate-bounce"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default WhatsAppButton;
