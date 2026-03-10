import React, { useEffect, useState } from 'react';
import { updateProfile } from '../api/authApi';

const ProfileModal = ({ isOpen, onClose, user, onSave }) => {
  const [form, setForm] = useState({ name: '', email: '', gender: '', interest: '' });

  useEffect(() => {
    if (user) setForm(user);
  }, [user]);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = '');
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const profileToSave = { name: form.name, email: form.email, gender: form.gender, interest: form.interest };
    // call backend update
    try {
      const data = await updateProfile(profileToSave);
      if (data) {
        profileToSave.name = data.name || profileToSave.name;
      }
    } catch (err) {
      console.warn('Profile update failed', err);
    }
    try {
      localStorage.setItem('userProfile', JSON.stringify(profileToSave));
    } catch (err) {
      console.warn('LocalStorage save failed', err);
    }
    if (onSave) onSave(profileToSave);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={`modal-overlay active`} onClick={(e) => e.target.classList.contains('modal-overlay') && onClose()}>
      <div className="modal">
        <h3 className="text-2xl font-bold mb-4">Profile</h3>
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
            <input name="name" value={form.name || ''} onChange={handleChange} className="input-field" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Email (read-only)</label>
            <input name="email" value={form.email || ''} readOnly className="input-field bg-gray-100" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Gender</label>
            <div className="flex gap-4 items-center">
              <label className="flex items-center gap-2"><input type="radio" name="gender" value="Male" checked={form.gender === 'Male'} onChange={handleChange} /> Male</label>
              <label className="flex items-center gap-2"><input type="radio" name="gender" value="Female" checked={form.gender === 'Female'} onChange={handleChange} /> Female</label>
              <label className="flex items-center gap-2"><input type="radio" name="gender" value="Other" checked={form.gender === 'Other'} onChange={handleChange} /> Other</label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Primary Interest</label>
            <select name="interest" value={form.interest || ''} onChange={handleChange} className="input-field">
              <option value="">Select Interest</option>
              <option>Energy Efficiency</option>
              <option>Security</option>
              <option>Comfort</option>
              <option>Convenience</option>
            </select>
          </div>

          <div className="flex justify-end gap-2">
            <button type="button" className="btn-secondary" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn-primary">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileModal;
