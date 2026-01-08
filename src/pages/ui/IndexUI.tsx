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
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/85 via-secondary/70 to-background/95"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="mb-8">
            <img 
              src="/logo.png" 
              alt="APIS TERRA" 
              className="h-32 w-auto mx-auto drop-shadow-2xl animate-pulse"
            />
          </div>
          <div className="inline-block bg-accent/90 text-accent-foreground px-6 py-2 rounded-full mb-6 font-semibold text-lg">
            🏔️ Miel de Alta Montaña
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            A 3,000 Metros de Altura
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-4 max-w-3xl mx-auto drop-shadow-lg font-medium">
            En las Faldas del Nevado de Toluca
          </p>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow-md">
            Miel 100% pura, cruda y natural. Elaborada con pasión por manos de mujeres.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-xl text-lg px-10 font-bold border-2 border-accent"
              onClick={() => navigate('/productos')}
            >
              Descubre Nuestros Productos
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/95 hover:bg-white border-2 border-white text-secondary shadow-xl text-lg px-10 font-bold"
              onClick={() => navigate('/nuestro-proyecto')}
            >
              Nuestra Historia
            </Button>
          </div>
        </div>
      </section>

      {/* Features Cards */}
      <section className="py-20 bg-gradient-to-br from-accent/5 via-primary/5 to-terracota/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div 
              className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow-lg border-2 border-accent/20 hover:shadow-2xl transition-all cursor-pointer hover:scale-105"
              onClick={() => navigate('/nuestro-proyecto')}
            >
              <div className="text-5xl mb-4 text-center">🐝</div>
              <h3 className="text-2xl font-bold text-center mb-4 text-accent">
                Apicultura Silvestre
              </h3>
              <p className="text-muted-foreground text-center">
                Conoce nuestra historia de apicultura silvestre a 3,000 metros de altura y el trabajo extraordinario de nuestras abejas.
              </p>
            </div>

            <div 
              className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow-lg border-2 border-primary/20 hover:shadow-2xl transition-all cursor-pointer hover:scale-105"
              onClick={() => navigate('/productos')}
            >
              <div className="text-5xl mb-4 text-center">🍯</div>
              <h3 className="text-2xl font-bold text-center mb-4 text-primary">
                Productos Naturales
              </h3>
              <p className="text-muted-foreground text-center">
                Miel 100% pura, cruda y natural. Libre de químicos, antibióticos y con ingredientes puros de montaña.
              </p>
            </div>

            <div 
              className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow-lg border-2 border-terracota/20 hover:shadow-2xl transition-all cursor-pointer hover:scale-105"
              onClick={() => navigate('/contacto')}
            >
              <div className="text-5xl mb-4 text-center">💐</div>
              <h3 className="text-2xl font-bold text-center mb-4 text-terracota">
                Empresa de Mujeres
              </h3>
              <p className="text-muted-foreground text-center">
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