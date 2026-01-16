import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import { AboutSection } from '@/components/AboutSection';

/**
 * PÁGINA - Nuestro Proyecto
 * 
 * Historia de APIS TERRA, apicultura silvestre y empresa familiar
 */

const About = () => {
  return (
    <EcommerceTemplate showCart={true}>
      <AboutSection />

      {/* Valores y Prácticas Naturales */}
      <section className="py-32 bg-muted/10">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl text-foreground mb-4 font-ruwudu">
              Nuestro Compromiso
            </h2>
          </div>
          
          <div className="space-y-16">
            <div className="space-y-6">
              <h3 className="text-2xl text-foreground font-ruwudu">Alimentación Natural</h3>
              <p className="text-foreground/80 leading-relaxed text-lg">
                Nuestras abejas se alimentan únicamente con su propia miel. 
                NO usamos agua con azúcar.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl text-foreground font-ruwudu">Libre de Químicos</h3>
              <p className="text-foreground/80 leading-relaxed text-lg">
                100% libre de antibióticos, tóxicos y productos químicos en todos nuestros procesos.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl text-foreground font-ruwudu">Ingredientes Puros</h3>
              <p className="text-foreground/80 leading-relaxed text-lg">
                Solo usamos miel cruda 100% pura y aceites esenciales o especias 100% naturales.
              </p>
            </div>
            
            <div className="text-center pt-16 border-t border-foreground/10">
              <p className="text-foreground/70 text-xl italic">
                Cada producto es un testimonio de respeto hacia la naturaleza y las abejas
              </p>
            </div>
          </div>
        </div>
      </section>
    </EcommerceTemplate>
  );
};

export default About;