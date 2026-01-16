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
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl text-foreground mb-6 font-ruwudu">
            Nuestro Proyecto
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            La historia detrás de cada gota de miel
          </p>
        </div>

        <div className="space-y-16">
          <div className="space-y-8">
            <h3 className="text-3xl text-foreground font-ruwudu">
              Apicultura Silvestre a 3,000 Metros
            </h3>
            
            <p className="text-2xl text-foreground/70 leading-relaxed italic">
              "Donde el aire es más puro y el cielo más cercano, nuestras abejas danzan entre flores silvestres que solo crecen en las alturas."
            </p>
            
            <p className="text-foreground/80 leading-relaxed text-lg">
              En las majestuosas faldas del Nevado de Toluca, 
              a 3,000 metros sobre el nivel del mar, practicamos una apicultura silvestre que respeta 
              el ritmo ancestral de la naturaleza. Aquí, donde la baja humedad y la altitud extrema 
              desafían la vida, nuestras abejas realizan un trabajo extraordinario.
            </p>
            
            <p className="text-foreground/80 leading-relaxed text-lg">
              La altura exige más. Cada gota de néctar recolectada representa el triple de esfuerzo, 
              cada vuelo es una hazaña contra vientos de montaña. Esta dedicación incansable se traduce 
              en una miel única, más densa, más aromática, 
              con propiedades que solo la montaña puede ofrecer.
            </p>
          </div>

          <div className="pt-12 border-t border-foreground/10">
            <h4 className="text-3xl text-foreground mb-6 font-ruwudu">
              Empresa de Mujeres
            </h4>
            <p className="text-foreground/80 leading-relaxed text-lg">
              APIS TERRA es el fruto del amor y dedicación de dos generaciones de mujeres. 
              Mi madre, con más de 16 años de experiencia 
              en apicultura, me enseñó que cuidar de las abejas es cuidar de la tierra. Juntas, 
              madre e hija, continuamos este legado de respeto y pasión por la naturaleza.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};