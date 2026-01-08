import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import { AboutSection } from '@/components/AboutSection';

/**
 * PÁGINA - Nuestro Proyecto
 * 
 * Historia de APIS TERRA, apicultura silvestre y empresa familiar
 */

const About = () => {
  return (
    <EcommerceTemplate pageTitle="Nuestro Proyecto" showCart={true}>
      <AboutSection />

      {/* Valores y Prácticas Naturales */}
      <section className="py-16 bg-gradient-to-br from-accent/30 via-primary/20 to-terracota/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-4 border-accent">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary font-ruwudu">
              🐝 Nuestro Compromiso con la Naturaleza
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-accent/20 p-6 rounded-xl border-4 border-accent hover:shadow-2xl transition-all hover:scale-105">
                <div className="text-5xl mb-3 text-center">🍯</div>
                <h3 className="font-bold text-xl text-center mb-3 text-primary font-ruwudu">Alimentación Natural</h3>
                <p className="text-primary/80 text-center text-sm font-medium">
                  Nuestras abejas se alimentan únicamente con su propia miel. 
                  <strong className="text-terracota block mt-2 text-base">NO usamos agua con azúcar</strong>
                </p>
              </div>
              
              <div className="bg-primary/20 p-6 rounded-xl border-4 border-primary hover:shadow-2xl transition-all hover:scale-105">
                <div className="text-5xl mb-3 text-center">🚫</div>
                <h3 className="font-bold text-xl text-center mb-3 text-accent font-ruwudu">Libre de Químicos</h3>
                <p className="text-primary/80 text-center text-sm font-medium">
                  100% libre de antibióticos, tóxicos y productos químicos en todos nuestros procesos
                </p>
              </div>
              
              <div className="bg-terracota/20 p-6 rounded-xl border-4 border-terracota hover:shadow-2xl transition-all hover:scale-105">
                <div className="text-5xl mb-3 text-center">🌺</div>
                <h3 className="font-bold text-xl text-center mb-3 text-terracota font-ruwudu">Ingredientes Puros</h3>
                <p className="text-primary/80 text-center text-sm font-medium">
                  Solo usamos miel cruda 100% pura y aceites esenciales o especias 100% naturales
                </p>
              </div>
            </div>
            
            <div className="text-center bg-gradient-to-r from-accent/30 to-terracota/30 py-4 px-6 rounded-lg border-2 border-accent">
              <p className="text-primary font-bold text-lg">
                ✨ Cada producto es un testimonio de respeto hacia la naturaleza y las abejas ✨
              </p>
            </div>
          </div>
        </div>
      </section>
    </EcommerceTemplate>
  );
};

export default About;