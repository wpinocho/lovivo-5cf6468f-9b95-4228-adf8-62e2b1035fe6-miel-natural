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
      <section className="py-8 bg-background">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="text-3xl md:text-4xl text-foreground/90 mb-2 font-ruwudu">
            Nuestro Proyecto
          </h1>
          <p className="text-sm text-foreground/60 font-cormorant">Desde 2005</p>
        </div>
      </section>

      {/* Postal 1 - 3,000 metros de altura */}
      <section className="py-6" style={{ backgroundColor: '#f0d790' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-[#f5f1e8] p-6 shadow-2xl border-4 border-white" style={{ 
            boxShadow: '0 8px 30px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)'
          }}>
            {/* Logo en lugar de estampilla */}
            <div className="absolute top-3 right-3 w-14 h-14">
              <img 
                src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/7e7e24e1-47af-45b7-b627-f491723e0d93/1769127989306-bequfnhg9pb.png" 
                alt="APIS TERRA" 
                className="w-full h-full object-contain opacity-80"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Foto con borde vintage */}
              <div className="flex items-center justify-center">
                <img 
                  src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/7e7e24e1-47af-45b7-b627-f491723e0d93/1768847065476-xanspi1a0da.jpeg" 
                  alt="Colmenas en el Nevado de Toluca" 
                  className="w-full h-56 object-cover border-4 border-white shadow-lg"
                  style={{ filter: 'grayscale(100%) contrast(0.85) sepia(0.2)' }}
                />
              </div>
              
              {/* Texto estilo postal manuscrito */}
              <div className="space-y-2 font-cormorant text-foreground/80 text-sm">
                <p className="text-[10px] text-foreground/50 tracking-wide font-ruwudu mb-2">
                  Desde las alturas
                </p>
                
                <p style={{ fontSize: '18px', fontWeight: '700' }} className="text-base leading-snug">
                  3,000 metros de altura.
                </p>
                
                <p style={{ fontStyle: 'italic' }} className="text-sm leading-snug">Miel de de Alta Montaña.</p>

                <div className="pt-2 border-t border-foreground/20 mt-2">
                  <p style={{ fontSize: '14px' }} className="text-xs leading-snug">En las Faldas del Nevado de Toluca a 3,000 metros de altura, nuestras abejas trabajan rodeadas de aire limpio, flores silvestres resistentes al frío y una naturaleza que sobrevive a las heladas y largas sequías. Esta combinación crea una miel única: más compleja en sabor, más rica en propiedades, más pura en esencia.</p>
                </div>

                {/* Firma */}
                <div className="text-right pt-2">
                  <p style={{ fontSize: '12px', fontStyle: 'italic' }} className="text-sm">Apis Terra</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Postal 2 - Apicultura Silvestre */}
      <section className="py-6" style={{ backgroundColor: '#f0d790' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-[#f5f1e8] p-6 shadow-2xl border-4 border-white" style={{ 
            boxShadow: '0 8px 30px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)',
            transform: 'rotate(-0.5deg)'
          }}>
            {/* Líneas de postal */}
            <div className="absolute top-4 right-4 space-y-1 hidden md:block">
              <div className="w-20 h-px bg-foreground/30"></div>
              <div className="w-20 h-px bg-foreground/30"></div>
              <div className="w-20 h-px bg-foreground/30"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Foto con borde vintage */}
              <div className="flex items-center justify-center">
                <img 
                  src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/7e7e24e1-47af-45b7-b627-f491723e0d93/1768847065476-t83gvzpx5la.jpeg" 
                  alt="Apicultura artesanal" 
                  className="w-full h-56 object-cover border-4 border-white shadow-lg"
                  style={{ filter: 'grayscale(100%) contrast(0.85) sepia(0.2)' }}
                />
              </div>
              
              {/* Texto estilo postal manuscrito */}
              <div className="space-y-2 font-cormorant text-foreground/80 text-sm">
                <p className="text-[10px] text-foreground/50 tracking-wide font-cormorant mb-2">
                  Cartolina Postale
                </p>
                
                <p style={{ fontSize: '18px', fontWeight: '700' }} className="text-base leading-snug">Apicultura silvestre</p>
                
                <p style={{ fontStyle: 'italic' }} className="text-sm leading-snug">La colmena guía y el humano acompaña.</p>

                <div className="pt-2 border-t border-foreground/20 mt-2">
                  <p style={{ fontSize: '14px' }} className="text-xs leading-snug">La apicultura silvestre es sin atajos y con mínima invasión. La colmena se queda con la mitad de la cosecha de miel para alimentarse durante el invierno y la sequía. 
