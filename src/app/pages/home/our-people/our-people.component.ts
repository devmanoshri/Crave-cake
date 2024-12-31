import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-our-people',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-people.component.html',
  styleUrls: [
    '../info-block/info-block.component.scss',
    './our-people.component.scss',
  ],
})
export class OurPeopleComponent {
  ourPeople = [
    {
      name: 'Neal Lopez',
      role: 'Main chef',
    },
    {
      name: 'Annie Yates',
      role: 'Pastry chef',
    },
    {
      name: 'Alex Arnold',
      role: 'Restaurant manager',
    },
  ];
}
