from typing import List
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import SessionLocal
from models import Departement
import models
from schemas import DepartementOut


router = APIRouter()

# Dépendance pour obtenir la session DB
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Route pour obtenir les départements
@router.get("/departements/", response_model=List[DepartementOut])
def get_departements(db: Session = Depends(get_db)):
    return db.query(models.Departement).all()

