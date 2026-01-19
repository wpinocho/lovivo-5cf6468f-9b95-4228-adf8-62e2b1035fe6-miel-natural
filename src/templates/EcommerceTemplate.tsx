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
    <div className={`py-6 backdrop-blur-md bg-primary/95 shadow-sm ${headerClassName}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <BrandLogoLeft />
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <nav className="flex space-x-8">
              <Link 
                to="/nuestro-proyecto" 
                className={cn(
                  "text-foreground/80 hover:text-foreground transition-colors text-base",
                  location.pathname === '/nuestro-proyecto' && "text-foreground"
                )}
              >
                Nuestro Proyecto
              </Link>
              <Link 
                to="/productos" 
                className={cn(
                  "text-foreground/80 hover:text-foreground transition-colors text-base",
                  location.pathname === '/productos' && "text-foreground"
                )}
              >
                Productos
              </Link>
              <Link 
                to="/distinguir-miel-real" 
                className={cn(
                  "text-foreground/80 hover:text-foreground transition-colors text-base",
                  location.pathname === '/distinguir-miel-real' && "text-foreground"
                )}
              >
                Distinguir Miel Real
              </Link>
              <Link 
                to="/galeria" 
                className={cn(
                  "text-foreground/80 hover:text-foreground transition-colors text-base",
                  location.pathname === '/galeria' && "text-foreground"
                )}
              >
                Galería
              </Link>
              <Link 
                to="/contacto" 
                className={cn(
                  "text-foreground/80 hover:text-foreground transition-colors text-base",
                  location.pathname === '/contacto' && "text-foreground"
                )}
              >
                Contacto
              </Link>
            </nav>
          </div>

          {/* Profile & Cart */}
          <div className="flex items-center space-x-3">
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
                  <span className="absolute -top-1 -right-1 bg-accent text-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-lg">
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
              </Button>
            )}
          </div>
        </div>

        {/* Page Title */}
        {pageTitle && (
          <div className="mt-8">
            <h1 className="text-4xl text-foreground font-ruwudu">
              {pageTitle}
            </h1>
          </div>
        )}
      </div>
    </div>
  )

  const footer = (
    <div className={`text-foreground py-20 bg-primary/95 ${footerClassName}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Brand */}
          <div>
            <img 
              src="/logo.png" 
              alt="APIS TERRA" 
              className="h-20 w-auto mb-6"
            />
            <p className="text-foreground/90 leading-relaxed">
              Miel artesanal 100% natural de alta montaña. Producida a 3,000 metros de altura en las faldas del Nevado de Toluca.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg mb-6 text-foreground font-ruwudu">Navegación</h3>
            <div className="space-y-3">
              <Link 
                to="/nuestro-proyecto" 
                className="block text-foreground/80 hover:text-foreground transition-colors"
              >
                Nuestro Proyecto
              </Link>
              <Link 
                to="/productos" 
                className="block text-foreground/80 hover:text-foreground transition-colors"
              >
                Productos
              </Link>
              <Link 
                to="/distinguir-miel-real" 
                className="block text-foreground/80 hover:text-foreground transition-colors"
              >
                Distinguir Miel Real
              </Link>
              <Link 
                to="/galeria" 
                className="block text-foreground/80 hover:text-foreground transition-colors"
              >
                Galería
              </Link>
              <Link 
                to="/contacto" 
                className="block text-foreground/80 hover:text-foreground transition-colors"
              >
                Contacto
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg mb-6 text-foreground font-ruwudu">Contacto</h3>
            <div className="space-y-3 text-sm text-foreground/90 mb-6">
              <p>apis.terra64@gmail.com</p>
              <p>+52 55 59 64 83 95</p>
              <p>Nevado de Toluca, 3,000 msnm</p>
            </div>
            <SocialLinks />
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-foreground/20 text-center text-foreground/70 text-sm">
          <p>&copy; 2025 APIS TERRA. Todos los derechos reservados.</p>
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