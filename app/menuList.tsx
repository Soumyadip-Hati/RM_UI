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
    },
    {
        name: 'Release',
        urlSegment: '/release',
        index: 2,
        isSelected: false
    },
    {
        name: 'Identity',
        urlSegment: '/identity',
        index: 3,
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
        <div className='flex top-menu-container relative'>
            {
                menus.map(m => (
                    <MenuItem key={m.index} menu={m} menuClickCallback={handleCallback} />
                ))
            }
        </div>
    )
}