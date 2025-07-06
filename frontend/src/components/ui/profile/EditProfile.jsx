import React, { useEffect, useState } from 'react';
import './EditProfile.css';
import { getProfile, updateProfile } from '../../../services/profileServive';
import { toast } from 'react-toastify';


const EditProfile = ({ onClose }) => {
  const [form, setForm] = useState({
    name: '',
    lat: '',
    lng: '',
    discoveryRadius: ''
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await getProfile();
        const user = res.data.data;
        const [lng, lat] = user.location?.coordinates || [0, 0];

        setForm({
          name: user.name,
          lat,
          lng,
          discoveryRadius: user.discoveryRadius || 10
        });

        setLoading(false);
      } catch (err) {
        toast.error('Failed to load profile', err);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateProfile({
        name: form.name,
        location: {
          type: 'Point',
          coordinates: [parseFloat(form.lng), parseFloat(form.lat)]
        },
        discoveryRadius: parseInt(form.discoveryRadius)
      });
      toast.success('Profile updated successfully!');
      onClose(); 
    } catch (err) {
      toast.error('Failed to update profile', err);
    }
  };

  if (loading) return <div className="modal-overlay"><div className="edit-profile-popup">Loading...</div></div>;

  return (
    <div className="modal-overlay">
      <div className="edit-profile-popup">
        <button className="close-btn" onClick={onClose}>✖</button>
        <h2>Edit Your Profile</h2>
        <form className="edit-profile-form" onSubmit={handleUpdate}>
          <label>Name:
            <input type="text" name="name" value={form.name} onChange={handleChange} required />
          </label>
          <label>Latitude:
            <input type="number" name="lat" value={form.lat} onChange={handleChange} required step="any" />
          </label>
          <label>Longitude:
            <input type="number" name="lng" value={form.lng} onChange={handleChange} required step="any" />
          </label>
          <label>Discovery Radius (km):
            <input type="number" name="discoveryRadius" value={form.discoveryRadius} onChange={handleChange} required />
          </label>
          <button type="submit" className="update-btn">Update Profile</button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
