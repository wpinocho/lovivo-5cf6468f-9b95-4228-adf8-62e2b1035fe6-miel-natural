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
        className="relative bg-cover bg-center py-32 border-b overflow-hidden min-h-[90vh] flex items-center"
        style={{ backgroundImage: 'url(/hero-mountain.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="mb-8">
            <img 
              src="/logo.png" 
              alt="APIS TERRA" 
              className="h-48 w-auto mx-auto drop-shadow-2xl"
            />
          </div>
          <div className="inline-block bg-accent text-primary px-8 py-3 rounded-full mb-6 font-bold text-xl shadow-2xl border-4 border-accent">3000 metros de altura</div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl font-ruwudu">
            Miel de Alta Montaña
          </h1>
          <p className="text-xl md:text-2xl text-accent mb-4 max-w-3xl mx-auto drop-shadow-lg font-bold">
            En las Faldas del Nevado de Toluca
          </p>
          <p className="text-lg md:text-xl text-white/95 mb-8 max-w-3xl mx-auto drop-shadow-md font-medium">
            Miel 100% pura, cruda y natural. Elaborada con pasión por manos de mujeres.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-primary shadow-2xl text-lg px-10 font-bold border-4 border-accent/70 hover:scale-105 transition-transform"
              onClick={() => navigate('/productos')}
            >
              Descubre Nuestros Productos
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-terracota hover:bg-terracota/90 border-4 border-terracota/70 text-white shadow-2xl text-lg px-10 font-bold hover:scale-105 transition-transform"
              onClick={() => navigate('/nuestro-proyecto')}
            >
              Nuestra Historia
            </Button>
          </div>
        </div>
      </section>

      {/* Features Cards */}
      <section className="py-20 bg-gradient-to-br from-accent/20 via-background to-terracota/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div 
              className="bg-white rounded-2xl p-8 shadow-2xl border-4 border-accent hover:shadow-[0_20px_60px_rgba(212,168,67,0.4)] transition-all cursor-pointer hover:scale-105 hover:-translate-y-2"
              onClick={() => navigate('/nuestro-proyecto')}
            >
              <div className="mb-4 text-center">
                <img src="/beehives-icon.png" alt="Colmenas" className="h-24 w-24 mx-auto object-contain" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-primary font-ruwudu">
                Apicultura Silvestre
              </h3>
              <p className="text-primary/80 text-center font-medium">
                Conoce nuestra historia de apicultura silvestre a 3,000 metros de altura y el trabajo extraordinario de nuestras abejas.
              </p>
            </div>

            <div 
              className="bg-white rounded-2xl p-8 shadow-2xl border-4 border-primary hover:shadow-[0_20px_60px_rgba(74,84,45,0.4)] transition-all cursor-pointer hover:scale-105 hover:-translate-y-2"
              onClick={() => navigate('/productos')}
            >
              <div className="mb-4 text-center">
                <img src="/honey-jar-icon.png" alt="Miel" className="h-24 w-24 mx-auto object-contain" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-accent font-ruwudu">
                Productos Naturales
              </h3>
              <p className="text-primary/80 text-center font-medium">
                Miel 100% pura, cruda y natural. Libre de químicos, antibióticos y con ingredientes puros de montaña.
              </p>
            </div>

            <div 
              className="bg-white rounded-2xl p-8 shadow-2xl border-4 border-terracota hover:shadow-[0_20px_60px_rgba(196,91,91,0.4)] transition-all cursor-pointer hover:scale-105 hover:-translate-y-2"
              onClick={() => navigate('/contacto')}
            >
              <div className="mb-4 text-center">
                <img src="/women-hands-icon.png" alt="Manos de mujeres" className="h-24 w-24 mx-auto object-contain" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-terracota font-ruwudu">
                Empresa de Mujeres
              </h3>
              <p className="text-primary/80 text-center font-medium">
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