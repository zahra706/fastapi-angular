import { useEffect, useState } from "react";

interface Formation {
  id: number;
  titre: string;
  description: string;
}

export default function FormationsPage() {
  const [formations, setFormations] = useState<Formation[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/formations/")
      .then((res) => res.json())
      .then((data) => setFormations(data))
      .catch((err) => console.error("Erreur chargement formations :", err));
  }, []);

  return (
    <div style={{ padding: "2rem", backgroundColor: "#f8f9fa" }}>
      <h2 style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}>
        Liste des Formations
      </h2>
      <ul style={{ listStyleType: "none", padding: "0" }}>
        {formations.map((f) => (
          <li
            key={f.id}
            style={{
              backgroundColor: "#fff",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <strong style={{ color: "#007bff" }}>{f.titre}</strong> - {f.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
