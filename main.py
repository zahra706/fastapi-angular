from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import uuid

app = FastAPI()

# Add CORS middleware to the FastAPI app
origins = [
    "http://localhost:4200",  # Angular frontend URL
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Allows only requests from localhost:4200
    allow_credentials=True,
    allow_methods=["*"],  # Allows all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allows all headers
)

# Pydantic model for a student
class Student(BaseModel):
    id: str  # Utilisation de string UUID
    name: str
    age: int
    grade: str

# Données fictives
students = [
    Student(id=str(uuid.uuid4()), name="Zahra", age=21, grade="A"),
    Student(id=str(uuid.uuid4()), name="Bob", age=21, grade="B"),
]

# Get all students
@app.get("/students", response_model=List[Student])
def get_students():
    return students

# Get a specific student by ID
@app.get("/students/{student_id}", response_model=Student)
def get_student(student_id: str):
    for student in students:
        if student.id == student_id:
            return student
    raise HTTPException(status_code=404, detail="Étudiant non trouvé")

# Add a new student
@app.post("/students", response_model=Student)
def add_student(student: Student):
    student.id = str(uuid.uuid4())  # Générer un ID unique
    students.append(student)
    return student

# Update an existing student
@app.put("/students/{student_id}", response_model=Student)
def update_student(student_id: str, updated_student: Student):
    for i, student in enumerate(students):
        if student.id == student_id:
            updated_student.id = student_id
            students[i] = updated_student
            return updated_student
    raise HTTPException(status_code=404, detail="Étudiant non trouvé")

# Delete a student
@app.delete("/students/{student_id}")
def delete_student(student_id: str):
    for i, student in enumerate(students):
        if student.id == student_id:
            del students[i]
            return {"message": "Étudiant supprimé"}
    raise HTTPException(status_code=404, detail="Étudiant non trouvé")
