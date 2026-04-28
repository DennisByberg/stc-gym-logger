import { Component, OnInit, inject, signal } from "@angular/core";
import {
  IonButton,
  IonContent,
  IonChip,
  IonItem,
  IonLabel,
  IonList,
  IonSpinner,
  IonText,
  IonThumbnail,
} from "@ionic/angular/standalone";
import { finalize } from "rxjs";

import { environment } from "../../environments/environment";
import { Exercise } from "./exercise.model";
import { ExercisesService } from "./exercises.service";

@Component({
  selector: "app-exercises",
  templateUrl: "exercises.page.html",
  styleUrls: ["exercises.page.scss"],
  imports: [
    IonButton,
    IonContent,
    IonChip,
    IonItem,
    IonLabel,
    IonList,
    IonSpinner,
    IonText,
    IonThumbnail,
  ],
})
export class ExercisesPage implements OnInit {
  private readonly exercisesService = inject(ExercisesService);
  private readonly fallbackImageUrl =
    "assets/logo/stc-gym-logger-transparent-icon.png";

  readonly exercises = signal<Exercise[]>([]);
  readonly isLoading = signal(true);
  readonly errorMessage = signal<string | null>(null);

  ngOnInit(): void {
    this.loadExercises();
  }

  loadExercises(): void {
    this.isLoading.set(true);
    this.errorMessage.set(null);

    this.exercisesService
      .getExercises()
      .pipe(finalize(() => this.isLoading.set(false)))
      .subscribe({
        next: (exercises) => this.exercises.set(exercises),
        error: () => {
          this.exercises.set([]);
          this.errorMessage.set("Could not load exercises.");
        },
      });
  }

  imageUrl(exercise: Exercise): string {
    const imageUrl = exercise.imageUrl?.trim();

    if (!imageUrl) {
      return this.fallbackImageUrl;
    }

    if (
      imageUrl.startsWith("http://") ||
      imageUrl.startsWith("https://") ||
      imageUrl.startsWith("assets/")
    ) {
      return imageUrl;
    }

    const apiOrigin = new URL(
      environment.apiBaseUrl,
      window.location.origin,
    ).origin;

    return imageUrl.startsWith("/")
      ? `${apiOrigin}${imageUrl}`
      : `${apiOrigin}/${imageUrl}`;
  }

  useFallbackImage(event: Event): void {
    const image = event.target as HTMLImageElement;
    image.src = this.fallbackImageUrl;
  }
}
