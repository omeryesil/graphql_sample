// src/app/app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  // This is not deprecated
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { GraphqlQueryComponent } from './graphql-query/graphql-query.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { GraphQLModule } from './graphql.module';

const routes: Routes = [
  { path: '', component: GraphqlQueryComponent },
  // Add more routes as needed
];

@NgModule({
  declarations: [
    AppComponent,
    GraphqlQueryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  // Correct usage of HttpClientModule
    FormsModule,
    GridModule,
    GraphQLModule,
    RouterModule.forRoot(routes)  // Import RouterModule and configure routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
