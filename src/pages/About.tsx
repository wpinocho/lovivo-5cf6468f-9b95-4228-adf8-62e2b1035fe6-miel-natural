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
      <section className="py-16 bg-gradient-to-br from-secondary/30 via-muted/25 to-warm/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-4 border-mustard">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-forest font-ruwudu flex items-center justify-center gap-4">
              <img src="/vintage-bee.png" alt="Abeja" className="h-12 w-12" />
              Nuestro Compromiso con la Naturaleza
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-warm/20 p-6 rounded-xl border-4 border-warm hover:shadow-2xl transition-all hover:scale-105">
                <div className="mb-3 text-center">
                  <img src="/honey-jar-icon.png" alt="Miel" className="h-16 w-16 mx-auto object-contain" />
                </div>
                <h3 className="font-bold text-xl text-center mb-3 text-mustard font-ruwudu">Alimentación Natural</h3>
                <p className="text-forest/90 text-center text-sm font-medium">
                  Nuestras abejas se alimentan únicamente con su propia miel. 
                  <strong className="text-terracota block mt-2 text-base">NO usamos agua con azúcar</strong>
                </p>
              </div>
              
              <div className="bg-secondary/20 p-6 rounded-xl border-4 border-secondary hover:shadow-2xl transition-all hover:scale-105">
                <div className="mb-3 text-center">
                  <img src="/no-chemicals-icon.png" alt="Sin químicos" className="h-16 w-16 mx-auto object-contain" />
                </div>
                <h3 className="font-bold text-xl text-center mb-3 text-secondary font-ruwudu">Libre de Químicos</h3>
                <p className="text-forest/90 text-center text-sm font-medium">
                  100% libre de antibióticos, tóxicos y productos químicos en todos nuestros procesos
                </p>
              </div>
              
              <div className="bg-lavender/20 p-6 rounded-xl border-4 border-lavender hover:shadow-2xl transition-all hover:scale-105">
                <div className="mb-3 text-center">
                  <img src="/wildflowers.png" alt="Flores" className="h-16 w-16 mx-auto object-contain" />
                </div>
                <h3 className="font-bold text-xl text-center mb-3 text-plum font-ruwudu">Ingredientes Puros</h3>
                <p className="text-forest/90 text-center text-sm font-medium">
                  Solo usamos miel cruda 100% pura y aceites esenciales o especias 100% naturales
                </p>
              </div>
            </div>
            
            <div className="text-center bg-gradient-to-r from-warm/30 to-lavender/30 py-4 px-6 rounded-lg border-2 border-mustard">
              <p className="text-forest font-bold text-lg">
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