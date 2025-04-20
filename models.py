from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from database import Base
from pydantic import BaseModel




etudiants = []
formations = [
    {"id": 1, "titre": "Formation React", "description": "Apprendre React"},
    {"id": 2, "titre": "Formation Node.js", "description": "Apprendre Node.js"}
]
# Modèle pour la table Departement
from sqlalchemy import Column, Integer, String
from database import Base  # Assure-toi que "Base" provient de ta connexion à la base

class Departement(Base):
    __tablename__ = 'departements'  # Nom de ta table

    id = Column(Integer, primary_key=True, index=True)
    nom = Column(String, index=True)  # Assure-toi que la colonne "nom" existe
    def __repr__(self):
        return f"<Departement(id={self.id}, nom={self.nom})>"
    etudiants = relationship("Etudiant", back_populates="departement")
    inscriptions = relationship("Inscription", back_populates="departement")  # Relation vers Inscription


# Modèle pour la table Formation
class Formation(Base):
    __tablename__ = "formations"

    id = Column(Integer, primary_key=True, index=True)
    titre = Column(String, index=True)
    description = Column(String)

    inscriptions = relationship("Inscription", back_populates="formation")

# Modèle pour la table Etudiant
class Etudiant(Base):
    __tablename__ = "etudiants"

    id = Column(Integer, primary_key=True, index=True)
    nom = Column(String)
    email = Column(String, unique=True, index=True)
    departement_id = Column(Integer, ForeignKey("departements.id"))

    departement = relationship("Departement", back_populates="etudiants")
    inscriptions = relationship("Inscription", back_populates="etudiant")
# Modèle pour la table Inscription (relation N:N entre étudiants et formations)
class Inscription(Base):
    __tablename__ = "inscriptions"

    id = Column(Integer, primary_key=True, index=True)
    etudiant_id = Column(Integer, ForeignKey("etudiants.id"))
    formation_id = Column(Integer, ForeignKey("formations.id"))
    departement_id = Column(Integer, ForeignKey("departements.id"))  # Ajout de la clé étrangère vers Departement
    date_inscription = Column(DateTime)

    etudiant = relationship("Etudiant", back_populates="inscriptions")
    formation = relationship("Formation", back_populates="inscriptions")
    departement = relationship("Departement", back_populates="inscriptions")


