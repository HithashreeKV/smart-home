
import ScrollReveal from '../components/ScrollReveal';

const About = () => {
  const features = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent)' }}>
          <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"/>
        </svg>
      ),
      title: "Real-Time Monitoring",
      desc: "Track your energy consumption in real-time with detailed breakdowns by appliance, room, and time period."
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#14b8a6' }}>
          <path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>
        </svg>
      ),
      title: "Smart Analytics",
      desc: "Get intelligent insights and recommendations based on your usage patterns to optimize energy efficiency."
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#06b6d4' }}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: "Cost Savings",
      desc: "Reduce your electricity bills by up to 30% through informed decisions and automated energy-saving modes."
    }
  ];

  const stats = [
    { value: "50K+", label: "Active Users", color: "emerald" },
    { value: "$2.5M", label: "User Savings", color: "teal" },
    { value: "30%", label: "Avg. Reduction", color: "cyan" },
    { value: "24/7", label: "Monitoring", color: "sky" },
  ];

  return (
    <section id="about">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="section-title">About Us</h2>
            <p className="section-subtitle mx-auto">
              Empowering households to take control of their energy future
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((f, i) => (
            <ScrollReveal key={i} delay={i + 1}>
              <div className="card">
                <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-5">
                  {f.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
                <p className="text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay="4">
          <div className="card p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  We believe that sustainable living should be accessible to everyone. Our Smart Home Energy Management System empowers households to understand their energy footprint, make smarter choices, and contribute to a greener planet.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  By providing clear, actionable insights into your energy consumption, we help you identify waste, optimize usage patterns, and significantly reduce your environmental impact while saving money.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s, i) => (
                  <div key={i} className={`text-center p-6 rounded-xl bg-${s.color}-500/5 border border-${s.color}-500/20`}>
                    <div className="text-4xl font-bold mb-2" style={{ color: `var(--accent)` }}>{s.value}</div>
                    <div className="text-sm text-gray-400">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;