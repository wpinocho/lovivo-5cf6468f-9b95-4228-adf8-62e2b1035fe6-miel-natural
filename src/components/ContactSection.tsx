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
    <section id="contact" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl text-foreground mb-6 font-ruwudu">
            Contacto
          </h2>
          <p className="text-foreground/70 mt-6 max-w-2xl mx-auto text-xl">
            ¿Tienes alguna pregunta? Nos encantaría escucharte
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Información de contacto */}
          <div className="space-y-12">
            <div>
              <h3 className="text-3xl text-foreground mb-6 font-ruwudu">
                Hablemos
              </h3>
              <p className="text-foreground/80 mb-8 text-lg leading-relaxed">
                Estamos aquí para responder tus preguntas sobre nuestros productos 
                y procesos. No dudes en contactarnos.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-5">
                <div className="bg-accent/10 p-4 rounded-lg">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-lg text-foreground mb-2">Email</h4>
                  <p className="text-foreground/70">contacto@apisterra.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-5">
                <div className="bg-accent/10 p-4 rounded-lg">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-lg text-foreground mb-2">Teléfono</h4>
                  <p className="text-foreground/70">+52 123 456 7890</p>
                </div>
              </div>

              <div className="flex items-start space-x-5">
                <div className="bg-accent/10 p-4 rounded-lg">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-lg text-foreground mb-2">Ubicación</h4>
                  <p className="text-foreground/70">
                    Faldas del Nevado de Toluca<br />
                    3,000 metros de altura<br />
                    Estado de México
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-10 border border-foreground/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-foreground/80 mb-2">
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
                <label htmlFor="email" className="block text-sm text-foreground/80 mb-2">
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
                <label htmlFor="message" className="block text-sm text-foreground/80 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="¿En qué podemos ayudarte?"
                  rows={6}
                  className="w-full px-4 py-3 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <Button type="submit" className="w-full bg-accent/90 backdrop-blur-sm hover:bg-accent text-foreground shadow-lg text-lg py-6 rounded-full" size="lg">
                Enviar Mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};