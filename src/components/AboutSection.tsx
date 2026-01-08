/**
 * EDITABLE COMPONENT - AboutSection
 * 
 * Sección "Nuestro Proyecto" con espacio para agregar fotos del apiario
 * y explicación del proyecto. Completamente editable.
 */

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-accent/20 via-primary/10 to-terracota/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-ruwudu drop-shadow-lg">
            Nuestro Proyecto
          </h2>
          <div className="w-32 h-2 bg-accent mx-auto rounded-full mb-4 shadow-lg"></div>
          <p className="text-xl text-white/90 font-medium">
            La historia detrás de cada gota de miel
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto descriptivo */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-accent font-ruwudu drop-shadow-md">
              Apicultura Silvestre a 3,000 Metros
            </h3>
            
            <div className="bg-white/95 border-l-8 border-accent p-5 rounded-r-xl shadow-xl">
              <p className="text-primary leading-relaxed italic font-semibold text-lg">
                "Donde el aire es más puro y el cielo más cercano, nuestras abejas danzan entre flores silvestres que solo crecen en las alturas."
              </p>
            </div>
            
            <p className="text-white/90 leading-relaxed text-lg font-medium">
              En las majestuosas faldas del <strong className="text-accent">Nevado de Toluca</strong>, 
              a 3,000 metros sobre el nivel del mar, practicamos una apicultura silvestre que respeta 
              el ritmo ancestral de la naturaleza. Aquí, donde la baja humedad y la altitud extrema 
              desafían la vida, nuestras abejas realizan un trabajo extraordinario.
            </p>
            
            <p className="text-white/90 leading-relaxed text-lg font-medium">
              La altura exige más. Cada gota de néctar recolectada representa el triple de esfuerzo, 
              cada vuelo es una hazaña contra vientos de montaña. Esta dedicación incansable se traduce 
              en una <strong className="text-accent drop-shadow">miel única, más densa, más aromática</strong>, 
              con propiedades que solo la montaña puede ofrecer.
            </p>
            
            <div className="bg-terracota/90 border-4 border-terracota/50 p-6 rounded-xl shadow-2xl">
              <h4 className="text-2xl font-bold text-white mb-3 flex items-center gap-2 font-ruwudu">
                <img src="/women-hands-icon.png" alt="Manos" className="h-10 w-10 inline-block" />
                Empresa de Mujeres
              </h4>
              <p className="text-white/95 leading-relaxed font-medium">
                APIS TERRA es el fruto del amor y dedicación de dos generaciones de mujeres. 
                Mi madre, con <strong className="text-accent">más de 16 años de experiencia</strong> 
                en apicultura, me enseñó que cuidar de las abejas es cuidar de la tierra. Juntas, 
                madre e hija, continuamos este legado de respeto y pasión por la naturaleza.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center space-x-2 bg-white/90 px-4 py-2 rounded-full shadow-lg">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                <span className="text-sm font-bold text-primary">Apicultura Silvestre</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/90 px-4 py-2 rounded-full shadow-lg">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-bold text-primary">3,000 msnm</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/90 px-4 py-2 rounded-full shadow-lg">
                <div className="w-3 h-3 bg-terracota rounded-full animate-pulse"></div>
                <span className="text-sm font-bold text-primary">Hecho por Mujeres</span>
              </div>
            </div>
          </div>

          {/* Galería de fotos del apiario */}
          <div className="space-y-4">
            <div className="aspect-[4/3] bg-white rounded-xl overflow-hidden shadow-2xl border-4 border-accent">
              <img 
                src="/about-bees.jpg" 
                alt="Abejas trabajando en flores de alta montaña" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-white rounded-xl overflow-hidden shadow-xl border-4 border-terracota">
                <img 
                  src="/about-apiary-1.jpg" 
                  alt="Colmenas en las montañas" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square bg-white rounded-xl overflow-hidden shadow-xl border-4 border-primary">
                <img 
                  src="/about-apiary-2.jpg" 
                  alt="Abeja en panal con miel" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            
            <div className="bg-white/95 p-4 rounded-lg text-center shadow-lg border-2 border-accent">
              <p className="text-sm text-primary font-semibold italic">
                📸 Puedes reemplazar estas imágenes con fotos reales de tu apiario
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};