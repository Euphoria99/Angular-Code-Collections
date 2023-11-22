import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.scss']
})
export class ComponentTwoComponent {
  // @Input() hero : any;
  @Output() xyz: EventEmitter<any> = new EventEmitter();
  ngOnInit(): void {

  }
  //child to parent
  sendData() {
    let data = {
      name: 'pavan',
      age: 24
    }
    this.xyz.emit(data)
  }
}