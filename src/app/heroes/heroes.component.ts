import { Component, OnInit } from '@angular/core';
import { Hero, Antihero } from '../models';
import { HeroService } from '../services';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'zz-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes$: Observable<Hero[]>;
  antihero: Antihero;
  selectedHero: number;

  rForm: FormGroup;

  constructor(private heroService: HeroService, private fb: FormBuilder) { }

  ngOnInit() {
    this.heroes$ = this.heroService.getHeroes();
    this.antihero = new Antihero(1, 'CutmansSlayer', false);

    this.rForm = this.fb.group({
      name: [null, Validators.required],
      surname: [null, Validators.required],
      email1: [null, Validators.required],
      email2: [null, Validators.required],
      email3: [null, Validators.required]
    });
  }

  selectHero(hero: Hero) {
    this.selectedHero = hero.id;
    this.antihero.name = hero.name;
    this.antihero.isAlreadyDead = hero.age > 15;
  }

  test(antihero: Antihero) {
    console.warn({antihero});
  }

}
