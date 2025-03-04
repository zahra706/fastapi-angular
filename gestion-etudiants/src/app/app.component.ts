import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule], // Ajout de HttpClientModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  students: { id: string; name: string; age: number; grade: string }[] = [];
  newStudent: { name: string; age: number | null; grade: string } = { name: '', age: null, grade: '' };

  constructor(private http: HttpClient) {
    this.getStudents();
  }

  getStudents() {
    this.http.get<any[]>('http://127.0.0.1:8000/students').subscribe(data => {
      this.students = data;
    });
  }

  addStudent() {
    if (this.newStudent.name && this.newStudent.age && this.newStudent.grade) {
      this.http.post<{ id: string; name: string; age: number; grade: string }>(
        'http://127.0.0.1:8000/students', 
        this.newStudent
      ).subscribe((data) => {
        this.students.push(data);
        this.newStudent = { name: '', age: null, grade: '' };
      });
    }
  }

  deleteStudent(id: string) {
    this.http.delete(`http://127.0.0.1:8000/students/${id}`).subscribe(() => {
      this.students = this.students.filter(student => student.id !== id);
    });
  }
}
