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
        {/* Full-width Image */}
        <div className="w-full h-[85vh]">
          <img 
            src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/7e7e24e1-47af-45b7-b627-f491723e0d93/1768436531046-j8wtmjeun4g.jpeg" 
            alt="Colmenas en campo de flores" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Content Below Image */}
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-20 text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/logo.png" 
              alt="APIS TERRA" 
              className="h-32 w-auto"
            />
          </div>

          {/* Simple Badge */}
          <div className="text-sm tracking-widest uppercase mb-6" style={{ color: '#594b4b' }}>
            3000 metros de altura
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-normal mb-4 font-ruwudu" style={{ color: '#594b4b' }}>
            Miel de Alta Montaña
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-3" style={{ color: '#594b4b' }}>
            Del Nevado de Toluca
          </p>

          {/* Description */}
          <p className="text-base md:text-lg mb-12 opacity-80" style={{ color: '#594b4b' }}>
            100% pura, cruda y natural
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-foreground hover:bg-foreground/90 text-background text-base px-8 py-6 transition-colors"
              onClick={() => navigate('/productos')}
            >
              Descubre Nuestros Productos
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background text-base px-8 py-6 transition-colors"
              onClick={() => navigate('/nuestro-proyecto')}
            >
              Nuestra Historia
            </Button>
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