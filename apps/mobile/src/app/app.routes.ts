import { Routes } from "@angular/router";

export const routes: Routes = [
  // Shows the landing page.
  {
    path: "home",
    loadComponent: () => import("./home/home.page").then((m) => m.HomePage),
  },
  // Shows the exercises page.
  {
    path: "exercises",
    loadComponent: () =>
      import("./exercises/exercises.page").then((m) => m.ExercisesPage),
  },
  // Redirects the root URL to the landing page.
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
];
