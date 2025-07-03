
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingWhatsApp = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=5588981844084&text=Ol%C3%A1%21+Tenho+interesse+no+Kit+Bomba+para+fortalecer+minhas+unhas.+Pode+me+ajudar%3F&type=phone_number&app_absent=0";

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={() => window.open(whatsappLink, '_blank')}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-2xl animate-pulse"
        size="icon"
      >
        <MessageCircle className="w-8 h-8" />
      </Button>
      
      {/* Tooltip */}
      <div className="absolute bottom-20 right-0 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-90">
        Fale conosco agora!
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </div>
    </div>
  );
};

export default FloatingWhatsApp;
