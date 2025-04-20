import { useEffect, useState } from "react";
import { getEtudiantByEmail } from "../services/etudiantservice";

export default function ProfilPage() {
  const [etudiant, setEtudiant] = useState<any>(null);

  useEffect(() => {
    const email = prompt("Entrez votre email pour voir votre profil :");
    if (email) {
      getEtudiantByEmail(email).then(setEtudiant).catch(() => alert("Étudiant non trouvé"));
    }
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#f4f4f9",
        padding: "3rem 1.5rem",
        borderRadius: "8px",
        maxWidth: "600px",
        margin: "3rem auto",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          color: "#333",
          fontWeight: "bold",
          marginBottom: "2rem",
        }}
      >
        Profil Étudiant
      </h2>
      {etudiant ? (
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "2rem",
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            textAlign: "left",
          }}
        >
          <p
            style={{
              fontSize: "1.1rem",
              marginBottom: "1rem",
              color: "#555",
            }}
          >
            <strong>Nom :</strong> {etudiant.nom}
          </p>
          <p
            style={{
              fontSize: "1.1rem",
              marginBottom: "1rem",
              color: "#555",
            }}
          >
            <strong>Email :</strong> {etudiant.email}
          </p>
          <p
            style={{
              fontSize: "1.1rem",
              marginBottom: "1rem",
              color: "#555",
            }}
          >
            <strong>Département :</strong> {etudiant.departement.nom}
          </p>
        </div>
      ) : (
        <p
          style={{
            fontSize: "1.2rem",
            fontStyle: "italic",
            color: "#777",
          }}
        >
          Chargement...
        </p>
      )}
    </div>
  );
}
