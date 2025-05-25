
import { ShoppingCart, Star, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-gradient-to-br from-pink-50 to-purple-50 py-4 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Top Bar */}
        <div className="bg-pink-600 text-white text-center py-2 rounded-lg mb-4">
          <p className="text-sm font-medium">
            🚚 FRETE GRÁTIS em compras acima de R$ 299 | 🎁 Oferta por tempo limitado!
          </p>
        </div>

        {/* Main Header */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-gray-600">(4.9/5 - Mais de 2.000 clientes)</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Transforme suas <span className="text-pink-600">Unhas Fracas</span> em 
              <span className="text-purple-600"> Unhas Fortes e Saudáveis!</span>
            </h1>

            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              A fórmula revolucionária com bioativos naturais que <strong>fortalece, 
              protege e acelera o crescimento</strong> das suas unhas em poucos dias!
            </p>

            <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Garantia de 30 dias</h3>
                  <p className="text-gray-600">100% do seu dinheiro de volta</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-2xl line-through text-gray-400">R$ 60,00</span>
                  <span className="text-4xl font-bold text-pink-600">R$ 40,00</span>
                </div>
                <p className="text-green-600 font-medium">Economize R$ 20,00 hoje!</p>
              </div>
            </div>

            <Button 
              className="w-full lg:w-auto bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
              onClick={() => window.open('https://wa.me/5511943703372', '_blank')}
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              QUERO UNHAS FORTES AGORA!
            </Button>

            <p className="text-sm text-gray-500 mt-3">
              ✅ Pagamento 100% seguro | ✅ Entrega rápida | ✅ Resultados garantidos
            </p>
          </div>

          <div className="text-center">
            <div className="relative">
              <img 
                src="https://estater-spaces.nyc3.digitaloceanspaces.com/uploads/products/images/XsDKiWFRcpOvmZZCYATNLzaHeYLlQ6t0PHUz0onx.png"
                alt="Base Bomba - Fortalecedor de Unhas"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold animate-pulse">
                33% OFF
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
