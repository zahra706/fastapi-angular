from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from models import Formation
from database import SessionLocal
from schemas import FormationCreate

router = APIRouter()

# Dépendance pour obtenir la session DB
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Route pour obtenir toutes les formations
@router.get("/formations/")
def get_formations(db: Session = Depends(get_db)):
    return db.query(Formation).all()

# Route pour ajouter une formation
@router.post("/formations/")
def create_formation(formation: FormationCreate, db: Session = Depends(get_db)):
    nouvelle_formation = Formation(
        titre=formation.titre,
        description=formation.description
    )
    db.add(nouvelle_formation)
    db.commit()
    db.refresh(nouvelle_formation)
    return {"message": "Formation ajoutée avec succès", "formation": nouvelle_formation}
