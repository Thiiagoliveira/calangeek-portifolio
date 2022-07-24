import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './../app-routing.module';
import { MaterialModule } from './../material/material.module';
import { ContentLayoutComponent } from './content-layout/content-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarResponsiveComponent } from './sidebar-responsive/sidebar-responsive.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './sidebar-responsive/toolbar/toolbar.component';

@NgModule({
  declarations: [
    ContentLayoutComponent,
    SidebarResponsiveComponent,
    SidebarComponent,
    DashboardComponent,
    ToolbarComponent
    /*
    HeaderComponent,
    SectionComponent,
    FooterComponent
*/
  ],
  exports: [ContentLayoutComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
})
export class LayoutModule {}
