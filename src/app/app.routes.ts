import {Routes} from '@angular/router'
import {LayoutComponent} from './layout/layout/layout.component'

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'dashboard',
                title: 'Dashboard',
                data: {
                    icon: 'desktop_windows',
                    title: 'Dashboard'

                },
                loadChildren: () => import('./protected/dashboard/dashboard.routes')
            },
            {
                path: 'drag-drop',
                title: 'Drag and Drop',
                data: {
                    icon: 'drag_indicator',
                    title: 'Drag and Drop'

                },
                loadChildren: () => import('./protected/drag-drop/drag-drop.routes')
            },
            {
                path: 'table',
                title: 'Table',
                data: {
                    icon: 'table_chart',
                    title: 'Table'

                },
                loadChildren: () => import('./protected/table/table.routes')
            },
            {
                path:'address-form',
                title: 'Address Form',
                data: {
                    icon: 'home',
                    title: 'Address Form'
                },
                loadChildren: () => import('./protected/address-form/address-form.routes')
            },
            {
                path: 'tailwind-demo',
                title: 'Tailwind Demo',
                data: {
                    icon: 'style',
                    title: 'Tailwind Demo'
                },
                loadChildren: () => import('./protected/tailwind-demo/tailwind-demo.routes')
            },
            {
                path: 'ecommerce-tailwind',
                title: 'E-Commerce Tailwind',
                data: {
                    icon: 'shopping_bag',
                    title: 'E-Commerce Tailwind'
                },
                loadChildren: () => import('./protected/ecommerce-tailwind/ecommerce-tailwind.routes')
            },
            {
                path: 'material-demo',
                title: 'Material Demo',
                data: {
                    icon: 'widgets',
                    title: 'Material Demo'
                },
                loadChildren: () => import('./protected/material-demo/material-demo.routes')
            },
            {
                path: 'netflix-home',
                title: 'Netflix UI',
                data: {
                    icon: 'movie',
                    title: 'Netflix UI'
                },
                loadChildren: () => import('./protected/netflix-home/netflix-home.routes')
            },
            {
                path: 'weather',
                title: 'Weather',
                data: {
                    icon: 'wb_sunny',
                    title: 'Weather'
                },
                loadChildren: () => import('./protected/weather/weather.routes')
            },
            {
                path: 'youtube-home',
                title: 'YouTube Home',
                data: {
                    icon: 'smart_display',
                    title: 'YouTube Home'
                },
                loadChildren: () => import('./protected/youtube-home/youtube-home.routes')
            },
            {
                path: 'todo',
                title: 'Todo',
                data: {
                    icon: 'checklist',
                    title: 'Todo'
                },
                loadChildren: () => import('./protected/todo/todo.routes')
            },
            {
                path: 'tree',
                title: 'Tree',
                data: {
                    icon: 'account_tree',
                    title: 'Tree'

                },
                loadChildren: () => import('./protected/tree/tree.routes')
            },
            {path: '**', redirectTo: 'dashboard', pathMatch: 'full'}
        ]
    },
]
