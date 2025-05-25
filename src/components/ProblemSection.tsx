
import { X, CheckCircle } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    "Unhas que quebram facilmente",
    "Crescimento lento e irregular",
    "Descamação constante",
    "Unhas fracas e sem vida",
    "Micoses e fungos recorrentes",
    "Cutículas ressecadas"
  ];

  const solutions = [
    "Unhas 3x mais fortes em 7 dias",
    "Crescimento acelerado e saudável",
    "Proteção contra descamação",
    "Nutrição profunda e restauração",
    "Ação antifúngica e antisséptica",
    "Hidratação completa das cutículas"
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Cansada de Unhas <span className="text-red-600">FRACAS E QUEBRADIÇAS?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Se você está sofrendo com unhas fracas, quebradiças ou que simplesmente não crescem, 
            você não está sozinha. <strong>Mais de 70% das mulheres</strong> enfrentam esses problemas diariamente.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Problemas */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-red-600 mb-6 text-center">
              ❌ Seus Problemas Atuais
            </h3>
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span className="text-gray-700">{problem}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-red-100 rounded-lg text-center">
              <p className="text-red-700 font-medium">
                Isso afeta sua autoestima e confiança? A Base Bomba é a solução!
              </p>
            </div>
          </div>

          {/* Soluções */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-green-600 mb-6 text-center">
              ✅ Com a Base Bomba
            </h3>
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{solution}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-green-100 rounded-lg text-center">
              <p className="text-green-700 font-bold">
                Resultados visíveis em apenas 7 dias! 💅✨
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
