// src/app/graphql-query/graphql-query.component.ts

// src/app/graphql-query/graphql-query.component.ts

import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-graphql-query',
  templateUrl: './graphql-query.component.html',
  // Uncomment the next line if you have a CSS file
  // styleUrls: ['./graphql-query.component.css']
})
export class GraphqlQueryComponent {
  query: string = '';
  data: any[] = [];
  columns: string[] = [];

  constructor(private apollo: Apollo) {}

  executeQuery() {
    this.apollo.query<any>({
      query: gql`${this.query}`
    }).subscribe((result) => {
      this.data = result.data && result.data.purchaseOrderHeaders && result.data.purchaseOrderHeaders.nodes
        ? result.data.purchaseOrderHeaders.nodes
        : [];
      this.columns = this.data.length > 0 ? Object.keys(this.data[0]) : [];
    });
  }
}
