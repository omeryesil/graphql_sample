// src/app/graphql-query/graphql-query.component.ts

import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

interface QueryOption {
  name: string;
  query: string;
}

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
  pageInfo: any = {};
  pageSize = 10;
  skip = 0;
  statusMessage: string = '';
  statusColor: string = '';

  queries: QueryOption[] = [
    {
      name: '-- select query ',
      query: ``
    },
    {
      name: 'Purchase Orders - Omer',
      query: `
        query($first: Int, $after: String) {
          purchaseOrderHeaders(first: $first, after: $after) {
            nodes {
              pohdrPonumber
              pohdrInvSiteCode
              pohdrInvoiceNumber
              pohdrSupplierCode
              pohdrApprovalStatus
              pohdrDate
              pohdrDateClosed
              pohdrType
              # pohdrTotal
            }
            pageInfo {
              hasNextPage
              hasPreviousPage
              startCursor
              endCursor
            }
          }
        }
      `
    },
    {
      name: 'Purchase Orders - Omer 2',
      query: `
        query($first: Int, $after: String) {
          purchaseOrderHeaders(first: $first, after: $after) {
            nodes {
              pohdrPonumber
              pohdrInvSiteCode
              pohdrType
            }
            pageInfo {
              hasNextPage
              hasPreviousPage
              startCursor
              endCursor
            }
          }
        }
      `
    },
  ];

  constructor(private apollo: Apollo) {}

  executeQuery(after?: string) {
    const dynamicQuery = gql`${this.query}`;
    this.apollo.query<any>({
      query: dynamicQuery,
      variables: { first: this.pageSize, after }
    }).subscribe(
      (result) => {
        const responseData = result.data.purchaseOrderHeaders;
        this.data = responseData.nodes;
        this.pageInfo = responseData.pageInfo;
        this.columns = this.data.length > 0 ? Object.keys(this.data[0]) : [];
        this.statusMessage = 'SUCCESS';
        this.statusColor = 'green';
      },
      (error) => {
        this.statusMessage = `ERROR: ${error.message}`;
        this.statusColor = 'red';
      }
    );
  }

  pageChange(event: any) {
    this.skip = event.skip;
    const after = event.skip > 0 ? this.pageInfo.endCursor : null;
    this.executeQuery(after);
  }

  onQuerySelect(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.query = selectElement.value;
  }
}
