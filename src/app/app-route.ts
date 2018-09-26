import { Route } from '@angular/router';

export interface AppRoute extends Route {
    title: string;
}

export declare type AppRoutes = AppRoute[];
