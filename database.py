# /app/database.py
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# URL pour la base de données MySQL (XAMPP)
DATABASE_URL = "mysql+mysqlconnector://root:@localhost/tp_etudiants"

# Création du moteur SQLAlchemy
engine = create_engine(DATABASE_URL, connect_args={"charset": "utf8mb4"})

# Création du session maker
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base pour les modèles SQLAlchemy
Base = declarative_base()

# Fonction pour obtenir la session de la base de données
def get_db():
    db = SessionLocal()  # Création de la session
    try:
        yield db  # Renvoie la session à chaque fois qu'elle est utilisée
    finally:
        db.close()  # Ferme la session une fois qu'on en a fini
