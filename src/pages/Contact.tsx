import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import { ContactSection } from '@/components/ContactSection';
import { NewsletterSection } from '@/components/NewsletterSection';

/**
 * PÁGINA - Contacto
 * 
 * Formulario de contacto, ubicación y newsletter
 */

const Contact = () => {
  return (
    <EcommerceTemplate showCart={true}>
      <ContactSection />
      <NewsletterSection />
    </EcommerceTemplate>
  );
};

export default Contact;