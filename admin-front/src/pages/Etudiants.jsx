import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Etudiants = () => {
  const [etudiants, setEtudiants] = useState([]);

  useEffect(() => {
    const fetchEtudiants = async () => {
      try {
        const response = await axios.get('http://localhost:8000/etudiants/');
        setEtudiants(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des étudiants', error);
      }
    };

    fetchEtudiants();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Liste des étudiants</h2>
      <Link to="/ajouter-etudiant">
        <button>➕ Ajouter un étudiant</button>
      </Link>
      <ul>
        {etudiants.map((etudiant) => (
          <li key={etudiant.id}>
            <strong>{etudiant.nom}</strong> – {etudiant.email} (Département ID : {etudiant.departement_id})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Etudiants;
