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
    <section id="contact" className="py-20 bg-gradient-to-br from-accent/20 via-background to-terracota/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-ruwudu drop-shadow-lg">
            Contacto
          </h2>
          <div className="w-32 h-2 bg-accent mx-auto rounded-full mb-4 shadow-lg"></div>
          <p className="text-white/90 mt-4 max-w-2xl mx-auto text-lg font-medium">
            ¿Tienes alguna pregunta? Nos encantaría escucharte
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-accent mb-6 font-ruwudu">
                Hablemos
              </h3>
              <p className="text-white/90 mb-8 font-medium text-lg">
                Estamos aquí para responder tus preguntas sobre nuestros productos 
                y procesos. No dudes en contactarnos.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 bg-white/95 p-4 rounded-xl shadow-lg border-4 border-accent">
                <div className="bg-accent p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1 text-lg">Email</h4>
                  <p className="text-primary/80 font-medium">contacto@apisterra.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white/95 p-4 rounded-xl shadow-lg border-4 border-primary">
                <div className="bg-primary p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1 text-lg">Teléfono</h4>
                  <p className="text-primary/80 font-medium">+52 123 456 7890</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white/95 p-4 rounded-xl shadow-lg border-4 border-terracota">
                <div className="bg-terracota p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1 text-lg">Ubicación</h4>
                  <p className="text-primary/80 font-medium">
                    Faldas del Nevado de Toluca<br />
                    3,000 metros de altura<br />
                    Estado de México
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="bg-white rounded-xl shadow-2xl p-8 border-4 border-accent">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-primary mb-2">
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
                <label htmlFor="email" className="block text-sm font-bold text-primary mb-2">
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
                <label htmlFor="message" className="block text-sm font-bold text-primary mb-2">
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

              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-primary font-bold shadow-xl text-lg border-4 border-accent/70" size="lg">
                Enviar Mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};