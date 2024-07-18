using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SampleGraphQL.Models;

[Table("OrderItem")]

public class OrderItem
{
  [Key]
  public int OrderItemId { get; set; }

  public int MenuItemId { get; set; }

  public MenuItem MenuItem { get; set; }

  public int Quantity { get; set; }

  public int OrderId { get; set; }

  public Order Orderinfo { get; set; }
}