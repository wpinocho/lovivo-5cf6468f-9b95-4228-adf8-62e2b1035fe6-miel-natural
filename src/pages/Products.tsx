import { HeadlessIndex } from '@/components/headless/HeadlessIndex';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import { ProductCard } from '@/components/ProductCard';
import { CollectionCard } from '@/components/CollectionCard';
import { Button } from '@/components/ui/button';

/**
 * PÁGINA - Productos
 * 
 * Catálogo completo de mieles y velas
 */

const Products = () => {
  return (
    <HeadlessIndex>
      {(logic) => {
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
          <EcommerceTemplate pageTitle="Nuestros Productos" showCart={true}>
            {/* Collections Section */}
            {!loadingCollections && collections.length > 0 && (
              <section className="py-16 bg-gradient-to-br from-terracota/5 via-background to-primary/5">
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

            {/* Products Section */}
            <section className="py-20 bg-background">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                    {selectedCollectionId 
                      ? `Productos de ${collections.find(c => c.id === selectedCollectionId)?.name || 'Colección'}` 
                      : 'Todos los Productos'
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
          </EcommerceTemplate>
        );
      }}
    </HeadlessIndex>
  );
};

export default Products;