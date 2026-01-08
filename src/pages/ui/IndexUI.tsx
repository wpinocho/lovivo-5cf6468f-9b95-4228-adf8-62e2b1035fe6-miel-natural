import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { ProductCard } from '@/components/ProductCard';
import { CollectionCard } from '@/components/CollectionCard';
import { FloatingCart } from '@/components/FloatingCart';
import { NewsletterSection } from '@/components/NewsletterSection';
import { AboutSection } from '@/components/AboutSection';
import { ContactSection } from '@/components/ContactSection';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';

/**
 * EDITABLE UI - IndexUI
 * 
 * Interfaz completamente editable para la página principal.
 * El agente IA puede modificar colores, textos, layout, etc.
 */

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    collections,
    loading,
    loadingCollections,
    selectedCollectionId,
    filteredProducts,
    handleViewCollectionProducts,
    handleShowAllProducts,
  } = logic;

  return (
    <EcommerceTemplate 
      showCart={true}
    >
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center py-32 border-b overflow-hidden"
        style={{ backgroundImage: 'url(/hero-mountain.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/85 via-secondary/70 to-background/95"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Descubre Nuestros Productos
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/95 hover:bg-white border-2 border-white text-secondary shadow-xl text-lg px-10 font-bold"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Nuestra Historia
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Collections Section */}
      {!loadingCollections && collections.length > 0 && (
        <section id="collections" className="py-16 bg-gradient-to-br from-terracota/5 via-background to-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Nuestras Colecciones
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-terracota via-accent to-primary mx-auto rounded-full"></div>
            </div>
            
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {collections.map((collection) => (
                  <CollectionCard 
                    key={collection.id} 
                    collection={collection} 
                    onViewProducts={handleViewCollectionProducts} 
                  />
                ))}
              </div>
            </div>
        </section>
      )}

      {/* Valores y Prácticas Naturales */}
      <section className="py-16 bg-gradient-to-br from-accent/5 via-primary/5 to-terracota/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 backdrop-blur rounded-2xl shadow-2xl p-8 md:p-12 border-2 border-accent/20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary via-accent to-terracota bg-clip-text text-transparent">
              🐝 Nuestro Compromiso con la Naturaleza
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-accent/10 p-6 rounded-xl border-2 border-accent/30 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3 text-center">🍯</div>
                <h3 className="font-bold text-lg text-center mb-3 text-accent">Alimentación Natural</h3>
                <p className="text-muted-foreground text-center text-sm">
                  Nuestras abejas se alimentan únicamente con su propia miel. 
                  <strong className="text-foreground block mt-2">NO usamos agua con azúcar</strong>
                </p>
              </div>
              
              <div className="bg-primary/10 p-6 rounded-xl border-2 border-primary/30 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3 text-center">🚫</div>
                <h3 className="font-bold text-lg text-center mb-3 text-primary">Libre de Químicos</h3>
                <p className="text-muted-foreground text-center text-sm">
                  100% libre de antibióticos, tóxicos y productos químicos en todos nuestros procesos
                </p>
              </div>
              
              <div className="bg-terracota/10 p-6 rounded-xl border-2 border-terracota/30 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3 text-center">🌺</div>
                <h3 className="font-bold text-lg text-center mb-3 text-terracota">Ingredientes Puros</h3>
                <p className="text-muted-foreground text-center text-sm">
                  Solo usamos miel cruda 100% pura y aceites esenciales o especias 100% naturales
                </p>
              </div>
            </div>
            
            <div className="text-center bg-gradient-to-r from-accent/20 to-primary/20 py-4 px-6 rounded-lg">
              <p className="text-foreground font-semibold text-lg">
                ✨ Cada producto es un testimonio de respeto hacia la naturaleza y las abejas ✨
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {selectedCollectionId 
                ? `Productos de ${collections.find(c => c.id === selectedCollectionId)?.name || 'Colección'}` 
                : 'Nuestros Productos'
              }
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-accent via-primary to-terracota mx-auto rounded-full mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Descubre nuestra selección de mieles artesanales de alta montaña
            </p>
          </div>
          
          <div className="flex items-center justify-center mb-8">
            {selectedCollectionId && (
              <Button 
                variant="outline" 
                onClick={handleShowAllProducts}
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Ver Todos los Productos
              </Button>
            )}
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-muted rounded-lg h-80 animate-pulse"></div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No hay productos disponibles.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Newsletter Section */}
      <NewsletterSection />

      <FloatingCart />
    </EcommerceTemplate>
  );
};