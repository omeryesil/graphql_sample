using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SampleGraphQL.Models;


[Table("Bill")]
public class Bill
{
    /// <summary>
    /// 
    /// </summary>
    [Key]
    public int BillId { get; set; }

    /// <summary>
    /// 
    /// </summary>
    public decimal TotalAmount { get; set; }

    /// <summary>
    /// 
    /// </summary>
    public int OrderId { get; set; }

    /// <summary>
    /// 
    /// </summary>
    public Order OrderInfo { get; set; }
}