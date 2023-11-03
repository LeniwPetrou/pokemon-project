import { QuestionBase } from "./control-type";

export class Textbox extends QuestionBase<string> {
  override controlType = 'textbox';
}

export class Dropdown extends QuestionBase<string> {
  override controlType = 'dropdown';
}