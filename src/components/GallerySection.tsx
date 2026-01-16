/**
 * EDITABLE COMPONENT - GallerySection
 * 
 * Galería de fotos del apiario con layout estético tipo masonry
 */

export const GallerySection = () => {
  const galleryImages = [
    {
      src: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/7e7e24e1-47af-45b7-b627-f491723e0d93/1768587136322-qlh8oy9zoxe.jpeg',
      alt: 'Campo espectacular de flores silvestres amarillas bajo cielo azul con nubes',
      aspectRatio: 'aspect-[16/9]'
    },
    {
      src: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/7e7e24e1-47af-45b7-b627-f491723e0d93/1768587136321-2bpuydvdp9d.JPG',
      alt: 'Tres apicultoras trabajando juntas en las colmenas rodeadas de flores amarillas',
      aspectRatio: 'aspect-[3/4]'
    },
    {
      src: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/7e7e24e1-47af-45b7-b627-f491723e0d93/1768584070655-gc1cq0mt2co.JPG',
      alt: 'Campo hermoso con lupinos morados y colmenas al fondo con pinos',
      aspectRatio: 'aspect-[4/3]'
    },
    {
      src: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/7e7e24e1-47af-45b7-b627-f491723e0d93/1768587136322-k9mjq9t06as.JPG',
      alt: 'Abeja recolectando néctar en flores amarillas silvestres - macro detallado',
      aspectRatio: 'aspect-[3/4]'
    },
    {
      src: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/7e7e24e1-47af-45b7-b627-f491723e0d93/1768436531046-j8wtmjeun4g.jpeg',
      alt: 'Colmenas rodeadas de flores moradas lupinos en el campo',
      aspectRatio: 'aspect-[4/3]'
    },
    {
      src: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/7e7e24e1-47af-45b7-b627-f491723e0d93/1768587136322-bkf99h5e5ns.JPG',
      alt: 'Apicultor trabajando con las colmenas en campo de flores amarillas',
      aspectRatio: 'aspect-[3/4]'
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
      src: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/7e7e24e1-47af-45b7-b627-f491723e0d93/1768587136322-gr9ok20ocei.JPG',
      alt: 'Colmenas en campo verde con cielo espectacular y montaña al fondo',
      aspectRatio: 'aspect-[3/4]'
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
    },
    {
      src: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/5cf6468f-9b95-4228-adf8-62e2b1035fe6/gallery-colmenas-pinos.jpg',
      alt: 'Colmenas entre pinos y pastos dorados bajo cielo azul brillante',
      aspectRatio: 'aspect-[3/4]'
    },
    {
      src: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/5cf6468f-9b95-4228-adf8-62e2b1035fe6/gallery-panal-miel.jpg',
      alt: 'Detalle macro de panal de miel con hexágonos perfectos y miel dorada cristalizada',
      aspectRatio: 'aspect-[3/4]'
    },
    {
      src: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/5cf6468f-9b95-4228-adf8-62e2b1035fe6/gallery-colmenas-montana.jpg',
      alt: 'Fila de colmenas con montaña al fondo y campo de flores al atardecer',
      aspectRatio: 'aspect-[3/4]'
    },
    {
      src: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/5cf6468f-9b95-4228-adf8-62e2b1035fe6/gallery-colmenas-campo.jpg',
      alt: 'Colmenas coloridas en campo verde con bosque de pinos y cielo azul',
      aspectRatio: 'aspect-[3/4]'
    },
    {
      src: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/5cf6468f-9b95-4228-adf8-62e2b1035fe6/gallery-panal-cristales.jpg',
      alt: 'Detalle macro de panal de miel con cristales dorados de miel pura',
      aspectRatio: 'aspect-[1/1]'
    },
    {
      src: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/7e7e24e1-47af-45b7-b627-f491723e0d93/1768592377304-jv6wz1yavb.jpeg',
      alt: 'Apicultor sosteniendo panal lleno de abejas en campo de flores amarillas',
      aspectRatio: 'aspect-[4/3]'
    },
    {
      src: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/5cf6468f-9b95-4228-adf8-62e2b1035fe6/gallery-colmenas-pastos.jpg',
      alt: 'Colmenas de madera en campo de pastos dorados con pinos al fondo',
      aspectRatio: 'aspect-[3/4]'
    },
    {
      src: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/5cf6468f-9b95-4228-adf8-62e2b1035fe6/gallery-panales-frasco.jpg',
      alt: 'Fila de colmenas al atardecer con montaña del Nevado de Toluca al fondo',
      aspectRatio: 'aspect-[3/4]'
    },
    {
      src: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/5cf6468f-9b95-4228-adf8-62e2b1035fe6/gallery-colmenas-atardecer-montana.jpg',
      alt: 'Colmenas coloridas en campo verde con flores amarillas y bosque de pinos',
      aspectRatio: 'aspect-[3/4]'
    },
    {
      src: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/5cf6468f-9b95-4228-adf8-62e2b1035fe6/gallery-colmenas-verdes.jpg',
      alt: 'Colmenas negras en campo de flores cosmos rosas y amarillas con cielo dramático',
      aspectRatio: 'aspect-[3/4]'
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-warm/30 via-lavender/20 to-muted/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 font-ruwudu drop-shadow-lg">
            Galería de Nuestro Apiario
          </h2>
          <div className="w-24 h-1 bg-mustard mx-auto rounded-full mb-3 shadow-lg"></div>
          <p className="text-base text-foreground/90 font-medium">
            Momentos capturados en las alturas del Nevado de Toluca
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-1">
          {galleryImages.map((image, index) => {
            return (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-md transition-all hover:shadow-xl h-48"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <p className="text-foreground/95 text-base font-medium mb-3">
            ¿Te gustaría conocer más sobre nuestro proceso?
          </p>
          <a
            href="/nuestro-proyecto"
            className="inline-block bg-mustard hover:bg-mustard/90 text-foreground font-bold px-6 py-2.5 rounded-full shadow-lg border border-accent transition-all hover:scale-105 text-sm"
          >
            Conoce Nuestra Historia
          </a>
        </div>
      </div>
    </section>
  );
};