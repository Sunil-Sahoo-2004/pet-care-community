import React, { useEffect, useState } from "react";
import { assets } from "../../../assets/assets";
import { getProfile, switchUserRole } from "../../../services/profileServive";
import { toast } from "react-toastify";
import EditProfile from "./EditProfile";

const UserDetails = () => {
  const [user, setUser] = useState(null);
  const [showEdit, setShowEdit] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getProfile();
        setUser(response.data.data);
      } catch (error) {
        toast.error("Failed to fetch user profile", error);
      }
    };
    fetchProfile();
  }, []);

  const formatCoordinates = (location) => {
    if (!location || !location.coordinates) return "Unknown";
    const [lng, lat] = location.coordinates;
    return `📍 ${lat.toFixed(2)}, ${lng.toFixed(2)}`;
  };

  const handleSwitchRole = async () => {
    try {
      const res = await switchUserRole();
      toast.success(res.data.message);
      setUser(res.data.data);
    } catch (err) {
      toast.error("Failed to switch role", err);
    }
  };

  return user ? (
    <>
      <div className="user-personal-details">
        <div className="user-personal-detail">
          <div className="user-image">
            <img src={assets.user} alt="Profile" />
          </div>
          <div className="user-detail">
            <h2 className="user-name">{user.name}</h2>
            <p className="user-email-id">{user.email}</p>
            <div className="more-details">
              <div className="address">
                <p>{formatCoordinates(user.location)}</p>
              </div>
              <div className="joining-date">
                <p>
                  🗓️ Member since{" "}
                  {new Date(user.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div className="user-role">
                <p>
                  👤 Role:{" "}
                  {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="edit-profile">
          <button className="edit-btn" onClick={handleSwitchRole}>
            {user.role === 'business' ? 'Switch to User' : 'Switch to Business'}
          </button>
          <button className="edit-btn" onClick={() => setShowEdit(true)}>
            Edit Profile
          </button>
        </div>
      </div>

      {showEdit && <EditProfile onClose={() => setShowEdit(false)} />}
    </>
  ) : (
    <p>Loading...</p>
  );
};

export default UserDetails;
