import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MainRoutes} from './routes';
import {ErrorComponent} from './features/error/error.component';
import {MainContentLandingComponent} from './main-content-landing/main-content-landing.component';

const routes: Routes = [
    {
        path: '', pathMatch: 'full', redirectTo: 'login'
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'landing', component: MainContentLandingComponent
    },
    ...MainRoutes,
    { path: '**', component: ErrorComponent },
];


@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }