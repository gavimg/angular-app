import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [PostCreateComponent, PostListComponent, PostComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PostRoutingModule,
    MaterialModule
  ]
})
export class PostModule { }
