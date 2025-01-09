import React from "react";
import {
  FaArrowRight,
  FaChartLine,
  FaUsers,
  FaHandHoldingHeart,
} from "react-icons/fa";

const Landing = () => {
  return (
    <main className="w-full pt-14">
      {/* Hero Section */}
      <section className="relative bg-teal-900 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Improving the Lives of 40 Million Older Adults by 2030
            </h1>
            <p className="text-lg mb-6">
              Everyone deserves to age well. Learn about our work, the people we
              serve, and the impact we're making together.
            </p>
            <button className="bg-emerald-400 text-teal-900 px-6 py-3 rounded-md font-medium flex items-center gap-2 hover:bg-emerald-300 transition-colors">
              See How We're Changing Lives <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Aging well is everyone's right.
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            NCOA upholds the inherent truth, value, purpose, and advocacy our
            nation needs to ensure that every person can age with health,
            security, and dignity.
          </p>
        </div>
      </section>

      {/* Impact and Promise Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Our Impact</h3>
              <p className="text-gray-600">
                For almost 75 years, NCOA has built bridges for those struggling
                generations of families, serving their economic, health, and
                social needs.
              </p>
              <button className="flex items-center gap-2 text-teal-600 font-medium hover:text-teal-700">
                Learn about our work <FaArrowRight />
              </button>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Our Promise</h3>
              <p className="text-gray-600">
                We believe aging well is something every American
                deserves—regardless of gender, color, sexuality, income, or ZIP
                code.
              </p>
              <button className="flex items-center gap-2 text-teal-600 font-medium hover:text-teal-700">
                Read our commitment <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">
            For every $1 raised, 93¢ goes directly into NCOA programs.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">$618M</div>
              <p className="text-gray-600">
                in benefits accessed by participants
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">
                13,192
              </div>
              <p className="text-gray-600">
                people participated in chronic disease and falls prevention
                workshops
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">
                47,280
              </div>
              <p className="text-gray-600">
                professionals participated in learning
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img
                src="https://www.ncoa.org/_next/image/?url=https%3A%2F%2Fassets-us-01.kc-usercontent.com%3A443%2Fffacfe7d-10b6-0083-2632-604077fd4eca%2Fdadc8a2f-3500-46f6-85c4-d4e7f0ed96a3%2F2024-Homepage-Hero.png&w=1920&q=75"
                alt="Partners working together"
                className="rounded-lg w-full"
              />
            </div>
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-3xl font-bold">Partners Make it Possible</h2>
              <p className="text-gray-600">
                NCOA is your partner to improve the lives of older adults. We
                work with corporate partners and foundations to educate
                nationally and activate locally, so we all can live with dignity
                and independence.
              </p>
              <button className="flex items-center gap-2 text-teal-600 font-medium hover:text-teal-700">
                Find out how to team up with NCOA <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Join Movement Section */}
      <section className="bg-teal-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Movement
          </h2>
          <p className="max-w-2xl mx-auto mb-8">
            We unite policymakers, innovative community-based organizations,
            businesses, and advocates. Together, we work to provide equitable
            aging solutions that improve lives.
          </p>
          <button className="bg-emerald-400 text-teal-900 px-6 py-3 rounded-md font-medium hover:bg-emerald-300 transition-colors">
            Read Our Policy Priorities
          </button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Get NCOA in Your Inbox</h2>
            <p className="text-gray-600 mb-6">
              Choose what we'll send you resources to support your health and
              financial well-being.
            </p>
            <form className="space-y-4">
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded text-teal-600" />
                  <span>I need resources for myself or a loved one</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded text-teal-600" />
                  <span>
                    I'm an aging network professional who works with older
                    adults
                  </span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded text-teal-600" />
                  <span>I want to advocate for better aging policy</span>
                </label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border rounded-md px-4 py-2"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border rounded-md px-4 py-2"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-md px-4 py-2"
              />
              <button className="w-full bg-teal-900 text-white py-3 rounded-md hover:bg-teal-800 transition-colors">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Landing;
