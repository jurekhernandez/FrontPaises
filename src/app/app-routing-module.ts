import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';
import { TodosComponent } from './pais/pages/todos/todos.component';

const routes: Routes=[
    {
        path: '',
        redirectTo: 'pais',
        pathMatch: 'full'
    },
    {
        path: 'todos',
        component:TodosComponent
    },
    {
        path: 'pais',
        component:PorPaisComponent
    },
    {
        path:'capital',
        component:PorCapitalComponent
    },
    {
        path:'verPais/:code',
        component:VerPaisComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];


@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule{

}