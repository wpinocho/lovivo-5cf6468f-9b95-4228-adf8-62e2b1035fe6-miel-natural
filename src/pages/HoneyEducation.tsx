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
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl text-foreground mb-3 font-ruwudu">
              ¿Cómo distinguir miel auténtica?
            </h1>
            <p className="text-base text-foreground/60 leading-relaxed max-w-2xl mx-auto">
              Aprende a reconocer la autenticidad y calidad de la miel pura de montaña
            </p>
          </div>
          
          {/* Ilustración Hero debajo */}
          <div className="flex justify-center">
            <img 
              src="/honey-education-hero.png" 
              alt="Abejas recolectando néctar de flores silvestres" 
              className="w-full max-w-md h-auto rounded-lg opacity-90"
            />
          </div>
        </div>
      </section>

      {/* Cristalización */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-2xl md:text-3xl text-foreground/90 mb-4 font-ruwudu">
            La Cristalización: Un Signo de Pureza
          </h2>
          <div className="space-y-3 text-foreground/70 leading-relaxed mb-6">
            <p className="text-base">
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
          
          {/* Ilustración debajo */}
          <div className="flex justify-center">
            <img 
              src="/honey-crystallization.png" 
              alt="Diagrama vintage del proceso de cristalización de la miel" 
              className="w-full max-w-md h-auto rounded-lg opacity-90"
            />
          </div>
        </div>
      </section>

      {/* Tipos de Miel */}
      <section className="py-12 bg-primary/10">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-2xl md:text-3xl text-foreground/90 mb-4 font-ruwudu">
            Diferentes Tipos de Miel
          </h2>
          <div className="space-y-3 text-foreground/70 leading-relaxed mb-6">
            <p className="text-base">
              No todas las mieles son iguales. El tipo de miel depende completamente de las flores que las abejas visitan, el clima, la altitud y la época del año.
            </p>
            <div className="space-y-4 mt-6">
              <div>
                <h3 className="text-base text-foreground/90 mb-2 font-ruwudu">Miel Monofloral</h3>
                <p>
                  Proviene principalmente de una sola especie de flor (azahar, lavanda, eucalipto). Tiene sabor y propiedades específicas de esa planta.
                </p>
              </div>
              <div>
                <h3 className="text-base text-foreground/90 mb-2 font-ruwudu">Miel Multifloral o de Milflores</h3>
                <p>
                  Las abejas recolectan néctar de múltiples especies. Nuestra miel de montaña es multifloral: cada frasco refleja la biodiversidad silvestre del Nevado de Toluca.
                </p>
              </div>
              <div>
                <h3 className="text-base text-foreground/90 mb-2 font-ruwudu">Miel de Bosque o Mielada</h3>
                <p>
                  Proviene de secreciones de insectos en árboles (no de flores). Más oscura, menos dulce, con notas minerales.
                </p>
              </div>
              <div>
                <h3 className="text-base text-foreground/90 mb-2 font-ruwudu">Miel Cremosa o Mantequilla</h3>
                <p>
                  Miel con textura naturalmente cremosa y untable debido a la cristalización específica causada por altitud, temperatura y tipo de flora. Nuestra miel de altura tiene esta textura de forma completamente natural, sin ningún proceso de batido.
                </p>
              </div>
            </div>
          </div>
          
          {/* Ilustración debajo */}
          <div className="flex justify-center">
            <img 
              src="/honey-types-flowers.png" 
              alt="Colección botánica vintage de flores silvestres para diferentes tipos de miel" 
              className="w-full max-w-md h-auto rounded-lg opacity-90"
            />
          </div>
        </div>
      </section>

      {/* Altura y Humedad */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-2xl md:text-3xl text-foreground/90 mb-4 font-ruwudu">
            La Influencia de la Altura y Humedad
          </h2>
          <div className="space-y-3 text-foreground/70 leading-relaxed mb-6">
            <p className="text-base">
              La altitud no solo afecta el tipo de flores disponibles, también influye directamente en la composición, humedad y sabor de la miel.
            </p>
            <div className="bg-primary/5 p-5 rounded-lg my-3">
              <h3 className="text-lg text-foreground/90 mb-2 font-ruwudu">Miel de Baja Altitud (0-1000 msnm)</h3>
              <ul className="space-y-1 list-disc list-inside text-sm">
                <li>Flores tropicales y cítricas</li>
                <li>Mayor humedad en el ambiente y en la miel</li>
                <li>Sabores muy intensos (puede llegar a saber a "medicina")</li>
                <li>Cristalización más lenta</li>
                <li>Colores más oscuros y ámbar</li>
              </ul>
            </div>
            <div className="bg-accent/5 p-5 rounded-lg my-3">
              <h3 className="text-lg text-foreground/90 mb-2 font-ruwudu">Miel de Alta Montaña (2500-3500 msnm)</h3>
              <ul className="space-y-1 list-disc list-inside text-sm">
                <li>Flora silvestre alpina y de bosque de pino</li>
                <li>Baja humedad ambiental = miel más densa y concentrada</li>
                <li>Sabores más suaves, sutiles, herbales y resinosos</li>
                <li>Cristalización más rápida por baja humedad + alta concentración de glucosa</li>
                <li>Colores amarillos, pálidos, dorados y claros</li>
                <li>Mayor contenido de minerales y antioxidantes</li>
              </ul>
            </div>
            <p className="text-base mt-3">
              <strong className="text-foreground/90">Nuestra miel a 3,000 metros:</strong> Tiene menos de 17% de humedad (norma internacional: máximo 18%). Esto la hace más estable, concentrada en nutrientes y con sabor profundo.
            </p>
            <p className="text-sm italic text-foreground/60 mt-3">
              Estos son parámetros generales - siempre hay excepciones según la floración específica, el tipo de abeja y las condiciones particulares de cada apiario.
            </p>
          </div>
          
          {/* Ilustración debajo */}
          <div className="flex justify-center">
            <img 
              src="/honey-altitude.png" 
              alt="Ilustración vintage de zonas de elevación de montaña con flora silvestre" 
              className="w-full max-w-md h-auto rounded-lg opacity-90"
            />
          </div>
        </div>
      </section>

      {/* Paleta de Colores de Miel */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-2xl md:text-3xl text-foreground/90 mb-4 font-ruwudu text-center">
            Paleta de Colores de la Miel
          </h2>
          <p className="text-sm text-foreground/70 text-center mb-6 leading-relaxed">
            La miel natural presenta una amplia variedad de tonos, desde ámbar oscuro hasta amarillo casi transparente, dependiendo de la flora, altitud y temporada de cosecha.
          </p>
          
          {/* Grid de colores */}
          <div className="grid grid-cols-4 md:grid-cols-8 gap-3 mb-6">
            <div className="flex flex-col items-center gap-2">
              <div 
                className="w-full aspect-square rounded-lg shadow-md border border-foreground/10"
                style={{ backgroundColor: 'hsl(25, 45%, 30%)' }}
              ></div>
              <span className="text-xs text-foreground/60 text-center">Ámbar Oscuro</span>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <div 
                className="w-full aspect-square rounded-lg shadow-md border border-foreground/10"
                style={{ backgroundColor: 'hsl(30, 50%, 40%)' }}
              ></div>
              <span className="text-xs text-foreground/60 text-center">Ámbar</span>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <div 
                className="w-full aspect-square rounded-lg shadow-md border border-foreground/10"
                style={{ backgroundColor: 'hsl(35, 55%, 50%)' }}
              ></div>
              <span className="text-xs text-foreground/60 text-center">Ámbar Dorado</span>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <div 
                className="w-full aspect-square rounded-lg shadow-md border border-foreground/10"
                style={{ backgroundColor: 'hsl(40, 60%, 55%)' }}
              ></div>
              <span className="text-xs text-foreground/60 text-center">Dorado</span>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <div 
                className="w-full aspect-square rounded-lg shadow-md border border-foreground/10"
                style={{ backgroundColor: 'hsl(45, 65%, 60%)' }}
              ></div>
              <span className="text-xs text-foreground/60 text-center">Dorado Claro</span>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <div 
                className="w-full aspect-square rounded-lg shadow-md border border-foreground/10"
                style={{ backgroundColor: 'hsl(50, 70%, 68%)' }}
              ></div>
              <span className="text-xs text-foreground/60 text-center">Amarillo Dorado</span>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <div 
                className="w-full aspect-square rounded-lg shadow-md border border-foreground/10"
                style={{ backgroundColor: 'hsl(55, 75%, 75%)' }}
              ></div>
              <span className="text-xs text-foreground/60 text-center">Amarillo Claro</span>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <div 
                className="w-full aspect-square rounded-lg shadow-md border border-foreground/10"
                style={{ backgroundColor: 'hsl(60, 80%, 85%)' }}
              ></div>
              <span className="text-xs text-foreground/60 text-center">Amarillo Pálido</span>
            </div>
          </div>

          <p className="text-sm italic text-foreground/60 mb-6 text-center">
            Nuestra miel de montaña típicamente presenta tonos dorados claros y amarillos, característicos de las floraciones de alta altitud.
          </p>
          
          {/* Ilustración Frascos de Miel debajo */}
          <div className="flex justify-center">
            <img 
              src="/honey-color-palette.png" 
              alt="Ilustración vintage de frascos de miel mostrando diferentes tonos" 
              className="w-full max-w-md h-auto rounded-lg opacity-90"
            />
          </div>
        </div>
      </section>

      {/* Miel Mantequilla de Alta Montaña */}
      <section className="py-12 bg-primary/10">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-2xl md:text-3xl text-foreground/90 mb-4 font-ruwudu">
            ¿Por Qué la Miel Mantequilla de Alta Montaña es tan Especial?
          </h2>
          <div className="space-y-3 text-foreground/70 leading-relaxed mb-6">
            <p className="text-base">
              La textura cremosa tipo "mantequilla" de nuestra miel es completamente natural. No batimos, no procesamos, no manipulamos.
            </p>
            <p>
              Esta textura única es el resultado directo de la altitud extrema (3,000 metros) y la flora específica del Nevado de Toluca. La combinación de baja humedad ambiental, temperaturas frescas y el tipo de néctar recolectado crea una cristalización natural con micropartículas que otorgan esa textura sedosa y untable.
            </p>
            <p>
              El color amarillo dorado intenso también es 100% natural, resultado de las flores silvestres de montaña que las abejas visitan durante la floración de altura.
            </p>
            <div className="bg-background p-5 rounded-lg my-3 border border-foreground/10">
              <h3 className="text-base text-foreground/90 mb-2 font-ruwudu">Características únicas (100% naturales):</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">✓</span>
                  <span><strong className="text-foreground/90">Textura cremosa natural:</strong> Fácil de untar, sin gotear. Resultado de cristalización por altura y flora específica</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">✓</span>
                  <span><strong className="text-foreground/90">Color amarillo dorado:</strong> Producido naturalmente por el néctar de flores silvestres de alta montaña</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">✓</span>
                  <span><strong className="text-foreground/90">Sabor concentrado:</strong> La baja humedad de 3,000 metros potencia los sabores herbales y florales</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">✓</span>
                  <span><strong className="text-foreground/90">Sin procesamiento:</strong> Directamente del panal al frasco. Cero manipulación industrial</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">✓</span>
                  <span><strong className="text-foreground/90">Conservación perfecta:</strong> No se separa, no fermenta, mantiene todas sus propiedades intactas</span>
                </li>
              </ul>
            </div>
            <p className="text-sm italic text-foreground/60 mt-3">
              Esta textura mantequilla solo ocurre en mieles de altitud extrema con floraciones específicas. Es imposible replicarla artificialmente.
            </p>
          </div>
          
          {/* Ilustración debajo */}
          <div className="flex justify-center">
            <img 
              src="/honey-butter.png" 
              alt="Ilustración vintage de frasco de miel cremosa con cucharón de madera" 
              className="w-full max-w-md h-auto rounded-lg opacity-90"
            />
          </div>
        </div>
      </section>

      {/* Floración, Sabor y Textura */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-2xl md:text-3xl text-foreground/90 mb-4 font-ruwudu">
            Floración, Sabor y Textura
          </h2>
          <div className="space-y-3 text-foreground/70 leading-relaxed mb-6">
            <p className="text-base">
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
            <div className="bg-muted/20 p-5 rounded-lg my-3">
              <h3 className="text-base text-foreground/90 mb-2 font-ruwudu">Cada cosecha es única</h3>
              <p>
                Incluso del mismo apiario, en la misma ubicación, cada cosecha será diferente según:
              </p>
              <ul className="space-y-1 mt-3 list-disc list-inside text-sm">
                <li>Las lluvias de la temporada (afectan la floración)</li>
                <li>La temperatura (determina qué flores se abren)</li>
                <li>El comportamiento de las abejas (prefieren ciertas flores según disponibilidad)</li>
                <li>Los incendios forestales o sequías (modifican el ecosistema)</li>
              </ul>
              <p className="mt-3 text-sm italic text-foreground/60">
                Por eso, cada frasco de APIS TERRA es irrepetible. Una fotografía líquida del Nevado de Toluca en ese momento del año.
              </p>
            </div>
          </div>
          
          {/* Ilustración debajo */}
          <div className="flex justify-center">
            <img 
              src="/honey-seasons.png" 
              alt="Ilustración botánica vintage de flores silvestres por estaciones" 
              className="w-full max-w-md h-auto rounded-lg opacity-90"
            />
          </div>
        </div>
      </section>


    </EcommerceTemplate>
  );
};

export default HoneyEducation;