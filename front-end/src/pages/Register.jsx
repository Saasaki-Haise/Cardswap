import React, { useState } from 'react';
import './Register.css'; // pour les styles

const RegisterForm = () => {
   const [formData, setFormData] = useState({
    email: "",
    name: "",
    lastname: "",
    password: "",
    confirmPassword: "",
    pseudo: "",
    avatar: "",
  });

  const { execute, loading, error } = useFetch();   // <-- récupère execute + états
  const [success, setSuccess] = useState("");

  const handleChange = ({ target: { name, value } }) =>
    setFormData((prev) => ({ ...prev, [name]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      return setSuccess(""), setError("Les mots de passe ne correspondent pas.");
    }

    try {
      await execute("POST", "https://localhost:8000/api/register", formData);
      setSuccess("Compte créé avec succès !");
    } catch {
      /* l’erreur est déjà dans `error` du hook */
    }
  };

  return (
    <div className="register-container">
    <form className="register-form" onSubmit={handleSubmit}>
      <h2>Créer un compte</h2>

      <div className="name-lastname">
        <input className="nl" name="name" type="text" placeholder="Prénom" value={formData.name} onChange={handleChange} required />
        <input className="nl" name="lastname" type="text" placeholder="Nom" value={formData.lastname} onChange={handleChange} required />
      </div>
      <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input name="password" type="password" placeholder="Mot de passe" value={formData.password} onChange={handleChange} required />
      <input name="confirmPassword" type="password" placeholder="Confirmez le mot de passe" value={formData.confirmPassword} onChange={handleChange} required />

      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}

      <button type="submit">S’inscrire</button>
    </form>
    </div>
  );
};

export default RegisterForm;
