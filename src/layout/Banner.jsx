import { Facebook, Instagram, Twitter, Youtube, Phone, Mail} from 'lucide-react';
import { Link } from 'react-router-dom';

export function TopBanner() {
  return (
    <div className="w-full bg-primaryText text-white px-4 py-2">
      <div className="container mx-auto flex items-center justify-between text-sm">
        <div className="flex items-center gap-6">
          <Link to="tel:(225) 555-0118" className="flex items-center gap-2 hover:text-gray-300">
          <Phone className="h-4 w-4" />
            <span className="sr-only">Phone</span>(225) 555-0118
          </Link>
          <Link 
            to="mailto:michelle.rivera@example.com" 
            className="hidden sm:flex items-center gap-2 hover:text-gray-300"
          >
            <Mail className="h-4 w-4" />
            <span className="sr-only">Email</span>
            michelle.rivera@example.com
          </Link>
        </div>

        <p className="hidden md:block text-center">
          Follow Us and get a chance to win 80% off
        </p>

        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">Follow Us :</span>
          <div className="flex items-center gap-4">
            <Link to="#" className="hover:text-gray-300">
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link to="#" className="hover:text-gray-300">
              <Youtube className="h-4 w-4" />
              <span className="sr-only">YouTube</span>
            </Link>
            <Link to="#" className="hover:text-gray-300">
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link to="#" className="hover:text-gray-300">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
