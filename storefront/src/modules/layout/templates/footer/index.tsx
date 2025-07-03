import { getCategoriesList } from "@lib/data/categories"
import { getCollectionsList } from "@lib/data/collections"
import { Text, clx } from "@medusajs/ui"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"

import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6)
  const { product_categories } = await getCategoriesList(0, 6)



// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-gray-300 py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
//           {/* About Section */}
//           <div>
//             <h3 className="text-lg font-semibold text-white mb-4">AKKSS Tech</h3>
//             <p className="text-sm">
//               Empowering minds, enabling tech for a sustainable future. We provide quality laptops and plant trees with every purchase.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li><Link to="/" className="text-sm hover:text-white transition-colors duration-200">Home</Link></li>
//               <li><Link to="/map" className="text-sm hover:text-white transition-colors duration-200">Impact Map</Link></li>
//               <li><Link to="/store" className="text-sm hover:text-white transition-colors duration-200">Store</Link></li>
//               <li><Link to="/login" className="text-sm hover:text-white transition-colors duration-200">Login</Link></li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
//             <p className="text-sm">
//               Email: <a href="mailto:akkssswapn@gmail.com" className="hover:text-white transition-colors duration-200">akkssswapn@gmail.com</a>
//             </p>
//             <p className="text-sm">
//               Phone: <a href="tel:+919828368395" className="hover:text-white transition-colors duration-200">+91-9828368395</a>
//             </p>
//           </div>

//           {/* Social */}
//           <div>
//             <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
//             <div className="flex space-x-4">
//               <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white transition-colors duration-200">
//                 <FaFacebookF />
//               </a>
//               <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-white transition-colors duration-200">
//                 <FaTwitter />
//               </a>
//               <a href="#" target="https://www.instagram.com/akksstech" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white transition-colors duration-200">
//                 <FaInstagram />
//               </a>
//               <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition-colors duration-200">
//                 <FaLinkedinIn />
//               </a>
//             </div>
//           </div>

//           {/* Newsletter (optional) */}
//           <div>
//             <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
//             <input
//               type="email"
//               placeholder="Your email"
//               className="p-2 rounded bg-gray-800 text-white text-sm w-full mb-2"
//             />
//             <button className="bg-green-600 text-white text-sm px-4 py-2 rounded hover:bg-green-700 transition-all duration-200">
//               Subscribe
//             </button>
//           </div>
//         </div>

//         {/* Footer Bottom */}
//         <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
//           © {new Date().getFullYear()} AKKSS Tech. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;







  return (
    <footer className="border-t border-ui-border-base w-full">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-40">
          <div>
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase"
            >
              Medusa Store
            </LocalizedClientLink>
          </div>
          <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
            {product_categories && product_categories?.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">
                  Categories
                </span>
                <ul
                  className="grid grid-cols-1 gap-2"
                  data-testid="footer-categories"
                >
                  {product_categories?.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return
                    }

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null

                    return (
                      <li
                        className="flex flex-col gap-2 text-ui-fg-subtle txt-small"
                        key={c.id}
                      >
                        <LocalizedClientLink
                          className={clx(
                            "hover:text-ui-fg-base",
                            children && "txt-small-plus"
                          )}
                          href={`/categories/${c.handle}`}
                          data-testid="category-link"
                        >
                          {c.name}
                        </LocalizedClientLink>
                        {children && (
                          <ul className="grid grid-cols-1 ml-3 gap-2">
                            {children &&
                              children.map((child) => (
                                <li key={child.id}>
                                  <LocalizedClientLink
                                    className="hover:text-ui-fg-base"
                                    href={`/categories/${child.handle}`}
                                    data-testid="category-link"
                                  >
                                    {child.name}
                                  </LocalizedClientLink>
                                </li>
                              ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">
                  Collections
                </span>
                <ul
                  className={clx(
                    "grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small",
                    {
                      "grid-cols-2": (collections?.length || 0) > 3,
                    }
                  )}
                >
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="hover:text-ui-fg-base"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
           
          </div>
        </div>
        <div className="flex w-full mb-16 justify-between text-ui-fg-muted">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} AKKSS Tech. All rights reserved.
          </Text>
          <MedusaCTA />
        </div>
      </div>
    </footer>
  )
}
