import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent implements OnInit {
  hotelName = 'Hilton Hotel';

  numberOfRooms = 10;

  hideRooms = false;
  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [];
  constructor() {}

  ngOnInit(): void {
    this.roomList = [
      {
        roomType: 'Deluxe Room',
        roomNumber: 101,
        amenities: 'Air Conditioner, Free wifi, TV, bathroom, kitchen',
        price: 500,
        photos: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131',
        checkinTime: new Date('25-Oct-2023'),
        checkoutTime: new Date('25-Oct-2023'),
        rating: 4.4,
      },
      {
        roomType: 'Deluxe Room',
        roomNumber: 102,
        amenities: 'Air Conditioner, Free wifi, TV, bathroom, kitchen',
        price: 1000,
        photos: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131',
        checkinTime: new Date('25-Oct-2023'),
        checkoutTime: new Date('25-Oct-2023'),
        rating: 2.6765,
      },
      {
        roomType: 'Private Suite',
        roomNumber: 103,
        amenities: 'Air Conditioner, Free wifi, TV, bathroom, kitchen',
        price: 1500,
        photos: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131',
        checkinTime: new Date('25-Oct-2023'),
        checkoutTime: new Date('25-Oct-2023'),
        rating: 4.0,
      },
    ];
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }
  addRoom(){
    const room:RoomList = {
      roomNumber: 4,
      roomType: 'Deluxe room',
      amenities: 'ac, free wifi, tv, bathroom, kitchen',
      price: 500,
      photos: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131',
      checkinTime: new Date('25-Oct-2023'),
        checkoutTime: new Date('25-Oct-2023'),
        rating: 4.0,
    };

    this.roomList.push(room);
  }
}
