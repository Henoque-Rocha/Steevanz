import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Checkout1Component } from './components/checkout1/checkout1.component';
import { Checkout2Component } from './components/checkout2/checkout2.component';
import { Checkout3Component } from './components/checkout3/checkout3.component';
import { CompleteComponent } from './components/complete/complete.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'checkout1', component: Checkout1Component},
    {path: 'checkout2', component: Checkout2Component},
    {path: 'checkout3', component: Checkout3Component},
    {path: 'complete', component: CompleteComponent}
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}