/**
 * EDITABLE COMPONENT - GallerySection
 * 
 * Galería de fotos del apiario con layout estético tipo masonry
 */

export const GallerySection = () => {
  const galleryImages = [
    {
      src: '/gallery-wildflower-meadow.jpg',
      alt: 'Campo espectacular de flores silvestres amarillas y blancas bajo cielo azul',
      className: 'md:col-span-3 md:row-span-2'
    },
    {
      src: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/7e7e24e1-47af-45b7-b627-f491723e0d93/1768584070655-gc1cq0mt2co.JPG',
      alt: 'Campo hermoso con lupinos morados y colmenas al fondo con pinos',
      className: 'md:col-span-2 md:row-span-2'
    },
    {
      src: '/gallery-bee-yellow.jpg',
      alt: 'Abeja recolectando polen en flor amarilla',
      className: 'md:col-span-1 md:row-span-1'
    },
    {
      src: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/7e7e24e1-47af-45b7-b627-f491723e0d93/1768500364096-w0dcq4l2h0l.jpeg',
      alt: 'Panales de miel dorada natural con hexágonos perfectos',
      className: 'md:col-span-1 md:row-span-1'
    },
    {
      src: '/gallery-beekeepers.jpg',
      alt: 'Apicultoras trabajando con las colmenas en campo de flores',
      className: 'md:col-span-2 md:row-span-2'
    },
    {
      src: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/7e7e24e1-47af-45b7-b627-f491723e0d93/1768584070655-thj3on8870c.jpeg',
      alt: 'Frasco de miel cremosa rodeado de flores cosmos rosas',
      className: 'md:col-span-1 md:row-span-2'
    },
    {
      src: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/7e7e24e1-47af-45b7-b627-f491723e0d93/1768500364097-x7xduvsm2y.jpeg',
      alt: 'Campo de flores rosas cosmos bajo cielo azul',
      className: 'md:col-span-2 md:row-span-1'
    },
    {
      src: 'user-uploads://1768502612175-p0austu1gi.jpeg',
      alt: 'Colmenas rodeadas de flores moradas lupinos en el campo',
      className: 'md:col-span-1 md:row-span-2'
    },
    {
      src: '/gallery-beekeeper-work.jpg',
      alt: 'Apicultor trabajando con colmenas en campo de flores amarillas',
      className: 'md:col-span-2 md:row-span-2'
    },
    {
      src: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/7e7e24e1-47af-45b7-b627-f491723e0d93/1768500364097-94jyidu38kk.jpeg',
      alt: 'Atardecer espectacular en el apiario de montaña',
      className: 'md:col-span-3 md:row-span-1'
    },
    {
      src: 'user-uploads://prev-3/1768503772303-vx0hc3t27cm.JPG',
      alt: 'Panal de miel dorada en plato de porcelana azul',
      className: 'md:col-span-1 md:row-span-1'
    },
    {
      src: '/gallery-bee-lavender.jpg',
      alt: 'Abeja trabajando en flores de lavanda',
      className: 'md:col-span-1 md:row-span-1'
    },
    {
      src: 'user-uploads://prev-3/1768503772303-jmonc12eyxs.jpeg',
      alt: 'Colmenas en la neblina con flores blancas y pinos al fondo',
      className: 'md:col-span-2 md:row-span-2'
    },
    {
      src: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/7e7e24e1-47af-45b7-b627-f491723e0d93/1768502612175-fljxt6pghym.JPG',
      alt: 'Perros del apiario caminando al atardecer en sendero de montaña',
      className: 'md:col-span-3 md:row-span-1'
    },
    {
      src: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/7e7e24e1-47af-45b7-b627-f491723e0d93/1768500364097-whvyzd82i2m.jpeg',
      alt: 'Fila de colmenas de madera en el bosque de montaña',
      className: 'md:col-span-1 md:row-span-1'
    },
    {
      src: '/gallery-bee-small-flowers.jpg',
      alt: 'Abeja polinizando flores amarillas silvestres',
      className: 'md:col-span-1 md:row-span-1'
    },
    {
      src: 'user-uploads://prev-3/1768503772303-lvhvon4lqhi.JPG',
      alt: 'Colmenas bajo cielo azul con pinos y pastos secos de montaña',
      className: 'md:col-span-2 md:row-span-2'
    },
    {
      src: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/7e7e24e1-47af-45b7-b627-f491723e0d93/1768500364097-0jtzbgmgmxrn.jpeg',
      alt: 'Campo de alta montaña con flores silvestres secas',
      className: 'md:col-span-1 md:row-span-1'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-warm/30 via-lavender/20 to-muted/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-ruwudu drop-shadow-lg">
            Galería de Nuestro Apiario
          </h2>
          <div className="w-32 h-1 bg-mustard mx-auto rounded-full mb-4 shadow-lg"></div>
          <p className="text-lg text-foreground/90 font-medium">
            Momentos capturados en las alturas del Nevado de Toluca
          </p>
        </div>

        {/* Masonry Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 auto-rows-[250px] gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl border border-accent/30 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] ${image.className}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-foreground text-sm font-medium p-4 drop-shadow-lg">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-foreground/95 text-lg font-medium mb-4">
            ¿Te gustaría conocer más sobre nuestro proceso?
          </p>
          <a
            href="/nuestro-proyecto"
            className="inline-block bg-mustard hover:bg-mustard/90 text-foreground font-bold px-8 py-3 rounded-full shadow-lg border border-accent transition-all hover:scale-105"
          >
            Conoce Nuestra Historia
          </a>
        </div>
      </div>
    </section>
  );
};