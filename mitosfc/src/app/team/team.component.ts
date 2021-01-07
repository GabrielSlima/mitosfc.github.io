import { Component, OnInit } from '@angular/core';
import { TeamMember } from '../interfaces/TeamMember';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teamMembers: TeamMember[] = [
    {
      name: "Gabriel",
      title: "Engineer",
      photo: "../assets/images/team/gabriel.jpeg"
    },
    {
      name: "Davi",
      title: "Engineer",
      photo: "../assets/images/team/gabriel.jpeg"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
