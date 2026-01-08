/**
 * EDITABLE COMPONENT - AboutSection
 * 
 * Sección "Nuestro Proyecto" con espacio para agregar fotos del apiario
 * y explicación del proyecto. Completamente editable.
 */

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-accent/5 via-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestro Proyecto
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-terracota mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-muted-foreground">
            La historia detrás de cada gota de miel
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto descriptivo */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Apicultura Silvestre a 3,000 Metros
            </h3>
            
            <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg">
              <p className="text-foreground/90 leading-relaxed italic font-medium">
                "Donde el aire es más puro y el cielo más cercano, nuestras abejas danzan entre flores silvestres que solo crecen en las alturas."
              </p>
            </div>
            
            <p className="text-muted-foreground leading-relaxed text-lg">
              En las majestuosas faldas del <strong className="text-foreground">Nevado de Toluca</strong>, 
              a 3,000 metros sobre el nivel del mar, practicamos una apicultura silvestre que respeta 
              el ritmo ancestral de la naturaleza. Aquí, donde la baja humedad y la altitud extrema 
              desafían la vida, nuestras abejas realizan un trabajo extraordinario.
            </p>
            
            <p className="text-muted-foreground leading-relaxed text-lg">
              La altura exige más. Cada gota de néctar recolectada representa el triple de esfuerzo, 
              cada vuelo es una hazaña contra vientos de montaña. Esta dedicación incansable se traduce 
              en una <strong className="text-accent">miel única, más densa, más aromática</strong>, 
              con propiedades que solo la montaña puede ofrecer.
            </p>
            
            <div className="bg-terracota/10 border border-terracota/30 p-5 rounded-lg">
              <h4 className="text-xl font-bold text-terracota mb-3 flex items-center gap-2">
                💐 Empresa de Mujeres
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                APIS TERRA es el fruto del amor y dedicación de dos generaciones de mujeres. 
                Mi madre, con <strong className="text-foreground">más de 16 años de experiencia</strong> 
                en apicultura, me enseñó que cuidar de las abejas es cuidar de la tierra. Juntas, 
                madre e hija, continuamos este legado de respeto y pasión por la naturaleza.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-foreground">Apicultura Silvestre</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-foreground">3,000 msnm</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-terracota rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-foreground">Hecho por Mujeres</span>
              </div>
            </div>
          </div>

          {/* Galería de fotos del apiario */}
          <div className="space-y-4">
            <div className="aspect-[4/3] bg-muted rounded-xl overflow-hidden shadow-2xl border-4 border-accent/20">
              <img 
                src="/about-bees.jpg" 
                alt="Abejas trabajando en flores de alta montaña" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-muted rounded-xl overflow-hidden shadow-lg border-2 border-primary/20">
                <img 
                  src="/about-apiary-1.jpg" 
                  alt="Colmenas en las montañas" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square bg-muted rounded-xl overflow-hidden shadow-lg border-2 border-primary/20">
                <img 
                  src="/about-apiary-2.jpg" 
                  alt="Abeja en panal con miel" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-accent/20 to-primary/20 p-4 rounded-lg text-center">
              <p className="text-sm text-foreground/80 italic">
                📸 Puedes reemplazar estas imágenes con fotos reales de tu apiario
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};