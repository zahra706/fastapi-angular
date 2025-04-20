import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",  // Assurez-vous que c'est bien l'URL de votre API FastAPI
});

// Fonction pour inscrire un étudiant
export async function inscrireEtudiant(data: {
  nom: string;
  email: string;
  departement_id: number;
}) {
  try {
    const response = await fetch("http://localhost:8000/etudiants/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      // Gestion des erreurs HTTP
      const errorData = await response.json();

      // Debugging: afficher l'objet errorData dans la console
      console.error("Erreur de réponse:", errorData);

      // Vérifie que "detail" existe dans errorData avant de l'utiliser
      const errorMessage = errorData.detail || JSON.stringify(errorData);
      throw new Error(errorMessage);
    }

    return await response.json();  // Si tout va bien, retourner la réponse JSON
  } catch (error) {
    console.error("Erreur lors de l'inscription de l'étudiant :", error);
    throw error;  // Relancer l'erreur après l'avoir loggée
  }
}





// Fonction pour récupérer les départements
export async function getDepartements() {
  try {
    const response = await fetch("http://localhost:8000/departements/");
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || "Erreur inconnue");
    }

    return await response.json();  // Récupérer la liste des départements
  } catch (error) {
    console.error("Erreur lors de la récupération des départements :", error);
    throw error;
  }
}



// Fonction pour récupérer un étudiant par son email
// Fonction pour récupérer un étudiant par son email
export const getEtudiantByEmail = async (email: string) => {
  const res = await api.get(`/etudiants/email/${email}`);  // Correction avec backticks
  return res.data;
};

