
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileModal from '../components/ProfileModal';
import { getProfile } from '../api/authApi';

const Dashboard = () => {
  const navigate = useNavigate();
  const [profileOpen, setProfileOpen] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  
  // Mock data for the dashboard
  const [stats] = useState([
    { label: 'Current Usage', value: '3.4 kW', change: '-12%', icon: '⚡' },
    { label: 'Today\'s Cost', value: '$4.20', change: '-8%', icon: '💰' },
    { label: 'Solar Generated', value: '12.3 kWh', change: '+24%', icon: '☀️' },
    { label: 'Active Devices', value: '8', change: 'Online', icon: '🔌' },
  ]);

  const [devices, setDevices] = useState([
    { id: 1, name: 'Smart Thermostat', location: 'Living Room', status: true, power: '1.2 kW' },
    { id: 2, name: 'HVAC System', location: 'Whole Home', status: true, power: '1.8 kW' },
    { id: 3, name: 'Smart Lights', location: 'Bedroom', status: false, power: '0 W' },
    { id: 4, name: 'Electric Vehicle', location: 'Garage', status: true, power: '0.4 kW' },
    { id: 5, name: 'Washing Machine', location: 'Utility', status: false, power: '0 W' },
  ]);

  const toggleDevice = (id) => {
    setDevices(devices.map(d => 
      d.id === id ? { ...d, status: !d.status } : d
    ));
  };

  // Chart data (mock)
  const usageData = [65, 40, 80, 55, 90, 45, 70];

  useEffect(() => {
    const checkProfile = async () => {
      try {
        const raw = localStorage.getItem('userProfile');
        if (raw) {
          let p = JSON.parse(raw);
          // fetch latest from backend
          try {
            const fresh = await getProfile(p.email);
            if (fresh && fresh.email) {
              p = fresh;
              p.password = null;
              localStorage.setItem('userProfile', JSON.stringify(p));
            }
          } catch (err) {
            console.warn('failed to refresh profile', err);
          }
          setUserProfile(p);
          const el = document.getElementById('dashboard-user-name');
          if (el) el.textContent = p.name || '';
        }
        const openFlag = localStorage.getItem('openProfile');
        if (openFlag === 'true') {
          setProfileOpen(true);
          localStorage.removeItem('openProfile');
        }
      } catch (e) {
        console.warn('Failed to load userProfile', e);
      }
    };

    checkProfile();

    const listener = () => setProfileOpen(true);
    window.addEventListener('openProfile', listener);
    return () => window.removeEventListener('openProfile', listener);
  }, []);

  return (
    <>
    <section className="dashboard-section">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Energy Dashboard</h1>
            <p className="text-gray-400">Welcome back! Here's your home energy overview.</p>
          </div>
        </div>


        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="dashboard-card">
              <div className="flex justify-between items-start mb-4">
                <span className="text-2xl">{stat.icon}</span>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                  stat.change.includes('-') ? 'bg-emerald-500/10 text-emerald-400' : 
                  stat.change.includes('+') ? 'bg-sky-500/10 text-sky-400' : 
                  'bg-gray-500/10 text-gray-400'
                }`}>
                  {stat.change}
                </span>
              </div>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          
          {/* Usage Chart Section */}
          <div className="lg:col-span-2 dashboard-card">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold">Energy Usage (Last 7 Days)</h3>
              <select className="bg-white border border-gray-200 rounded-lg px-3 py-1 text-sm text-gray-700">
                <option>This Week</option>
                <option>Last Week</option>
                <option>This Month</option>
              </select>
            </div>
            
            {/* Simple CSS Bar Chart */}
            <div className="flex items-end justify-between h-48 gap-4 px-4">
              {usageData.map((value, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full bg-gray-100 rounded-t relative" style={{ height: '100%' }}>
                    <div 
                      className="chart-bar absolute bottom-0 w-full"
                      style={{ height: `${value}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-600">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions / Tips */}
          <div className="dashboard-card">
            <h3 className="text-lg font-semibold mb-4">Energy Saving Tips</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 bg-emerald-500/5 rounded-lg border border-emerald-500/20">
                <svg className="w-5 h-5 text-emerald-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-emerald-400">Peak Hours Alert</p>
                  <p className="text-xs text-gray-400 mt-1">Reduce usage between 6-9 PM to save up to 15% on bills.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-sky-500/5 rounded-lg border border-sky-500/20">
                <svg className="w-5 h-5 text-sky-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-sky-400">Solar Optimization</p>
                  <p className="text-xs text-gray-400 mt-1">Run heavy appliances during peak sun hours (10 AM - 2 PM).</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-amber-500/5 rounded-lg border border-amber-500/20">
                <svg className="w-5 h-5 text-amber-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-amber-400">Smart Suggestion</p>
                  <p className="text-xs text-gray-400 mt-1">Your AC usage is 20% higher than average. Consider adjusting thermostat.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Devices Grid */}
        <div className="mt-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">Connected Devices</h3>
            <button className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors">View All</button>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {devices.map((device) => (
              <div key={device.id} className="dashboard-card flex justify-between items-center">
                <div>
                  <h4 className="font-medium mb-1">{device.name}</h4>
                  <p className="text-xs text-gray-500">{device.location}</p>
                  <p className={`text-sm mt-2 ${device.status ? 'text-emerald-400' : 'text-gray-500'}`}>
                    {device.power}
                  </p>
                </div>
                <div 
                  className={`device-toggle ${device.status ? 'active' : ''}`}
                  onClick={() => toggleDevice(device.id)}
                  role="switch"
                  aria-checked={device.status}
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && toggleDevice(device.id)}
                ></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
      {profileOpen && (
        <ProfileModal
          isOpen={profileOpen}
          onClose={() => setProfileOpen(false)}
          user={userProfile}
          onSave={(p) => {
            setUserProfile(p);
            const el = document.getElementById('dashboard-user-name'); if (el) el.textContent = p.name || '';
            const navEl = document.getElementById('nav-user-name'); if (navEl) navEl.textContent = p.name || '';
          }}
        />
      )}
    </>
  );
};

export default Dashboard;