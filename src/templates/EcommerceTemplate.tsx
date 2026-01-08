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
    <div className={`py-4 bg-primary/95 backdrop-blur shadow-lg border-b-4 border-accent ${headerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <BrandLogoLeft />

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <Link 
                to="/nuestro-proyecto" 
                className={cn(
                  "text-white/80 hover:text-accent transition-colors font-semibold text-lg",
                  location.pathname === '/nuestro-proyecto' && "text-accent font-bold drop-shadow"
                )}
              >
                Nuestro Proyecto
              </Link>
              <Link 
                to="/productos" 
                className={cn(
                  "text-white/80 hover:text-accent transition-colors font-semibold text-lg",
                  location.pathname === '/productos' && "text-accent font-bold drop-shadow"
                )}
              >
                Productos
              </Link>
              <Link 
                to="/contacto" 
                className={cn(
                  "text-white/80 hover:text-accent transition-colors font-semibold text-lg",
                  location.pathname === '/contacto' && "text-accent font-bold drop-shadow"
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
                className="relative text-white hover:text-accent hover:bg-white/10"
                aria-label="Ver carrito"
              >
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent text-primary text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-white shadow-lg">
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
            <h1 className="text-3xl font-bold text-white font-ruwudu">
              {pageTitle}
            </h1>
          </div>
        )}
      </div>
    </div>
  )

  const footer = (
    <div className={`bg-primary text-white py-12 border-t-4 border-accent shadow-2xl ${footerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img 
                src="/logo.png" 
                alt="APIS TERRA" 
                className="h-16 w-auto brightness-0 invert drop-shadow-lg"
              />
            </div>
            <p className="mt-4 text-white/95 leading-relaxed font-semibold text-base">
              Miel artesanal 100% natural de alta montaña. Producida a 3,000 metros de altura en las faldas del Nevado de Toluca. Elaborada con pasión por mujeres apicultoras.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold mb-4 text-accent text-xl font-ruwudu">Enlaces</h3>
            <div className="space-y-3">
              <Link 
                to="/nuestro-proyecto" 
                className="block text-white/80 hover:text-accent transition-colors font-semibold text-lg"
              >
                Nuestro Proyecto
              </Link>
              <Link 
                to="/productos" 
                className="block text-white/80 hover:text-accent transition-colors font-semibold text-lg"
              >
                Productos
              </Link>
              <Link 
                to="/contacto" 
                className="block text-white/80 hover:text-accent transition-colors font-semibold text-lg"
              >
                Contacto
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-bold mb-4 text-accent text-xl font-ruwudu">Síguenos</h3>
            <SocialLinks />
            <div className="mt-6 space-y-2 text-sm text-white/95">
              <p className="font-bold">📧 contacto@apisterra.com</p>
              <p className="font-bold">📱 +52 123 456 7890</p>
              <p className="font-bold">🏔️ Nevado de Toluca, 3,000 msnm</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t-2 border-accent/50 text-center text-white/90">
          <p className="font-semibold">&copy; 2025 APIS TERRA. Todos los derechos reservados.</p>
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