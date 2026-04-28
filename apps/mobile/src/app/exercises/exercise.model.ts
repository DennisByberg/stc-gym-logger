export interface Exercise {
  id: number;
  name: string;
  description: string | null;
  muscleGroups: string[];
  imageUrl: string | null;
  createdAt: string;
  updatedAt: string;
}
