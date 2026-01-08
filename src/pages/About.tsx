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
      <section className="py-16 bg-gradient-to-br from-accent/5 via-primary/5 to-terracota/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 backdrop-blur rounded-2xl shadow-2xl p-8 md:p-12 border-2 border-accent/20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary via-accent to-terracota bg-clip-text text-transparent">
              🐝 Nuestro Compromiso con la Naturaleza
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-accent/10 p-6 rounded-xl border-2 border-accent/30 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3 text-center">🍯</div>
                <h3 className="font-bold text-lg text-center mb-3 text-accent">Alimentación Natural</h3>
                <p className="text-muted-foreground text-center text-sm">
                  Nuestras abejas se alimentan únicamente con su propia miel. 
                  <strong className="text-foreground block mt-2">NO usamos agua con azúcar</strong>
                </p>
              </div>
              
              <div className="bg-primary/10 p-6 rounded-xl border-2 border-primary/30 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3 text-center">🚫</div>
                <h3 className="font-bold text-lg text-center mb-3 text-primary">Libre de Químicos</h3>
                <p className="text-muted-foreground text-center text-sm">
                  100% libre de antibióticos, tóxicos y productos químicos en todos nuestros procesos
                </p>
              </div>
              
              <div className="bg-terracota/10 p-6 rounded-xl border-2 border-terracota/30 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3 text-center">🌺</div>
                <h3 className="font-bold text-lg text-center mb-3 text-terracota">Ingredientes Puros</h3>
                <p className="text-muted-foreground text-center text-sm">
                  Solo usamos miel cruda 100% pura y aceites esenciales o especias 100% naturales
                </p>
              </div>
            </div>
            
            <div className="text-center bg-gradient-to-r from-accent/20 to-primary/20 py-4 px-6 rounded-lg">
              <p className="text-foreground font-semibold text-lg">
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