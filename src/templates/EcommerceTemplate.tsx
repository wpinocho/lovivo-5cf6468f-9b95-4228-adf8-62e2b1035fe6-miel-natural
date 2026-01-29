import { ReactNode, useState } from 'react'
import { PageTemplate } from './PageTemplate'
import { BrandLogoLeft } from '@/components/BrandLogoLeft'
import { SocialLinks } from '@/components/SocialLinks'
import { FloatingCart } from '@/components/FloatingCart'
import { ProfileMenu } from '@/components/ProfileMenu'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Menu } from 'lucide-react'
import { useCartUI } from '@/components/CartProvider'
import { useCart } from '@/contexts/CartContext'
import { useCollections } from '@/hooks/useCollections'
import { cn } from '@/lib/utils'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

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
  const [menuOpen, setMenuOpen] = useState(false)

  const header = (
    <div className={`py-2 backdrop-blur-md shadow-sm ${headerClassName}`} style={{ backgroundColor: '#eceae4' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <BrandLogoLeft />
          </div>

          {/* Menu, Profile & Cart */}
          <div className="flex items-center space-x-3">
            {/* Menu Hamburguesa */}
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:opacity-70" style={{ color: '#988b8b' }}>
                  <Menu className="h-20 w-20" strokeWidth={1.5} />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px]">
                <SheetHeader>
                  <SheetTitle className="font-ruwudu text-2xl text-foreground">Navegación</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4 mt-8">
                  <Link 
                    to="/nuestro-proyecto" 
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "text-foreground/80 hover:text-foreground transition-colors text-lg py-2",
                      location.pathname === '/nuestro-proyecto' && "text-foreground font-medium"
                    )}
                  >
                    Nuestro Proyecto
                  </Link>
                  <Link 
                    to="/productos" 
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "text-foreground/80 hover:text-foreground transition-colors text-lg py-2",
                      location.pathname === '/productos' && "text-foreground font-medium"
                    )}
                  >
                    Productos
                  </Link>
                  <Link 
                    to="/distinguir-miel-real" 
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "text-foreground/80 hover:text-foreground transition-colors text-lg py-2",
                      location.pathname === '/distinguir-miel-real' && "text-foreground font-medium"
                    )}
                  >
                    ¿Cómo distinguir miel auténtica?
                  </Link>
                  <Link 
                    to="/galeria" 
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "text-foreground/80 hover:text-foreground transition-colors text-lg py-2",
                      location.pathname === '/galeria' && "text-foreground font-medium"
                    )}
                  >
                    Galería
                  </Link>
                  <Link 
                    to="/contacto" 
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "text-foreground/80 hover:text-foreground transition-colors text-lg py-2",
                      location.pathname === '/contacto' && "text-foreground font-medium"
                    )}
                  >
                    Contacto
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>

            <ProfileMenu />
            
            {showCart && (
              <Button
                variant="ghost"
                size="icon"
                onClick={openCart}
                className="relative hover:opacity-70"
                style={{ color: '#988b8b' }}
                aria-label="Ver carrito"
              >
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-white text-primary text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-lg">
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
            <h1 className="text-4xl font-ruwudu" style={{ color: '#988b8b' }}>
              {pageTitle}
            </h1>
          </div>
        )}
      </div>
    </div>
  )

  const footer = (
    <div className={`py-4 ${footerClassName}`} style={{ backgroundColor: '#eceae4', color: '#988b8b' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <img 
              src="/logo.png" 
              alt="APIS TERRA" 
              className="h-24 w-auto mb-3"
            />
            <p className="leading-relaxed" style={{ color: '#988b8b' }}>Miel de abeja 100% pura y natural de alta montaña. Producida con apicultura silvestre a 3,000 metros de altura, en las faldas del Nevado de Toluca.</p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg mb-3 font-ruwudu" style={{ color: '#988b8b' }}>Navegación</h3>
            <div className="space-y-2">
              <Link 
                to="/nuestro-proyecto" 
                className="block hover:opacity-70 transition-colors"
                style={{ color: '#988b8b' }}
              >
                Nuestro Proyecto
              </Link>
              <Link 
                to="/productos" 
                className="block hover:opacity-70 transition-colors"
                style={{ color: '#988b8b' }}
              >
                Productos
              </Link>
              <Link 
                to="/distinguir-miel-real" 
                className="block hover:opacity-70 transition-colors"
                style={{ color: '#988b8b' }}
              >
                ¿Cómo distinguir miel auténtica?
              </Link>
              <Link 
                to="/galeria" 
                className="block hover:opacity-70 transition-colors"
                style={{ color: '#988b8b' }}
              >
                Galería
              </Link>
              <Link 
                to="/contacto" 
                className="block hover:opacity-70 transition-colors"
                style={{ color: '#988b8b' }}
              >
                Contacto
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg mb-3 font-ruwudu" style={{ color: '#988b8b' }}>Contacto</h3>
            <div className="space-y-2 text-sm mb-3" style={{ color: '#988b8b' }}>
              <p>apis.terra64@gmail.com</p>
              <p>+52 55 59 64 83 95</p>
              <p>Faldas del Nevado de Toluca, 3,000 msnm, Estado de México, México</p>
            </div>
            <SocialLinks />
          </div>
        </div>

        <div className="mt-6 pt-3 border-t text-center text-sm" style={{ borderColor: '#988b8b33', color: '#988b8b' }}>
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