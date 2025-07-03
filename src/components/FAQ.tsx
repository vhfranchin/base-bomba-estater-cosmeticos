
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "Como usar o Kit Bomba corretamente?",
      answer: "É muito simples! Aplique a Base Bomba 3x na semana e o Fluido Bomba todos os dias para melhores resultados."
    },
    {
      question: "Em quanto tempo vou ver os resultados?",
      answer: "Você vai notar suas unhas mais fortes e resistentes já nos primeiros dias de uso! Os resultados completos de crescimento e fortalecimento aparecem em 2-3 semanas de uso contínuo."
    },
    {
      question: "O Kit Bomba funciona em unhas muito fracas?",
      answer: "Sim! O Kit Bomba foi desenvolvido especialmente para unhas fracas, quebradiças e que não crescem. Nossa fórmula com bioativos naturais fortalece a estrutura da unha desde a raiz."
    },
    {
      question: "Qual o prazo de entrega?",
      answer: "O prazo de entrega é de 3 a 14 dias úteis, variando conforme a região. Consulte sua região no momento da compra via WhatsApp para informações mais precisas."
    },
    {
      question: "Tem garantia? E se não funcionar?",
      answer: "Sim! Oferecemos garantia total de satisfação. Se por algum motivo você não ficar satisfeita com os resultados, devolvemos 100% do seu dinheiro. Sua satisfação é nossa prioridade."
    },
    {
      question: "Como faço para comprar?",
      answer: "É super fácil! Clique no botão do WhatsApp em qualquer lugar da página e converse diretamente conosco. Tiramos todas suas dúvidas e processamos seu pedido de forma rápida e segura."
    }
  ];

  return (
    <section id="faq" className="py-12 sm:py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Dúvidas <span className="text-pink-600">Frequentes</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Esclarecemos as principais dúvidas sobre o Kit Bomba
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-pink-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-pink-600 flex-shrink-0" />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div className="px-4 sm:px-6 pb-3 sm:pb-4">
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Ainda tem dúvidas?</h3>
            <p className="text-base sm:text-lg mb-4 sm:mb-6 opacity-90">
              Nossa equipe está sempre disponível para ajudar você!
            </p>
            <button 
              onClick={() => window.open('https://wa.me/5588981844084?text=Olá!%20Tenho%20algumas%20dúvidas%20sobre%20o%20Kit%20Bomba.%20Podem%20me%20ajudar?', '_blank')}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 sm:px-8 rounded-full transition-colors text-sm sm:text-base"
            >
              💬 Falar no WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
