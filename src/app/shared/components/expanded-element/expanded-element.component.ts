import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/pokemon/services/http-service';

@Component({
  selector: 'app-expanded-element',
  templateUrl: './expanded-element.component.html',
  styleUrls: ['./expanded-element.component.scss'],
  standalone: true,
  imports: [AsyncPipe, NgIf, NgFor]
})
export class ExpandedElementComponent {

  @Input() element?: any;
  public results$?: Observable<any>;

  constructor(private httpService: HttpService){
  }

  ngOnInit(){
    this.results$ = this.httpService.searchByName(this.element.url);
  }
}
