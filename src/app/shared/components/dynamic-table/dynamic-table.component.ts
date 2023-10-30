import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss'],
  standalone: true,
  imports: [MatTableModule, NgIf]
})
export class DynamicTableComponent {

  @Input() pokemonList?: any[];

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;
  displayedColumns: string[] = ['name'];
  dataSource = new MatTableDataSource<any[]>();
  public page?: number;

  public pageSize = [10, 15, 20];
  public pageIndex = 0;
  public length = 0;

  constructor(){
  }

  ngOnInit(){
    this.dataSource = new MatTableDataSource<any[]>(this.pokemonList);
    console.log('pokemonList::', this.pokemonList);
  }

    // onChangePage(pe:PageEvent) {
  //   this.getResults(pe.pageSize, pe.pageIndex)
  // } 

}
