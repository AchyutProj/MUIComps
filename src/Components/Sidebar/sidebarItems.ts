import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';

import type {SidebarItem} from "@anTypes/others.ts";

export const sidebarItems: SidebarItem[][] = [
    [
        {
            name: 'Dashboard',
            icon: HomeIcon,
            route: '/dashboard'
        },
        // {
        //     name: 'Payments',
        //     icon: MoneyRounded,
        //     subItems: [
        //         {
        //             name: 'All Payments',
        //             icon: ListIcon,
        //             route: '/payments'
        //         }, {
        //             name: 'Add Payments',
        //             icon: AddBox,
        //             route: '/add-payment'
        //         }
        //     ]
        // }
    ], [
        {
            name: 'Settings',
            icon: SettingsIcon,
            route: '/settings'
        }
    ]
];