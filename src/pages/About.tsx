import { EcommerceTemplate } from '@/templates/EcommerceTemplate';

/**
 * PÁGINA - Nuestro Proyecto
 * 
 * Historia de APIS TERRA, apicultura silvestre y empresa familiar
 */

const About = () => {
  return (
    <EcommerceTemplate showCart={true}>
      {/* Hero: Imagen full de colmenas */}
      <section className="relative h-[70vh] overflow-hidden">
        <img 
          src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/5cf6468f-9b95-4228-adf8-62e2b1035fe6/about-hives-bw.jpg" 
          alt="Colmenas en el Nevado de Toluca" 
          className="w-full h-full object-cover grayscale"
        />
      </section>

      {/* Texto: 3,000 metros */}
      <section className="py-32 bg-background">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-3xl md:text-4xl text-foreground/90 leading-relaxed mb-8">
            3,000 metros de altura
          </p>
          <p className="text-base text-foreground/60 leading-relaxed">
            Donde el aire es más puro y las flores silvestres crecen sin prisa
          </p>
        </div>
      </section>

      {/* Imagen: Apicultor trabajando */}
      <section className="relative h-[80vh] overflow-hidden">
        <img 
          src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/5cf6468f-9b95-4228-adf8-62e2b1035fe6/about-beekeeper-bw.jpg" 
          alt="Apicultura artesanal" 
          className="w-full h-full object-cover grayscale"
        />
      </section>

      {/* Texto: Dos generaciones */}
      <section className="py-32 bg-background">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-xl text-foreground/80 leading-relaxed mb-12">
            Dos generaciones de mujeres
          </p>
          <p className="text-base text-foreground/60 leading-relaxed">
            16 años de apicultura silvestre
          </p>
        </div>
      </section>

      {/* Imagen: Dos mujeres en el campo */}
      <section className="relative h-[70vh] overflow-hidden">
        <img 
          src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/5cf6468f-9b95-4228-adf8-62e2b1035fe6/about-women-bw.jpg" 
          alt="Dos generaciones" 
          className="w-full h-full object-cover grayscale"
        />
      </section>

      {/* Texto: Compromiso */}
      <section className="py-32 bg-background">
        <div className="max-w-2xl mx-auto px-6 text-center space-y-16">
          <p className="text-base text-foreground/70 leading-relaxed">
            Miel 100% pura. Sin químicos. Sin atajos.
          </p>
          
          <div className="border-t border-foreground/10 pt-16">
            <p className="text-sm text-foreground/50 italic">
              Respeto hacia la naturaleza y las abejas
            </p>
          </div>
        </div>
      </section>
    </EcommerceTemplate>
  );
};

export default About;