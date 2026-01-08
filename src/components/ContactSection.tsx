import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

/**
 * EDITABLE COMPONENT - ContactSection
 * 
 * Sección de contacto con formulario y datos de contacto.
 * Completamente editable.
 */

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Form submitted:', formData);
    alert('¡Gracias por contactarnos! Te responderemos pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contacto
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-accent via-primary to-terracota mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            ¿Tienes alguna pregunta? Nos encantaría escucharte
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Hablemos
              </h3>
              <p className="text-muted-foreground mb-8">
                Estamos aquí para responder tus preguntas sobre nuestros productos 
                y procesos. No dudes en contactarnos.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-accent/20 p-3 rounded-lg border-2 border-accent/30">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <p className="text-muted-foreground">contacto@apisterra.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/20 p-3 rounded-lg border-2 border-primary/30">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Teléfono</h4>
                  <p className="text-muted-foreground">+52 123 456 7890</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-terracota/20 p-3 rounded-lg border-2 border-terracota/30">
                  <MapPin className="h-6 w-6 text-terracota" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Ubicación</h4>
                  <p className="text-muted-foreground">
                    Faldas del Nevado de Toluca<br />
                    3,000 metros de altura<br />
                    Estado de México
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="bg-card rounded-xl shadow-2xl p-8 border-2 border-accent/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nombre
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Tu nombre"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="tu@email.com"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="¿En qué podemos ayudarte?"
                  rows={5}
                  className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <Button type="submit" className="w-full bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white font-bold shadow-lg" size="lg">
                ✉️ Enviar Mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};