import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddFormation = () => {
  const [titre, setTitre] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formation = {
      titre,
      description,
    };

    try {
      const response = await axios.post('http://localhost:8000/formations/', formation);
      console.log('Formation ajoutée:', response.data);
      navigate('/formations');
    } catch (error) {
      console.error('Erreur lors de l\'ajout de la formation', error);
      alert('Erreur lors de l\'ajout.');
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
      <h2 style={{ textAlign: 'center', color: '#2c3e50' }}>Ajouter une formation</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', color: '#34495e' }}>Titre:</label>
          <input
            type="text"
            value={titre}
            onChange={(e) => setTitre(e.target.value)}
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
          <label style={{ display: 'block', marginBottom: '5px', color: '#34495e' }}>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows="4"
            style={{
              width: '100%',
              padding: '0.5rem',
              borderRadius: '5px',
              border: '1px solid #ccc',
              resize: 'vertical',
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

export default AddFormation;
