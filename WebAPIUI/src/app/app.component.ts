import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SuperHeroService } from './Services/super-hero.service';
import { SuperHero } from './Models/super-hero';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WebAPIUI';
  heroes: SuperHero[] = [];

  constructor(private superHeroService: SuperHeroService) {}

  ngOnInit() : void {
    this.superHeroService
    .getSuperHeroes()
    .subscribe((result: SuperHero[]) => (this.heroes));
  }
}