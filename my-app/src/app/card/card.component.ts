import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() iconUrl:string = '';
  @Input() header:string = '';
  @Input() message:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
