import { Suspense } from "react"
import { listRegions } from "@lib/data/regions" // Medusa's data-fetching function
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
// import akkssLogo from "@/assets/akkss-logo-cropped.png" // Importing your logo
import Image from "next/image" // Using Next.js Image component for optimization

export default async function Nav() {
  // Fetches region data on the server, same as the original Medusa Nav
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      {/* Using your theme's colors: bg-white/90, border-gray-200 */}
      <header className="relative h-16 mx-auto border-b duration-200 bg-white/90 backdrop-blur-md border-gray-200">
        {/* Using content-container for consistent layout */}
        <nav className="content-container px-4 sm:px-6 lg:px-8 flex items-center justify-between w-full h-full text-sm text-gray-700">
          {/* Left side: Side Menu */}
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full">
              {/* SideMenu for regions, as in the original Medusa component */}
              <SideMenu regions={regions} />
            </div>
          </div>

          {/* Center: Your AKKSS Tech Logo and Name */}
          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="flex items-center gap-x-2 text-xl font-semibold hover:text-gray-900"
              data-testid="nav-store-link"
            >
              {/* Using Next.js Image component for your logo */}
              <Image
                src="https://res.cloudinary.com/dmpvpxxh2/image/upload/v1751565461/akkss-logo-cropped_ldvqrm.png"
                alt="AKKSS Tech Logo"
                width={36} // Corresponds to w-9
                height={36} // Corresponds to h-9
                className="object-contain"
                priority // Preload the logo as it's important
              />
              {/* Your brand name, hidden on very small screens like in your original code */}
              <span className="hidden sm:block text-green-700">AKKSS Tech</span>
            </LocalizedClientLink>
          </div>

          {/* Right side: Links and Cart */}
          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden sm:flex items-center gap-x-6 h-full">
              {/* Conditional rendering for the Search link */}
              {process.env.NEXT_PUBLIC_FEATURE_SEARCH_ENABLED && (
                <LocalizedClientLink
                  className="hover:text-gray-800"
                  href="/search"
                  scroll={false}
                  data-testid="nav-search-link"
                >
                  Search
                </LocalizedClientLink>
              )}
              <LocalizedClientLink
                className="hover:text-gray-800"
                href="/account"
                data-testid="nav-account-link"
              >
                Account
              </LocalizedClientLink>
            </div>
            {/* Suspense for the Cart Button, same as the original */}
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-gray-800 flex items-center gap-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Cart (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
