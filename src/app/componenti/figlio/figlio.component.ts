import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-figlio',
  templateUrl: './figlio.component.html',
  styleUrls: ['./figlio.component.css']
})
export class FiglioComponent implements OnInit {
  @Output() emitter = new EventEmitter<string[]>();

  dispari : string[] = ['I', 'III', 'V', 'VII', 'IX'];

  ngOnInit(): void {
    this.emitter.emit(this.dispari);
  }
}
