import * as React from 'react';
import { Importer } from '../pages/importer';
// import { Importer } from '../pages/importer/index.tsx';
// import { Sub } from '~@/page/sub/sub';

export interface RoutesItem {
    title: string
    component: typeof React.Component | React.FC
    path: string
}

export const routes: RoutesItem[] = [
    {
        title: 'importer',
        component: Importer,
        path: '/'
    }
];
