
import { ChevronDown, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const whatsappLink = "https://wa.me/5511999999999?text=Olá!%20Tenho%20interesse%20no%20Kit%20Bomba%20para%20fortalecer%20minhas%20unhas.%20Pode%20me%20ajudar?";

  const faqs = [
    {
      question: "Em quanto tempo verei resultados?",
      answer: "A maioria das nossas clientes nota diferença já nos primeiros 7 dias de uso. Unhas mais fortes e resistentes aparecem rapidamente, enquanto o crescimento acelerado é visível em 2-3 semanas."
    },
    {
      question: "O Kit Bomba é seguro? Tem alguma contraindicação?",
      answer: "Sim! O Kit Bomba é 100% natural e seguro. Não contém formol nem químicos agressivos. Pode ser usado por qualquer pessoa, incluindo gestantes e lactantes. Em caso de dúvidas específicas, consulte seu médico."
    },
    {
      question: "Como faço o pedido e qual a forma de pagamento?",
      answer: "Super fácil! Clique no botão do WhatsApp, fale conosco e faremos seu pedido na hora. Aceitamos PIX (com desconto extra), cartão de crédito e débito. Entrega para todo o Brasil com frete grátis!"
    },
    {
      question: "E se eu não gostar do produto?",
      answer: "Temos 100% de confiança no Kit Bomba! Mas se por algum motivo você não ficar satisfeita, oferecemos garantia total. Entre em contato conosco pelo WhatsApp que resolveremos sua situação imediatamente."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Dúvidas <span className="text-pink-600">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-600">
            Esclarecemos as principais dúvidas sobre o Kit Bomba
          </p>
        </div>

        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="font-bold text-lg text-gray-900">{faq.question}</h3>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA para mais dúvidas */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 text-center text-white">
          <MessageCircle className="w-12 h-12 mx-auto mb-4 text-pink-200" />
          <h3 className="text-2xl font-bold mb-4">Ainda tem dúvidas?</h3>
          <p className="text-lg mb-6 opacity-90">
            Nossa equipe especializada está pronta para te ajudar! 
            Fale conosco agora mesmo pelo WhatsApp.
          </p>
          <Button 
            className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg"
            onClick={() => window.open(whatsappLink, '_blank')}
          >
            💬 FALAR COM ESPECIALISTA
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
