import { Component } from '@angular/core';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.scss']
})
export class ComponentOneComponent {

  name="somename";
  age=0;

  receiveUserData(data: any) {
    console.log(data)
    this.name = data.name;
    this.age = data.age;
  }
}
