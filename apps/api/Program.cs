using api.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddOpenApi();

// Allows the local mobile frontend to call the API during development.
// TODO: Tighten this to specific origins before production.
builder.Services.AddCors(options =>
{
  options.AddPolicy("AllowAll", policy =>
  {
    policy
      .AllowAnyOrigin()
      .AllowAnyHeader()
      .AllowAnyMethod();
  });
});

// Connects EF Core to PostgreSQL using the configured connection string.
builder.Services.AddDbContext<AppDbContext>(options =>
  options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

var app = builder.Build();

// Docker Compose sets ApplyMigrations=true so local databases are prepared on startup.
if (app.Configuration.GetValue<bool>("ApplyMigrations"))
{
  using var scope = app.Services.CreateScope();
  var dbContext = scope.ServiceProvider.GetRequiredService<AppDbContext>();
  dbContext.Database.Migrate();
}

if (app.Environment.IsDevelopment())
{
  app.MapOpenApi();
}

app.UseCors("AllowAll");
app.MapControllers();
app.Run();
