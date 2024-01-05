import { ListRange } from '@angular/cdk/collections';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild, forwardRef } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-table-scrolling-viewport',
  templateUrl: './table-scrolling-viewport.component.html',
  styleUrls: ['./table-scrolling-viewport.component.scss'],
  standalone: true,
  imports: [forwardRef(() => SharedModule)]
})
export class TableScrollingViewportComponent implements OnInit, OnChanges {

  @Input() totalItems: number = 0;
  @Input() itemSize: number = 0;
  @Output() itemsRangeChange = new EventEmitter<ListRange>();
  @ViewChild(CdkVirtualScrollViewport, { static: true })
  
  public cdkViewport!: CdkVirtualScrollViewport;
  public virtualItems: undefined[] = [];

  constructor() { }

  ngOnInit() {
    this.cdkViewport.renderedRangeStream.subscribe((range: ListRange) => {
      this.itemsRangeChange.emit(range);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['totalItems']) {
      this.virtualItems = Array.from({ length: this.totalItems });
      this.cdkViewport.checkViewportSize();
    }
  }
}
