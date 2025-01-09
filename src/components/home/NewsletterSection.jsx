import { MdEmail } from "react-icons/md";

const NewsletterSection = ({ checkboxOptions }) => {
  return (
    <section className="bg-background dark:bg-darkBackground border-y-2 py-16 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="flex items-center gap-4 mb-6">
          <MdEmail className="text-4xl text-secondary dark:text-secondary" />
          <h2 className="text-2xl font-bold">Get NCOA in Your Inbox</h2>
        </div>
        <p className="mb-6 text-primary dark:text-darkText">
          Choose where we'll send you resources to support your health and
          financial well-being. Select an option(s) below that best describes
          you to get communication that matches your interests.
        </p>
        <form className="space-y-6">
          <div className="space-y-4">
            {checkboxOptions.map((option) => (
              <label key={option.id} className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="p-2 border rounded"
            />
          </div>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-2 border rounded"
          />
          <button className="bg-teal-700 text-white px-8 py-2 rounded hover:bg-teal-800">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
