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
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-foreground mb-4 font-ruwudu">
              Nuestro Compromiso
            </h2>
          </div>
          
          <div className="space-y-12 text-center">
            <p className="text-lg text-foreground/80 leading-relaxed">
              Las abejas se alimentan con su propia miel.<br />
              Nunca con agua y azúcar.
            </p>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              Cero antibióticos.<br />
              Cero químicos.
            </p>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              Solo miel cruda y aceites esenciales naturales.
            </p>
            
            <div className="pt-12 border-t border-foreground/10">
              <p className="text-foreground/70 text-base italic">
                Respeto hacia la naturaleza y las abejas
              </p>
            </div>
          </div>
        </div>
      </section>
    </EcommerceTemplate>
  );
};

export default About;