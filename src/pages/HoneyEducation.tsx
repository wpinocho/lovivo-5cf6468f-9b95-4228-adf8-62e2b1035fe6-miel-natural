import { EcommerceTemplate } from '@/templates/EcommerceTemplate';

/**
 * PÁGINA - Distinguir una Miel Real
 * 
 * Contenido educativo sobre cristalización, tipos de miel, 
 * diferencias de altura y características únicas
 */

const HoneyEducation = () => {
  return (
    <EcommerceTemplate showCart={true}>
      {/* Hero */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="text-5xl md:text-6xl text-foreground mb-6 font-ruwudu">
            Distinguir una Miel Real
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed max-w-2xl mx-auto">
            Aprende a reconocer la autenticidad y calidad de la miel pura de montaña
          </p>
        </div>
      </section>

      {/* Cristalización */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl md:text-4xl text-foreground/90 mb-8 font-ruwudu">
            La Cristalización: Un Signo de Pureza
          </h2>
          <div className="space-y-6 text-foreground/70 leading-relaxed">
            <p className="text-lg">
              Una miel pura y natural cristaliza con el tiempo. Este proceso es completamente natural y demuestra que la miel no ha sido procesada industrialmente ni adulterada.
            </p>
            <p>
              La cristalización ocurre cuando la glucosa natural de la miel se separa del agua y forma cristales. La velocidad de este proceso depende de la proporción de glucosa y fructosa, la temperatura de almacenamiento, y el tipo de flores de donde proviene el néctar.
            </p>
            <p>
              <strong className="text-foreground/90">Miel líquida permanente = señal de alerta.</strong> Las mieles industriales suelen ser calentadas y filtradas excesivamente para mantenerse líquidas, destruyendo enzimas, vitaminas y propiedades naturales.
            </p>
            <p className="italic text-foreground/60">
              Nuestra miel cristaliza naturalmente entre 2 y 6 meses después de la cosecha. Para volverla líquida, solo necesitas calentarla suavemente al baño maría (máximo 40°C) sin destruir sus propiedades.
            </p>
          </div>
        </div>
      </section>

      {/* Tipos de Miel */}
      <section className="py-16 bg-primary/10">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl md:text-4xl text-foreground/90 mb-8 font-ruwudu">
            Diferentes Tipos de Miel
          </h2>
          <div className="space-y-6 text-foreground/70 leading-relaxed">
            <p className="text-lg">
              No todas las mieles son iguales. El tipo de miel depende completamente de las flores que las abejas visitan, el clima, la altitud y la época del año.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-xl text-foreground/90 mb-3 font-ruwudu">Miel Monofloral</h3>
                <p>
                  Proviene principalmente de una sola especie de flor (azahar, lavanda, eucalipto). Tiene sabor y propiedades específicas de esa planta.
                </p>
              </div>
              <div>
                <h3 className="text-xl text-foreground/90 mb-3 font-ruwudu">Miel Multifloral o de Milflores</h3>
                <p>
                  Las abejas recolectan néctar de múltiples especies. Nuestra miel de montaña es multifloral: cada frasco refleja la biodiversidad silvestre del Nevado de Toluca.
                </p>
              </div>
              <div>
                <h3 className="text-xl text-foreground/90 mb-3 font-ruwudu">Miel de Bosque o Mielada</h3>
                <p>
                  Proviene de secreciones de insectos en árboles (no de flores). Más oscura, menos dulce, con notas minerales.
                </p>
              </div>
              <div>
                <h3 className="text-xl text-foreground/90 mb-3 font-ruwudu">Miel Cremosa o Mantequilla</h3>
                <p>
                  Miel cristalizada batida mecánicamente para romper los cristales y crear textura cremosa y untable. Perfecta para pan tostado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Altura y Humedad */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl md:text-4xl text-foreground/90 mb-8 font-ruwudu">
            La Influencia de la Altura y Humedad
          </h2>
          <div className="space-y-6 text-foreground/70 leading-relaxed">
            <p className="text-lg">
              La altitud no solo afecta el tipo de flores disponibles, también influye directamente en la composición, humedad y sabor de la miel.
            </p>
            <div className="bg-primary/5 p-8 rounded-lg my-8">
              <h3 className="text-2xl text-foreground/90 mb-4 font-ruwudu">Miel de Baja Altitud (0-1000 msnm)</h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>Flores tropicales y cítricas</li>
                <li>Mayor humedad en el ambiente = más agua en la miel</li>
                <li>Sabores más suaves y florales</li>
                <li>Cristalización más lenta</li>
                <li>Colores claros a ámbar</li>
              </ul>
            </div>
            <div className="bg-accent/5 p-8 rounded-lg my-8">
              <h3 className="text-2xl text-foreground/90 mb-4 font-ruwudu">Miel de Alta Montaña (2500-3500 msnm)</h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>Flora silvestre alpina y de bosque de pino</li>
                <li>Aire seco = menor humedad en la miel (más densa y concentrada)</li>
                <li>Sabores más complejos, herbales y resinosos</li>
                <li>Cristalización más rápida por alta concentración de glucosa</li>
                <li>Colores ámbar oscuro a caramelo</li>
                <li>Mayor contenido de minerales y antioxidantes</li>
              </ul>
            </div>
            <p className="text-lg pt-4">
              <strong className="text-foreground/90">Nuestra miel a 3,000 metros:</strong> Tiene menos de 17% de humedad (norma internacional: máximo 18%). Esto la hace más estable, concentrada en nutrientes, y con sabor profundo e intenso.
            </p>
          </div>
        </div>
      </section>

      {/* Miel Mantequilla de Alta Montaña */}
      <section className="py-16 bg-primary/10">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl md:text-4xl text-foreground/90 mb-8 font-ruwudu">
            ¿Por Qué la Miel Mantequilla de Alta Montaña es tan Especial?
          </h2>
          <div className="space-y-6 text-foreground/70 leading-relaxed">
            <p className="text-lg">
              La miel mantequilla de alta montaña combina lo mejor de dos mundos: la cristalización natural de la miel pura con una textura suave y untable que facilita su uso diario.
            </p>
            <p>
              Al cristalizar naturalmente, nuestra miel de montaña forma cristales grandes. Al batirla cuidadosamente, rompemos esos cristales en partículas microscópicas que crean una textura sedosa, cremosa y estable.
            </p>
            <div className="bg-background p-8 rounded-lg my-8 border border-foreground/10">
              <h3 className="text-xl text-foreground/90 mb-4 font-ruwudu">Características únicas:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">✓</span>
                  <span><strong className="text-foreground/90">Textura perfecta:</strong> Fácil de untar en pan, mezclar en yogurt o café, sin gotear</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">✓</span>
                  <span><strong className="text-foreground/90">Sabor concentrado:</strong> La baja humedad de altura potencia los sabores herbales y florales</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">✓</span>
                  <span><strong className="text-foreground/90">100% natural:</strong> Sin aditivos, solo miel batida mecánicamente</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">✓</span>
                  <span><strong className="text-foreground/90">Conservación perfecta:</strong> No se separa, no fermenta, mantiene propiedades intactas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Floración, Sabor y Textura */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl md:text-4xl text-foreground/90 mb-8 font-ruwudu">
            Floración, Sabor y Textura
          </h2>
          <div className="space-y-6 text-foreground/70 leading-relaxed">
            <p className="text-lg">
              La miel es un producto vivo que refleja el momento exacto de la naturaleza en que fue creada.
            </p>
            <p>
              <strong className="text-foreground/90">Floración primaveral (marzo-mayo):</strong> Flores silvestres tempranas, sabores florales suaves, colores claros, miel más líquida.
            </p>
            <p>
              <strong className="text-foreground/90">Floración de verano (junio-agosto):</strong> Flora de montaña en plenitud, sabores herbales complejos, notas de pino y resina, colores ámbar intenso.
            </p>
            <p>
              <strong className="text-foreground/90">Floración otoñal (septiembre-octubre):</strong> Últimas flores antes del invierno, sabores más robustos y terrosos, mayor concentración de minerales.
            </p>
            <div className="bg-muted/20 p-8 rounded-lg my-8">
              <h3 className="text-xl text-foreground/90 mb-4 font-ruwudu">Cada cosecha es única</h3>
              <p>
                Incluso del mismo apiario, en la misma ubicación, cada cosecha será diferente según:
              </p>
              <ul className="space-y-2 mt-4 list-disc list-inside">
                <li>Las lluvias de la temporada (afectan la floración)</li>
                <li>La temperatura (determina qué flores se abren)</li>
                <li>El comportamiento de las abejas (prefieren ciertas flores según disponibilidad)</li>
                <li>Los incendios forestales o sequías (modifican el ecosistema)</li>
              </ul>
              <p className="mt-4 italic text-foreground/60">
                Por eso, cada frasco de APIS TERRA es irrepetible. Una fotografía líquida del Nevado de Toluca en ese momento del año.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo Identificar Miel Real */}
      <section className="py-16 bg-primary/10">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl md:text-4xl text-foreground/90 mb-8 font-ruwudu">
            Pruebas Caseras para Identificar Miel Real
          </h2>
          <div className="space-y-6 text-foreground/70 leading-relaxed">
            <div className="space-y-4">
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-lg text-foreground/90 mb-2 font-ruwudu">1. Prueba de cristalización</h3>
                <p>Deja la miel a temperatura ambiente. Si cristaliza en semanas o meses, es pura. Si permanece líquida indefinidamente, probablemente ha sido ultra-procesada.</p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-lg text-foreground/90 mb-2 font-ruwudu">2. Prueba del agua</h3>
                <p>Pon una cucharada de miel en agua fría sin revolver. La miel pura se asienta en el fondo y se disuelve lentamente. La miel adulterada se disuelve rápidamente.</p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-lg text-foreground/90 mb-2 font-ruwudu">3. Textura y aroma</h3>
                <p>La miel pura tiene aroma floral o herbal característico. La textura varía de líquida a cremosa según cristalización. La adulterada suele ser inodora y siempre líquida.</p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-lg text-foreground/90 mb-2 font-ruwudu">4. Etiqueta transparente</h3>
                <p>Busca origen claro (región, apicultor), fecha de cosecha, y certificaciones. Desconfía de "mezcla de mieles" o "producto de varios países".</p>
              </div>
            </div>
            <p className="text-lg pt-8 text-center italic text-foreground/80">
              La miel real es un alimento completo y milenario. Merece ser consumida en su estado más puro.
            </p>
          </div>
        </div>
      </section>
    </EcommerceTemplate>
  );
};

export default HoneyEducation;