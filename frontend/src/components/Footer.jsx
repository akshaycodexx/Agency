import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { Instagram, Linkedin, Facebook, Youtube } from './SocialIcons';
import { companyInfo } from '../data/companyData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#080b11] text-slate-300 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="inline-flex items-center gap-3">
              <img src="/logo.png" alt="Creativion Logo" className="h-10 w-auto object-contain" />
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-xl tracking-tight text-white">
                  CREATIVION
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase -mt-1">
                  CREATE • INNOVATE • GROW
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Creativion is a modern creative, digital marketing and technology agency that helps ambitious businesses build their brand identity, create high-quality content, grow their digital presence, generate leads and build modern digital experiences.
            </p>

            <div className="flex items-center space-x-4">
              {companyInfo.social.instagram && (
                <a
                  href={companyInfo.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-full bg-white/5 hover:bg-blue-600 text-slate-300 hover:text-white transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {companyInfo.social.linkedin && (
                <a
                  href={companyInfo.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-full bg-white/5 hover:bg-blue-600 text-slate-300 hover:text-white transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {companyInfo.social.facebook && (
                <a
                  href={companyInfo.social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-full bg-white/5 hover:bg-blue-600 text-slate-300 hover:text-white transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              )}
              {companyInfo.social.youtube && (
                <a
                  href={companyInfo.social.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-full bg-white/5 hover:bg-blue-600 text-slate-300 hover:text-white transition-all"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-blue-400 transition-colors">Work & Portfolio</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400 transition-colors">About Creativion</Link>
              </li>
              <li>
                <Link to="/founder" className="hover:text-blue-400 transition-colors">Founder Story</Link>
              </li>
              <li>
                <Link to="/process" className="hover:text-blue-400 transition-colors">Our Process</Link>
              </li>
              <li>
                <Link to="/testimonials" className="hover:text-blue-400 transition-colors">Happy Customers</Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-blue-400 transition-colors">Careers</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-blue-400 transition-colors">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Key Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Core Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services" className="hover:text-blue-400 transition-colors">Social Media Management</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400 transition-colors">Branding & Direction</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400 transition-colors">Reels & Video Production</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400 transition-colors">Meta & Google Ads</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400 transition-colors">SEO & Local Search</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400 transition-colors">Website Development</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact Agency
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{companyInfo.email}</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>{companyInfo.phone}</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-400 leading-relaxed">{companyInfo.address}</span>
              </li>
              <li className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300"
                >
                  <span>Request a Proposal</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-slate-300 tracking-wider">CREATIVION</span>
            <span>•</span>
            <span className="tracking-widest text-slate-400 font-semibold uppercase">CREATE • INNOVATE • GROW</span>
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/admin" className="hover:text-slate-300 transition-colors text-slate-600 hover:text-slate-400">
              Admin Access
            </Link>
          </div>

          <p>© {currentYear} Creativion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
