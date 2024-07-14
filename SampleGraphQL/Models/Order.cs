
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SampleGraphQL.Models;


[Table("Order")]

public class Order
{
  [Key]
  public int OrderId { get; set; }

  public DateTime OrderDate { get; set; }

  public ICollection<OrderItem> OrderItems { get; set; }
  public Bill Bill { get; set; }

  public int CustomerId { get; set; }
  public Customer CustomerInfo { get; set; }
}

