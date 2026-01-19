import { EcommerceTemplate } from '@/templates/EcommerceTemplate';

/**
 * PÁGINA - Nuestro Proyecto
 * 
 * Historia de APIS TERRA, apicultura silvestre y empresa familiar
 */

const About = () => {
  return (
    <EcommerceTemplate showCart={true}>
      {/* Hero: Imagen de colmenas */}
      <section className="relative h-[55vh] overflow-hidden">
        <img 
          src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/7e7e24e1-47af-45b7-b627-f491723e0d93/1768847065476-xanspi1a0da.jpeg" 
          alt="Colmenas en el Nevado de Toluca" 
          className="w-full h-full object-cover"
          style={{ filter: 'grayscale(100%) contrast(0.9)' }}
        />
      </section>

      {/* Texto: 3,000 metros */}
      <section className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-3xl md:text-4xl text-foreground/90 leading-relaxed mb-8">
            3,000 metros de altura
          </p>
          <p className="text-lg text-foreground/70 leading-relaxed mb-4">
            En las faldas del Nevado de Toluca, donde el aire es más puro y las flores silvestres crecen sin prisa
          </p>
          <p className="text-base text-foreground/60 leading-relaxed">
            Nuestras abejas recolectan néctar de flora nativa de alta montaña, produciendo una miel única que refleja la biodiversidad del ecosistema volcánico
          </p>
        </div>
      </section>

      {/* Imagen: Apicultor trabajando */}
      <section className="relative h-[55vh] overflow-hidden">
        <img 
          src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/7e7e24e1-47af-45b7-b627-f491723e0d93/1768847065476-t83gvzpx5la.jpeg" 
          alt="Apicultura artesanal" 
          className="w-full h-full object-cover"
          style={{ filter: 'grayscale(100%) contrast(0.9)' }}
        />
      </section>

      {/* Texto: Apicultura silvestre */}
      <section className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-2xl text-foreground/80 leading-relaxed mb-8">
            Apicultura silvestre
          </p>
          <p className="text-lg text-foreground/70 leading-relaxed mb-4">
            Trabajamos con métodos artesanales que respetan el ciclo natural de las abejas
          </p>
          <p className="text-base text-foreground/60 leading-relaxed">
            Sin antibióticos, sin alimentación artificial, sin procesos industriales. Cada gota de miel es el resultado del trabajo extraordinario de las abejas en su hábitat natural
          </p>
        </div>
      </section>

      {/* Imagen: Dos mujeres en el campo */}
      <section className="relative h-[55vh] overflow-hidden">
        <img 
          src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/7e7e24e1-47af-45b7-b627-f491723e0d93/1768847065475-u3oe2f8vxo.jpeg" 
          alt="Dos generaciones" 
          className="w-full h-full object-cover"
          style={{ filter: 'grayscale(100%) contrast(0.9)' }}
        />
      </section>

      {/* Texto: Empresa familiar */}
      <section className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-12">
          <div>
            <p className="text-2xl text-foreground/80 leading-relaxed mb-6">
              Dos generaciones de mujeres
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed mb-4">
              16 años de experiencia en apicultura de montaña
            </p>
            <p className="text-base text-foreground/60 leading-relaxed">
              Somos una empresa familiar dirigida por mujeres apicultoras. Madre e hija trabajando juntas para preservar las tradiciones de la apicultura sostenible
            </p>
          </div>
          
          <div className="border-t border-foreground/10 pt-12">
            <p className="text-base text-foreground/70 leading-relaxed mb-8">
              Miel 100% pura, cruda y natural
            </p>
            <p className="text-sm text-foreground/50 italic">
              Nuestro compromiso es con las abejas, la naturaleza y contigo
            </p>
          </div>
        </div>
      </section>
    </EcommerceTemplate>
  );
};

export default About;