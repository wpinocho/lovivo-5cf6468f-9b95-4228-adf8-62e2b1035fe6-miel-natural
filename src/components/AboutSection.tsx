/**
 * EDITABLE COMPONENT - AboutSection
 * 
 * Sección "Nuestro Proyecto" con espacio para agregar fotos del apiario
 * y explicación del proyecto. Completamente editable.
 */

export const AboutSection = () => {
  return (
    <section id="about" className="py-32 bg-background">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl text-foreground mb-4 font-ruwudu">
            Nuestro Proyecto
          </h2>
        </div>

        <div className="space-y-20">
          <div className="space-y-6 text-center max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl text-foreground/90 leading-relaxed">
              3,000 metros de altura.
            </p>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Donde el aire es más puro y las flores silvestres crecen sin prisa.
            </p>
          </div>

          <div className="pt-12 border-t border-foreground/10 text-center max-w-2xl mx-auto">
            <p className="text-lg text-foreground/80 leading-relaxed">
              Dos generaciones de mujeres. 16 años de apicultura silvestre.
              <br /><br />
              Miel 100% pura. Sin químicos. Sin atajos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};