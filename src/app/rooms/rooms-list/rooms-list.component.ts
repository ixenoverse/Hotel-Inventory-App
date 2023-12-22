import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit{
@Input() rooms:RoomList[]= [];

@Output() roomSelected = new EventEmitter<RoomList>();

  constructor() { }

  ngOnInit(): void {

  }
  selectRoom(room: RoomList){
    this.roomSelected.emit(room);
  }

}
