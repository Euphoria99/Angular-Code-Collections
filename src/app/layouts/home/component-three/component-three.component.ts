import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component-three',
  templateUrl: './component-three.component.html',
  styleUrls: ['./component-three.component.scss']
})
export class ComponentThreeComponent {

    @Input() name : any;
    @Input() surname : any;
}
