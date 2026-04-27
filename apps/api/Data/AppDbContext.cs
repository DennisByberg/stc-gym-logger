using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Data;

public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
{
    // Represents the exercises table
    public DbSet<Exercise> Exercises => Set<Exercise>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Exercise>(entity =>
        {
            // Maps Exercise to the exercises table
            entity.ToTable("exercises");

            // Sets the primary key
            entity.HasKey(e => e.Id);

            // Maps Id to id
            entity.Property(e => e.Id)
                .HasColumnName("id");

            // Maps and configures name
            entity.Property(e => e.Name)
                .HasColumnName("name")
                .HasMaxLength(120)
                .IsRequired();

            // Makes name unique
            entity.HasIndex(e => e.Name)
                .IsUnique();

            // Maps Description to description
            entity.Property(e => e.Description)
                .HasColumnName("description");

            // Maps MuscleGroups to Postgres text[]
            entity.Property(e => e.MuscleGroups)
                .HasColumnName("muscle_groups")
                .HasColumnType("text[]")
                .IsRequired();

            // Maps and limits image_url
            entity.Property(e => e.ImageUrl)
                .HasColumnName("image_url")
                .HasMaxLength(500);

            // Maps CreatedAt to created_at
            entity.Property(e => e.CreatedAt)
                .HasColumnName("created_at")
                .IsRequired();

            // Maps UpdatedAt to updated_at
            entity.Property(e => e.UpdatedAt)
                .HasColumnName("updated_at")
                .IsRequired();
        });
    }
}
