
import { Star, MessageCircle } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marina Silva",
      location: "São Paulo, SP",
      rating: 5,
      text: "Em 2 semanas minhas unhas estavam completamente diferentes! Mais fortes e com crescimento muito mais rápido. Recomendo demais!",
      days: "15 dias de uso"
    },
    {
      name: "Ana Carolina",
      location: "Rio de Janeiro, RJ", 
      rating: 5,
      text: "Sofria com micose há anos. A Base Bomba não só curou como deixou minhas unhas lindas e saudáveis. Produto incrível!",
      days: "3 semanas de uso"
    },
    {
      name: "Juliana Costa",
      location: "Belo Horizonte, MG",
      rating: 5,
      text: "Minhas unhas sempre quebravam. Agora elas crescem rapidinho e estão super resistentes. Valeu cada centavo!",
      days: "1 mês de uso"
    },
    {
      name: "Camila Santos",
      location: "Brasília, DF",
      rating: 5,
      text: "A descamação parou completamente! Minhas unhas estão lindas e eu me sinto muito mais confiante. Produto maravilhoso!",
      days: "10 dias de uso"
    },
    {
      name: "Fernanda Lima",
      location: "Salvador, BA",
      rating: 5,
      text: "Resultado surpreendente! Não acreditava que algo natural pudesse ser tão eficaz. Minhas unhas nunca estiveram tão bonitas!",
      days: "3 semanas de uso"
    },
    {
      name: "Roberta Oliveira",
      location: "Porto Alegre, RS",
      rating: 5,
      text: "Comprei o kit completo e não me arrependo. Minhas unhas cresceram muito e ficaram super hidratadas. Produto top!",
      days: "1 mês de uso"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            O que Nossas <span className="text-pink-600">Clientes Dizem</span>
          </h2>
          <p className="text-xl text-gray-600">
            Mais de 2.000 mulheres já transformaram suas unhas com a Base Bomba
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-lg font-bold text-gray-700">4.9/5 estrelas</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex items-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">"{testimonial.text}"</p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                  ✅ {testimonial.days}
                </span>
                <MessageCircle className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Junte-se a Milhares de Mulheres Satisfeitas!
            </h3>
            <p className="text-gray-600 mb-6">
              Sua transformação está a um clique de distância. Não deixe para amanhã o que você pode começar hoje!
            </p>
            <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-lg">
              <p className="text-green-700 font-bold">
                💬 "Se não funcionar, devolvemos 100% do seu dinheiro!" - Garantia Total
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
