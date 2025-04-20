from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from models import Inscription
from database import SessionLocal

router = APIRouter()

# Dépendance pour obtenir la session DB
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Route pour inscrire un étudiant à une formation
@router.post("/inscription/{etudiant_id}/{formation_id}")
def inscrire_etudiant(etudiant_id: int, formation_id: int, db: Session = Depends(get_db)):
    inscription = Inscription(etudiant_id=etudiant_id, formation_id=formation_id)
    db.add(inscription)
    db.commit()
    db.refresh(inscription)
    return inscription
