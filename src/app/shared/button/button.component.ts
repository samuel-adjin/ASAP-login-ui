import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
@Input() type: 'outline' | 'solid' = 'outline';
@Input() icon: any = null;

get buttonClasses(): string[] {
  return [
    'px-4',
    'py-4',
    'rounded-full',
    'focus:outline-none',
    this.type === 'outline'
      ? 'bg-inherit border-2 border-gray-300 text-white text-gray-700 '
      : 'bg-white text-black ',
  ];
}
}
