import { Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { NgFor, NgIf } from '@angular/common';
import { StoreDataService } from 'src/app/shared/components/services/store-data-service';
import { IColumnConfig } from '../../interfaces/column-interface';
import { isArray } from 'lodash';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss'],
  standalone: true,
  imports: [MatTableModule, NgIf, MatPaginatorModule, NgFor]
})
export class DynamicTableComponent {

  @Input() list?: any[];
  @Input() count?: any;
  @Input() columnConfig!: IColumnConfig;
  @Input() hasPagination?: boolean;
  @Output() onChangePageTable: EventEmitter<any> = new EventEmitter(); 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;
  public displayedColumns: string[] = [];
  public dataSource = new MatTableDataSource<any[]>();
  public pageEvent?: any;
  public pageSize?: number = 10;
  public pageIndex?: number = 0;
  public length?: number = 0;

  public pageSizeOptions = [10, 20, 50];

  constructor(public storeDataService: StoreDataService){
  }

  ngOnInit(){
    this.dataSource = new MatTableDataSource<any[]>(this.list);
    console.log('this.list', this.list);
    console.log(this.columnConfig)
    this.displayedColumns = Object.keys(this.columnConfig);
    console.log(this.displayedColumns);
  }

  ngAfterViewInit(){
    this.storeDataService.pageSize.subscribe(data => this.pageSize = data);
    this.storeDataService.pageIndex.subscribe(data => this.pageIndex = data);
    this.length = 1000;
    this.paginator.pageIndex = this.pageIndex;
    this.paginator.pageSize = this.pageSize;
    this.dataSource.paginator = this.paginator;
  }

  onChangePage(pageEvent:PageEvent) {
    this.storeDataService.setPageOptions(pageEvent);
    this.onChangePageTable?.emit(pageEvent);
    
  } 
}
