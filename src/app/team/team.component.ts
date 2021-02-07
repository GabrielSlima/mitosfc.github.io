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
      photo: "../../assets/images/team/felipe-batista.jpg"
    },
    {
      name: "Jonatas Silva",
      title: "Treinador",
      photo: "../../assets/images/team/jonatas-silva.jpeg"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
