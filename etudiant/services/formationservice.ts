import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
});

// services/formationservice.ts
export async function getFormations() {
  const res = await fetch("http://localhost:8000/formations/");
  if (!res.ok) {
    throw new Error("Erreur lors du chargement des formations");
  }
  return await res.json();
}



export const inscrireFormation = async (etudiant_id: number, formation_id: number) => {
  const res = await api.post(`/inscription/${etudiant_id}/${formation_id}`);
  return res.data;
};
