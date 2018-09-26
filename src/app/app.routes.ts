import { AppRoutes } from './app-route';
import { filterRouter } from './../filter/filter.router';
import { searchSelectRouter } from '../search-select/search-select.router';
import { searchInputRouter } from '../search-input/search-input.router';

export const appRoutes: AppRoutes = [
    ...filterRouter,
    ...searchSelectRouter,
    ...searchInputRouter,
];
