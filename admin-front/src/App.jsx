import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Etudiants from './pages/Etudiants';
import AddEtudiant from './pages/AddEtudiant';
import FormationsList from './pages/FormationsList';
import AddFormation from './pages/AddFormation';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Dashboard />} />
        <Route path="/etudiants" element={<Etudiants />} />
        <Route path="/ajouter-etudiant" element={<AddEtudiant />} />
        <Route path="/formations" element={<FormationsList />} />
        <Route path="/formations/add" element={<AddFormation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
