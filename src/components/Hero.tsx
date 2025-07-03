import { Button } from '@/components/ui/button';
import { Star, Shield, CheckCircle } from 'lucide-react';

const Hero = () => {
  const whatsappLink = "https://wa.me/5588981844084?text=Olá!%20Tenho%20interesse%20no%20Kit%20Bomba%20para%20fortalecer%20minhas%20unhas.%20Pode%20me%20ajudar?";

  return (
    <section id="produto" className="bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100 py-8 sm:py-12 px-4 mt-16">
      <div className="max-w-6xl mx-auto">
        {/* Prova Social no Topo */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex items-center justify-center gap-2 mb-2 flex-wrap">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-xs sm:text-sm text-gray-600 font-medium">4.9/5 • Mais de 5.000 clientes satisfeitas</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Conteúdo Principal */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Headline Poderosa */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Transforme suas <span className="text-pink-600">Unhas Fracas</span> em 
              <span className="text-purple-600"> Unhas Fortes</span> já nos primeiros dias!
            </h1>

            {/* Subheadline com Autoridade */}
            <p className="text-lg sm:text-xl text-gray-700 mb-6 leading-relaxed">
              <strong>Kit Bomba</strong> - A fórmula 100% natural que já ajudou mais de 
              <strong> 5.000 mulheres</strong> a terem unhas resistentes e saudáveis.
            </p>

            {/* Benefícios Rápidos */}
            <div className="space-y-3 mb-6 sm:mb-8">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 text-sm sm:text-base">✨ Resultados visíveis já nos primeiros dias</span>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 text-sm sm:text-base">💪 3x mais resistência contra quebras</span>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 text-sm sm:text-base">🌿 100% natural, sem químicos agressivos</span>
              </div>
            </div>

            {/* Oferta Especial */}
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 text-center">
              <div className="text-black">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">🔥 OFERTA ESPECIAL</h3>
                <p className="text-base sm:text-lg font-semibold mb-2">Kit Bomba por apenas</p>
                <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 flex-wrap">
                  <span className="text-lg sm:text-2xl line-through text-gray-600">R$ 120,00</span>
                  <span className="text-2xl sm:text-4xl font-bold text-red-600">R$ 114,00</span>
                </div>
                <p className="text-xs sm:text-sm font-medium">+ Desconto Progressivo: Quanto mais kits, maior o desconto!</p>
              </div>
            </div>

            {/* CTA Principal */}
            <Button 
              className="w-full lg:w-auto bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-lg sm:text-xl transition-all duration-300 transform hover:scale-105 shadow-xl mb-4"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              💬 QUERO UNHAS FORTES AGORA!
            </Button>

            {/* Garantias */}
            <div className="flex items-center gap-4 justify-center lg:justify-start text-xs sm:text-sm text-gray-600 flex-wrap">
              <div className="flex items-center gap-1">
                <Shield className="w-4 h-4 text-green-500" />
                <span>Compra 100% Segura</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Entrega Garantida</span>
              </div>
            </div>
          </div>

          {/* Imagem do Produto */}
          <div className="text-center order-1 lg:order-2">
            <div className="relative">
              <img 
                src="/lovable-uploads/cee68431-d223-4dbf-9c42-14b360b200ce.png"
                alt="Kit Bomba - Base e Fluido Fortalecedor para Unhas"
                className="w-full max-w-xs sm:max-w-md mx-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-red-500 text-white px-3 py-1 sm:px-6 sm:py-2 rounded-full font-bold animate-pulse text-xs sm:text-base">
                OFERTA!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
