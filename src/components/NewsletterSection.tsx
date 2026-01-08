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
        <section className="bg-gradient-to-br from-accent/30 via-primary/20 to-terracota/30 py-16 border-y-4 border-accent shadow-2xl">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {logic.success ? (
              <div className="space-y-4">
                <div className="flex justify-center">
                  <div className="bg-gradient-to-br from-accent to-primary rounded-full p-4 shadow-lg">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white font-ruwudu drop-shadow-lg">
                  ¡Gracias por suscribirte! 🐝
                </h3>
                <p className="text-white/90 text-lg font-medium">
                  Pronto recibirás nuestras novedades y ofertas especiales de la alta montaña.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-3xl md:text-4xl font-bold text-white font-ruwudu drop-shadow-lg">
                    ¿Quieres recibir nuestras novedades?
                  </h3>
                  <p className="text-lg text-white/90 font-medium">
                    Suscríbete y recibe ofertas exclusivas directamente de nuestro apiario 🍯
                  </p>
                </div>
                
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    logic.handleSubscribe();
                  }}
                  className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                >
                  <Input 
                    type="email"
                    placeholder="tu@email.com"
                    value={logic.email}
                    onChange={(e) => logic.setEmail(e.target.value)}
                    disabled={logic.isSubmitting}
                    className="flex-1 border-4 border-accent focus:border-white bg-white text-primary font-medium"
                    required
                  />
                  <Button 
                    type="submit"
                    disabled={logic.isSubmitting}
                    className="sm:w-auto bg-accent hover:bg-accent/90 text-primary font-bold shadow-xl border-4 border-accent/70 text-lg"
                  >
                    {logic.isSubmitting ? 'Suscribiendo...' : 'Suscribirse'}
                  </Button>
                </form>
                
                {logic.error && (
                  <p className="text-sm text-destructive font-semibold">
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