Sin antibióticos, sin pasteurizar, sin agua con azúcar, mínima filtración y máximo respeto a las abejas. Nuestra miel es el reflejo de una apicultura que va al ritmo propio de las abejas.</p>
                </div>

                {/* Firma */}
                <div className="text-right pt-2">
                  <p style={{ fontSize: '12px', fontStyle: 'italic' }} className="text-sm">Apis Terra</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Postal 3 - Dos Generaciones */}
      <section className="py-6" style={{ backgroundColor: '#f0d790' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-[#f5f1e8] p-6 shadow-2xl border-4 border-white" style={{ 
            boxShadow: '0 8px 30px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)',
            transform: 'rotate(0.5deg)'
          }}>
            {/* Logo en lugar de estampilla */}
            <div className="absolute top-3 right-3 w-14 h-14">
              <img 
                src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/7e7e24e1-47af-45b7-b627-f491723e0d93/1769127989306-bequfnhg9pb.png" 
                alt="APIS TERRA" 
                className="w-full h-full object-contain opacity-80"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Foto con borde vintage */}
              <div className="flex items-center justify-center">
                <img 
                  src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/7e7e24e1-47af-45b7-b627-f491723e0d93/1768847065475-u3oe2f8vxo.jpeg" 
                  alt="Dos generaciones de apicultoras" 
                  className="w-full h-56 object-cover border-4 border-white shadow-lg"
                  style={{ filter: 'grayscale(100%) contrast(0.85) sepia(0.2)' }}
                />
              </div>
              
              {/* Texto estilo postal manuscrito */}
              <div className="space-y-2 font-cormorant text-foreground/80 text-sm">
                <p className="text-[10px] text-foreground/50 tracking-wide font-cormorant mb-2">
                  From the Apiario
                </p>
                
                <p style={{ fontSize: '18px', fontWeight: '700' }} className="text-base leading-snug">
                  Dos generaciones de mujeres.
                </p>
                
                <p style={{ fontStyle: 'italic' }} className="text-sm leading-snug">
                  16 años de experiencia en apicultura de montaña.
                </p>

                <div className="pt-2 border-t border-foreground/20 mt-2">
                  <p style={{ fontSize: '14px' }} className="text-xs leading-snug">Somos un proyecto familiar de 3 generaciones que busca compartir la rareza de la miel de alta montaña. Cada frasco viaja del panal a tu mesa contando su propia historia y enlazando nuestras raíces con la riqueza de las abejas y la montaña.</p>
                  <p className="text-[10px] leading-snug mt-1 italic text-foreground/60">
                    Miel 100% pura, cruda y natural. Nuestro compromiso es con las abejas, la naturaleza y contigo.
                  </p>
                </div>

                {/* Firma manuscrita más elaborada */}
                <div className="text-right pt-2">
                  <p className="text-xs">Con todo nuestro corazón,</p>
                  <p style={{ fontSize: '12px', fontStyle: 'italic' }} className="text-sm font-bold">Apis Terra</p>
                  <p className="text-[10px] text-foreground/60">Nevado de Toluca ♡</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </EcommerceTemplate>
  );
};

export default About;