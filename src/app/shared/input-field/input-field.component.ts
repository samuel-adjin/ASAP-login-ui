import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent {
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
}
