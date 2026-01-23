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
              <section className="py-24" style={{ backgroundColor: '#f9f7f5' }}>
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl text-foreground mb-4 font-ruwudu">
                      Nuestras Colecciones
                    </h2>
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
            <section className="py-24" style={{ backgroundColor: '#f9f7f5' }}>
              <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl text-foreground mb-4 font-ruwudu">
                    {selectedCollectionId 
                      ? `Productos de ${collections.find(c => c.id === selectedCollectionId)?.name || 'Colección'}` 
                      : 'Todos los Productos'
                    }
                  </h2>
                  <p className="text-foreground/70 max-w-2xl mx-auto text-lg mt-6">
                    Descubre nuestra selección de mieles artesanales de alta montaña
                  </p>
                </div>
                
                <div className="flex items-center justify-center mb-12">
                  {selectedCollectionId && (
                    <Button 
                      variant="outline" 
                      onClick={handleShowAllProducts}
                      className="border-2 border-foreground/20 hover:bg-foreground/5 text-lg px-8"
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