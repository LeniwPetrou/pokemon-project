import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

@NgModule({
  declarations: [
  ],
  imports: [
    MatButtonModule,
    FormsModule, 
    ReactiveFormsModule,
    MatFormFieldModule, 
    MatInputModule,
    MatTableModule, 
    MatPaginatorModule,
    MatIconModule, 
    MatExpansionModule,
    ScrollingModule,
    MatCardModule, 
    MatSelectModule,
    NgxMatSelectSearchModule
  ],
  exports: [
    MatButtonModule,
    FormsModule, 
    ReactiveFormsModule,
    MatFormFieldModule, 
    MatInputModule,
    MatTableModule, 
    MatPaginatorModule,
    MatIconModule, 
    MatExpansionModule,
    ScrollingModule,
    MatCardModule, 
    MatSelectModule,
    NgxMatSelectSearchModule   
  ]
})
export class SharedModule { }
