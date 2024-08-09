import React, { useState } from 'react';
import './Faq.css'
const faqs = [
  {
    question: "How does Vintage Store work?",
    answer: "Members can list items or services they want to sell, browse available listings, and make purchases or trades directly with other members."
  },
  {
    question: " How do I list an item for sale?",
    answer: "Once you're logged in, click on the 'Sell' button, fill out the necessary details about your item or service, upload photos, and set your price. Your listing will be visible to the community once you publish it."
  },
  {
    question: "What payment methods are accepted?",
    answer: "Vintage Store accepts various payment methods, including credit/debit cards, PayPal, and other secure online payment options. The exact methods available may vary."
  },
  {
    question: "Is it safe to make payments on Vintage Store?",
    answer: "We use secure payment gateways to ensure that your financial information is protected. Always communicate through our platform and follow our safety guidelines for transactions."
  },
  {
    question: "How do you ensure the safety of the users?",
    answer: "We verify the identity of our members and monitor the platform for suspicious activity. Additionally, we provide safety tips and encourage members to report any concerns."
  },
  {
    question: "How can I report inappropriate behavior or listings?",
    answer: "You can report inappropriate behavior or listings by clicking the 'Report' button on the listing or member profile. Our team will review the report and take appropriate action."
  }
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full px-4 py-8 bg-yellow-100">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => handleToggle(index)}
              className="w-full text-left p-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            >
              <span className="font-medium">{faq.question}</span>
            </button>
            {activeIndex === index && (
              <div className="mt-2 p-4 bg-green-100 border border-t-0 border-gray-300 rounded-b-md">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
        <div className='faq-button-con'>
        <h3 className='text-2xl font-bold text-center mb-8'>Have a question? Well, we’ve got some answers.</h3>
        <a href="/help-center" className="inline-block bg-teal-400 text-black font-bold  text-xl py-2 px-4 rounded-full no-underline hover:bg-teal-500 transition ml-4">Go to Help Center</a>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
