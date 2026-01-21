import { Button } from '@/components/ui/button';
import { FloatingCart } from '@/components/FloatingCart';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import { useNavigate } from 'react-router-dom';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';

/**
 * EDITABLE UI - IndexUI
 * 
 * Página principal con Hero section únicamente.
 * Otras secciones están en páginas separadas.
 */

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const navigate = useNavigate();

  return (
    <EcommerceTemplate 
      showCart={true}
    >
      {/* Hero Section - Noma Style */}
      <section className="relative overflow-hidden">
        {/* Full-width Image with Text Overlay */}
        <div className="relative w-full h-[76vh]">
          <img 
            src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/7e7e24e1-47af-45b7-b627-f491723e0d93/1768436531046-j8wtmjeun4g.jpeg" 
            alt="Colmenas en campo de flores" 
            className="w-full h-full object-cover object-center"
            style={{ filter: 'brightness(0.85)' }}
          />
          
          {/* Text overlay on image */}
          <div className="absolute inset-0 px-6 sm:px-8 lg:px-12 py-8 flex flex-col justify-between">
            {/* Top Left - APIS TERRA */}
            <div>
              <h1 className="text-3xl md:text-4xl font-normal font-ruwudu" style={{ color: '#f9f7f5' }}>
                apis terra
              </h1>
            </div>
            
            {/* Bottom section */}
            <div className="flex justify-between items-end">
              {/* Bottom Left */}
              <div>
                <h2 className="text-2xl md:text-3xl font-normal mb-2 font-ruwudu" style={{ color: '#f9f7f5' }}>
                  Miel de Abeja de Alta Montaña
                </h2>
                <p className="text-sm md:text-base" style={{ color: '#f9f7f5' }}>
                  3000 msnm - Faldas del Nevado de Toluca
                </p>
              </div>
              
              {/* Bottom Right */}
              <div className="max-w-xs text-right">
                <p className="text-xs md:text-sm" style={{ color: '#f9f7f5' }}>
                  somos productoras de miel multifloral mantequilla 100% cruda, pura y natural de apicultura silvestre
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-3 gap-12">
            <div 
              className="group cursor-pointer transition-all duration-300 hover:-translate-y-2"
              onClick={() => navigate('/nuestro-proyecto')}
            >
              <div className="mb-6 text-center">
                <img src="/beehives-icon.png" alt="Colmenas" className="h-28 w-28 mx-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-2xl text-center mb-4 text-secondary font-ruwudu">
                Apicultura Silvestre
              </h3>
              <p className="text-base text-foreground/80 text-center leading-relaxed">
                Conoce nuestra historia de apicultura silvestre a 3,000 metros de altura y el trabajo extraordinario de nuestras abejas.
              </p>
            </div>

            <div 
              className="group cursor-pointer transition-all duration-300 hover:-translate-y-2"
              onClick={() => navigate('/productos')}
            >
              <div className="mb-6 text-center">
                <img src="/honey-jar-icon.png" alt="Miel" className="h-28 w-28 mx-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-2xl text-center mb-4 text-mustard font-ruwudu">
                Productos Naturales
              </h3>
              <p className="text-base text-foreground/80 text-center leading-relaxed">
                Miel 100% pura, cruda y natural. Libre de químicos, antibióticos y con ingredientes puros de montaña.
              </p>
            </div>

            <div 
              className="group cursor-pointer transition-all duration-300 hover:-translate-y-2"
              onClick={() => navigate('/contacto')}
            >
              <div className="mb-6 text-center">
                <img src="/women-hands-icon.png" alt="Manos de mujeres" className="h-28 w-28 mx-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-2xl text-center mb-4 text-plum font-ruwudu">
                Empresa de Mujeres
              </h3>
              <p className="text-base text-foreground/80 text-center leading-relaxed">
                Dos generaciones de mujeres apicultoras con más de 16 años de experiencia. Contáctanos y conoce más.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FloatingCart />
    </EcommerceTemplate>
  );
};