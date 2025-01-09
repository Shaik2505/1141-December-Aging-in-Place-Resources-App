import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = ({ footerLinks, socialIcons }) => {
  return (
    <footer className="bg-teal-900 text-white pt-2 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-2">
        <div className="lg:col-span-2">
          <div className="text-center">
            <p className="text-sm">Follow NCOA on Social Media:</p>
            <div className="flex gap-4 mt-2 justify-center">
              {socialIcons.map(({ Icon, href }, index) => (
                <a key={index} href={href} className="hover:text-gray-300">
                  <Icon size={24} />
                </a>
              ))}
            </div>
            <p>© 2024 National Council on Aging, Inc.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
