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
  formation:Formation = new Formation('Java FullStack' 
  , 'Module Angular' , 2000 , new Date('02-20-2019') , new Date('05-20-2019'))
  formations:Array<Formation> = [];
  formationJS:Formation;
  color:string = 'red';

  visible:boolean = true;
  isDisplay:boolean = false;

  getFullname(): string {
    return `${this.prenom}  ${this.nom}`;
  }

  handleClick() {
    if(this.visible === true) {
      this.visible = false ;
    } else {
      this.visible = true ;
    }
  }
  handleClick2() {
    if(this.isDisplay === true) {
      this.isDisplay = false ;
    } else {
      this.isDisplay = true ;
    }
  }

  handleMouseOver() {
    console.log('the mouse is over the text')
  }
  handleMouseOut() {
    console.log('the mouse is out of the text')
  }

  getColorByElement(isFirst:boolean , isLast:boolean) {
    if (isFirst === true) {
      return 'red'
    }
    if (isLast === true) {
      return 'green'
    }
  }

  getFontByElement(isEven:boolean) {
    return isEven ? 'grey' : 'white';
  }

  constructor() { }

  ngOnInit() {
    this.formations = [
      new Formation('Module Angular', 'description Angular' , 3000 , new Date('02/20/2019') , new Date('05/20/2019')),
      new Formation('Module JavaScript', 'description JavaScript', 4000 , new Date('02/15/2019') , new Date('05/15/2019')),
      new Formation('Module TypeScript', 'description TypeScript', 5000 , new Date('04/10/2019') , new Date('07/10/2019')),
      ]

    setTimeout(() => {
      this.formationJS= new Formation('JavaScript' , 'Module JavaScript', 3000 , new Date('02/20/2019') , new Date('05/20/2019') );
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
