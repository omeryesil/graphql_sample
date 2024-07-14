using Microsoft.EntityFrameworkCore;
using SampleGraphQL.Models;

namespace SampleGraphQL.GraphQL;

public class Query
{
    public IQueryable<MenuItem> GetMenuItems([Service] IDbContextFactory<RestaurantDbContext> dbContextFactory)
    {
        var context = dbContextFactory.CreateDbContext();
        return context.MenuItems;
    }

    // Define other queries
}

