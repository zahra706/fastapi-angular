import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function FormationList() {
  const [formations, setFormations] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/formations')
      .then(response => {
        setFormations(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des formations', error);
      });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Liste des formations</h2>
      <ul className="space-y-2">
        {formations.length > 0 ? (
          formations.map(formation => (
            <li key={formation.id} className="p-3 bg-gray-100 rounded shadow">
              {/* Utilisation de 'titre' au lieu de 'nom' si nécessaire */}
              <h3 className="text-lg font-semibold text-gray-800">{formation.titre}</h3>
              <p className="text-sm text-gray-600">{formation.description}</p>
            </li>
          ))
        ) : (
          <p>Aucune formation disponible.</p>
        )}
      </ul>

      <Link
        to="/formations/add"
        className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        ➕ Ajouter une formation
      </Link>
    </div>
  );
}
