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
        className="relative overflow-hidden min-h-screen flex items-center"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/7e7e24e1-47af-45b7-b627-f491723e0d93/1768436531046-j8wtmjeun4g.jpeg" 
            alt="Colmenas en campo de flores" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/60 to-primary/50"></div>
        <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center w-full py-20">
          <div className="mb-12 flex justify-center">
            <img 
              src="/logo.png" 
              alt="APIS TERRA" 
              className="h-48 w-auto drop-shadow-2xl"
            />
          </div>
          <div className="inline-block bg-accent/90 backdrop-blur-sm text-foreground px-8 py-3 rounded-full mb-8 text-sm tracking-wider uppercase shadow-xl">3000 metros de altura</div>
          <h1 className="text-5xl md:text-7xl font-normal text-foreground mb-6 drop-shadow-2xl font-ruwudu tracking-wide">Miel de Alta Montaña</h1>
          <p className="text-2xl md:text-3xl mb-4 max-w-3xl mx-auto drop-shadow-lg text-terracota font-medium">Del Nevado de Toluca</p>
          <p className="text-lg md:text-xl text-foreground/95 mb-12 max-w-2xl mx-auto drop-shadow-md">100% pura, cruda y natural</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-mustard/90 backdrop-blur-sm hover:bg-mustard text-foreground shadow-2xl text-lg px-10 py-6 border-2 border-accent hover:scale-105 transition-all rounded-full"
              onClick={() => navigate('/productos')}
            >
              Descubre Nuestros Productos
            </Button>
            <Button 
              size="lg" 
              className="bg-foreground/10 backdrop-blur-sm hover:bg-foreground/20 text-foreground shadow-2xl text-lg px-10 py-6 border-2 border-foreground/30 hover:scale-105 transition-all rounded-full"
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