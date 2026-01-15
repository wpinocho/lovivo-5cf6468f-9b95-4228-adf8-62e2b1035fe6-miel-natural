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
      {/* Hero Section */}
      <section 
        className="relative border-b overflow-hidden min-h-[90vh] flex items-center"
      >
        {/* Background Image - sin distorsión */}
        <div className="absolute inset-0">
          <img 
            src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/7e7e24e1-47af-45b7-b627-f491723e0d93/1768436531046-j8wtmjeun4g.jpeg" 
            alt="Colmenas en campo de flores" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="mb-8 flex justify-center">
            <img 
              src="/logo.png" 
              alt="APIS TERRA" 
              className="h-40 w-auto drop-shadow-2xl"
            />
          </div>
          <div style={{ fontWeight: '400' }} className="inline-block bg-accent text-foreground px-6 py-2 rounded-full mb-4 font-bold text-base shadow-lg border border-mustard">3000 metros de altura</div>
          <h1 style={{ fontWeight: '400' }} style={{ fontWeight: '400', letterSpacing: '0px' }} className="text-3xl md:text-5xl font-bold text-foreground mb-4 drop-shadow-xl font-ruwudu">
            Miel de Abeja de Alta Montaña
          </h1>
          <p style={{ letterSpacing: '0px', color: '#c45b5b',
              fontWeight: '500', }} className="text-lg md:text-xl mb-3 max-w-2xl mx-auto drop-shadow-lg font-bold">De las Faldas del Nevado de Toluca</p>
          <p style={{ letterSpacing: '0px',
              fontWeight: '400', }} className="text-base md:text-lg text-foreground/95 mb-6 max-w-2xl mx-auto drop-shadow-md font-medium">Miel 100% pura, cruda y natural.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button style={{ fontWeight: '400' }} 
              size="lg" 
              className="bg-mustard hover:bg-mustard/90 text-foreground shadow-lg text-base px-8 font-bold border border-accent hover:scale-105 transition-transform"
              onClick={() => navigate('/productos')}
            >
              Descubre Nuestros Productos
            </Button>
            <Button style={{ fontWeight: '400' }} 
              size="lg" 
              className="bg-mustard hover:bg-mustard/90 text-foreground shadow-lg text-base px-8 font-bold border border-accent hover:scale-105 transition-transform"
              onClick={() => navigate('/nuestro-proyecto')}
            >
              Nuestra Historia
            </Button>
          </div>
        </div>
      </section>

      {/* Features Cards */}
      <section className="py-20 bg-gradient-to-br from-lavender/20 via-warm/20 to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div 
              className="bg-card rounded-2xl p-6 shadow-lg border border-secondary hover:shadow-xl transition-all cursor-pointer hover:scale-105 hover:-translate-y-2"
              onClick={() => navigate('/nuestro-proyecto')}
            >
              <div className="mb-4 text-center">
                <img src="/beehives-icon.png" alt="Colmenas" className="h-24 w-24 mx-auto object-contain" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3 text-secondary font-ruwudu">
                Apicultura Silvestre
              </h3>
              <p className="text-sm text-forest/90 text-center font-medium">
                Conoce nuestra historia de apicultura silvestre a 3,000 metros de altura y el trabajo extraordinario de nuestras abejas.
              </p>
            </div>

            <div 
              className="bg-card rounded-2xl p-6 shadow-lg border border-mustard hover:shadow-xl transition-all cursor-pointer hover:scale-105 hover:-translate-y-2"
              onClick={() => navigate('/productos')}
            >
              <div className="mb-4 text-center">
                <img src="/honey-jar-icon.png" alt="Miel" className="h-24 w-24 mx-auto object-contain" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3 text-mustard font-ruwudu">
                Productos Naturales
              </h3>
              <p className="text-sm text-forest/90 text-center font-medium">
                Miel 100% pura, cruda y natural. Libre de químicos, antibióticos y con ingredientes puros de montaña.
              </p>
            </div>

            <div 
              className="bg-card rounded-2xl p-6 shadow-lg border border-lavender hover:shadow-xl transition-all cursor-pointer hover:scale-105 hover:-translate-y-2"
              onClick={() => navigate('/contacto')}
            >
              <div className="mb-4 text-center">
                <img src="/women-hands-icon.png" alt="Manos de mujeres" className="h-24 w-24 mx-auto object-contain" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3 text-plum font-ruwudu">
                Empresa de Mujeres
              </h3>
              <p className="text-sm text-forest/90 text-center font-medium">
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