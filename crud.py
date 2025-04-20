# /app/crud.py
from sqlalchemy.orm import Session
from . import models

def get_departements(db: Session):
    return db.query(models.Departement).all()
