using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SampleGraphQL.Models;


[Table("MenuItem")]

public class MenuItem
{
  [Key]
  public int MenuItemId { get; set; }

  [Required]
  [MaxLength(100)]
  public string Name { get; set; }

  public decimal Price { get; set; }

  public ICollection<OrderItem> OrderItems { get; set; }
}