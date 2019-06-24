import { Component } from '@angular/core';
import { Formation } from './interpolate/model/Formation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formation-cli';
  
   formations:Array<Formation> = [
    new Formation('Module Angular', 'description Angular' , 3000 , new Date('02/20/2019') , new Date('05/20/2019')),
    new Formation('Module JavaScript', 'description JavaScript', 4000 , new Date('02/15/2019') , new Date('05/15/2019')),
    new Formation('Module TypeScript', 'description TypeScript', 5000 , new Date('04/10/2019') , new Date('07/10/2019')),
    ]
}
