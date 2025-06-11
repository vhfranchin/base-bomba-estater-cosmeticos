
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marina Santos",
      age: "28 anos",
      location: "São Paulo, SP",
      text: "Minhas unhas sempre foram fracas e quebravam facilmente. Com o Kit Bomba, em poucos dias já notei diferença! Agora elas crescem fortes e saudáveis. Recomendo muito!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b830?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Carla Oliveira",
      age: "35 anos", 
      location: "Rio de Janeiro, RJ",
      text: "Estava desesperada com o estado das minhas unhas. O Kit Bomba foi a solução perfeita! Resultados visíveis já na primeira semana. Melhor investimento que fiz!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Ana Costa",
      age: "42 anos",
      location: "Belo Horizonte, MG", 
      text: "Tentei vários produtos antes, mas nenhum funcionou como o Kit Bomba. Minhas unhas estão mais bonitas do que nunca! Minha autoestima mudou completamente.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Juliana Lima",
      age: "31 anos",
      location: "Porto Alegre, RS",
      text: "Incrível como o Kit Bomba transformou minhas unhas! Eram fracas e descascavam, agora são fortes e crescem rapidinho. Produto sensacional, super indico!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Patrícia Ferreira",
      age: "39 anos",
      location: "Salvador, BA",
      text: "Estava cética no início, mas o Kit Bomba realmente funciona! Minhas unhas nunca estiveram tão saudáveis. Comprei mais kits para garantir que não vou ficar sem!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Fernanda Rocha",
      age: "26 anos",
      location: "Brasília, DF",
      text: "O Kit Bomba mudou minha vida! Sempre tive vergonha das minhas unhas, mas agora elas são meu orgulho. Produto fantástico, vale cada centavo!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section id="depoimentos" className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            O que Nossas <span className="text-pink-600">Clientes Dizem</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de 5.000 mulheres já transformaram suas unhas com o Kit Bomba. 
            Veja alguns depoimentos reais:
          </p>
          
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-lg font-semibold text-gray-700">4.9/5 - Avaliação média</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.age} • {testimonial.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-pink-200" />
                <p className="text-gray-700 leading-relaxed pl-6">
                  "{testimonial.text}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Prova Social Adicional */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-2xl p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Junte-se a Milhares de Mulheres Satisfeitas!</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold">5.000+</div>
              <div className="text-sm opacity-90">Clientes Satisfeitas</div>
            </div>
            <div>
              <div className="text-3xl font-bold">4.9★</div>
              <div className="text-sm opacity-90">Avaliação Média</div>
            </div>
            <div>
              <div className="text-3xl font-bold">98%</div>
              <div className="text-sm opacity-90">Recomendação</div>
            </div>
            <div>
              <div className="text-3xl font-bold">3 anos</div>
              <div className="text-sm opacity-90">No Mercado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
