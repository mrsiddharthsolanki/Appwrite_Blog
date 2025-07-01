import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-gradient-to-t from-gray-900 via-gray-700 to-gray-400 border-t-2 border-t-black text-white">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap gap-y-8">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12 flex flex-col justify-between">
            <div className="mb-4 inline-flex items-center">
              <Logo width="120px" />
            </div>
            <div>
              <p className="text-sm text-gray-300">
                &copy; {new Date().getFullYear()} All Rights Reserved by <span className="font-semibold text-blue-300">DevUI</span>.
              </p>
            </div>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="GitHub"><i className="fab fa-github"></i></a>
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-6 text-xs font-semibold uppercase text-blue-200">Company</h3>
              <ul>
                <li className="mb-3">
                  <Link className="text-base font-medium text-gray-100 hover:text-blue-300" to="/">Features</Link>
                </li>
                <li className="mb-3">
                  <Link className="text-base font-medium text-gray-100 hover:text-blue-300" to="/">Pricing</Link>
                </li>
                <li className="mb-3">
                  <Link className="text-base font-medium text-gray-100 hover:text-blue-300" to="/">Affiliate Program</Link>
                </li>
                <li>
                  <Link className="text-base font-medium text-gray-100 hover:text-blue-300" to="/">Press Kit</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-6 text-xs font-semibold uppercase text-blue-200">Support</h3>
              <ul>
                <li className="mb-3">
                  <Link className="text-base font-medium text-gray-100 hover:text-blue-300" to="/">Account</Link>
                </li>
                <li className="mb-3">
                  <Link className="text-base font-medium text-gray-100 hover:text-blue-300" to="/">Help</Link>
                </li>
                <li className="mb-3">
                  <Link className="text-base font-medium text-gray-100 hover:text-blue-300" to="/">Contact Us</Link>
                </li>
                <li>
                  <Link className="text-base font-medium text-gray-100 hover:text-blue-300" to="/">Customer Support</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-6 text-xs font-semibold uppercase text-blue-200">Legals</h3>
              <ul>
                <li className="mb-3">
                  <Link className="text-base font-medium text-gray-100 hover:text-blue-300" to="/">Terms &amp; Conditions</Link>
                </li>
                <li className="mb-3">
                  <Link className="text-base font-medium text-gray-100 hover:text-blue-300" to="/">Privacy Policy</Link>
                </li>
                <li>
                  <Link className="text-base font-medium text-gray-100 hover:text-blue-300" to="/">Licensing</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="absolute left-0 top-0 w-full h-full pointer-events-none">
          <svg className="absolute bottom-0 left-0 w-full h-32 opacity-30" viewBox="0 0 1440 320"><path fill="#2563eb" fillOpacity="1" d="M0,224L48,197.3C96,171,192,117,288,117.3C384,117,480,171,576,197.3C672,224,768,224,864,197.3C960,171,1056,117,1152,128C1248,139,1344,213,1392,250.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
      </div>
    </section>
  )
}

export default Footer