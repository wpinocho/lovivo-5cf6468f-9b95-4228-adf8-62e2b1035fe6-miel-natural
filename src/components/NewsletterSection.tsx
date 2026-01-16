import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { HeadlessNewsletter } from '@/components/headless/HeadlessNewsletter';
import { Mail } from 'lucide-react';

/**
 * EDITABLE UI COMPONENT - NewsletterSection
 * 
 * Componente UI completamente editable para suscripción a newsletter.
 * El agente IA puede modificar colores, textos, layout, etc.
 * 
 * Consume lógica de HeadlessNewsletter (solo muestra email input).
 */

export const NewsletterSection = () => {
  return (
    <HeadlessNewsletter>
      {(logic) => (
        <section className="bg-muted/20 py-24">
          <div className="max-w-2xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            {logic.success ? (
              <div className="space-y-6">
                <div className="flex justify-center">
                  <div className="bg-accent/10 rounded-full p-5">
                    <Mail className="h-10 w-10 text-accent" />
                  </div>
                </div>
                <h3 className="text-4xl text-foreground font-ruwudu">
                  ¡Gracias por suscribirte!
                </h3>
                <p className="text-foreground/70 text-lg">
                  Pronto recibirás nuestras novedades y ofertas especiales de la alta montaña.
                </p>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-4xl md:text-5xl text-foreground font-ruwudu">
                    ¿Quieres recibir nuestras novedades?
                  </h3>
                  <p className="text-lg text-foreground/70">
                    Suscríbete y recibe ofertas exclusivas directamente de nuestro apiario
                  </p>
                </div>
                
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    logic.handleSubscribe();
                  }}
                  className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
                >
                  <Input 
                    type="email"
                    placeholder="tu@email.com"
                    value={logic.email}
                    onChange={(e) => logic.setEmail(e.target.value)}
                    disabled={logic.isSubmitting}
                    className="flex-1 h-12"
                    required
                  />
                  <Button 
                    type="submit"
                    disabled={logic.isSubmitting}
                    className="sm:w-auto bg-accent/90 backdrop-blur-sm hover:bg-accent text-foreground shadow-lg px-8 py-6 rounded-full"
                  >
                    {logic.isSubmitting ? 'Suscribiendo...' : 'Suscribirse'}
                  </Button>
                </form>
                
                {logic.error && (
                  <p className="text-sm text-destructive">
                    {logic.error}
                  </p>
                )}
              </div>
            )}
          </div>
        </section>
      )}
    </HeadlessNewsletter>
  );
};