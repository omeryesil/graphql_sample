# Sample WebUI with GraphQL Backend

Open WebUI, enter graphQL query and execute. GraphQL response will be populated in a KendoUI Grid which is resizable, reorderable columns, and per-column search functionality. 

## 1. Setting Up Angular Project

1. Install Angular CLI (if not already installed):

Install NodeJs: https://nodejs.org/en/download/prebuilt-installer

```bash

npm install -g angular-cli --verbose
```

2. Create a New Angular Project:

```bash
ng new graphql-webui --no-standalone
cd graphql-webui
```

3. Install Dependencies:

Install Apollo Client for GraphQL and Kendo UI for Angular.

```bash
ng add @apollo/client graphql
ng add @progress/kendo-angular-grid
ng add @progress/kendo-angular-inputs
ng add @progress/kendo-theme-default
ng add @angular/animations
ng add @angular/forms
```

3. Add Kendo UI Styles:

In angular.json, add the Kendo UI styles:

```css
"styles": [
  "node_modules/@progress/kendo-theme-default/dist/all.css",
  "src/styles.css"
]
```

## 2. Setting Up Apollo Client for GraphQL

1. Create an Apollo Service:

Generate a service for Apollo configuration.

```bash
ng generate service apollo
```

2. Configure Apollo Client (src/app/apollo.service.ts):

```typescript
import { Injectable } from '@angular/core';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { Apollo } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class ApolloService {
  constructor(private apollo: Apollo) {
    const client = new ApolloClient({
      uri: 'YOUR_GRAPHQL_ENDPOINT',
      cache: new InMemoryCache()
    });

    this.apollo.use(client);
  }
}
```


## 3. Setting Up the Angular Component

1. Generate a New Component:

```bash
ng generate component GraphqlQuery
```

2. Component Template (src/app/graphql-query/graphql-query.component.html):

```html
<div>
  <textarea [(ngModel)]="query" rows="5" cols="60" placeholder="Enter your GraphQL query"></textarea>
  <button (click)="executeQuery()">Execute</button>
</div>

<kendo-grid [kendoGridBinding]="data" [resizable]="true" [reorderable]="true">
  <kendo-grid-column *ngFor="let column of columns" [field]="column" [title]="column" [filterable]="true">
  </kendo-grid-column>
</kendo-grid>
```

3. Component Logic (src/app/graphql-query/graphql-query.component.ts):

```typescript
import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { gql } from '@apollo/client/core';

@Component({
  selector: 'app-graphql-query',
  templateUrl: './graphql-query.component.html',
  styleUrls: ['./graphql-query.component.css']
})
export class GraphqlQueryComponent {
  query: string = '';
  data: any[] = [];
  columns: string[] = [];

  constructor(private apollo: Apollo) {}

  executeQuery() {
    this.apollo.query({ query: gql`${this.query}` }).subscribe((result: any) => {
      this.data = result.data ? Object.values(result.data)[0] : [];
      this.columns = this.data.length > 0 ? Object.keys(this.data[0]) : [];
    });
  }
}
```

4. Enable FormsModule:
   
In app.module.ts, import FormsModule and add it to the imports array.

```typescript
import { FormsModule } from '@angular/forms';
import { GridModule } from '@progress/kendo-angular-grid';

@NgModule({
  declarations: [
    AppComponent,
    GraphqlQueryComponent
  ],
  imports: [
    BrowserModule,
    ApolloModule,
    HttpClientModule,
    FormsModule,
    GridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Final Steps

```bash
ng serve
```

Access the Application:
Open http://localhost:4200 in your web browser.

## APPENDIX

Cleanup nvm

rm -rf /Users/omeryesil/.nvm/versions/node/v22.5.0/lib/node_modules/@angular/cli
npm cache clean --force




