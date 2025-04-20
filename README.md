# 🎓 Gestion Étudiants - Projet Fullstack

Ce projet est une application web de gestion des étudiants, composée de trois parties : une interface d'administration (React), une interface pour les étudiants (Next.js), et un backend API (FastAPI + MySQL).

---

## 🔍 Aperçu du projet

### 🔐 Interface de Connexion (Admin)
![Login Admin](./screenshots/login-admin.png)

### 👩‍🏫 Formulaire d’ajout d'étudiant
![Ajout étudiant](./screenshots/add-etudiant.png)

### 🎓 Liste des formations
![Liste formations](./screenshots/formations-list.png)

---

## 🔧 Technologies utilisées

- **Frontend Admin** : React 17 + Vite
- **Frontend Étudiant** : Next.js 14
- **Backend** : FastAPI (Python 3.11)
- **Base de données** : MySQL
- **ORM** : SQLAlchemy
- **Authentification** : JWT
- **API Doc** : Swagger UI (automatique via FastAPI)

---

## 📂 Arborescence

```
projet/
├── frontend-admin/        # Admin - React
├── frontend-etudiant/     # Etudiants - Next.js
└── backend/               # API - FastAPI
```

---

## 🚀 Installation du projet

### 🫠 Backend (FastAPI)
```bash
cd backend
python -m venv env
source env/bin/activate  # ou .\env\Scripts\activate sur Windows
pip install -r requirements.txt
uvicorn main:app --reload
```

### 💻 Frontend Admin (React)
```bash
cd frontend-admin
npm install
npm run dev
```

### 👨‍🏫 Frontend Etudiant (Next.js)
```bash
cd frontend-etudiant
npm install
npm run dev
```

---

## 🔗 Principales routes API

- `GET /etudiants` → Liste des étudiants
- `POST /etudiants` → Ajouter un étudiant
- `GET /formations` → Liste des formations
- `POST /formations` → Créer une formation
- `GET /departements` → Liste des départements

---

## 📊 Fonctionnalités

### 🛠 Admin (React)
- Authentification JWT
- CRUD étudiants
- CRUD formations
- Tableau de bord avec statistiques

### 🎓 Étudiant (Next.js)
- Inscription
- Accès au profil
- Liste des formations

---

## 👤 Auteur

- [Zahra Chebbi DSI23](https://github.com/ton-github)

N'oublie pas d'ajouter tes captures dans un dossier `/screenshots/` à la racine du projet !

