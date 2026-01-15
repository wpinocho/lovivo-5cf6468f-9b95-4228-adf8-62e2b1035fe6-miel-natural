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
      <section className="py-16 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-ruwudu">
              Nuestro Compromiso con la Naturaleza
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="font-bold text-xl text-foreground font-ruwudu">Alimentación Natural</h3>
              <p className="text-foreground/80 leading-relaxed">
                Nuestras abejas se alimentan únicamente con su propia miel. 
                NO usamos agua con azúcar.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-bold text-xl text-foreground font-ruwudu">Libre de Químicos</h3>
              <p className="text-foreground/80 leading-relaxed">
                100% libre de antibióticos, tóxicos y productos químicos en todos nuestros procesos.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-bold text-xl text-foreground font-ruwudu">Ingredientes Puros</h3>
              <p className="text-foreground/80 leading-relaxed">
                Solo usamos miel cruda 100% pura y aceites esenciales o especias 100% naturales.
              </p>
            </div>
            
            <div className="text-center pt-8 border-t border-foreground/10">
              <p className="text-foreground/70 text-lg italic">
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