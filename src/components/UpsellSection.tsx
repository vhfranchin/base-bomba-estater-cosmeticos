
import { ShoppingCart, Gift, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const UpsellSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold mb-4">
            <Gift className="w-5 h-5" />
            OFERTA ESPECIAL LIMITADA!
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Que tal Potencializar Ainda Mais os Resultados?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Combine a Base Bomba com o Fluido Bomba e tenha unhas perfeitas mais rápido!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Produto Individual */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Compra Individual</h3>
            <div className="bg-white rounded-xl p-6 text-gray-900 mb-6">
              <h4 className="font-bold text-lg mb-2">Base Bomba</h4>
              <p className="text-sm text-gray-600 mb-4">Fortalecedor com bioativos naturais</p>
              <div className="mb-2">
                <span className="text-lg line-through text-gray-500">R$ 60,00</span>
              </div>
              <div className="text-3xl font-bold text-pink-600">R$ 40,00</div>
            </div>
            <Button 
              className="w-full bg-white text-purple-600 hover:bg-gray-100 font-bold py-3 rounded-full"
              onClick={() => window.open('https://estatercosmeticos.com.br/produto/base-bomba---com-oz-nio-e-leos-essenciais', '_blank')}
            >
              Comprar Apenas a Base
            </Button>
          </div>

          {/* Kit Completo */}
          <div className="relative bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl p-8 text-center text-black">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-red-500 text-white px-6 py-2 rounded-full font-bold text-sm">
                MAIS VENDIDO! 🔥
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 mt-4">KIT COMPLETO</h3>
            
            <div className="space-y-4 mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <h4 className="font-bold">Base Bomba (12ml)</h4>
                <p className="text-sm">Fortalece e acelera o crescimento</p>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <span className="text-sm line-through text-gray-600">R$ 60,00</span>
                  <span className="font-bold text-green-700">R$ 40,00</span>
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <h4 className="font-bold">Fluido Bomba (12ml)</h4>
                <p className="text-sm">Trata micose, fungos e hidrata cutículas</p>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <span className="text-sm line-through text-gray-600">R$ 100,00</span>
                  <span className="font-bold text-green-700">R$ 80,00</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 mb-6">
              <div className="flex items-center justify-center gap-4 mb-2">
                <span className="text-xl line-through text-gray-500">R$ 160,00</span>
                <span className="text-3xl font-bold text-green-600">R$ 109,90</span>
              </div>
              <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg font-bold">
                Economize R$ 50,10!
              </div>
            </div>

            <div className="space-y-3 mb-6 text-left">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-yellow-600" />
                <span className="font-medium">Resultados 2x mais rápidos</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-yellow-600" />
                <span className="font-medium">Proteção completa contra fungos</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-yellow-600" />
                <span className="font-medium">Hidratação profunda das cutículas</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-yellow-600" />
                <span className="font-medium">Uso diário recomendado</span>
              </div>
            </div>

            <Button 
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 rounded-full text-lg transform hover:scale-105 transition-all duration-300 shadow-xl"
              onClick={() => window.open('https://estatercosmeticos.com.br/produto/base-bomba---com-oz-nio-e-leos-essenciais', '_blank')}
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              QUERO O KIT COMPLETO!
            </Button>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
            <h4 className="text-xl font-bold mb-3">⚡ Por que o Kit é a Melhor Escolha?</h4>
            <p className="opacity-90 leading-relaxed">
              Enquanto a Base Bomba fortalece e acelera o crescimento, o Fluido Bomba 
              cuida da saúde completa das suas unhas e cutículas. Juntos, eles criam 
              uma barreira de proteção e nutrição que garante unhas perfeitas por muito mais tempo!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpsellSection;
