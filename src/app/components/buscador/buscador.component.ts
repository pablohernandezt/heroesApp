import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes:any[] = [];
  termino:string;
  @Input() index: number;
  

  constructor( private activatedRoute: ActivatedRoute,
                private _heroesService: HeroesService,
                private router: Router) { 
  
    

  }

  ngOnInit(): void {

      this.activatedRoute.params.subscribe( params=>{
        this.termino = params['termino'];
        this.heroes = this._heroesService.buscarHeroes(params['termino']);
        console.log(this.heroes);
      } )

  }


  verHeroe(){
    this.router.navigate( ['/heroe', this.index] );
    console.log(this.index);

  }
}
