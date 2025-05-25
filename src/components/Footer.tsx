
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Sobre */}
          <div>
            <h3 className="text-xl font-bold mb-4">Estater Cosméticos</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Especialistas em cuidados com as unhas, oferecendo produtos naturais e eficazes 
              para a saúde e beleza das suas mãos.
            </p>
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-700 transition-colors">
                <Instagram className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                <Facebook className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors">
                <Youtube className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Produtos */}
          <div>
            <h3 className="text-lg font-bold mb-4">Nossos Produtos</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Base Bomba - R$ 40,00</li>
              <li>Fluido Bomba - R$ 80,00</li>
              <li>Kit Completo - R$ 99,90</li>
              <li>Outros Produtos</li>
            </ul>
          </div>

          {/* Atendimento */}
          <div>
            <h3 className="text-lg font-bold mb-4">Atendimento</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(11) 9 9999-9999</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contato@estater.com.br</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>

          {/* Garantias */}
          <div>
            <h3 className="text-lg font-bold mb-4">Suas Garantias</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>✅ Garantia de 30 dias</li>
              <li>✅ Frete grátis acima de R$ 299</li>
              <li>✅ Pagamento 100% seguro</li>
              <li>✅ Entrega rápida</li>
              <li>✅ Suporte especializado</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <div className="grid md:grid-cols-3 gap-4 items-center">
            <div className="text-sm text-gray-400">
              © 2024 Estater Cosméticos. Todos os direitos reservados.
            </div>
            <div className="text-sm text-gray-400">
              CNPJ: 00.000.000/0001-00
            </div>
            <div className="text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a> | 
              <a href="#" className="hover:text-white transition-colors ml-2">Termos de Uso</a>
            </div>
          </div>
        </div>

        {/* Selo de Segurança */}
        <div className="text-center mt-6">
          <div className="inline-flex items-center gap-2 bg-green-600 px-4 py-2 rounded-full text-sm font-medium">
            🔒 Site 100% Seguro e Protegido
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
