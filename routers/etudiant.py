from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from models import Etudiant
from database import SessionLocal
from schemas import EtudiantCreate
from schemas import EtudiantOut
from sqlalchemy.orm import joinedload


router = APIRouter()

# Dépendance pour obtenir la session DB
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Route pour obtenir tous les étudiants
@router.get("/etudiants/")
def get_etudiants(db: Session = Depends(get_db)):
    return db.query(Etudiant).all()

# Route pour obtenir un étudiant par email
@router.get("/etudiants/email/{email}", response_model=EtudiantOut)
def get_etudiant_by_email(email: str, db: Session = Depends(get_db)):
    etudiant = db.query(Etudiant).filter(Etudiant.email == email).first()
    if not etudiant:
        raise HTTPException(status_code=404, detail="Étudiant non trouvé")
    return etudiant


# Route pour ajouter un étudiant
@router.post("/etudiants/")
def create_etudiant(etudiant: EtudiantCreate, db: Session = Depends(get_db)):
    db_etudiant = Etudiant(**etudiant.dict())
    db.add(db_etudiant)
    db.commit()
    db.refresh(db_etudiant)
    return db_etudiant

