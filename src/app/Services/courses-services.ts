import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icourse } from '../../Interface/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesServices {
  constructor(private http: HttpClient) {}

  // Loadcourses(): Observable<Icourse[]> {
  //   // return this.http.get<Icourse>('src/app/Data/courses.json');
  // }
}
