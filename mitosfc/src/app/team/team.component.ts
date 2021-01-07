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
      name: "Felipe Batista",
      title: "Treinador",
      photo: "../../assets/images/team/felipe-batista.jpeg"
    },
    {
      name: "Davi Lima",
      title: "Engineer",
      photo: "../../assets/images/team/felipe-batista.jpeg"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
