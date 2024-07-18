using Microsoft.EntityFrameworkCore;

namespace SampleGraphQL.Models;

public class RestaurantDbContext : DbContext
{

  public RestaurantDbContext(DbContextOptions dbContextOptions) : base(dbContextOptions)
  {
  }

  public DbSet<MenuItem> MenuItems { get; set; }
  public DbSet<Order> Orders { get; set; }
  public DbSet<OrderItem> OrderItems { get; set; }
  public DbSet<Bill> Bills { get; set; }
  public DbSet<Customer> Customers { get; set; }


}