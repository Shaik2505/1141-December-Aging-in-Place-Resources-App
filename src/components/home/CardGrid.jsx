const CardGrid = ({ cards }) => {
    return (
      <section className="py-12 px-4">
        <h2 className="text-xl font-bold mb-8 px-4 ">AGING IN PLACE</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-background dark:bg-darkAccent rounded-lg overflow-hidden shadow-md"
            >
              <img
                src="https://www.nia.nih.gov/sites/default/files/inline-images/aging-in-place-inline_1.jpg"
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-gray-600 mb-4">{card.description}</p>
                <a
                  href="#"
                  className="text-teal-700 font-semibold hover:text-teal-900"
                >
                  {card.link}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default CardGrid;
  