import ScrollReveal from '../components/ScrollReveal';

const Testimonials = () => {
  const testimonials = [
    {
      text: "This system helped me understand my electricity usage and reduce my monthly bill significantly.",
      name: "James Davidson",
      role: "Homeowner, Texas",
      initials: "JD",
      gradient: "from-emerald-400 to-teal-500"
    },
    {
      text: "The dashboard is easy to use and gives clear insights into energy consumption.",
      name: "Sarah Mitchell",
      role: "Environmental Scientist, California",
      initials: "SM",
      gradient: "from-teal-400 to-cyan-500"
    },
    {
      text: "I can now track my appliance usage and avoid unnecessary power waste.",
      name: "Robert Kim",
      role: "Tech Professional, Washington",
      initials: "RK",
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      text: "A very useful platform for anyone who wants to save energy and money.",
      name: "Emily Parker",
      role: "Sustainability Advocate, New York",
      initials: "EP",
      gradient: "from-blue-400 to-indigo-500"
    }
  ];

  return (
    <section id="testimonials">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="section-title">Testimonials</h2>
            <p className="section-subtitle mx-auto">
              Hear from our satisfied users about their energy-saving journey
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i + 1}>
              <div className="card testimonial-card">
                <p className="text-lg mb-6 relative z-10 leading-relaxed pt-8">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center font-bold text-white`}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-sm text-gray-400">{t.role}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;