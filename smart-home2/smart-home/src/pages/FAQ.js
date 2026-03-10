import ScrollReveal from '../components/ScrollReveal';
import FAQItem from '../components/FAQItem';
import { faqData } from '../data/faqData';

const FAQ = () => {
  return (
    <section id="FAQ">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle mx-auto">
              Find answers to common questions about our energy management system
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay="1">
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FAQ;