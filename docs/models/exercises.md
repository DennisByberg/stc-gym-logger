# Exercises

Reusable exercises that can be logged in workouts.

## Table

exercises

## Columns

| Column | Type | Required | Unique | Description |
| --- | --- | --- | --- | --- |
| id | integer identity primary key | yes | yes | Unique row identifier |
| name | varchar(120) | yes | yes | Exercise name, for example `Bench Press` |
| description | text | no | no | Short exercise description |
| muscle_groups | text[] | yes | no | Muscle groups used by the exercise |
| image_url | varchar(500) | no | no | Exercise image URL or path |
| created_at | timestamptz | yes | no | When the exercise was created |
| updated_at | timestamptz | yes | no | When the exercise was last updated |
