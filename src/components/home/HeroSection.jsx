const HeroSection = () => {
    return (
      <section className="relative bg-[#E5EEF0] dark:bg-secondary py-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-0 top-0 w-24 h-24 bg-white/20 rounded-br-full"></div>
          <div className="absolute right-0 bottom-0 w-24 h-24 bg-white/20 rounded-tl-full"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Aging in Place</h1>
          <p className="text-gray-700 text-lg">
            Most of us want to stay in our home for as long as possible. This is
            called "aging in place." Explore the financial, social, and safety
            outcomes of downsizing before making the decision to move. And get
            resources as you or a loved one consider aging at home.
          </p>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  