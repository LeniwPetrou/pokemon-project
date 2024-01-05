import { Component, Input, forwardRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from 'src/app/shared/types/control-type';
import { NgIf } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
  standalone: true, 
  imports: [forwardRef(() => SharedModule), NgIf]
})
export class TextComponent {

  @Input() question!: QuestionBase<string>;
  @Input() form!: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }
}
