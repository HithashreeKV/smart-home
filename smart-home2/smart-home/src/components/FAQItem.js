import { useState } from 'react';

const FAQItem = ({ question, answer }) => {

  const [isOpen, setIsOpen] = useState(false);

  return (

    <div className={`faq-item ${isOpen ? 'open' : ''}`}>

      <button

        className="faq-question"

        onClick={() => setIsOpen(!isOpen)}

        aria-expanded={isOpen}

      >

        <span>{question}</span>

        <svg className="faq-icon" viewBox="0 0 24 24">

          <polyline points="6 9 12 15 18 9"/>

        </svg>

      </button>

      <div className="faq-answer">

        <div className="faq-answer-content">

          {answer}

        </div>

      </div>

    </div>

  );

};

export default FAQItem;