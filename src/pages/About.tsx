import { EcommerceTemplate } from '@/templates/EcommerceTemplate';

/**
 * PÁGINA - Nuestro Proyecto
 * 
 * Historia de APIS TERRA en formato de postales vintage
 */

const About = () => {
  return (
    <EcommerceTemplate showCart={true}>
      {/* Hero con título */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="text-4xl md:text-5xl text-foreground/90 mb-3 font-ruwudu">
            Nuestro Proyecto
          </h1>
          <p className="text-base text-foreground/60 font-biro">
            Postales desde el Nevado de Toluca
          </p>
        </div>
      </section>

      {/* Postal 1 - 3,000 metros de altura */}
      <section className="py-12 bg-background">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="relative bg-[#f5f1e8] p-6 md:p-8 shadow-2xl border-8 border-white" style={{ 
            boxShadow: '0 10px 40px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)'
          }}>
            {/* Estampilla decorativa */}
            <div className="absolute top-6 right-6 w-16 h-20 border-4 border-foreground/20 bg-background/50" style={{
              borderStyle: 'dashed',
            }}>
              <div className="w-full h-full flex items-center justify-center text-xs text-foreground/40 font-ruwudu rotate-12">
                3000m
              </div>
            </div>

            {/* Foto con borde vintage */}
            <div className="mb-6 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200/30 to-orange-200/30 translate-x-2 translate-y-2"></div>
              <img 
                src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/7e7e24e1-47af-45b7-b627-f491723e0d93/1768847065476-xanspi1a0da.jpeg" 
                alt="Colmenas en el Nevado de Toluca" 
                className="relative w-full h-auto border-6 border-white shadow-lg"
                style={{ filter: 'grayscale(100%) contrast(0.85) sepia(0.2)' }}
              />
            </div>
            
            {/* Texto estilo postal manuscrito */}
            <div className="space-y-3 font-biro text-foreground/80">
              <p className="text-xs text-foreground/50 uppercase tracking-widest font-ruwudu mb-3">
                Desde las alturas
              </p>
              
              <p className="text-xl md:text-2xl leading-relaxed">
                3,000 metros de altura.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed">
                Donde el aire es más puro y las flores silvestres crecen sin prisa.
              </p>

              <div className="pt-4 border-t border-foreground/20 mt-4">
                <p className="text-base md:text-lg leading-relaxed">
                  En las faldas del Nevado de Toluca, nuestras abejas recolectan néctar de flora nativa de alta montaña, produciendo una miel única que refleja la biodiversidad del ecosistema volcánico.
                </p>
                <p className="text-base md:text-lg leading-relaxed mt-3">
                  La altura extrema crea condiciones únicas: temperaturas frescas, radiación solar intensa y una diversidad floral que solo existe en este microclima de montaña.
                </p>
              </div>

              {/* Firma */}
              <div className="text-right pt-3">
                <p className="text-lg md:text-xl">— APIS TERRA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Postal 2 - Apicultura Silvestre */}
      <section className="py-12 bg-background">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="relative bg-[#f5f1e8] p-6 md:p-8 shadow-2xl border-8 border-white" style={{ 
            boxShadow: '0 10px 40px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)',
            transform: 'rotate(-0.5deg)'
          }}>
            {/* Líneas de postal */}
            <div className="absolute top-8 right-8 space-y-2 hidden md:block">
              <div className="w-32 h-px bg-foreground/30"></div>
              <div className="w-32 h-px bg-foreground/30"></div>
              <div className="w-32 h-px bg-foreground/30"></div>
            </div>

            {/* Foto con borde vintage */}
            <div className="mb-6 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-200/30 to-teal-200/30 -translate-x-2 -translate-y-2"></div>
              <img 
                src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/7e7e24e1-47af-45b7-b627-f491723e0d93/1768847065476-t83gvzpx5la.jpeg" 
                alt="Apicultura artesanal" 
                className="relative w-full h-auto border-6 border-white shadow-lg"
                style={{ filter: 'grayscale(100%) contrast(0.85) sepia(0.2)' }}
              />
            </div>
            
            {/* Texto estilo postal manuscrito */}
            <div className="space-y-3 font-biro text-foreground/80">
              <p className="text-xs text-foreground/50 uppercase tracking-widest font-ruwudu mb-3">
                Cartolina Postale
              </p>
              
              <p className="text-xl md:text-2xl leading-relaxed">
                Apicultura silvestre.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed">
                Trabajamos con métodos artesanales que respetan el ciclo natural de las abejas.
              </p>

              <div className="pt-4 border-t border-foreground/20 mt-4">
                <p className="text-base md:text-lg leading-relaxed">
                  Sin antibióticos, sin alimentación artificial, sin procesos industriales. Cada gota de miel es el resultado del trabajo extraordinario de las abejas en su hábitat natural.
                </p>
                <p className="text-base md:text-lg leading-relaxed mt-3">
                  Nuestras colmenas viven según el ritmo de las estaciones, floraciones y el comportamiento instintivo de las abejas.
                </p>
              </div>

              {/* Firma */}
              <div className="text-right pt-3">
                <p className="text-lg md:text-xl">Con cariño, desde la montaña x</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Postal 3 - Dos Generaciones */}
      <section className="py-12 bg-background">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="relative bg-[#f5f1e8] p-6 md:p-8 shadow-2xl border-8 border-white" style={{ 
            boxShadow: '0 10px 40px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)',
            transform: 'rotate(0.5deg)'
          }}>
            {/* Estampilla postal real */}
            <div className="absolute top-6 right-6 w-20 h-24 border-4 border-foreground/30 bg-gradient-to-br from-amber-100 to-orange-100 flex flex-col items-center justify-center">
              <div className="text-xs text-foreground/60 font-ruwudu text-center">
                <div className="text-2xl mb-1">🐝</div>
                <div>MÉXICO</div>
                <div className="text-xs">2025</div>
              </div>
            </div>

            {/* Foto con borde vintage */}
            <div className="mb-6 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-200/30 to-pink-200/30 translate-x-3 -translate-y-2"></div>
              <img 
                src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/7e7e24e1-47af-45b7-b627-f491723e0d93/1768847065475-u3oe2f8vxo.jpeg" 
                alt="Dos generaciones de apicultoras" 
                className="relative w-full h-auto border-6 border-white shadow-lg"
                style={{ filter: 'grayscale(100%) contrast(0.85) sepia(0.2)' }}
              />
            </div>
            
            {/* Texto estilo postal manuscrito */}
            <div className="space-y-3 font-biro text-foreground/80">
              <p className="text-xs text-foreground/50 uppercase tracking-widest font-ruwudu mb-3">
                FROM THE APIARIO
              </p>
              
              <p className="text-xl md:text-2xl leading-relaxed">
                Dos generaciones de mujeres.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed">
                16 años de experiencia en apicultura de montaña.
              </p>

              <div className="pt-4 border-t border-foreground/20 mt-4">
                <p className="text-base md:text-lg leading-relaxed">
                  Somos una empresa familiar dirigida por mujeres apicultoras. Madre e hija trabajando juntas para preservar las tradiciones de la apicultura sostenible y transmitir este conocimiento ancestral.
                </p>
                <p className="text-base md:text-lg leading-relaxed mt-3">
                  Cada frasco de miel lleva el trabajo, dedicación y amor de dos generaciones comprometidas con las abejas, la montaña y la producción responsable.
                </p>
                <p className="text-sm leading-relaxed mt-3 italic text-foreground/60">
                  Miel 100% pura, cruda y natural. Nuestro compromiso es con las abejas, la naturaleza y contigo.
                </p>
              </div>

              {/* Firma manuscrita más elaborada */}
              <div className="text-right pt-3 space-y-1">
                <p className="text-lg md:text-xl">Con todo nuestro corazón,</p>
                <p className="text-xl md:text-2xl">APIS TERRA</p>
                <p className="text-base text-foreground/60">Nevado de Toluca ♡</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </EcommerceTemplate>
  );
};

export default About;