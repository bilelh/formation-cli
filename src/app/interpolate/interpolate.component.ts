import { Component, OnInit } from '@angular/core';
import { Formation } from './model/Formation';

@Component({
  selector: 'maf-interpolate',
  templateUrl: './interpolate.component.html',
  styleUrls: ['./interpolate.component.css']
})



export class InterpolateComponent implements OnInit {

  prenom: string = 'kaiser';
  nom: string = 'Soze'
  formation:Formation = new Formation('Java FullStack' , 'Module Angular')
  formationJS:Formation;
  color:string = 'red';

  getFullname(): string {
    return `${this.prenom}  ${this.nom}`;
  }

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.formationJS= new Formation('JavaScript' , 'Module JavaScript' );
      }, 3000)

    setInterval(() =>{
      if(this.color === 'red') {
          this.color = 'green';
      }else {
        this.color = 'red';
      }
    },1000)
  }
}
