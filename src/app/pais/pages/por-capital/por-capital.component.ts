import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {
  termino:string= "";
  existError:boolean=false;
  countries:Country[]=[];
  
  constructor(private service:PaisService) { 

  }

  search(termino:string){
    this.existError=false;
    this.termino=termino;
    this.service.buscarCapital(this.termino).subscribe((countries)=>{    
      this.countries=countries;
    },(error)=>{
      this.existError=true;
      this.countries=[];
    });

  }

  ngOnInit(): void {
  }

}
