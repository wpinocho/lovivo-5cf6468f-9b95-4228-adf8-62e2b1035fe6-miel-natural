/**
 * EDITABLE COMPONENT - AboutSection
 * 
 * Sección "Nuestro Proyecto" con espacio para agregar fotos del apiario
 * y explicación del proyecto. Completamente editable.
 */

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Nuestro Proyecto
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto descriptivo */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              Miel Artesanal de las Sierras
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              En APIS TERRA trabajamos con pasión para ofrecerte la miel más pura y 
              natural. Nuestras abejas recolectan el néctar de flores silvestres en 
              campos libres de pesticidas, creando productos únicos y llenos de sabor.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Cada frasco de miel es el resultado de un proceso artesanal cuidadoso, 
              desde la colmena hasta tu mesa. Infusionamos nuestras mieles con hierbas 
              aromáticas seleccionadas para crear experiencias de sabor inolvidables.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm font-medium text-foreground">100% Natural</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm font-medium text-foreground">Sin Aditivos</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm font-medium text-foreground">Producción Artesanal</span>
              </div>
            </div>
          </div>

          {/* Placeholder para fotos del apiario */}
          <div className="space-y-4">
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden shadow-lg">
              <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground p-8 text-center">
                <svg 
                  className="w-16 h-16 mb-4 opacity-40" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                  />
                </svg>
                <p className="text-sm font-medium">
                  Espacio reservado para fotos del apiario
                </p>
                <p className="text-xs mt-2 opacity-70">
                  Agrega imágenes de tu producción aquí
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-muted rounded-lg overflow-hidden shadow-md">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <svg 
                    className="w-12 h-12 opacity-30" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                    />
                  </svg>
                </div>
              </div>
              <div className="aspect-square bg-muted rounded-lg overflow-hidden shadow-md">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <svg 
                    className="w-12 h-12 opacity-30" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};