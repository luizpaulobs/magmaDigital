import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {

  public cards = [
    {color: '#8B5CF6', bgColor: '#EDE9FE'},
    {color: '#8B5CF6', bgColor: '#EDE9FE'},
    {color: '#737373', bgColor: '#F5F5F5'},
    {color: '#8B5CF6', bgColor: '#EDE9FE'},
    {color: '#F2683A', bgColor: '#FAEDDE'},
    {color: '#8B5CF6', bgColor: '#EDE9FE'},
    {color: '#737373', bgColor: '#F5F5F5'},
    {color: '#737373', bgColor: '#F5F5F5'},
    {color: '#F2683A', bgColor: '#FAEDDE'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  getColor(value: string) {
    return value;
  }

}
