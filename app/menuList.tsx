'use client'

import { useState } from 'react'
import Menu from './models/menu'
import MenuItem from './menuItem';

const menus: Menu[] = [
    {
        name: 'Home',
        urlSegment: '/home',
        index: 0,
        isSelected: false
    },
    {
        name: 'Apps',
        urlSegment: '/apps',
        index: 1,
        isSelected: false
    }
];

export default function MenuList() {
    const [menuListState, setMenuList] = useState(menus);

    function handleCallback(index: number) {
        console.log(`Call from child ${index}`);
        menuListState.forEach(i => i.index == index ? i.isSelected = true : i.isSelected = false);
        setMenuList([...menuListState]);
    };

    return (
        <ul className="flex gap-0 font-semibold text-slate-50 h-full pt-3">
            {
                menus.map(m => (
                    <MenuItem key={m.index} menu={m} menuClickCallback={handleCallback} />
                ))
            }
        </ul>
    )
}