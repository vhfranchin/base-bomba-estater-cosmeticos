
import { Clock, Shield, Truck, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';

const UrgencySection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Countdown Timer */}
        <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold mb-4">⏰ Oferta Por Tempo Limitado!</h2>
          <p className="text-xl mb-6">Esta promoção especial expira em breve. Não perca!</p>
          
          <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
              <div className="text-2xl font-bold">05</div>
              <div className="text-sm">Dias</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
              <div className="text-2xl font-bold">14</div>
              <div className="text-sm">Horas</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
              <div className="text-2xl font-bold">27</div>
              <div className="text-sm">Min</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
              <div className="text-2xl font-bold">43</div>
              <div className="text-sm">Seg</div>
            </div>
          </div>

          <div className="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold inline-block">
            🚨 Apenas 47 unidades restantes no estoque!
          </div>
        </div>

        {/* Garantias */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-bold text-lg mb-2">Garantia de 30 Dias</h3>
            <p className="text-gray-600 text-sm">100% do seu dinheiro de volta se não ficar satisfeita</p>
          </div>

          <div className="text-center p-6">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-bold text-lg mb-2">Frete Grátis</h3>
            <p className="text-gray-600 text-sm">Em compras acima de R$ 299 para todo o Brasil</p>
          </div>

          <div className="text-center p-6">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <CreditCard className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="font-bold text-lg mb-2">Pagamento Seguro</h3>
            <p className="text-gray-600 text-sm">Site protegido e dados criptografados</p>
          </div>

          <div className="text-center p-6">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="font-bold text-lg mb-2">Entrega Rápida</h3>
            <p className="text-gray-600 text-sm">Receba em 3-7 dias úteis em todo o país</p>
          </div>
        </div>

        {/* CTA Final */}
        <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Não Deixe Suas Unhas Esperarem Mais!
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Milhares de mulheres já transformaram suas unhas. Sua vez chegou! 
            Clique no botão abaixo e comece sua transformação hoje mesmo.
          </p>

          <div className="bg-white rounded-xl p-6 max-w-md mx-auto mb-8 shadow-lg">
            <div className="text-center mb-4">
              <div className="text-sm text-gray-500 line-through">De R$ 160,00</div>
              <div className="text-3xl font-bold text-pink-600">Por apenas R$ 109,90</div>
              <div className="text-green-600 font-medium">Kit Completo - Economize R$ 50,10</div>
            </div>
            <div className="bg-green-100 text-green-700 p-3 rounded-lg text-sm font-medium">
              ✅ Ou R$ 40,00 apenas pela Base Bomba
            </div>
          </div>

          <Button 
            className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold py-4 px-12 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-xl"
            onClick={() => window.open('https://wa.me/5511943703372', '_blank')}
          >
            🛒 COMPRAR AGORA COM DESCONTO!
          </Button>

          <p className="text-sm text-gray-500 mt-4">
            ✅ Compra 100% Segura | ✅ Garantia Total | ✅ Resultados Garantidos
          </p>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;
