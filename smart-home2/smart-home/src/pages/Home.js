import ScrollReveal from '../components/ScrollReveal';


const Home = ({ onLoginClick }) => {
  return (
    <section id="home" className="flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-sm font-medium text-emerald-400">Real-time Energy Monitoring</span>
              </div>
              <h1 className="section-title leading-tight">
                Smart Home<br />
                <span style={{ color: 'var(--accent)' }}>Energy Management</span><br />
                System
              </h1>
              <p className="section-subtitle mb-8 leading-relaxed">
                A modern solution designed to help users monitor, control, and optimize their household energy consumption. Track usage, identify high-consumption devices, and make informed decisions to reduce electricity waste.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="btn-primary text-base px-8 py-3" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
                  Learn More
                </button>
                {/* <button className="btn-secondary text-base px-8 py-3" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}> */}
                <button className="btn-secondary text-base px-8 py-3" onClick={onLoginClick}>
                  Get Started
                </button>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="hidden lg:block">
            <ScrollReveal delay="2">
              <div className="card p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-semibold text-lg">Energy Overview</h3>
                  <span className="text-sm text-emerald-400">Today</span>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold" style={{ color: 'var(--accent)' }}>24.5</div>
                    <div className="text-xs text-gray-400 mt-1">kWh Used</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold" style={{ color: 'var(--accent)' }}>12%</div>
                    <div className="text-xs text-gray-400 mt-1">Saved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold" style={{ color: 'var(--accent)' }}>4.2</div>
                    <div className="text-xs text-gray-400 mt-1">kW Peak</div>
                  </div>
                </div>
                <div className="energy-line mb-4"></div>
                <div className="space-y-3">
                  {[
                    { name: 'HVAC System', percent: 65 },
                    { name: 'Lighting', percent: 20 },
                    { name: 'Appliances', percent: 15 },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">{item.name}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 rounded-full bg-gray-700 overflow-hidden">
                          <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${item.percent}%` }}></div>
                        </div>
                        <span className="text-sm font-medium">{item.percent}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;