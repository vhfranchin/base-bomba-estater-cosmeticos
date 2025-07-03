
import { Instagram, Facebook, MapPin, Phone, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Sobre a Empresa */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kit Bomba</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Especialistas em cuidados com as unhas há mais de 5 anos. 
              Milhares de mulheres já transformaram suas unhas conosco.
            </p>
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-700 transition-colors">
                <Instagram className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                <Facebook className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-bold mb-4">Atendimento</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+55 88 98184-4084</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <div>Atendimento: Segunda a Sexta</div>
                  <div>das 9h às 18h</div>
                  <div>WhatsApp 24h</div>
                </div>
              </div>
            </div>
          </div>

          {/* Garantias */}
          <div>
            <h3 className="text-lg font-bold mb-4">Suas Garantias</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>✅ Produto 100% Natural</li>
              <li>✅ Entrega 3-14 dias (consulte regiões)</li>
              <li>✅ Pagamento 100% Seguro</li>
              <li>✅ Suporte Especializado</li>
              <li>✅ Satisfação Garantida</li>
              <li>✅ Resultados Comprovados</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <div className="inline-flex items-center gap-2 bg-green-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Shield className="w-4 h-4" />
            Site 100% Seguro e Protegido
          </div>
          <div className="text-sm text-gray-400">
            © 2024 Kit Bomba. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
