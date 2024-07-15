using HotChocolate;
using HotChocolate.Data;
using Microsoft.EntityFrameworkCore;
using SampleGraphQL.Models;

namespace SampleGraphQL.GraphQL;

public class Query
{
    private readonly IDbContextFactory<RestaurantDbContext> _dbContextFactory;

    public Query(IDbContextFactory<RestaurantDbContext> dbContextFactory)
    {
        _dbContextFactory = dbContextFactory;
    }

    [UseFiltering]
    [UseSorting]
    public IQueryable<Customer> GetCustomers()
    {
        var context = _dbContextFactory.CreateDbContext();
        return context.Customers;
    }
}
