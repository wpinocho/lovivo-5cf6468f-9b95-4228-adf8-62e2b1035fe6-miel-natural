import { ReactNode } from 'react'
import { PageTemplate } from './PageTemplate'
import { BrandLogoLeft } from '@/components/BrandLogoLeft'
import { SocialLinks } from '@/components/SocialLinks'
import { FloatingCart } from '@/components/FloatingCart'
import { ProfileMenu } from '@/components/ProfileMenu'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import { useCartUI } from '@/components/CartProvider'
import { useCart } from '@/contexts/CartContext'
import { useCollections } from '@/hooks/useCollections'
import { cn } from '@/lib/utils'

/**
 * EDITABLE TEMPLATE - EcommerceTemplate
 * 
 * Template específico para páginas de ecommerce con header, footer y cart.
 * El agente IA puede modificar completamente el diseño, colores, layout.
 */

interface EcommerceTemplateProps {
  children: ReactNode
  pageTitle?: string
  showCart?: boolean
  className?: string
  headerClassName?: string
  footerClassName?: string
  layout?: 'default' | 'full-width' | 'centered'
}

export const EcommerceTemplate = ({
  children,
  pageTitle,
  showCart = true,
  className,
  headerClassName,
  footerClassName,
  layout = 'default'
}: EcommerceTemplateProps) => {
  const { openCart } = useCartUI()
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()
  const { hasCollections, loading: loadingCollections } = useCollections()
  const location = useLocation()

  const header = (
    <div className={`py-4 backdrop-blur shadow-md border-b border-mustard/30 ${headerClassName}`} style={{ backgroundColor: '#a48c49' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <BrandLogoLeft />
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <Link style={{ fontWeight: '500' }} 
                to="/nuestro-proyecto" 
                className={cn(
                  "text-foreground/90 hover:text-foreground/70 transition-colors font-semibold text-lg",
                  location.pathname === '/nuestro-proyecto' && "text-foreground font-bold drop-shadow"
                )}
              >
                Nuestro Proyecto
              </Link>
              <Link style={{ fontWeight: '500' }} 
                to="/productos" 
                className={cn(
                  "text-foreground/90 hover:text-foreground/70 transition-colors font-semibold text-lg",
                  location.pathname === '/productos' && "text-foreground font-bold drop-shadow"
                )}
              >
                Productos
              </Link>
              <Link style={{ fontWeight: '500' }} 
                to="/galeria" 
                className={cn(
                  "text-foreground/90 hover:text-foreground/70 transition-colors font-semibold text-lg",
                  location.pathname === '/galeria' && "text-foreground font-bold drop-shadow"
                )}
              >
                Galería
              </Link>
              <Link style={{ fontWeight: '500' }} 
                to="/contacto" 
                className={cn(
                  "text-foreground/90 hover:text-foreground/70 transition-colors font-semibold text-lg",
                  location.pathname === '/contacto' && "text-foreground font-bold drop-shadow"
                )}
              >
                Contacto
              </Link>
            </nav>
          </div>

          {/* Profile & Cart */}
          <div className="flex items-center space-x-2">
            <ProfileMenu />
            
            {showCart && (
              <Button
                variant="ghost"
                size="icon"
                onClick={openCart}
                className="relative text-foreground hover:text-foreground/70 hover:bg-foreground/10"
                aria-label="Ver carrito"
              >
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-foreground text-primary text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-primary shadow-lg">
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
              </Button>
            )}
          </div>
        </div>

        {/* Page Title */}
        {pageTitle && (
          <div className="mt-6">
            <h1 className="text-3xl font-bold text-foreground font-ruwudu">
              {pageTitle}
            </h1>
          </div>
        )}
      </div>
    </div>
  )

  const footer = (
    <div className={`text-foreground py-12 border-t border-accent/30 shadow-lg ${footerClassName}`} style={{ backgroundColor: '#a48c49' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <img 
              src="/logo.png" 
              alt="APIS TERRA" 
              className="h-16 w-auto mb-4"
            />
            <p style={{ fontWeight: '500' }} className="mt-4 text-foreground/95 leading-relaxed font-semibold text-base">
              Miel artesanal 100% natural de alta montaña. Producida a 3,000 metros de altura en las faldas del Nevado de Toluca. Elaborada con pasión por mujeres apicultoras.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 style={{ fontWeight: '500' }} className="font-bold mb-4 text-foreground text-xl font-ruwudu">Enlaces</h3>
            <div className="space-y-3">
              <Link style={{ fontWeight: '400' }} 
                to="/nuestro-proyecto" 
                className="block text-foreground/90 hover:text-foreground/70 transition-colors font-semibold text-lg"
              >
                Nuestro Proyecto
              </Link>
              <Link style={{ fontWeight: '400' }} 
                to="/productos" 
                className="block text-foreground/90 hover:text-foreground/70 transition-colors font-semibold text-lg"
              >
                Productos
              </Link>
              <Link style={{ fontWeight: '400' }} 
                to="/galeria" 
                className="block text-foreground/90 hover:text-foreground/70 transition-colors font-semibold text-lg"
              >
                Galería
              </Link>
              <Link style={{ fontWeight: '400' }} 
                to="/contacto" 
                className="block text-foreground/90 hover:text-foreground/70 transition-colors font-semibold text-lg"
              >
                Contacto
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 style={{ fontWeight: '500' }} className="font-bold mb-4 text-foreground text-xl font-ruwudu">Síguenos</h3>
            <SocialLinks />
            <div className="mt-6 space-y-2 text-sm text-foreground/95">
              <p style={{ fontWeight: '400',
              letterSpacing: '0px', }} className="font-bold">Contacto: apis.terra64@gmail.com</p>
              <p style={{ fontWeight: '400',
              letterSpacing: '0px', }} className="font-bold">Tel: +52 55 59 64 83 95</p>
              <p style={{ fontWeight: '400' }} className="font-bold">Nevado de Toluca, 3,000 msnm</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-accent/30 text-center text-foreground/90">
          <p style={{ fontWeight: '300', letterSpacing: '0px' }} className="font-semibold">&copy; 2025 APIS TERRA. Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <PageTemplate 
        header={header}
        footer={footer}
        className={className}
        layout={layout}
      >
        {children}
      </PageTemplate>
      
      {showCart && <FloatingCart />}
    </>
  )
}