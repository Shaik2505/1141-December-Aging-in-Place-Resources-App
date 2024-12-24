import React, { useState } from "react";

const Help = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [feedbackForm, setFeedbackForm] = useState({ feedback: "" });
  const [contactSuccessMessage, setContactSuccessMessage] = useState("");
  const [feedbackSuccessMessage, setFeedbackSuccessMessage] = useState("");

  const faqs = [
    {
      question: "How do I schedule a performance?",
      answer: 'To schedule a performance, go to the "Performance" tab, select "Schedule," and choose a date and time.',
    },
    {
      question: "How do I collaborate with other artists?",
      answer: 'You can collaborate by using the "Collaboration" feature in the app, where you can invite others to join your project.',
    },
    {
      question: "How do I record my performance?",
      answer: 'To record, simply go to the "Recordings" section, select "New Recording," and press "Start Recording." You can review and save it afterward.',
    },
  ];

  const handleInputChange = (e, formSetter) => {
    const { name, value } = e.target;
    formSetter((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e, form, formSetter, successSetter, url) => {
    e.preventDefault();
    try {
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      formSetter({});
      successSetter("Thanks for providing valuable feedback!");
    } catch (error) {
      console.error(`Error submitting ${url.split('/').pop()} form:`, error);
    }
  };

  return (
    <div className="mx-auto px-6 py-8 bg-white dark:bg-gray-800">
      <h2 className="text-3xl font-semibold text-center mb-8 text-gray-900 dark:text-white">
        Help & Support
      </h2>

      {/* Tutorials Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          Tutorials
        </h3>
        <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-6">
          <ul>
            <li className="mb-4">
              <a
                href="/tutorials/performances"
                className="text-blue-500 dark:text-blue-300 hover:underline"
              >
                How to Schedule a Performance
              </a>
            </li>
            <li className="mb-4">
              <a
                href="/tutorials/collaboration"
                className="text-blue-500 dark:text-blue-300 hover:underline"
              >
                Collaborating with Other Artists
              </a>
            </li>
            <li className="mb-4">
              <a
                href="/tutorials/recording"
                className="text-blue-500 dark:text-blue-300 hover:underline"
              >
                Recording Your Performance
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          Frequently Asked Questions (FAQ)
        </h3>
        <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-6">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <div
                className="flex justify-between items-center cursor-pointer text-lg font-semibold text-gray-900 dark:text-white"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <span>{faq.question}</span>
                <span>{openFAQ === index ? "-" : "+"}</span>
              </div>
              {openFAQ === index && (
                <p className="mt-2 text-gray-600 dark:text-gray-400">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contact Support Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          Contact Support
        </h3>
        <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-6">
          <form
            onSubmit={(e) =>
              handleSubmit(e, contactForm, setContactForm, setContactSuccessMessage, "http://localhost:5000/contacts")
            }
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-lg font-semibold mb-2 text-gray-900 dark:text-white"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
                value={contactForm.name}
                onChange={(e) => handleInputChange(e, setContactForm)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-lg font-semibold mb-2 text-gray-900 dark:text-white"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
                value={contactForm.email}
                onChange={(e) => handleInputChange(e, setContactForm)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-lg font-semibold mb-2 text-gray-900 dark:text-white"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
                value={contactForm.message}
                onChange={(e) => handleInputChange(e, setContactForm)}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
          {contactSuccessMessage && (
            <p className="mt-4 text-green-600">{contactSuccessMessage}</p>
          )}
        </div>
      </div>

      {/* Feedback Section */}
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          Provide Feedback
        </h3>
        <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-6">
          <form
            onSubmit={(e) =>
              handleSubmit(e, feedbackForm, setFeedbackForm, setFeedbackSuccessMessage, "http://localhost:5000/feedbacks")
            }
          >
            <div className="mb-4">
              <label
                htmlFor="feedback"
                className="block text-lg font-semibold mb-2 text-gray-900 dark:text-white"
              >
                Your Feedback
              </label>
              <textarea
                id="feedback"
                name="feedback"
                rows="4"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="Please share your feedback or report an issue."
                value={feedbackForm.feedback}
                onChange={(e) => handleInputChange(e, setFeedbackForm)}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-600"
            >
              Submit Feedback
            </button>
          </form>
          {feedbackSuccessMessage && (
            <p className="mt-4 text-green-600">{feedbackSuccessMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Help;
