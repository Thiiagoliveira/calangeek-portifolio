import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { MaterialModule } from './material/material.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddressFormComponent } from './address-form/address-form.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TableComponent } from './table/table.component';
import { TreeComponent } from './tree/tree.component';




@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    TableComponent,
    AddressFormComponent,
    TreeComponent,
    DragDropComponent,
/*     SharedComponent,
    HomeComponent,
    CoreComponent,
    TemplateComponent,
    LayoutComponent,
    AuthenticationComponent,
    GuardsComponent,
    ComponentsComponent,
    HelperComponent,
    ViewsComponent, */
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    LayoutModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
