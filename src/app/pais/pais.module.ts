import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';

import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';
import { TodosComponent } from './pages/todos/todos.component';



@NgModule({
  declarations: [
    PorCapitalComponent,
    PorPaisComponent,
    VerPaisComponent,
    PaisTablaComponent,
    PaisInputComponent,
    TodosComponent
  ],
  exports: [
    PorCapitalComponent,
    PorPaisComponent,
    VerPaisComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    TableModule,
    PaginatorModule,
    ButtonModule
  ]
})
export class PaisModule { }
