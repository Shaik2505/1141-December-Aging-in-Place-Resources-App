import {
    FaDiscord,
    FaTelegram,
    FaFacebook,
    FaYoutube,
    FaInstagram,
    FaReddit,
  } from "react-icons/fa";
  import { SiCoinmarketcap } from "react-icons/si";
  import { BsTwitterX } from "react-icons/bs";
  import { FaRegCopyright } from "react-icons/fa";
  
  const Footer = () => {
    return (
      <footer className="bg-white dark:bg-offBlack text-darkGrey dark:text-offWhite px-4 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Content */}
          <div className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-8">
  
            {/* Dynamic Content Columns */}
            {[ 
              {
                title: "About Us",
                links: [
                  "About",
                  "Careers",
                  "News",
                  "Legal",
                  "Terms",
                  "Privacy",
                  "Building Trust",
                  "Blog",
                  "Community",
                  "Risk Warning",
                  "Notices",
                  "Downloads",
                  "Desktop Application",
                ],
              },
              {
                title: "Products",
                links: [
                  "Exchange",
                  "Buy Crypto",
                  "Pay",
                  "NFT",
                  "Live",
                  "Tax",
                  "Gift Card",
                  "Launchpool",
                  "Auto-Invest",
                  "ETH Staking",
                  "Research",
                  "Charity",
                ],
              },
              {
                title: "Business",
                links: [
                  "P2P Merchant Application",
                  "P2Pro Merchant Application",
                  "Listing Application",
                  "NFT",
                  "Institutional & VIP Services",
                  "Labs",
                  "Techno Connect",
                ],
              },
              {
                title: "Learn",
                links: [
                  "Learn & Earn",
                  "Browse Crypto Prices",
                  "Bitcoin Price",
                  "Ethereum Price",
                  "Crypto Price Predictions",
                  "Ethereum Upgrade (Pectra)",
                  "Buy Bitcoin",
                  "Buy Ethereum",
                  "Buy Altcoins",
                ],
              },
              {
                title: "Service",
                links: [
                  "Affiliate",
                  "Referral",
                  "OTC Trading",
                  "Historical Market Data",
                  "Proof of Reserves",
                ],
              },
              {
                title: "Support",
                links: [
                  "24/7 Support",
                  "Support Center",
                  "Product Feedback",
                  "Fees",
                  "APIs",
                  "Trading Rules",
                  "Law Enforcement Requests",
                ],
              },
            ].map((section, idx) => (
              <div key={idx}>
                <h3 className="text-black dark:text-white text-sm font-semibold mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2 text-xs">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="hover:text-primary transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
  
              {/* Community Section */}
              <div className="lg:w-44">
              <h3 className="text-black dark:text-white text-sm font-semibold mb-4">
                Community
              </h3>
              <ul className="flex flex-wrap gap-4 lg:flex-wrap">
                {[ 
                  { icon: <FaDiscord  />, link: "https://discord.com/" },
                  { icon: <FaTelegram  />, link: "https://telegram.org/" },
                  { icon: <FaFacebook  />, link: "https://facebook.com/" },
                  { icon: <BsTwitterX  />, link: "https://twitter.com/" },
                  { icon: <FaYoutube  />, link: "https://youtube.com/" },
                  { icon: <FaInstagram  />, link: "https://instagram.com/" },
                  { icon: <FaReddit  />, link: "https://reddit.com/" },
                  { icon: <SiCoinmarketcap  />, link: "https://coinmarketcap.com/" }
                ].map(({ icon, link }, idx) => (
                  <li key={idx} className="flex items-center">
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg hover:text-primary transition-colors"
                    >
                      {icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
          </div>
  
          {/* Footer Bottom */}
          <div className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-4">
            <p className="text-center text-xs flex items-center justify-center">
              <FaRegCopyright className="mr-2" /> 2024 Techno Tide. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  