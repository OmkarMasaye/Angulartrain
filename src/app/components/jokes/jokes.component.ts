import { Component } from '@angular/core';
import { JokeService } from '../../services/joke.service';

@Component({
  selector: 'app-jokes',
  standalone: true,
  imports: [],
  templateUrl: './jokes.component.html',
  styleUrl: './jokes.component.css'
})
export class JokesComponent {
 joke="loading"
  constructor(private jokeService:JokeService){}

  ngOnInit(){
    this.jokeService.getJoke().subscribe((data:any)=>{
      this.joke=data.value
    })
  }

}
