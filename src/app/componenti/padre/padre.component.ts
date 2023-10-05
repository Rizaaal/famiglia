import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  @Input() romani! : string[];
  x! : string[];

  onArray(event : string[]){
    console.log('onArray()');
    this.x = event;
  }
}
