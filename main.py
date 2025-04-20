from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from database import engine, Base, SessionLocal
import models  # pour que Base ait accès aux classes
from routers.etudiant import router as etudiant_router  # Assurez-vous que ce module existe
from routers.formation import router as formation_router  # Utiliser "formation" en minuscule
from routers.inscription import router as inscription_router  # Et inscription
from routers.departement import router as departement_router  # Assurez-vous que ce module existe
from fastapi.middleware.cors import CORSMiddleware
from schemas import EtudiantCreate 
from models import Etudiant
from models import Departement
from pydantic import BaseModel  # Importez BaseModel depuis Pydantic




app = FastAPI()

# Définir les CORS pour permettre l'accès à l'API depuis ton frontend (localhost:3000 pour React ou Vite)
origins = [
    "http://localhost:3000",  # Port par défaut de React
    "http://localhost:5173",  # Port par défaut de Vite
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Assurez-vous que c’est bien le port de Vite ou React
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Créer toutes les tables si elles n'existent pas déjà
Base.metadata.create_all(bind=engine)

# Fonction pour récupérer la session DB
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def read_root():
    return {"message": "Bienvenue sur l’API TP Étudiants 🎓"}

# Route pour obtenir les départements


# Route pour créer un étudiant
@app.post("/etudiants/")
def create_etudiant(etudiant: EtudiantCreate, db: Session = Depends(get_db)):
    print("DEBUG Payload reçu:", etudiant)

    # Vérifie que le département existe
    departement = db.query(Departement).filter(Departement.id == etudiant.departement_id).first()
    if not departement:
        raise HTTPException(status_code=400, detail="Département inexistant")

    new_etudiant = Etudiant(
        nom=etudiant.nom,
        email=etudiant.email,
        departement_id=etudiant.departement_id
    )
    db.add(new_etudiant)
    db.commit()
    db.refresh(new_etudiant)
    return new_etudiant


# Inclure les routes des autres modules (assurez-vous que ces fichiers existent)
app.include_router(etudiant_router)
app.include_router(formation_router)
app.include_router(inscription_router)
app.include_router(departement_router)
class Formation(BaseModel):
    nom: str
    
formations = []

@app.post("/formations/")
async def add_formation(formation: Formation):
    formations.append(formation)
    return {"message": "Formation ajoutée avec succès", "formation": formation}
