import React, { useState } from 'react';
import '../CSS/FAQs';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What is the best way to cook pasta?',
      answer:
        'To cook pasta perfectly, boil it in a large pot of salted water, stir occasionally, and taste it for the desired texture. Drain and serve immediately.',
    },
    {
      question: 'How do I store fresh herbs?',
      answer:
        'Wrap fresh herbs in a damp paper towel, place them in a plastic bag, and store them in the refrigerator to keep them fresh longer.',
    },
    {
      question: 'What are some essential spices for beginners?',
      answer:
        'Essential spices include salt, pepper, paprika, cumin, garlic powder, onion powder, cinnamon, and oregano.',
    },
    {
      question: 'How can I prevent food from sticking to a pan?',
      answer:
        'Ensure the pan is properly heated before adding oil or butter, and don’t overcrowd the pan while cooking.',
    },
    {
      question: 'What is the best oil for deep frying?',
      answer:
        'Neutral oils like vegetable oil, canola oil, or peanut oil are ideal for deep frying because of their high smoke points.',
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faqs-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faqs">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              className={`faq-question ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;