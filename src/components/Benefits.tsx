
import { Heart, Zap, Shield, Star, CheckCircle, Sparkles } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Resultados já nos primeiros dias",
      description: "Você vai notar suas unhas mais fortes e resistentes já nos primeiros dias de uso.",
      color: "text-yellow-500"
    },
    {
      icon: Shield,
      title: "3x Mais Resistência",
      description: "Fórmula exclusiva que fortalece a estrutura da unha, evitando quebras e descamação.",
      color: "text-green-500"
    },
    {
      icon: Sparkles,
      title: "100% Natural",
      description: "Ingredientes naturais e bioativos que nutrem profundamente sem agredir suas unhas.",
      color: "text-purple-500"
    },
    {
      icon: Heart,
      title: "Autoestima Renovada",
      description: "Unhas bonitas e saudáveis que vão fazer você se sentir mais confiante e empoderada.",
      color: "text-pink-500"
    },
    {
      icon: Star,
      title: "Crescimento Acelerado",
      description: "Estimula o crescimento natural das unhas de forma saudável e duradoura.",
      color: "text-orange-500"
    }
  ];

  return (
    <section id="diferenciais" className="py-12 sm:py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Por que o <span className="text-pink-600">Kit Bomba</span> é Diferente?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de 5.000 mulheres já comprovaram a eficácia da nossa fórmula exclusiva. 
            Veja os benefícios que você vai conquistar:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="mb-4">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center`}>
                  <benefit.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${benefit.color}`} />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Comparação Antes/Depois */}
        <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-900 mb-6 sm:mb-8">
            Veja a Transformação Real
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-red-100 rounded-xl p-4 sm:p-6 mb-4">
                <h4 className="text-base sm:text-lg font-bold text-red-700 mb-3">❌ ANTES (Unhas Fracas)</h4>
                <ul className="text-xs sm:text-sm text-red-600 space-y-2">
                  <li>• Unhas quebradiças e descascando</li>
                  <li>• Crescimento lento ou inexistente</li>
                  <li>• Aspecto ressecado e sem vida</li>
                  <li>• Baixa autoestima e insegurança</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-xl p-4 sm:p-6 mb-4">
                <h4 className="text-base sm:text-lg font-bold text-green-700 mb-3">✅ DEPOIS (Com Kit Bomba)</h4>
                <ul className="text-xs sm:text-sm text-green-600 space-y-2">
                  <li>• Unhas fortes e resistentes</li>
                  <li>• Crescimento acelerado e saudável</li>
                  <li>• Aspecto brilhante e nutrido</li>
                  <li>• Confiança e autoestima renovadas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
