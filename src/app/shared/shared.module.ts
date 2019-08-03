import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [HeaderComponent, SidePanelComponent, BreadcrumbComponent, ErrorComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    SidePanelComponent,
    BreadcrumbComponent,
    ErrorComponent
  ],
  entryComponents: [ ErrorComponent]
})
export class SharedModule { }
