import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { environment } from "../../environments/environment";
import { Exercise } from "./exercise.model";

@Injectable({ providedIn: "root" })
export class ExercisesService {
  private readonly http = inject(HttpClient);

  getExercises(): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(`${environment.apiBaseUrl}/api/exercises`);
  }
}
