
import { Leaf, Shield, Sparkles, Heart } from 'lucide-react';

const ProductDetails = () => {
  const benefits = [
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      title: "100% Natural",
      description: "Fórmula com bioativos naturais, sem formol e sem produtos químicos agressivos"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Proteção Completa",
      description: "Ação antisséptica, germicida, antifúngica e cicatrizante"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-purple-600" />,
      title: "Fortalecimento Intenso",
      description: "Fortalece unhas quebradiças e evita descamação"
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-600" />,
      title: "Crescimento Saudável",
      description: "Repõe nutrientes essenciais e acelera o crescimento natural"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Por que a <span className="text-pink-600">Base Bomba</span> é Diferente?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desenvolvida com tecnologia avançada e ingredientes naturais selecionados, 
            nossa fórmula exclusiva oferece resultados que você pode ver e sentir.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Composição */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Ingredientes Poderosos que Fazem a Diferença
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="font-bold text-lg text-purple-600 mb-2">🌿 Bioativos Naturais</h4>
              <p className="text-gray-600">Extratos vegetais que nutrem profundamente a estrutura da unha</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="font-bold text-lg text-green-600 mb-2">💧 Óleos Essenciais</h4>
              <p className="text-gray-600">Hidratação intensa e proteção contra ressecamento</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="font-bold text-lg text-blue-600 mb-2">🛡️ Complexo Protetor</h4>
              <p className="text-gray-600">Defesa natural contra fungos, bactérias e agressões externas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
