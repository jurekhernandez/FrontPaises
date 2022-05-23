import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/country-interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais! : Country;
  constructor(
    private activatedRoute: ActivatedRoute,
    private PaisService :PaisService
    ){}

  ngOnInit(): void {
     this.activatedRoute.params
     .pipe(
       switchMap((param)=>
         this.PaisService.GetCountryForCode(param["code"]))
      )
     .subscribe((pais) => {
       this.pais = pais[0];
    });

  // this.activatedRoute.params.subscribe(({code})=>{
  //   this.PaisService.GetCountryForCode(code).subscribe((country)=>{
  //     console.log(country);
  //     this.pais = country;
  //   })
  // })
  }

}
