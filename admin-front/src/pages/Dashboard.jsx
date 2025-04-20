import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const [stats, setStats] = useState({
    etudiants: 0,
    formations: 0,
    departements: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [etudiantsRes, formationsRes, departementsRes] = await Promise.all([
          axios.get('http://localhost:8000/etudiants/'),
          axios.get('http://localhost:8000/formations/'),
          axios.get('http://localhost:8000/departements/'),
        ]);

        setStats({
          etudiants: etudiantsRes.data.length,
          formations: formationsRes.data.length,
          departements: departementsRes.data.length,
        });
      } catch (err) {
        console.error('Erreur chargement stats', err);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="p-8 bg-pink-500 min-h-screen text-white">
      <h1 className="text-4xl font-extrabold text-center mb-8">Tableau de bord</h1>
      
      

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <StatCard label="Étudiants" value={stats.etudiants} />
        
        <StatCard label="Formations" value={stats.formations} />
        
        <StatCard label="Départements" value={stats.departements} />
      </div>
      <div className="mb-6 text-center">
        <Link to="/etudiants" className="text-lg text-white mx-4 hover:underline">
          Étudiants 
        </Link>
        
        <Link to="/ajouter-etudiant" className="text-lg text-white mx-4 hover:underline">
          Ajouter un Étudiant  
        </Link>
        
        <Link to="/formations" className="text-lg text-white mx-4 hover:underline">
          Formations    
        </Link>
        
        <Link to="/formations/add" className="text-lg text-white mx-4 hover:underline">
          Ajouter une Formation  
        </Link>
      </div>
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="bg-pink-700 shadow-lg rounded-xl p-6 text-center transition-all transform hover:scale-105 hover:shadow-2xl">
      <h2 className="text-xl text-gray-300 font-semibold mb-4">{label}</h2>
      <p className="text-4xl font-bold text-white">{value}</p>
      <div className="mt-4">
        <button className="bg-blue-600 text-white py-2 px-6 rounded-full text-sm font-semibold hover:bg-blue-700 transition duration-200">
          Voir Plus
        </button>
      </div>
    </div>
  );
}
