import HeroSection from '../components/home/HeroSection';
import CardGrid from '../components/home/CardGrid';
import NewsletterSection from '../components/home/NewsletterSection';
import Footer from '../components/home/Footer';
import { FaFacebook, FaLinkedin,FaYoutube,FaTwitter,FaInstagram } from 'react-icons/fa';

 const Home =()=> {
  const cards = [
    {
      id: 1,
      title: "Aging in Place Considerations",
      image: "/placeholder.svg?height=200&width=400",
      description:
        "Aging in place provides a wealth of benefits for older adults, but it's not an easy decision. This NCOA article offers many factors to consider, such as how well your home meets your needs and whether you may need support services.",
      link: "What to consider first →",
    },
    {
      id: 2,
      title: "Downsizing for Aging in Place",
      image: "/placeholder.svg?height=200&width=400",
      description:
        "Moving to a smaller, more manageable home as you grow older is known as downsizing. Creating a safe and secure home environment and maintaining financial stability is key to aging in place.",
      link: "Use this NCOA Adviser guide →",
    },
    {
      id: 3,
      title: "Home Safety Checklist",
      image: "/placeholder.svg?height=200&width=400",
      description:
        "As we age, our homes should continue to be a place where we feel safe, secure, and comfortable. But what we once considered convenient may be sometimes risky.",
      link: "Get a printable home risk checklist →",
    },
    {
      id: 4,
      title: "Medicare's Home Health Care Benefit",
      image: "/placeholder.svg?height=200&width=400",
      description:
        "Medicare has specific rules about home health care coverage. It's important to know what the benefit will and will not pay for. Get info about services covered, enrollment requirements, and coverage options.",
      link: "Find out what Medicare covers →",
    },
    {
      id: 5,
      title: "In-Home Care Options",
      image: "/placeholder.svg?height=200&width=400",
      description:
        "In-home care includes companion care, personal care, and skilled nursing services. Get info on Medicare and Medicaid coverage, how much in-home care may cost, and how to transition if you need to.",
      link: "Understand the in-home care options →",
    },
    {
      id: 6,
      title: "Local Care Resources",
      image: "/placeholder.svg?height=200&width=400",
      description:
        "Staying in your home and planning for ways to keep your environment safe and accessible? Considering a move to a community that offers more support? Not sure what your options are?",
      link: "Explore local care resources →",
    },
    // Other card objects...
  ];

  const checkboxOptions = [
    { id: "resources", label: "I need resources for myself or a loved one" },
    { id: "professional", label: "I'm an aging services professional who works with older adults" },
    { id: "advocate", label: "I want to advocate for better aging policy" },
  ];

  const footerLinks = {
    aboutUs: [
      { text: "About NCOA", href: "#" },
      { text: "Impact & Equity Report", href: "#" },
      // Other footer links...
    ],
    quickLinks: [
      { text: "Press Room", href: "#" },
      { text: "Action Center", href: "#" },
      // Other footer links...
    ],
  };

  const socialIcons = [
    { Icon: FaFacebook, href: "#" },
    { Icon: FaLinkedin, href: "#" },
    { Icon: FaInstagram, href: "#" },
    { Icon: FaTwitter, href: "#" },
    { Icon: FaYoutube, href: "#" },
  ];

  return (
    <main className="min-h-screen dark:bg-darkBackground pt-16 dark:text-background text-primary">
      <HeroSection />
      <CardGrid cards={cards} />
      <NewsletterSection checkboxOptions={checkboxOptions} />
      <Footer footerLinks={footerLinks} socialIcons={socialIcons} />
    </main>
  );
}

export default Home