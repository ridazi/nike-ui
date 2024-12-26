import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'; // Importing social media icons

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Other sections like "Company Info" */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {/* Social Icons */}
              <a href="#" className="text-gray-300 hover:text-white">
                <FaFacebookF size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </div>
        {/* Footer bottom */}
        <div className="mt-8 border-t border-gray-600 pt-4 text-center">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Nike, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer

