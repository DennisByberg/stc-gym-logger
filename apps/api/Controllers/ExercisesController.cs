using api.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ExercisesController(AppDbContext context) : ControllerBase
{
  [HttpGet]
  public async Task<IActionResult> GetAll()
  {
    var exercises = await context.Exercises.ToListAsync();

    return Ok(exercises);
  }
}
