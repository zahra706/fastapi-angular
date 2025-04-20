from pydantic import BaseModel
from typing import Optional

class DepartmentSchema(BaseModel):
    id: Optional[str]
    name: str

class FormationSchema(BaseModel):
    id: Optional[str]
    title: str

class StudentSchema(BaseModel):
    id: Optional[str]
    name: str
    age: int
    grade: str
    department_id: str
    
class FormationOut(BaseModel):
    id: int
    titre: str
    description: str

    class Config:
        orm_mode = True

class EtudiantCreate(BaseModel):
     nom: str
     email: str
     departement_id: int

class FormationCreate(BaseModel):
    titre: str
    description: str
    
class DepartementOut(BaseModel):
    id: int
    nom: str

    class Config:
        orm_mode = True

class EtudiantOut(BaseModel):
    id: int
    nom: str
    email: str
    departement: DepartementOut
    class Config:
        orm_mode = True
        
class InscriptionOut(BaseModel):
    id: int
    etudiant_id: int
    formation_id: int
    date_inscription: str  # Utilise string pour la date si tu la passes en format ISO

    class Config:
        orm_mode = True
        
# schemas.py
from pydantic import BaseModel

class FormationCreate(BaseModel):
    titre: str
    description: str

