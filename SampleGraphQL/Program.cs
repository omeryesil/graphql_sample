using HotChocolate.AspNetCore;
using Microsoft.EntityFrameworkCore;
using SampleGraphQL.Models;
using SampleGraphQL.GraphQL;



var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddPooledDbContextFactory<RestaurantDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddGraphQLServer()
    .AddQueryType<Query>()
    //.AddMutationType<Mutation>() # 
    .AddFiltering()
    .AddSorting();

var app = builder.Build();

// Configure the HTTP request pipeline.
// if (app.Environment.IsDevelopment())
// {
//     app.UseDeveloperExceptionPage();
// }

app.UseHttpsRedirection();
app.UseRouting();

app.UseEndpoints(endpoints =>
{
    endpoints.MapGraphQL();
});

app.Run();
