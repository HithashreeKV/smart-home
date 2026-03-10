import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ onLoginClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  const location = useLocation();
  const navigate = useNavigate();
  const isDashboard = location.pathname === '/dashboard';



  
  const navItems = ['home', 'about', 'testimonials', 'FAQ', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      
      if (!isDashboard) {
        const sections = navItems.map(id => document.getElementById(id));
        const scrollPos = window.scrollY + window.innerHeight / 2;

        sections.forEach(section => {
          if(section) {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            if (scrollPos >= top && scrollPos < top + height) {
              setActiveSection(section.id);
            }
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDashboard]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
       
        <a href="#home" onClick={(e) => { e.preventDefault(); isDashboard ? navigate('/') : scrollToSection('home'); }} className="flex items-center gap-3 text-left">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
          </div>
          <span className="text-lg font-bold hidden sm:block" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--fg)' }}>
            {isDashboard ? 'Dashboard' : 'Smart Home Energy'}
          </span>
        </a>

        
        {!isDashboard && (
          <div className={`nav-links flex items-center gap-1 ${menuOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <a 
                key={item}
                href={`#${item}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(item); }}
                className={`nav-link ${activeSection === item ? 'active' : ''}`}
                data-section={item}
              >
                {item.charAt(0).toUpperCase() + item.slice(1).replace('FAQ', 'FAQs')}
              </a>
            ))}
          </div>
        )}

        
        {isDashboard && (
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="dashboard-nav-link">Overview</a>
            <a href="#" className="dashboard-nav-link">Analytics</a>
            <a href="#" className="dashboard-nav-link">Settings</a>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center gap-3">
          {isDashboard ? (
            <>
              <button
                className="btn-secondary"
                onClick={() => {
                  if (isDashboard) {
                    window.dispatchEvent(new Event('openProfile'));
                  } else {
                    try { localStorage.setItem('openProfile', 'true'); } catch (e) { console.warn(e); }
                    navigate('/dashboard');
                  }
                }}
              >
                Profile
              </button>
              <button className="btn-primary" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <button className="btn-primary" onClick={onLoginClick}>
              Login / Signup
            </button>
          )}
          
          <button 
            className="mobile-menu-btn" 
            onClick={() => setMenuOpen(!menuOpen)} 
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;