using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SampleGraphQL.Models;



[Table("Customer")]
public class Customer
{

    /// <summary>
    /// 
    /// </summary>
    [Key]
    public int CustomerId { get; set; }

    public string Name { get; set; }

    /// <summary>
    /// 
    /// </summary>
    public string Email { get; set; }
    
    /// <summary>
    /// 
    /// </summary>
    public ICollection<Order> Orders { get; set; }
    
    /// <summary>
    /// 
    /// </summary>
    public ICollection<Bill> Bills { get; set; }

}