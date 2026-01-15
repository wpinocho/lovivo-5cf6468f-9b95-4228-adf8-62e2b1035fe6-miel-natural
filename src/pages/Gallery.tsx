import { EcommerceTemplate } from '@/templates/EcommerceTemplate'
import { GallerySection } from '@/components/GallerySection'

/**
 * EDITABLE PAGE - Gallery
 * 
 * Página dedicada a la galería de fotos del apiario
 */

const GalleryPage = () => {
  return (
    <EcommerceTemplate pageTitle="Galería" showCart={true}>
      <GallerySection />
    </EcommerceTemplate>
  )
}

export default GalleryPage