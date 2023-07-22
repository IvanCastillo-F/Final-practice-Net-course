using System;
using System.Collections.Generic;

namespace Ivan_castillo.Models;

public partial class PersonaItem
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public string? Description { get; set; }

    public bool? IsCompleted { get; set; }
}
