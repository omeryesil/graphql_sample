# Sample GraphQL project

## Links / Docs

- Tools: https://graphql.org/community/tools-and-libraries/ 

## Requirements

. PostgreSQL
. .NET 8

### Nuget Packages

#### Entity Framework for PostgreSQL

```bash
dotnet add package Microsoft.EntityFrameworkCore.Design
dotnet add package Npgsql.EntityFrameworkCore.PostgreSQL
```

#### HotChoclate for GraphQL

```bash
dotnet add package HotChocolate.AspNetCore
dotnet add package HotChocolate.Data.EntityFramework
dotnet add package HotChocolate.Data

```

## DB Migration

First install this:

```bash
dotnet tool install --global dotnet-ef

```

```bash
dotnet ef migrations add InitialCreate
dotnet ef database update
```

