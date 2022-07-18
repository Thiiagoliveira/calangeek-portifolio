import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './../app-routing.module';
import { ContentLayoutComponent } from './content-layout/content-layout.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
/*     ContentLayoutComponent,
    HeaderComponent,
    SectionComponent,
    FooterComponent, */
  
    ContentLayoutComponent,
HeaderComponent
  ],
  exports: [
    /* ContentLayoutComponent */
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class LayoutModule { }
