import React from 'react'

const Footer = () => {
  return (
    <div className="w-screen h-fit">
      <footer className="bg-[#131212] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h2 className="text-lg font-semibold text-blue-500">Momentum</h2>
              <p className="text-sm text-gray-400 mt-2">
                Track your habits. Transform your life.
              </p>
            </div>
            <div className="space-y-4 flex flex-col">
              <h3 className="text-md font-semibold text-white">Quick Links</h3>
              <a
                activeclassname="text-white"
                className="text-gray-400 hover:text-white transition-colors text-sm"
                href="/about-us"
                data-discover="true"
              >
                About Us
              </a>
              <a
                activeclassname="text-white"
                className="text-gray-400 hover:text-white transition-colors text-sm"
                href="/privacy-policy"
                data-discover="true"
              >
                Privacy Policy
              </a>
              <a
                activeclassname="text-white"
                className="text-gray-400 hover:text-white transition-colors text-sm"
                href="/terms-of-service"
                data-discover="true"
              >
                Terms of Service
              </a>
              <a
                activeclassname="text-white"
                className="text-gray-400 hover:text-white transition-colors text-sm"
                href="/contact-us"
                data-discover="true"
              >
                Contact
              </a>
            </div>
            <div className="space-y-4">
              <h3 className="text-md font-semibold text-white">Contact</h3>
              <p className="text-gray-400 text-sm">
                Email:{' '}
                <a
                  href="mailto:ezehvaltx20@gmail.com"
                  className="text-blue-500 underline hover:text-blue-700 transition duration-300"
                >
                  support@Momentum.com
                </a>
              </p>
              <p className="text-gray-400 text-sm">Phone: +234 8146051716</p>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-4 text-sm text-gray-400 text-center">
            © 2025 Momentum. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
export default Footer
