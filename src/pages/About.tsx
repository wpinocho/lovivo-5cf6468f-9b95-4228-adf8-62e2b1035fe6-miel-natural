import { EcommerceTemplate } from '@/templates/EcommerceTemplate';

/**
 * PÁGINA - Nuestro Proyecto
 * 
 * Historia de APIS TERRA, apicultura silvestre y empresa familiar
 */

const About = () => {
  return (
    <EcommerceTemplate showCart={true}>
      {/* Sección 1: Texto izquierda + Imagen derecha */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Texto */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl text-foreground/90 leading-relaxed font-ruwudu">
                3,000 metros de altura
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                En las faldas del Nevado de Toluca, donde el aire es más puro y las flores silvestres crecen sin prisa.
              </p>
              <p className="text-base text-foreground/60 leading-relaxed">
                Nuestras abejas recolectan néctar de flora nativa de alta montaña, produciendo una miel única que refleja la biodiversidad del ecosistema volcánico. Cada cosecha es testimonio de un ecosistema intacto.
              </p>
              <p className="text-base text-foreground/60 leading-relaxed">
                La altura extrema crea condiciones únicas: temperaturas frescas, radiación solar intensa y una diversidad floral que solo existe en este microclima de montaña.
              </p>
            </div>
            
            {/* Imagen cuadrada */}
            <div className="aspect-square overflow-hidden rounded-lg">
              <img 
                src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/7e7e24e1-47af-45b7-b627-f491723e0d93/1768847065476-xanspi1a0da.jpeg" 
                alt="Colmenas en el Nevado de Toluca" 
                className="w-full h-full object-cover"
                style={{ filter: 'grayscale(100%) contrast(0.85)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sección 2: Imagen izquierda + Texto derecha */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Imagen cuadrada */}
            <div className="aspect-square overflow-hidden rounded-lg order-2 md:order-1">
              <img 
                src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/7e7e24e1-47af-45b7-b627-f491723e0d93/1768847065476-t83gvzpx5la.jpeg" 
                alt="Apicultura artesanal" 
                className="w-full h-full object-cover"
                style={{ filter: 'grayscale(100%) contrast(0.85)' }}
              />
            </div>
            
            {/* Texto */}
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl text-foreground/90 leading-relaxed font-ruwudu">
                Apicultura silvestre
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Trabajamos con métodos artesanales que respetan el ciclo natural de las abejas.
              </p>
              <p className="text-base text-foreground/60 leading-relaxed">
                Sin antibióticos, sin alimentación artificial, sin procesos industriales. Cada gota de miel es el resultado del trabajo extraordinario de las abejas en su hábitat natural.
              </p>
              <p className="text-base text-foreground/60 leading-relaxed">
                Nuestras colmenas viven según el ritmo de las estaciones, floraciones y el comportamiento instintivo de las abejas. No intervenimos más que para cosechar lo que generosamente comparten con nosotros.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 3: Texto izquierda + Imagen derecha */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Texto */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl text-foreground/90 leading-relaxed font-ruwudu">
                Dos generaciones de mujeres
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                16 años de experiencia en apicultura de montaña.
              </p>
              <p className="text-base text-foreground/60 leading-relaxed">
                Somos una empresa familiar dirigida por mujeres apicultoras. Madre e hija trabajando juntas para preservar las tradiciones de la apicultura sostenible y transmitir este conocimiento ancestral.
              </p>
              <p className="text-base text-foreground/60 leading-relaxed">
                Cada frasco de miel lleva el trabajo, dedicación y amor de dos generaciones comprometidas con las abejas, la montaña y la producción responsable.
              </p>
              <p className="text-sm text-foreground/50 italic pt-4">
                Miel 100% pura, cruda y natural. Nuestro compromiso es con las abejas, la naturaleza y contigo.
              </p>
            </div>
            
            {/* Imagen cuadrada */}
            <div className="aspect-square overflow-hidden rounded-lg">
              <img 
                src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/7e7e24e1-47af-45b7-b627-f491723e0d93/1768847065475-u3oe2f8vxo.jpeg" 
                alt="Dos generaciones de apicultoras" 
                className="w-full h-full object-cover"
                style={{ filter: 'grayscale(100%) contrast(0.85)' }}
              />
            </div>
          </div>
        </div>
      </section>
    </EcommerceTemplate>
  );
};

export default About;