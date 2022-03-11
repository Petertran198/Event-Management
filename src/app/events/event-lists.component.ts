import { Component } from '@angular/core';

@Component({
  selector: 'event-list',
  templateUrl: './event-lists.component.html',
})
export class EventListsComponent {
  event = {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2036',
    time: '10:00 am',
    price: 599.99,
    imageUrl: '/assets.images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England',
    },
  };

  logInfoFromParent(childInfo) {
    console.log(childInfo);
  }
}
