import { NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from 'src/app/shared/types/control-type';
import { TextComponent } from '../text/text.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-dynamic-form-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.scss'],
  standalone: true,
  imports: [forwardRef(() => SharedModule), NgSwitch, NgSwitchCase, TextComponent, DropdownComponent]
})
export class DynamicFormQuestionComponent {

  @Input() question!: QuestionBase<string>;
  @Input() form!: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }
}
