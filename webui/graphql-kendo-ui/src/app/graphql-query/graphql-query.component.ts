// src/app/graphql-query/graphql-query.component.ts

import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-graphql-query',
  templateUrl: './graphql-query.component.html',
  styleUrls: ['./graphql-query.component.css']
})
export class GraphqlQueryComponent {
  query: string = 'query: PurchaseOrderHeaders { }';
  data: any[] = [];
  columns: string[] = [];

  constructor(private apollo: Apollo) {}

  executeQuery() {
    this.apollo.query({
      query: gql`${this.query}`
    }).subscribe((result: any) => {
      this.data = result.data ? Object.values(result.data)[0] as any[] : [];
      this.columns = this.data.length > 0 ? Object.keys(this.data[0]) : [];
    });
  }
}
