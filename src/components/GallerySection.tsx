/**
 * EDITABLE COMPONENT - GallerySection
 * 
 * Galería de fotos del apiario con layout estético tipo masonry
 */

export const GallerySection = () => {
  const galleryImages = [
    {
      src: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/5cf6468f-9b95-4228-adf8-62e2b1035fe6/gallery-yellow-wildflowers.jpg',
      alt: 'Campo espectacular de flores silvestres amarillas bajo cielo azul con nubes',
      aspectRatio: 'aspect-[4/3]'
    },
    {
      src: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/5cf6468f-9b95-4228-adf8-62e2b1035fe6/gallery-beekeepers-team.jpg',
      alt: 'Tres apicultoras trabajando juntas en las colmenas rodeadas de flores amarillas',
      aspectRatio: 'aspect-[4/3]'
    },
    {
      src: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/7e7e24e1-47af-45b7-b627-f491723e0d93/1768584070655-gc1cq0mt2co.JPG',
      alt: 'Campo hermoso con lupinos morados y colmenas al fondo con pinos',
      aspectRatio: 'aspect-[4/3]'
    },
    {
      src: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/5cf6468f-9b95-4228-adf8-62e2b1035fe6/gallery-bee-yellow-flower.jpg',
      alt: 'Abeja recolectando néctar en flores amarillas silvestres - macro detallado',
      aspectRatio: 'aspect-[3/4]'
    },
    {
      src: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/7e7e24e1-47af-45b7-b627-f491723e0d93/1768436531046-j8wtmjeun4g.jpeg',
      alt: 'Colmenas rodeadas de flores moradas lupinos en el campo',
      aspectRatio: 'aspect-[4/3]'
    },
    {
      src: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/5cf6468f-9b95-4228-adf8-62e2b1035fe6/gallery-beekeeper-solo.jpg',
      alt: 'Apicultor trabajando con las colmenas en campo de flores amarillas',
      aspectRatio: 'aspect-[1/1]'
    },
    {
      src: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/7e7e24e1-47af-45b7-b627-f491723e0d93/1768500364096-w0dcq4l2h0l.jpeg',
      alt: 'Panales de miel dorada natural con hexágonos perfectos',
      aspectRatio: 'aspect-[3/4]'
    },
    {
      src: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/7e7e24e1-47af-45b7-b627-f491723e0d93/1768584070655-thj3on8870c.jpeg',
      alt: 'Frasco de miel cremosa rodeado de flores cosmos rosas',
      aspectRatio: 'aspect-[3/4]'
    },
    {
      src: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/7e7e24e1-47af-45b7-b627-f491723e0d93/1768500364097-x7xduvsm2y.jpeg',
      alt: 'Campo de flores rosas cosmos bajo cielo azul',
      aspectRatio: 'aspect-[4/3]'
    },
    {
      src: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/5cf6468f-9b95-4228-adf8-62e2b1035fe6/gallery-hives-green-field.jpg',
      alt: 'Colmenas en campo verde con cielo espectacular y montaña al fondo',
      aspectRatio: 'aspect-[4/3]'
    },
    {
      src: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/7e7e24e1-47af-45b7-b627-f491723e0d93/1768503772301-wzhytq0eiqi.jpeg',
      alt: 'Colmenas en la neblina con flores blancas y pinos al fondo',
      aspectRatio: 'aspect-[4/3]'
    },
    {
      src: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/7e7e24e1-47af-45b7-b627-f491723e0d93/1768500364097-94jyidu38kk.jpeg',
      alt: 'Atardecer espectacular en el apiario de montaña',
      aspectRatio: 'aspect-[16/9]'
    },
    {
      src: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/7e7e24e1-47af-45b7-b627-f491723e0d93/1768503772303-vx0hc3t27cm.JPG',
      alt: 'Panal de miel dorada en plato de porcelana azul',
      aspectRatio: 'aspect-[1/1]'
    },
    {
      src: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/7e7e24e1-47af-45b7-b627-f491723e0d93/1768502612175-fljxt6pghym.JPG',
      alt: 'Perros del apiario caminando al atardecer en sendero de montaña',
      aspectRatio: 'aspect-[4/3]'
    },
    {
      src: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/7e7e24e1-47af-45b7-b627-f491723e0d93/1768500364097-whvyzd82i2m.jpeg',
      alt: 'Fila de colmenas de madera en el bosque de montaña',
      aspectRatio: 'aspect-[3/4]'
    },
    {
      src: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/7e7e24e1-47af-45b7-b627-f491723e0d93/1768502612175-p0austu1gi.jpeg',
      alt: 'Colmenas bajo cielo azul con pinos y pastos secos de montaña',
      aspectRatio: 'aspect-[4/3]'
    },
    {
      src: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/7e7e24e1-47af-45b7-b627-f491723e0d93/1768500364097-0jtzbgmgmxrn.jpeg',
      alt: 'Campo de alta montaña con flores silvestres secas',
      aspectRatio: 'aspect-[4/3]'
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

        {/* Grid Layout Responsivo con Aspect Ratios Consistentes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl border border-accent/30 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-gradient-to-br from-primary/5 to-accent/5 ${image.aspectRatio}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-foreground text-sm font-medium p-4 drop-shadow-lg leading-snug">
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