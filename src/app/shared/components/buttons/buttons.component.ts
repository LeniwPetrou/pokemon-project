import { AsyncPipe, NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { IActionConfig } from '../../interfaces/actions-interface';
import { Actions } from '../../constants/actions';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
  standalone: true,
  imports: [forwardRef(() => SharedModule), AsyncPipe, NgFor]
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
