
import { Button } from '@/components/ui/button';
import { Gift, Zap, Shield, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

const PricingOffer = () => {
  const whatsappLink = "https://wa.me/5511943703372?text=Olá!%20Tenho%20interesse%20no%20Kit%20Bomba%20para%20fortalecer%20minhas%20unhas.%20Pode%20me%20ajudar?";
  
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const endOfDay = new Date(now);
      endOfDay.setHours(23, 59, 59, 999);
      
      const difference = endOfDay.getTime() - now.getTime();
      
      if (difference > 0) {
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        
        return { hours, minutes, seconds };
      } else {
        return { hours: 23, minutes: 59, seconds: 59 };
      }
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => {
    return time.toString().padStart(2, '0');
  };

  const offers = [
    {
      kits: 1,
      discount: "5% OFF",
      originalPrice: "R$ 120,00",
      finalPrice: "R$ 114,00",
      savings: "R$ 6,00",
      popular: false
    },
    {
      kits: 2,
      discount: "10% OFF", 
      originalPrice: "R$ 240,00",
      finalPrice: "R$ 216,00",
      savings: "R$ 24,00",
      popular: true
    },
    {
      kits: 3,
      discount: "15% OFF",
      originalPrice: "R$ 360,00", 
      finalPrice: "R$ 306,00",
      savings: "R$ 54,00",
      popular: false
    }
  ];

  return (
    <section id="oferta" className="py-16 px-4 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-full font-bold mb-6">
            <Gift className="w-5 h-5" />
            OFERTA ESPECIAL POR TEMPO LIMITADO!
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Escolha Seu Kit e <span className="text-yellow-300">Economize Mais!</span>
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Quanto mais kits você leva, maior o desconto! Aproveite para estocar 
            ou presentear amigas e familiares.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {offers.map((offer, index) => (
            <div key={index} className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 ${offer.popular ? 'border-2 border-yellow-400 transform scale-105' : ''}`}>
              {offer.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm">
                    MAIS POPULAR! 🔥
                  </div>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">{offer.kits} Kit{offer.kits > 1 ? 's' : ''}</h3>
                <div className="bg-green-400 text-black px-4 py-2 rounded-full font-bold text-lg mb-4">
                  {offer.discount}
                </div>

                <div className="mb-4">
                  <div className="text-lg line-through opacity-70">{offer.originalPrice}</div>
                  <div className="text-3xl font-bold text-yellow-300">{offer.finalPrice}</div>
                  <div className="text-green-300 font-medium">Economize {offer.savings}</div>
                </div>

                <div className="space-y-2 text-sm mb-6">
                  <div>✅ {offer.kits} Base Bomba (12ml cada)</div>
                  <div>✅ {offer.kits} Fluido Bomba (60ml cada)</div>
                  <div>✅ Garantia de Resultados</div>
                </div>

                <Button 
                  className={`w-full font-bold py-3 rounded-full transition-all duration-300 ${
                    offer.popular 
                      ? 'bg-yellow-400 hover:bg-yellow-500 text-black' 
                      : 'bg-white hover:bg-gray-100 text-purple-600'
                  }`}
                  onClick={() => window.open(whatsappLink, '_blank')}
                >
                  ESCOLHER ESTE KIT
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Gatilhos de Urgência */}
        <div className="bg-red-500 rounded-2xl p-6 text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">⏰ ÚLTIMAS HORAS DA PROMOÇÃO!</h3>
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-4">
            <div className="bg-white/20 rounded-lg p-3">
              <div className="text-2xl font-bold">{formatTime(timeLeft.hours)}</div>
              <div className="text-sm">Horas</div>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <div className="text-2xl font-bold">{formatTime(timeLeft.minutes)}</div>
              <div className="text-sm">Minutos</div>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <div className="text-2xl font-bold">{formatTime(timeLeft.seconds)}</div>
              <div className="text-sm">Segundos</div>
            </div>
          </div>
          <p className="font-bold">Apenas 23 kits restantes no estoque!</p>
        </div>

        {/* Garantias */}
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <Zap className="w-8 h-8 mx-auto mb-2 text-yellow-300" />
            <h4 className="font-bold mb-1">Entrega Rápida</h4>
            <p className="text-sm opacity-90">3-14 dias (consulte regiões)</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <Shield className="w-8 h-8 mx-auto mb-2 text-green-300" />
            <h4 className="font-bold mb-1">100% Seguro</h4>
            <p className="text-sm opacity-90">Compra protegida</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <Gift className="w-8 h-8 mx-auto mb-2 text-pink-300" />
            <h4 className="font-bold mb-1">Garantia Total</h4>
            <p className="text-sm opacity-90">Resultados garantidos</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <Clock className="w-8 h-8 mx-auto mb-2 text-blue-300" />
            <h4 className="font-bold mb-1">Suporte 24h</h4>
            <p className="text-sm opacity-90">Via WhatsApp</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingOffer;
