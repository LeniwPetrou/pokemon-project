import { Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { NgIf } from '@angular/common';
import { StoreDataService } from 'src/app/pokemon/services/store-data-service';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss'],
  standalone: true,
  imports: [MatTableModule, NgIf, MatPaginatorModule]
})
export class DynamicTableComponent {

  @Input() pokemonList?: any[];
  @Input() count?: any;
  @Output() onChangePageTable: EventEmitter<any> = new EventEmitter(); 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;
  public displayedColumns: string[] = ['name'];
  public dataSource = new MatTableDataSource<any[]>();
  public pageEvent?: any;
  public pageSize?: number;
  public pageIndex?: number;
  public length?: number;

  public pageSizeOptions = [10, 15, 20, 100];

  constructor(public storeDataService: StoreDataService){
  }

  ngOnInit(){
    this.dataSource = new MatTableDataSource<any[]>(this.pokemonList);
    console.log(this.pokemonList);
  }

  ngAfterViewInit(){
    this.pageSize = this.storeDataService.getPageSize();
    this.pageIndex = this.storeDataService.getPageIndex();
    this.length = 1000;
    this.paginator.pageIndex = this.pageIndex
    this.paginator.pageSize = this.pageSize;
    this.dataSource.paginator = this.paginator;
  }

  onChangePage(pageEvent:PageEvent) {
    this.storeDataService.setPageOptions(pageEvent);
    this.onChangePageTable?.emit(pageEvent);
    
  } 
}
