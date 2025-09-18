import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        asChild
        size="lg"
        className="rounded-full h-14 w-14 bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
      >
        <a
          href="https://api.whatsapp.com/send?phone=919342514618&text=Salam%2C%20I%20am%20interested%20in%20learning%20Quran"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={24} />
        </a>
      </Button>
    </div>
  );
};

export default WhatsAppFloat;