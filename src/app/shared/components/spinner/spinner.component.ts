import { Component } from '@angular/core';
import { LoaderService } from '../../services/loader-service';
import { AsyncPipe, NgIf } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  constructor(public loader: LoaderService) { }
}
