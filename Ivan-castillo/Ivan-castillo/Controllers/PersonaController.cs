using Microsoft.AspNetCore.Mvc;
using Ivan_castillo.Models;
using Microsoft.EntityFrameworkCore;

namespace Ivan_castillo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonaController : Controller
    {
        private readonly BaseContext _context;
        public PersonaController(BaseContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("Lista")]
        public async Task<IActionResult> Lisa()
        {
            List<PersonaItem> lista =  _context.PersonaItems.ToList();
            return StatusCode(StatusCodes.Status200OK, lista);

        }

        [HttpPost]
        [Route("Guardar")]
        public async Task<IActionResult> Guardar([FromBody] PersonaItem request)
        {
            await _context.PersonaItems.AddAsync(request);
            await _context.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }

        [HttpPut]
        [Route("Editar")]
        public async Task<IActionResult> Editar([FromBody] PersonaItem request)
        {
            _context.PersonaItems.Update(request);
            await _context.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }

        [HttpDelete]
        [Route("Eliminar/{id:int}")]
        public async Task<IActionResult> Eliminar(int id)
        {
            PersonaItem persona = _context.PersonaItems.Find(id);
            _context.PersonaItems.Remove(persona);
            await _context.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }
    }
}
