
import { Sparkles, Heart, Shield, Clock, Star } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Sparkles className="w-8 h-8 text-purple-600" />,
      title: "Crescimento Acelerado",
      description: "Suas unhas crescem 2x mais rápido com nossa fórmula exclusiva",
      emotional: "Finalmente unhas do tamanho que você sempre quis!"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Resistência Máxima", 
      description: "Elimina quebras e descamação para sempre",
      emotional: "Nunca mais se preocupe com unhas quebradas!"
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-600" />,
      title: "Autoestima Renovada",
      description: "Unhas bonitas que aumentam sua confiança",
      emotional: "Sinta-se poderosa e feminina todos os dias!"
    },
    {
      icon: <Clock className="w-8 h-8 text-green-600" />,
      title: "Resultados em 7 Dias",
      description: "Veja a diferença já na primeira semana",
      emotional: "Resultados rápidos que você pode ver e sentir!"
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-600" />,
      title: "Fórmula 100% Natural",
      description: "Sem químicos agressivos, apenas ingredientes naturais",
      emotional: "Cuide das suas unhas com segurança total!"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Por que o <span className="text-pink-600">Kit Bomba</span> é Diferente?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Não é apenas um produto para unhas. É uma transformação completa que vai 
            devolver sua autoestima e confiança.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{benefit.title}</h3>
              <p className="text-gray-600 text-center mb-3">{benefit.description}</p>
              <p className="text-pink-600 font-semibold text-center text-sm">{benefit.emotional}</p>
            </div>
          ))}
        </div>

        {/* Problema vs Solução */}
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Antes vs Depois do Kit Bomba
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 border-l-4 border-red-400">
              <h4 className="font-bold text-lg text-red-600 mb-4">❌ ANTES (Suas Unhas Hoje)</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Quebram facilmente</li>
                <li>• Crescem devagar</li>
                <li>• Descamam constantemente</li>
                <li>• Você esconde as mãos</li>
                <li>• Baixa autoestima</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 border-l-4 border-green-400">
              <h4 className="font-bold text-lg text-green-600 mb-4">✅ DEPOIS (Com Kit Bomba)</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Unhas super resistentes</li>
                <li>• Crescimento acelerado</li>
                <li>• Lisas e saudáveis</li>
                <li>• Você mostra com orgulho</li>
                <li>• Confiança renovada</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
