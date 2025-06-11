
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marina Santos",
      age: "28 anos",
      location: "São Paulo, SP",
      text: "Minha vida mudou depois do Kit Bomba! Em 10 dias minhas unhas estavam irreconhecíveis. Agora posso usar anéis sem vergonha!",
      rating: 5,
      result: "Unhas 3x mais fortes em 10 dias"
    },
    {
      name: "Ana Julia",
      age: "35 anos", 
      location: "Rio de Janeiro, RJ",
      text: "Sempre tive vergonha das minhas mãos. Hoje, 3 semanas depois, recebo elogios das amigas. Kit Bomba é milagroso!",
      rating: 5,
      result: "Crescimento de 0.5cm em 3 semanas"
    },
    {
      name: "Camila Oliveira",
      age: "24 anos",
      location: "Belo Horizonte, MG", 
      text: "Gastava uma fortuna no salão porque minhas unhas não cresciam. Com o Kit Bomba economizo e tenho resultados melhores!",
      rating: 5,
      result: "Economia de R$ 400/mês no salão"
    },
    {
      name: "Jessica Lima",
      age: "31 anos",
      location: "Brasília, DF",
      text: "Desisti várias vezes de ter unhas bonitas. O Kit Bomba me devolveu a esperança! Agora tenho as unhas dos meus sonhos.",
      rating: 5,
      result: "Primeira vez com unhas grandes"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            O que Nossas <span className="text-pink-600">Clientes Dizem</span>
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Mais de 5.000 mulheres já transformaram suas unhas com o Kit Bomba
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-lg font-bold text-gray-700">4.9/5 • Avaliação média</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
              <Quote className="w-8 h-8 text-pink-300 mb-4" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="border-t pt-4 mt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.age} • {testimonial.location}</p>
                  </div>
                  <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                    ✅ {testimonial.result}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Prova Social Adicional */}
        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Junte-se a Milhares de Mulheres Satisfeitas!
          </h3>
          <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
            <div>
              <div className="text-3xl font-bold text-pink-600">5.000+</div>
              <div className="text-sm text-gray-600">Clientes Felizes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">98%</div>
              <div className="text-sm text-gray-600">Satisfação</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">7 dias</div>
              <div className="text-sm text-gray-600">Resultados</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
