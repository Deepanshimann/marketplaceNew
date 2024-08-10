import React, { useState } from 'react';
import './HelpCenter.css'

const faqs = [
  {
    category: "Orders",
    items: [
      {
        question: "Where is my Vintage Store order?",
        answer: "You can track your order status by logging into your account and visiting the 'Orders' section. You will also receive email updates as your order progresses."
      },
      {
        question: "Can I cancel or change my Vintage Store order?",
        answer: "You can cancel or change your order within 24 hours of placing it. Visit your account's 'Orders' section to make changes or contact our customer support for assistance."
      },
      {
        question: "Does Vintage Store offer a senior discount?",
        answer: "Currently, we do not offer specific senior discounts, but keep an eye on our promotions page for special offers and discounts."
      },
    ]
  },
  {
    category: "Payment",
    items: [
      {
        question: "What are Vintage Store's payment options?",
        answer: "We accept various payment methods including credit/debit cards, PayPal, and other secure payment options. Detailed options are available at checkout."
      },
      {
        question: "How do I check my Vintage Store Gift Card balance?",
        answer: "You can check your gift card balance by logging into your account and visiting the 'Gift Cards' section, or by entering your gift card number on our gift card balance page."
      },
    ]
  },
  {
    category: "Delivery",
    items: [
      {
        question: "How do I get free delivery on Vintage Store orders?",
        answer: "Vintage Store offers free delivery on select items and promotions. Check the product details or our promotional offers page for more information."
      },
      {
        question: "What are Vintage Store's delivery options?",
        answer: "We offer standard and express delivery options. Delivery times and costs vary depending on your location and the seller. Detailed information is provided at checkout."
      }
    ]
  },
  {
    category: "Product Info",
    items: [
      {
        question: "How do I get Vintage Store’s newest arrivals?",
        answer: "New arrivals are updated regularly. Visit our 'New Arrivals' section to see the latest items, or sign up for our newsletter for updates."
      },
      {
        question: "How do I find the right size and fit?",
        answer: "Each product listing includes detailed sizing information. Refer to the size chart provided in the listing or contact the seller directly for more information."
      },
      {
        question: "What is Vintage Store’s personalization policy?",
        answer: "Some items may be eligible for personalization. Check the product details for personalization options and guidelines."
      },
      {
        question: "What is Vintage Store’s personalization/customization policy?",
        answer: "Some items may be eligible for personalization. Check the product details for personalization options and guidelines."
      }
    ]
  },
  {
    category: "Returns",
    items: [
      {
        question: "What is Vintage Store's returns policy?",
        answer: "Our returns policy allows you to return items within 30 days of purchase. Items must be in their original condition. Some exclusions apply."
      },
      {
        question: "How do I return my Vintage Store order?",
        answer: "To return an item, visit our returns page and follow the instructions. You'll need your order number and the email address used for the purchase."
      },
      {
        question: "Where is my refund?",
        answer: "Refunds are processed within 5-7 business days after we receive your returned item. You will be notified via email once your refund has been processed."
      }
    ]
  },
  {
    category: "General",
    items: [
      {
        question: "How do I sign up for Vintage Store?",
        answer: "To sign up, click on the 'Sign Up' button on our homepage and follow the instructions to create an account. You'll need to provide some basic information like your name, email address, and a password."
      },
      {
        question: "Is there a membership fee?",
        answer: "There is no membership fee to join Vintage Store. However, certain premium features may have associated costs, which will be clearly outlined on our website."
      },
      {
        question: "How do I list an item or service for sale?",
        answer: "Once you're logged in, click on the 'Sell' button, fill out the necessary details about your vintage item or service, upload photos, and set your price. Your listing will be visible to the community once you publish it."
      },
      {
        question: "How do I buy an item or service?",
        answer: "Browse the listings, and when you find something you like, click on the 'Buy' button. Follow the prompts to complete your purchase, including communicating with the seller to arrange payment and delivery."
      },
      {
        question: "What should I do if I encounter a problem with a transaction?",
        answer: "If you have an issue with a transaction, contact the seller first to try and resolve it. If you need further assistance, you can reach out to our customer support team through the 'Contact Us' page."
      },
      {
        question: "Are there any rules for using Vintage Store?",
        answer: "Yes, all members must adhere to our community guidelines, which include treating others with respect, listing items honestly, and following through on agreed transactions. Violations of these rules can result in account suspension or termination."
      },
      {
        question: "How can I report inappropriate behavior or listings?",
        answer: "You can report inappropriate behavior or listings by clicking the 'Report' button on the listing or member profile. Our team will review the report and take appropriate action."
      },
      {
        question: "How can I contact customer support?",
        answer: "You can contact our customer support team by visiting the 'Contact Us' page on our website. We're here to help with any questions or issues you may have."
      }
    ]
  }
];

const Helpcenter = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleToggle = (category, index) => {
    if (activeCategory === category && activeIndex === index) {
      setActiveIndex(null);
      setActiveCategory(null);
    } else {
      setActiveIndex(index);
      setActiveCategory(category);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  return (
    <div className="w-full px-4 py-28 bg-yellow-100">
      <h2 className="text-3xl font-bold text-center mb-4">Help Center</h2>
      <p className="text-center text-xl mb-8">Find answers to our most frequently asked questions below. If you need further assistance, please contact our support team.</p>
      <div className="max-w-3xl mx-auto mb-8">
        <h3 className="text-2xl font-semibold mb-2">Search your Query</h3>
        <input
          type="text"
          placeholder="Search FAQs..."
          className="w-full p-4 mb-4 border border-gray-300 rounded-md"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faqCategory, catIndex) => (
          <div key={catIndex} className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">{faqCategory.category}</h3>
            {faqCategory.items
              .filter(faq => faq.question.toLowerCase().includes(searchTerm) || faq.answer.toLowerCase().includes(searchTerm))
              .map((faq, index) => (
                <div key={index} className="mb-4">
                  <button
                    onClick={() => handleToggle(faqCategory.category, index)}
                    className="w-full text-left p-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                  >
                    <span className="text-xl">{faq.question}</span>
                  </button>
                  {activeCategory === faqCategory.category && activeIndex === index && (
                    <div className="mt-2 p-4 bg-green-100 border border-t-0 border-gray-300 text-xl rounded-b-md">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}     
          </div>
        ))}
          <div className="text-center mt-20">
                <h3 className='text-2xl font-bold text-center '>Click on button below to contact us.</h3>
  <a href="/contact-us" className="inline-block bg-teal-400 text-black font-bold text-xl py-2 px-4 rounded-full no-underline hover:bg-teal-500 transition mt-5 mb-20">Contact Us</a>
</div>

      </div>
    </div>
  );
};

export default Helpcenter;
