# 🎓 Projet de Gestion des Étudiants

Une application web complète pour gérer des étudiants, leurs formations et départements, développée avec **FastAPI** (backend) et **React + Vite** (frontend admin).

---

## 🚀 Fonctionnalités

- Ajout, modification et suppression des étudiants
- Création de formations avec description
- Gestion des départements
- Interface d’inscription et de profil pour les étudiants
- Interface admin pour gestion et statistiques

---

## 📸 Captures d’écran

### Interface d'ajout d'un étudiant

![Ajout étudiant](./screenshots/ajout-etudiant.png)

### Formations (interface admin)

![Formations](./screenshots/formations.png)

### Backend Swagger FastAPI

![Swagger UI](./screenshots/swagger-ui.png)

---

## 🧑‍💻 Technologies utilisées

### Backend (FastAPI)
- Python 3.10+
- FastAPI
- SQLAlchemy
- MySQL
- Pydantic
- CORS

### Frontend (Admin - React + Vite)
- React 18+
- Vite
- Axios
- React Router
- CSS custom

---

## 📦 Installation

### Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate  # ou venv\Scripts\activate sous Windows
pip install -r requirements.txt
uvicorn main:app --reload
