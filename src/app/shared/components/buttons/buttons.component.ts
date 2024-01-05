import { AsyncPipe, NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { IActionConfig } from '../../interfaces/actions-interface';
import { Actions } from '../../constants/actions';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
  standalone: true,
  imports: [AsyncPipe, NgFor, MatButtonModule, MatFormFieldModule, MatIconModule]
})
export class ButtonsComponent {

  @Input() actionsConfig?: IActionConfig[];
  @Input() form?: any;
  @Output() onEmitAction: EventEmitter<any> = new EventEmitter();

  public actions!: any;
  
  ngOnInit() {
    this.actions = Actions;
  }

  public emitAction(action: IActionConfig){
    this.onEmitAction.emit(action);
  }
}
