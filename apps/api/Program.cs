var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.MapGet("/", () => Results.Ok(new
{
    name = "STC Gym Logger API",
    status = "Running"
}))
.WithName("GetApiStatus");

app.MapGet("/health", () => Results.Ok(new
{
    status = "Healthy"
}))
.WithName("GetHealth");

app.Run();
