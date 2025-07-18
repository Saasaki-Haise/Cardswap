import React, { useEffect } from "react";
import "./Profile.css";
import useFetch from "../hooks/useFetch";
import Rating from "../components/Rating";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const { isLoading, isError, result: user } = useFetch(
    "https://localhost:8000/api/profile",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
    }
  );

  // ⛔️ Redirection si non authentifié
  useEffect(() => {
    if (isError) {
      navigate("/login");
    }
  }, [isError, navigate]);

  if (isLoading) return <p>Chargement du profil...</p>;
  if (!user) return null;

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img src={user.avatar} alt="Avatar" className="avatar" />
        <div className="profile-info">
          <h2>{user.pseudo}</h2>
          <Rating />
          <p>Email: {user.email}</p>
        </div>
      </div>
      <hr />
      <div className="description">
        <p>{user.bio}</p>
      </div>
    </div>
  );
};

export default Profile;
