import { AsyncPipe, NgFor } from '@angular/common';
import { Component, Output, EventEmitter, Input, forwardRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpService } from 'src/app/pokemon-abilities/services/http-service';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form/dynamic-form.component';
import { QuestionControlService } from '../../services/question-control.service';
import { QuestionBase } from '../../types/control-type';
import { IActionConfig } from '../../interfaces/actions-interface';
import { ButtonsComponent } from '../buttons/buttons.component';
import { Actions } from '../../constants/actions';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  standalone: true,
  imports: [forwardRef(() => SharedModule), AsyncPipe, NgFor, DynamicFormComponent, ButtonsComponent]
})
export class SearchComponent {

  @Input() questions: any;
  @Input() actionsConfig?: any;
  @Output() onEmitValue: EventEmitter<any> = new EventEmitter(); 

  public list$: any;
  public form!: FormGroup;

  constructor( public httpService: HttpService,
    private qcs: QuestionControlService){
  }

  ngOnInit(){
    this.form = this.qcs.toFormGroup(this.questions as QuestionBase<string>[]);
  }

  handleAction(action: IActionConfig){
    if (action.action == Actions.RESET)
    this.form.reset();
    else
    this.onEmitValue.emit(this.form.value);
  }
}
