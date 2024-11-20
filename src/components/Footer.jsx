import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Mail, 
  Phone, 
  MapPin,
  ArrowUp,
  Heart,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handler for newsletter subscription
  const handleSubscription = (event) => {
    event.preventDefault(); // Prevent default form behavior
    alert('Subscription added successfully!');
  };

  return (
    <footer className="relative my-24 mx-0"> {/* Adjusted margin-top */}
      {/* Decorative Top Wave */}
      <div className="absolute top-0 left-0 right-0 transform -translate-y-full">
        <svg 
          // className="w-full h-16" {/* Reduced height */}
          viewBox="0 0 1440 100" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M0,40 C320,80 420,10 1440,40 L1440,100 L0,100 Z" 
            className="fill-pink-50"
          />
        </svg>
      </div>

      <div className="bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 pt-10 pb-6"> {/* Adjusted padding */}
          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8"> {/* Reduced gap */}
            {/* About Section */}
            <div className="space-y-4"> {/* Reduced space */}
              <h3 className="text-2xl font-bold text-pink-600 font-serif">
                Foodie's Hub
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Discover the best food and drinks in your area. We make it easy to satisfy 
                your cravings, delivering delicious possibilities every day.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <SocialIcon icon={<Facebook size={18} />} href="https://www.facebook.com/Yum-Yum-Restaurant-and-Cafe-10991667880184/" />
                  <span className="text-gray-600">Facebook</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SocialIcon icon={<Instagram size={18} />} href="https://www.instagram.com/yummyumcafe/" />
                  <span className="text-gray-600">Instagram</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SocialIcon icon={<Twitter size={18} />} href="https://twitter.com/yummyumcafe" />
                  <span className="text-gray-600">Twitter</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SocialIcon icon={<Linkedin size={18} />} href="https://www.linkedin.com/in/yummyumcafe" />
                  <span className="text-gray-600">LinkedIn</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SocialIcon icon={<Youtube size={18} />} href="https://www.youtube.com/yummyumcafe" />
                  <span className="text-gray-600">YouTube</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4"> {/* Reduced space */}
              <h4 className="text-xl font-semibold text-pink-600">Quick Links</h4>
              <ul className="space-y-4">
                {[{ name: 'Home', path: '/' }, { name: 'About Us', path: '/about' }, { name: 'Services', path: '/services' }, { name: 'Contact', path: '/contact' }]
                  .map((item) => (
                    <li key={item.name}>
                      <Link 
                        to={item.path} 
                        className="text-gray-600 hover:text-pink-600 transition-colors duration-300 flex items-center group"
                      >
                        <ExternalLink className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {item.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4"> {/* Reduced space */}
              <h4 className="text-xl font-semibold text-pink-600">Contact Us</h4>
              <ul className="space-y-4">
                <ContactItem icon={<MapPin />} text="Kangra,Himachal Pradesh" />
                <ContactItem icon={<Phone />} text="+91 9392739170" />
                <ContactItem icon={<Mail />} text="foodieshub@123.com" />
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-4"> {/* Reduced space */}
              <h4 className="text-xl font-semibold text-pink-600">Newsletter</h4>
              <p className="text-gray-600">
                Subscribe to our newsletter for the latest updates and offers.
              </p>
              <form onSubmit={handleSubscription} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg bg-white border-2 border-pink-100 focus:outline-none focus:border-pink-400 transition-colors duration-300 placeholder-gray-400"
                  />
                  <div className="absolute right-3 top-3 text-pink-400">
                    <Mail size={20} />
                  </div>
                </div>
                <button 
                  type="submit"
                  className="w-full px-6 py-3 bg-pink-500 text-white rounded-lg font-semibold hover:bg-pink-600 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-pink-100 pt-6 mt-6"> {/* Reduced padding and margin */}
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="flex items-center text-gray-600">
                <span>© 2024 Foodie's Hub. Made with</span>
                <Heart className="w-4 h-4 mx-2 text-pink-500 animate-pulse" />
                <span>by T R Swayam</span>
              </div>

              {/* Scroll to top button */}
              <button
                onClick={scrollToTop}
                className="group bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <ArrowUp className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Social Icon Component
const SocialIcon = ({ icon, href }) => (
  <a 
    href={href}
    className="bg-white p-3 rounded-full hover:bg-pink-500 hover:text-white text-pink-500 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

// Contact Item Component
const ContactItem = ({ icon, text }) => (
  <li className="flex items-center space-x-3 group">
    <div className="text-pink-400 transform group-hover:scale-110 transition-transform duration-300">
      {React.cloneElement(icon, { size: 20 })}
    </div>
    <span className="text-gray-600 group-hover:text-pink-600 transition-colors duration-300">
      {text}
    </span>
  </li>
);

export default Footer;
