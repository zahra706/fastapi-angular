import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddEtudiant = () => {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [departementId, setDepartementId] = useState(1);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const etudiant = {
      nom,
      email,
      departement_id: departementId,
    };

    try {
      const response = await axios.post('http://localhost:8000/etudiants/', etudiant);
      console.log('Étudiant ajouté:', response.data);
      navigate('/etudiants');
    } catch (error) {
      console.error('Erreur lors de l\'ajout', error);
      alert('Erreur lors de l\'ajout de l\'étudiant.');
    }
  };

  return (
    <div style={{
      padding: '2rem',
      maxWidth: '500px',
      margin: '2rem auto',
      backgroundColor: '#f9f9f9',
      borderRadius: '12px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      fontFamily: 'Arial, sans-serif',
    }}>
      <h2 style={{ textAlign: 'center', color: '#2c3e50' }}>Ajouter un étudiant</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', color: '#34495e' }}>Nom:</label>
          <input
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '0.5rem',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', color: '#34495e' }}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '0.5rem',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', color: '#34495e' }}>Département ID:</label>
          <input
            type="number"
            value={departementId}
            onChange={(e) => setDepartementId(parseInt(e.target.value))}
            required
            style={{
              width: '100%',
              padding: '0.5rem',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: '0.75rem',
            backgroundColor: '#3498db',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default AddEtudiant;
