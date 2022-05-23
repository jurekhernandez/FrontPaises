import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: []
})
export class TodosComponent implements OnInit {
  existError:boolean=false;
  countries:Country[]=[];

  public paginator:boolean = true;
  public loading:boolean = false;
  public rows: number = 10;
  public first:number = 0;
  public envio:string = '';
  public cols!:any[];
  public total!:number ;

  constructor(private service:PaisService) { 
    this.search();
  }

  search(){
    this.existError=false;
    this.service.allCountries().subscribe((countries)=>{    
    this.countries=countries;
    this.total=this.countries.length;
    },(error)=>{
      this.existError=true;
      this.countries=[];
      
    });

  }
  ngOnInit(): void {
    
  }

}
