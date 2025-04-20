import { useEffect, useState } from "react";
import { inscrireEtudiant, getDepartements } from "../services/etudiantservice";

interface Departement {
  id: number;
  nom: string;
}

export default function InscriptionPage() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [departementId, setDepartementId] = useState<number | null>(null);
  const [departements, setDepartements] = useState<Departement[]>([]);

  useEffect(() => {
    const fetchDepartements = async () => {
      try {
        const data = await getDepartements(); // <- data est un tableau [{id, nom}, ...]
        setDepartements(data);
        if (data.length > 0) {
          setDepartementId(data[0].id); // définir le premier département par défaut
        }
      } catch (error) {
        console.error("Erreur lors du chargement des départements", error);
      }
    };

    fetchDepartements();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!departementId) {
      alert("Veuillez sélectionner un département.");
      return;
    }

    try {
      await inscrireEtudiant({ nom, email, departement_id: departementId });
      alert("Inscription réussie !");
      setNom("");
      setEmail("");
      setDepartementId(departements[0]?.id || null);
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
      alert("Erreur lors de l'inscription !");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        backgroundColor: "#f9f9f9",
        padding: "2rem",
        borderRadius: "8px",
        maxWidth: "500px",
        margin: "3rem auto",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#333",
          fontSize: "2rem",
          marginBottom: "1rem",
        }}
      >
        Inscription Étudiant
      </h2>

      <label
        style={{
          display: "block",
          marginBottom: "0.5rem",
          fontSize: "1.1rem",
          color: "#555",
        }}
      >
        Nom :
        <input
          placeholder="Nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "0.8rem",
            margin: "0.5rem 0 1rem 0",
            borderRadius: "6px",
            border: "1px solid #ddd",
            fontSize: "1rem",
          }}
        />
      </label>

      <label
        style={{
          display: "block",
          marginBottom: "0.5rem",
          fontSize: "1.1rem",
          color: "#555",
        }}
      >
        Email :
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "0.8rem",
            margin: "0.5rem 0 1rem 0",
            borderRadius: "6px",
            border: "1px solid #ddd",
            fontSize: "1rem",
          }}
        />
      </label>

      <label
        style={{
          display: "block",
          marginBottom: "0.5rem",
          fontSize: "1.1rem",
          color: "#555",
        }}
      >
        Département :
        <select
          value={departementId ?? ""}
          onChange={(e) => setDepartementId(parseInt(e.target.value))}
          required
          style={{
            width: "100%",
            padding: "0.8rem",
            margin: "0.5rem 0 1rem 0",
            borderRadius: "6px",
            border: "1px solid #ddd",
            fontSize: "1rem",
          }}
        >
          <option value="" disabled>
            Sélectionnez un département
          </option>
          {departements.map((dept) => (
            <option key={dept.id} value={dept.id}>
              {dept.nom}
            </option>
          ))}
        </select>
      </label>

      <button
        type="submit"
        style={{
          backgroundColor: "#007bff",
          color: "white",
          padding: "0.8rem 1.5rem",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          width: "100%",
          fontSize: "1.1rem",
          transition: "background-color 0.3s",
        }}
      >
        S'inscrire
      </button>
    </form>
  );
}
